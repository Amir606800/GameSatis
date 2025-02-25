import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../helpers/supabaseClient";
import Lent from "../components/Lent";
import Path from "../components/Path";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainCategory, fetchSubCategory } from "../tools/Slices/CategorySlice";
import slugify from "slugify";

const OyunlarSubCat = () => {
  const { sub_name } = useParams();
  const dispatch = useDispatch()
  const {categories, loading,error} = useSelector((state)=>state.categories)
  useEffect(() => {
    if(categories == []){
        dispatch(fetchMainCategory())
    }
    console.log(categories)
    const category = categories.find((item)=>slugify(item.name)==sub_name)
    dispatch(fetchSubCategory(category.id))
  }, [sub_name]);
  
  const alphabet = ()=>{
    return Array.from({length:26},(_,i)=>(
        <span className="alphabet-item" key={i}>{String.fromCharCode(65+i)}</span>
    )).reduce((acc,ins)=>[...acc,ins,"-"], []).slice(0,-1);
}
    if(loading) return <>LOADINGGG.....</>
    if(error) return <>{error}</>
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
        {categories.map((item, i) => (
          <div
            onClick={() => handleCategory(item)}
            key={i}
            className="col-6 col-md-4 col-lg-3 col-xl-2 "
          >
            <div
              className="card border-0 position-relative"
              style={{ cursor: "pointer" }}
            >
              <div className="card-image">
                <img className="w-100" src={item.image_url} alt={item.name} />
              </div>
              <div
                className="title position-absolute fw-bolder w-100 bottom-0 start-50 translate-middle text-center text-white"
                style={{ fontSize: "14px" }}
              >
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OyunlarSubCat;
