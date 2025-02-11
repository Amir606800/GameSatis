import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log("ha;;;" + err));
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};
