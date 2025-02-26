import { createContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";

export const CategoryContext = createContext()

export const CatehoryProvider = ({children})=>{
    const [mainCat,setMainCat] = useState([])
    const [subCat,setSubCat] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchMainCategory = async ()=>{
            const {data,error} = await supabase.from("categories").select("*").is("parent_id",null)
            if(!error) {setMainCat(data);setLoading(false)}
            else console.error(error)
        }
        fetchMainCategory()
    },[])

    const fetchSubCategory = async (category_id)=>{
        const {data,error} = await supabase.from("categories").select("*").eq("parent_id",category_id)
        if(!error) {setSubCat(data);setLoading(false)}
        else console.error(error)
    }
    return <CategoryContext.Provider value={{loading,mainCat,subCat,fetchSubCategory}}>{children}</CategoryContext.Provider>
}

