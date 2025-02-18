import { createContext, useContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";


export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [session,setSession] = useState(undefined)
    const [userProfile,setUserProfile] = useState(undefined)

    const fetchUserProfile = async (userId)=>{
        const {data , error} = await supabase.from("profiles").select("*").eq("id",userId).single();
        if(error){
            console.log("Some error occured while fetching data",error);
            setUserProfile(null)
        }else{
            setUserProfile(data)
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
            fetchUserProfile(data.user.id)
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
        supabase.auth.getSession().then(({data })=>{
            setSession(data.session)
            if(data?.session?.user){
                fetchUserProfile(data.session.user.id)
            }
        });

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
            setSession(undefined);
            setUserProfile(null);
        }
    }

    return (<AuthContext.Provider value={{session,userProfile,signUp,signIn,signOut}}>{children}</AuthContext.Provider>)
}

export const UserAuth = ()=>{
    return useContext(AuthContext) 
}