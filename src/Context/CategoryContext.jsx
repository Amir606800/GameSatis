import { createContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";
import slugify from "slugify";

export const CategoryContext = createContext()

export const CatehoryProvider = ({children})=>{
    const [mainCat,setMainCat] = useState([])
    const [subCat,setSubCat] = useState([])
    const [subCat2,setSubCat2] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        const fetchMainCategory = async ()=>{
            const {data,error} = await supabase.from("categories").select("*").is("parent_id",null)
            if(!error) {setMainCat(data);setLoading(false)}
            else console.error(error)
        }
        fetchMainCategory()
    },[])

    const fetchSubCategory = async (category_name)=>{
        if(category_name){
            const category = mainCat.find((item) => slugify(item.name) == slugify(category_name));

            const {data,error} = await supabase.from("categories").select("*").eq("parent_id",category.id)
            if(!error) {setSubCat(data);setLoading(false)}
            else {console.error(error),setLoading(true)}
        }else{
            setLoading(true)
        }
    }

    // const fetchSubCategory2 = async (category_name)=>{
    //     if(category_name){
    //         const category = mainCat.find((item) => slugify(item.name) == category_name);
    //         console.log(category);
        
    //         const {data,error} = await supabase.from("category_products").select("categories(*),products(*)").eq("categories.parent_id",category.id)
    //         if(!error) {setSubCat2(data);setLoading(false);console.log(data)}
    //         else console.error(error)
    //     }
    // }
    return <CategoryContext.Provider value={{loading,mainCat,subCat,fetchSubCategory}}>{children}</CategoryContext.Provider>
}

