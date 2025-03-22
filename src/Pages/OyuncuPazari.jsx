import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductsProvider";
import ProductCard from "../components/CardCompon/ProductCard";
import { Box, Slider } from "@mui/material";

const OyuncuPazari = () => {
  const { products } = useContext(ProductContext);
  const [vitrinProducts, setVitrinProducts] = useState([]);
  useEffect(() => {
    const filteredValue = products.filter((item) => item.is_vitrin == true);
    setVitrinProducts(filteredValue);
  }, [products]);
  console.log(products);

  const [value, setValue] = useState([20, 307]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container-fluid d-flex flex-row my-4">
      <div className="left-filter w-25 d-flex flex-column align-items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="fiyat w-100">
            <label className="mb-2">Fiyat:</label>
            <div className="d-flex flex-row justify-content-around mb-2">
              <input onChange={(e)=>{setValue([Number(e.target.value),value[1]])}} value={value[0]} style={{width:"4em"}} type="number" />
              <input onChange={(e)=>{setValue([value[0],Number(e.target.value)])}} value={value[1]} style={{width:"4em"}} type="number" />
            </div>
            <Box sx={{ width: 220 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                min={0}
                step={10}
                max={500}
                onChange={handleChange}
                valueLabelDisplay="auto"
              />
            </Box>
          </div>
        </form>
      </div>
      <div className="right w-100 g-3 row">
        {vitrinProducts.map((item, index) => (
          <ProductCard main={item} key={index} keyIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default OyuncuPazari;
