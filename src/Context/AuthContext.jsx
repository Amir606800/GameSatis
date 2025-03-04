import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [session,setSession] = useState(undefined)
    const [userProfile,setUserProfile] = useState(undefined)

    const [privacyStatus,setPrivacyStatus] = useState(null)

    const fetchUserProfile = async (userId)=>{
        const {data , error} = await supabase.from("profiles").select("*,user_settings(*)").eq("id",userId).single();
        
    if (error) {
        console.log("Some error occurred while fetching data", error);
        setUserProfile(null);
    } else {
        setUserProfile(data);
    }
    }

    const signUp = async (email,password)=>{
        const {data,error} = await supabase.auth.signUp({
            email:email,password:password
        })

        if(error){
            console.log("OMAYGADD an Erorr: " ,error);
            return ({success:false,error});
        }
        
        if(data?.user){
            await fetchUserProfile(data.user.id)
        }
        console.log("succesfully logged in",data);
        return ({success:true,data})
            
        
    }

    const signIn = async (email,password)=>{
        try{
            const {data,error} =await supabase.auth.signInWithPassword({
                email:email,
                password:password
              });
              if(error){
                console.log("You have an error: ",error);
                return({success:false,error});
              }

              if(data?.user){
                fetchUserProfile(data.user.id)
              }

              return({success:true,data})
              
        }catch(err){
            console.log(err)
        }
    };

    useEffect(()=>{
        
        const fetchSessionData = async () => {
            const { data } = await supabase.auth.getSession();
            setSession(data.session);
            if (data?.session?.user) {
                await fetchUserProfile(data.session.user.id); // Await profile fetch here
                
                const {error} = await supabase.from("profiles").update({is_online:true}).eq("id",data.session.user.id)
                
                if(error) console.error(error)
                    
            }else{
                const {error} = await supabase.from("profiles").update({is_online:false}).eq("id",data.session.user.id)
                
                if(error) console.error(error)
            }
        };
    
        fetchSessionData();

        const {data:listener} = supabase.auth.onAuthStateChange((_event,session)=>{
            setSession(session)
            if(session?.user){
                fetchUserProfile(session.user.id)
                
            }else{
                setUserProfile(null)
            }
        })

        return () => listener.subscription.unsubscribe();
    },[])

    const signOut = async ()=>{
        const {error} = await supabase.auth.signOut();
        if(error){
            console.log("hey! look an error",error)
        }else{
            const {error} = await supabase.from("profiles").update({is_online:false}).eq("id",userProfile.id)
            if(error) console.error(error)
            setSession(undefined);
            setUserProfile(null);
        }
    }

    return (<AuthContext.Provider value={{session,userProfile,signUp,signIn,signOut,privacyStatus,setPrivacyStatus}}>{children}</AuthContext.Provider>)
}

export const UserAuth = ()=>{
    return useContext(AuthContext) 
}