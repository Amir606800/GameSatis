import React, { useContext, useEffect, useRef, useState } from "react";
import AboutCard from "../components/CardCompon/AboutCard";
import axios from "axios";
import ProductCard from "../components/CardCompon/ProductCard";
import Slider from "../components/Home/Slider";
import SplitterAdvert from "../components/Home/SplitterAdvert";
import Lent from "../Addons/Lent";
import StreamerCard from "../components/CardCompon/StreamerCard";
import { StreamerContext } from "../Context/StreamerProvider";
import { Link } from "react-router-dom";
import InfiniteSlider from "../components/Home/InfiniteSlider";
import { ProductContext } from "../Context/ProductsProvider";
import Loading from "../Addons/Loading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaArrowRightLong } from "react-icons/fa6";
import { Pagination } from "react-bootstrap";
import PaginationComp from "../Addons/Pagination";

const Home = () => {
  const { streamData } = useContext(StreamerContext);
  const { products } = useContext(ProductContext);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const sortedProducts = [...products].sort((a, b) => {
    if (a.is_vitrin && !b.is_vitrin) return -1;
    if (!a.is_vitrin && b.is_vitrin) return 1;
    return 0;
  });
  const topVitrinRef = useRef();
  const productsGsapRef = useRef();
  useGSAP(
    () => {
      gsap.from(".banner1", {
        x: "-100vw",
        rotation: -90,
        duration: 2,
        ease: "expo.out",
        zIndex: "-10",
      });
      gsap.from(".banner2", {
        x: "100vw",
        rotation: 90,
        duration: 2,
        ease: "expo.out",
        zIndex: "-10",
      });
    },
    { dependencies: [], scope: topVitrinRef }
  );

  return (
    <>
      <div className="nav-head-bot my-2">
        <InfiniteSlider />
      </div>
      <div className="main container-fluid py-3">
        <div className="top-vitrin mb-4" ref={topVitrinRef}>
          <div
            className="d-flex  gap-4 align-items-center"
            style={{ maxHeight: "23em" }}
          >
            <div
              className="banner1 d-lg-block d-none hovering-behaviour"
              style={{
                height: "fit-content",
                maxHeight: "90vh",
                transform: "rotate(-13deg) translateX(20px)",
              }}
            >
              <img
                src="https://img.gamesatis.com/showcase/732/banner_side_ko_yenisunucu_zerolu_v2_right-72163.webp"
                alt="Banner1"
              />
            </div>

            <Slider />

            <div
              className="banner2 d-lg-block d-none hovering-behaviour"
              style={{ transform: "rotate(13deg) translateX(-20px)" }}
            >
              <img
                src="https://img.gamesatis.com/showcase/733/banner_side_supercell_oyunlar_left-24781.webp"
                alt="Banner3"
              />
            </div>
          </div>
        </div>
        <SplitterAdvert
          img1={
            "https://img.gamesatis.com/showcase/734/sbanner_wartune-60060.webp"
          }
          img2={"https://img.gamesatis.com/showcase/735/sbanner_pubg-76290.webp"}
          img3={
            "https://img.gamesatis.com/showcase/736/sbanner_cs2-83897.webp"
          }
          img4={
            "https://img.gamesatis.com/showcase/737/sbanner_lol-47352.webp"
          }
        />
        <div className="product-list mb-4" ref={productsGsapRef}>
          <div className="row g-3">
            {sortedProducts.slice((currentPage-1)*productsPerPage,currentPage*productsPerPage).map((item, index) => (
              <ProductCard vitrinIndex={11} key={index} keyIndex={index} main={item} />
            ))}
          </div>
          <PaginationComp main={products} current={currentPage} setCurrent={setCurrentPage} perPage={productsPerPage} />
        </div>

        <SplitterAdvert
          img1={
            "https://img.gamesatis.com/showcase/738/sbanner_fc25-96448.webp"
          }
          img2={"https://img.gamesatis.com/showcase/739/sbanner_steam-58046.webp"}
          img3={
            "https://img.gamesatis.com/showcase/740/sbanner_legendonline-61327.webp"
          }
          img4={
            "https://img.gamesatis.com/showcase/741/sbanner_clashofclans-91120.webp"
          }
        />

        <div className="streamers my-4">
          <Link to={"/donate"}>
            <Lent
              leftHead={"Yayincilar"}
              rightHead={<>Tum Yayincilar <FaArrowRightLong /></>}
              back={
                "https://www.gamesatis.com/assets/header-bg-icon-donate.png"
              }
            />
          </Link>
          <div className="row g-3 mt-1">
            {!streamData ? (
              <Loading />
            ) : (
              streamData
                .slice(0, 6)
                .map((item, i) => (
                  <StreamerCard
                    key={i}
                    img={item.photo}
                    names={item.name}
                    platform={item.platforms}
                  />
                ))
            )}
          </div>
        </div>

        <AboutCard />
      </div>
    </>
  );
};

export default Home;
