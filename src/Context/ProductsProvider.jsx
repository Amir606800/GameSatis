import axios from "axios";
import { createContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";

export const ProductContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); 
  const [productCat,setProductCat] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const fetchAllTheProducts = async()=>{
      const {data,error} = await supabase.from("products").select("*,profiles( * ),categories( * )")
      if(!error) {setProducts(data);setLoading(false)}
        else {setLoading(true)}
    }  
  fetchAllTheProducts()
  }, []); 

  const fetchProduct = async(category_id) =>{
    const {data,error} = await supabase.from("products").select("*").eq("category_id",category_id)
    if (!error) {setProductCat(data),setLoading(false)}
    else {console.error(error);setLoading(true)}
  }

  return (
    <ProductContext.Provider value={{products,productCat,fetchProduct,loading}}>
      {children}
    </ProductContext.Provider> 
  );
}; 

 