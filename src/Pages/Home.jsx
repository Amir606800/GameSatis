import React, { useContext, useEffect, useState } from "react";
import AboutCard from "../components/CardCompon/AboutCard";
import axios from "axios";
import ProductCard from "../components/CardCompon/ProductCard";
import Slider from "../components/Home/Slider";
import SplitterAdvert from "../components/Home/SplitterAdvert";
import Lent from "../components/Lent";
import StreamerCard from "../components/CardCompon/StreamerCard";
import {StreamerContext}  from "../Context/StreamerProvider";
import { Link } from "react-router-dom";
import InfiniteSlider from "../components/Home/InfiniteSlider";
import { ProductContext } from "../Context/ProductsProvider";
 
const Home = () => {
  const {streamData} = useContext(StreamerContext);
  const {products} = useContext(ProductContext)

  return (
    <>
      <div className="nav-head-bot my-2">
        <InfiniteSlider />
      </div>
      <div className="main container-fluid py-3">
        <div className="top-vitrin mb-4">
          <div className="d-flex  gap-4 align-items-center" style={{ maxHeight: "23em" }}>
           
            <div className=" d-lg-block d-none hovering-behaviour" style={{height: "fit-content",maxHeight: "90vh"}}>
              <img
                src="https://img.gamesatis.com/showcase/732/banner_side_ko_yenisunucu_zerolu_v2_right-72163.webp"
                alt="Banner1"
              />
            </div>
            
            
            <Slider />
            
           
            <div className=" d-lg-block d-none hovering-behaviour">
              <img
                src="https://img.gamesatis.com/showcase/733/banner_side_supercell_oyunlar_left-24781.webp"
                alt="Banner3"
              />
            </div>
          
          </div>
        </div>
        <SplitterAdvert
          img1={
            "https://img.gamesatis.com/showcase/734/valorant-hesap-58219.webp"
          }
          img2={"https://img.gamesatis.com/showcase/735/lol-hesap-64628.webp"}
          img3={
            "https://img.gamesatis.com/showcase/736/gms_sidebanner_cs2_hesap-39116.webp"
          }
          img4={
            "https://img.gamesatis.com/showcase/737/genshin-hesap-65828.webp"
          }
        />
        <div className="product-list mb-4">
          <div className="row g-3">
            {products.map((item, index) => (
              <ProductCard vitrinIndex={11} key={index} main={item} /> 
            ))}
          </div>
        </div>

        <SplitterAdvert
          img1={
            "https://img.gamesatis.com/showcase/738/gms_reklambanner_fc25_coins-31771.webp"
          }
          img2={"https://img.gamesatis.com/showcase/739/steam-hesap-15419.webp"}
          img3={
            "https://img.gamesatis.com/showcase/740/legends-online-elmas-58083.webp"
          }
          img4={
            "https://img.gamesatis.com/showcase/741/clash-of-clans-hesap-47142.webp"
          }
        />

        <div className="streamers my-4">
          <Link to={"/donate"}>
            <Lent
              leftHead={"Yayincilar"}
              rightHead={"Tum Yayincilar"}
              back={
                "https://www.gamesatis.com/assets/header-bg-icon-donate.png"
              }
            />
          </Link>
          <div className="row g-3 mt-1">
            {!streamData
              ? "Loading..."
              : streamData
                  .slice(0, 6)
                  .map((item, i) => (
                    <StreamerCard
                      key={i}
                      img={item.photo}
                      names={item.name}
                      platform={item.platforms}
                    />
                  ))}
          </div>
        </div>

        <AboutCard />
      </div>
    </>
  );
};

export default Home;
