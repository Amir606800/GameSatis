import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductsProvider";
import Loading from "../../Addons/Loading";
import Lent from "../Lent";
import ProductCard from "./ProductCard";

const IlgiCard = () => {
  const { products } = useContext(ProductContext);
  const [ranges,setRanges] = useState([])
  if (!products) return <Loading />;
  
  useEffect(()=>{
    const randomNum = Math.random() * products.length;
    const range = randomNum + 6;
    if(randomNum <=7)  setRanges([0, Math.floor(range)])
    setRanges([Math.floor(randomNum), Math.floor(range)-1]);
  },[products]);
  return (
    <div className="card border-0 my-5" style={{background:"none"}}>
      <div className="card-head">
        <Lent
          leftHead="Bunlarda ilginizi çekebilir"
          rightHead=""
          back="https://www.gamesatis.com/assets/header-bg-icon-game.png"
        />
      </div>
      <div className="card-body ">
        <div className="row g-3">
          {products
            .slice(ranges[0], ranges[1])
            .map((item, index) => (
              <ProductCard main={item} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default IlgiCard;
