import { useParams } from "react-router-dom";
import Path from "../components/Path";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductsProvider";
import slugify from "slugify";
import { IoEyeOutline, IoShareSocialSharp } from "react-icons/io5";
import { BiHeart, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleCheck, FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { BsShieldFillCheck } from "react-icons/bs";
import Lent from "../components/Lent";
import { MdOutlineCancel } from "react-icons/md";
import Loading from "../Addons/Loading";
import NotFoundPage from "./NotFoundPage";

export const ProductDetails = () => {
  const { products, loading } = useContext(ProductContext);
  const { slugName } = useParams();
  const foundedProduct = products.find(
    (item) => slugify(item.title).toLowerCase() === slugName
  );
  if (loading) return <Loading />;
  if (!foundedProduct) return <NotFoundPage />;

  const lastModified = new Date(foundedProduct.last_modified); // assuming product.last_modified is a timestamp
  const formattedDate = lastModified.toLocaleDateString("en-GB");
  console.log(foundedProduct);
  return (
    <>
      <Path />
      <div className="detail-page container-fluid my-4">
        <div className="area">
          <div className="image position-relative">
            <img
              src={foundedProduct.image_url} //Item image
              alt={foundedProduct.title}
              style={{ height: "100%", width: "100%", minWidth: "50%" }}
            />
          </div>
          <div className="description d-flex flex-column justify-content-between align-items-start area-part h-100 gap-5">
            <div className="h-100">
              <span className="h5 fw-bolder">{foundedProduct.title}</span>
              <div style={{ fontSize: "13px" }} className="fw-bold mt-1">
                Ürün açıklaması:{" "}
              </div>
              <div
                style={{ fontSize: "13px", whiteSpace: "preserve-breaks" }}
                className="aciklama"
              >
                {foundedProduct.description.substring(0, 160) + "..."}
              </div>
            </div>
            <div
              style={{ maxHeight: "2em" }}
              className="d-flex w-100 justify-content-between gap-5 align-items-center"
            >
              <div className="left d-flex justify-content-center align-items-center gap-2">
                <div className="share-buton btn btn-outline-light text-center">
                  <IoShareSocialSharp />
                </div>
                <div className="heart-buton btn btn-outline-light text-center ">
                  <BiHeart /> <i style={{ fontSize: "12px" }}>1 Favori</i>
                </div>
              </div>

              <span id="teslimat" className="px-3 ">
                Teslimat: {foundedProduct.deliver_time} Saat İçinde Gerçekleşir
              </span>
            </div>
          </div>
          <div className="information area-part d-flex flex-wrap flex-sm-nowrap gap-4 flex-row justify-content-around">
            <div className="boxes-info w-100 d-flex flex-sm-column justify-content-center align-items-center">
              <span className="box-headings">İlan No:</span>
              <span className="fw-bold">#12344</span>
            </div>
            <div className="boxes-info w-100 d-flex  flex-sm-column justify-content-center align-items-center">
              <span className="box-headings">Görülme: </span>
              <span className="fw-bold d-flex justify-content-center align-items-center gap-1">
                <IoEyeOutline />
                455
              </span>
            </div>
            <div className="boxes-info w-100 d-flex  flex-sm-column justify-content-center align-items-center">
              <span className="box-headings">Güncelleme: </span>
              <span className="fw-bold">{formattedDate}</span>
            </div>
            <div className="boxes-info w-100 d-flex  flex-sm-column justify-content-center align-items-center">
              <span className="box-headings">Stok: </span>
              <span className="fw-bold" style={{ fontSize: "22px" }}>
                {foundedProduct.stock ? (
                  <IoIosCheckmarkCircleOutline />
                ) : (
                  <MdOutlineCancel />
                )}
              </span>
            </div>
          </div>
          <div className="creator d-flex flex-column align-content-between justify-content-center area-part">
            <div className="creator-info d-flex flex-row justify-content-start gap-3 align-items-center">
              <img
                style={{ width: "5em" }}
                className=" rounded-3 "
                src={foundedProduct.profiles.profile_photo}
                alt={foundedProduct.profiles.display_name}
              />
              <div>
                <span className="h5">
                  {foundedProduct.profiles.display_name}{" "}
                  {foundedProduct.profiles.is_verified ? (
                    <FaCircleCheck className="text-info" />
                  ) : (
                    ""
                  )}
                </span>
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <div
                    style={{ width: "170px", height: "8px" }}
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar" style={{ width: "100%" }} />
                  </div>

                  <span style={{ fontSize: "13px" }}>%100</span>
                </div>
                <div style={{ fontSize: "12px" }}>Magaza yorumlari: (123)</div>
                <div style={{ fontSize: "12px" }}>
                  Magazanin Diger Urunleri: (342)
                </div>
              </div>
            </div>
            <div className="likes d-flex justify-content-between align-items-center">
              <span>Toplam işlem adedi: 75221</span>
              <div className="d-flex gap-2">
                <div className="text-center align-content-center">
                  <BiSolidLike style={{ fontSize: "14px", color: "green" }} />
                  (75221)
                </div>
                <span>
                  <BiSolidDislike style={{ fontSize: "14px", color: "red" }} />
                  (0)
                </span>
              </div>
            </div>
            <div className="status">
              {foundedProduct.profiles.is_online ? (
                <>
                  <GoDotFill color="green" />
                  <span style={{ fontSize: "14px" }}>Çevrimiçi</span>
                </>
              ) : (
                <>
                  <GoDotFill color="red" />
                  <span style={{ fontSize: "14px" }}>Çevrimdışı</span>
                </>
              )}
            </div>
          </div>
          <div className="payment d-flex flex-column align-items-center justify-content-between  area-part">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <div
                style={{ width: "65%" }}
                className=" d-flex align-items-center gap-1"
              >
                <BsShieldFillCheck className="text-info fs-4" />
                <span
                  className="d-flex justify-content-center flex-column"
                  style={{ fontSize: "10px", fontWeight: "bold" }}
                >
                  <span>Paranız %100 GameSatış</span>{" "}
                  <span>güvencesi altındadır.</span>
                </span>
              </div>
              <div className="price">
                <div className="discount">
                  <span id="disc_price">
                    {foundedProduct.price.toFixed(2, 0)}TL
                  </span>
                  <span
                    id="disc_percent"
                    className="px-2 d-flex justify-content-center align-items-center "
                  >
                    %{foundedProduct.discount}
                  </span>
                </div>
                <span style={{ fontWeight: "bolder", fontSize: "27px" }}>
                  <p>
                    {(
                      foundedProduct.price -
                      (foundedProduct.price * foundedProduct.discount) / 100
                    ).toFixed(2, 0)}
                    TL
                  </p>
                </span>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-between gap-2 align-items-center">
              <div className="amount d-flex align-items-center justify-content-center">
                <span style={{ width: "5em" }}>Adet: </span>
                <div className="d-flex ingredients justify-content-between align-items-center p-2 ">
                  <div className="decrease btn p-0 w-25 text-center">-</div>
                  <div className="amount w-50 text-center">4</div>
                  <div className="increase btn p-0 w-25 text-center">+</div>
                </div>
              </div>
              <button className="purchase  btn btn-success px-3">
                Satın Al
              </button>
            </div>
          </div>
        </div>
        <div className="card my-3 border-0 bg-dark">
          <div className="card-head">
            <Lent
              back={"https://www.gamesatis.com/assets/header-bg-icon-game.png"}
              leftHead={`${foundedProduct.title} Hakkında`}
              rightHead={""}
            />
          </div>
          <div className="card-body" style={{ whiteSpace: "preserve-breaks" }}>
            {foundedProduct.description}
          </div>
        </div>
        <div className="card my-3 border-0 bg-dark">
          <div className="card-head p-3 h3 fw-bolder">Kullanıcı yorumları</div>
          <hr />
          <div className="card-body d-flex gap-2" style={{ whiteSpace: "preserve-breaks" }}>
            <img
              width={200}
              src={foundedProduct.image_url}
              alt={foundedProduct.title}
            />
            <div className="stars d-flex flex-column gap-2">
              <div>
                <span>
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                </span>
                <span>Mükemmel</span>
              </div>
              <div>
                <span>
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                </span>
                <span>Çok İyi</span>
              </div>
              <div>
                <span>
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                </span>
                <span>İyi</span>
              </div>
              <div>
                <span>
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                </span>
                <span>Kötü</span>
              </div>
              <div>
                <span>
                  <FaStar style={{ color: "#6395EE" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                  <FaStar style={{ color: "white" }} />{" "}
                </span>{" "}
                <span>Çok Kötü</span>
              </div>
            </div>
            <div className="lines d-flex flex-column gap-2 w-100" style={{maxWidth:"65%"}}>
              <div className="mukemmel w-100 bg-info">a</div>
              <div className="cok-iyi w-100 bg-info">a</div>
              <div className="iyi w-100 bg-info">a</div>
              <div className="kotu w-100 bg-info">a</div>
              <div className="cok-kotu w-100 bg-info">a</div>
            </div>
          </div>
        </div>

        {/* Yorumlarin bulundugu hisse */}
        {foundedProduct.feedbacks.map((item, index) => (
          <div key={index} className="card my-3 border-0 bg-dark">
            <div className="card-head">
              <Lent
                back={
                  "https://www.gamesatis.com/assets/header-bg-icon-comment.png"
                }
                leftHead={
                  <>
                    {item.profiles.first_name} {item.profiles.last_name[0]}.
                  </>
                }
                rightHead={item.rate}
              />
            </div>
            <hr />
            <div
              className="card-body"
              style={{ whiteSpace: "preserve-breaks" }}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
