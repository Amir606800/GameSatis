import axios from "axios";
import { createContext, useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";
import slugify from "slugify";

export const ProductContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productCat, setProductCat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [LoadingFound, setFoundLoading] = useState(true);
  const [foundUserProfile,setFoundUserProfile] = useState(null)

  const calculateDiscountedPrice = (price, discountPercent) => {
    return price-(price * discountPercent) / 100;
  };

  useEffect(() => {
    const fetchAllTheProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select(
          "*,profiles( * ),categories(*),feedbacks(rate ,content, profiles(first_name,last_name))"
        );
      if (!error) {
        setProducts(data);
        setLoading(false);
      } else {
        setLoading(true);
      }
    };
    fetchAllTheProducts();
  }, []);

  const fetchProduct = async (category_id) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("category_id", category_id);
    if (!error) {
      setProductCat(data), setLoading(false);
    } else {
      console.error(error);
      setLoading(true);
    }
  };
  const fetchUserProfile = async (userName) => {
    const userNameList = userName.split("~")
    const { data, error } = await supabase
      .from("profiles")
      .select("*,products(*, feedbacks(*))")
    if (error) {
      console.log("Some error occurred while fetching data", error);
      setFoundLoading(true)
    } else {
      setFoundUserProfile(data.find((item)=> slugify(item.display_name) == userNameList[0] && item.id.substring(0,8) == userNameList[1]))
      setFoundLoading(false)
    }
  };
  return (
    <ProductContext.Provider
      value={{ products, productCat, fetchProduct, loading,fetchUserProfile,foundUserProfile,LoadingFound,calculateDiscountedPrice }}
    >
      {children}
    </ProductContext.Provider>
  );
};
