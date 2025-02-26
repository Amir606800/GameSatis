import axios from "axios";
import { createContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";

export const ProductContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productCat,setProductCat] = useState([])
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
  return (
    <ProductContext.Provider value={{products,productCat,fetchProduct}}>
      {children}
    </ProductContext.Provider>
  );
};
