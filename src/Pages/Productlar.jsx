import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Path from "../components/Path";
import Lent from "../components/Lent";
import { CategoryContext } from "../Context/CategoryContext";
import { ProductContext } from "../Context/ProductsProvider";
import slugify from "slugify";
import ProductCard from "../components/CardCompon/ProductCard";

const Productlar = () => {
  const {prod_name} = useParams()
  console.log(prod_name);
  const {subCat} = useContext(CategoryContext)
  const {productCat,fetchProduct} = useContext(ProductContext)
  useEffect(()=>{
    const category = subCat.find((item)=>slugify(item.name ) == prod_name);
    setTimeout(() => {
        fetchProduct(category.id)
    }, 100);
  },[subCat])

  const alphabet = () => {
    return Array.from({ length: 26 }, (_, i) => (
      <span className="alphabet-item" key={i}>
        {String.fromCharCode(65 + i)}
      </span>
    ))
      .reduce((acc, ins) => [...acc, ins, "-"], [])
      .slice(0, -1);
  };
  return (
    <div className="container-fluid">
      <Path />
      <div className="image">
        <img
          className="w-100"
          src="https://img.gamesatis.com/assets/category-default-image.webp"
          alt="toop-banner"
        />
      </div>
      <div className="heading h5">Tüm Oyunlar</div>
      <div className="my-4">
        <Lent
          center={true}
          back={"https://www.gamesatis.com/assets/header-bg-icon-game.png"}
          leftHead={alphabet()}
        />
      </div>
      <div className="list row g-4 my-5 justify-content-center">
      {productCat.map((item, index) => (
          <ProductCard vitrinIndex={11} key={index} main={item} /> 
        ))}
      </div>
    </div>
  );
};

export default Productlar;
