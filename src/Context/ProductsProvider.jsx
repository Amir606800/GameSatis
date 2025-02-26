import axios from "axios";
import { createContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";

export const ProductContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 
  const [productCat,setProductCat] = useState([]);
  const [creatorInfo,setCreatorInfo] = useState([]);
  useEffect(() => {
    const fetchAllTheProducts = async()=>{
      const {data,error} = await supabase.from("products").select("*")
      if(!error) setProducts(data)
    }  
  fetchAllTheProducts()
  }, []); 

  const fetchProduct = async(category_id) =>{
    const {data,error} = await supabase.from("products").select("*").eq("category_id",category_id)
    if (!error) setProductCat(data)
    else console.error(error)
  }

  const fetchCreatorInfo = async(user_id)=>{
    const {data,error} = await supabase.from("profiles").select("*").eq("id",user_id).single()
    if (!error) setCreatorInfo(data)
      else console.error(error)
  }
  return (
    <ProductContext.Provider value={{products,productCat,fetchProduct,creatorInfo,fetchCreatorInfo}}>
      {children}
    </ProductContext.Provider> 
  );
}; 

 