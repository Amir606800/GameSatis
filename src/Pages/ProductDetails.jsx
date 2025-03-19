import { Link, useNavigate, useParams } from "react-router-dom";
import Path from "../Addons/Path";
import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../Context/ProductsProvider";
import slugify from "slugify";
import IlgiCard from "../components/CardCompon/IlgiCard";
import { IoEyeOutline, IoShareSocialSharp } from "react-icons/io5";
import { BiHeart, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { BsShieldFillCheck } from "react-icons/bs";
import Lent from "../Addons/Lent";
import { MdOutlineCancel } from "react-icons/md";
import Loading from "../Addons/Loading";
import NotFoundPage from "./NotFoundPage";
import supabase from "../helpers/supabaseClient";
import { UserAuth } from "../Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../tools/Slices/CartSlice";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Swal from "sweetalert2";
import { addWish, deleteWish, fetchWish } from "../tools/Slices/WhishListSlice";
import { SettingsContext } from "../Context/SettingsProvider";
import StarSet from "../Addons/StarSet";

export const ProductDetails = () => {
  gsap.registerPlugin(ScrollTrigger);

  const { products, loading } = useContext(ProductContext);
  const { session, userProfile } = UserAuth();
  const { slugName } = useParams();
  const { currency, currencyObj } = useContext(SettingsContext);
  const { wishes } = useSelector((state) => state.wishlist);
  const [thing, setThing] = useState();
  const navigate = useNavigate();

  const foundedProduct = products.find(
    (item) => slugify(item.title).toLowerCase() === slugName
  );

  useEffect(() => {
    if (wishes || products) {
      const thing = wishes.find((item) => item.product_id == foundedProduct.id);
      setThing(thing);
    }
  }, [wishes, products]);
  const dispatch = useDispatch();
  const productDetail = useRef();

  const reloadRef = useRef(false);

  useEffect(() => {
    if (userProfile && !reloadRef.current) {
      dispatch(fetchWish(userProfile.id));
      reloadRef.current = true;
    }
  }, [userProfile]);

  const [ratingCounts, setRatingCounts] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
    total: 0,
  });

  useEffect(() => {
    if (foundedProduct) {
      const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
      foundedProduct.feedbacks.map((item) => {
        counts[item.rate] = counts[item.rate] + 1;
      });
      setRatingCounts({ ...counts, total: foundedProduct.feedbacks.length });
      console.log(counts);
    }
  }, [foundedProduct]);

  const totalWeightedRating = Object.entries(ratingCounts)
    .slice(0, 5)
    .reduce((acc, [rating, count]) => acc + parseInt(rating) * count, 0);

  // Calculate the average rating (avoid division by zero)
  const averageRating =
    ratingCounts.total > 0
      ? (totalWeightedRating / ratingCounts.total).toFixed(2)
      : 0;

  useEffect(() => {
    if (foundedProduct) {
      const visitUpdate = async () => {
        const { error } = await supabase
          .from("products")
          .update({ visits: foundedProduct.visits + 1 })
          .eq("id", foundedProduct.id);
        if (error) {
          console.log(error);
          return;
        }
      };
      visitUpdate();
    }
  }, [foundedProduct]);


  const clipBoard = ()=>{
    const location = window.location.href

    navigator.clipboard.writeText(location).then(()=>alert("Share Link copied to clipboard!")).catch((err)=>console.error(err))
  }



  const [count, setCount] = useState(1);
  const handleAddCart = (session, foundedProduct, numberOfItems) => {
    try {
      if (!session) {
        alert("Please Login to add items into your cart!");
        navigate("/giris-yap");
      }
      dispatch(
        addCart({
          user_id: session.user.id,
          product_id: foundedProduct.id,
          quantity: numberOfItems,
        })
      );
      Swal.fire({
        title: "Sepete Bakın",
        text: "İteminiz sepete eklenmiştir",
        icon: "success",
        background: "#222631", // Custom dark background (optional)
        color: "#fff", // Text color for dark theme
        confirmButtonText: "Tamam",
        confirmButtonColor: "#3085d6",
      });
    } catch (err) {
      console.log(err);
    }
  };
  const targetRef = useRef();

  useGSAP(
    () => {
      gsap.from(".image", {
        x: "-100vw",
        duration: 1,
        ease: "back.inOut",
        scrollTrigger: ".image",
      });
      gsap.from(".description", {
        y: "-100vh",
        zIndex: "-100",
        duration: 1,
        delay: 1,

        scrollTrigger: ".description",
      });
      gsap.from(".information", {
        y: "50vh",
        zIndex: "-100",
        duration: 1,
        delay: 1,
        scrollTrigger: ".image",
      });
      gsap.from(".creator", {
        y: "-50vh",
        x: "50vw",
        zIndex: "-100",
        duration: 1,
        delay: 0.5,
        scrollTrigger: ".description",
      });
      gsap.from(".payment", {
        y: "50vh",
        x: "50vw",
        zIndex: "-100",
        duration: 1,
        delay: 0.5,
        scrollTrigger: ".description",
      });
    },
    { dependencies: [foundedProduct], scope: productDetail }
  );

  if (loading) return <Loading />;
  if (!foundedProduct) return <NotFoundPage />;
  const lastModified = new Date(foundedProduct.last_modified); // assuming product.last_modified is a timestamp
  const formattedDate = lastModified.toLocaleDateString("en-GB");
  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behaviour: "smooth" });
  };
  return (
    <>
      <Path />
      <div
        className="detail-page overflow-hidden container-fluid my-4"
        ref={productDetail}
      >
        <div className="area">
          <div className="image position-relative text-center align-items-center justify-content-center">
            <img src={foundedProduct.image_url} alt={foundedProduct.title} />
            {foundedProduct.deliver_time == 0 ? (
              <div className="aninda position-absolute text-white p-1 rounded-3">
                {" "}
                <BsLightningChargeFill /> Aninda Teslim
              </div>
            ) : (
              <></>
            )}
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
                <div onClick={clipBoard} className="share-buton btn btn-outline-light text-center">
                  <IoShareSocialSharp />
                </div>
                <div
                  className={`heart-buton btn btn-outline-light text-center ${
                    thing ? "text-danger" : ""
                  }`}
                  onClick={() => {
                    if (!thing) {
                      dispatch(
                        addWish({
                          product_id: foundedProduct.id,
                          user_id: userProfile.id,
                        })
                      );
                      dispatch(fetchWish(userProfile.id));
                    } else {
                      dispatch(deleteWish(thing.id));
                    }
                  }}
                >
                  <BiHeart />
                </div>
              </div>

              {foundedProduct.deliver_time !== 0 ? (
                <span id="teslimat" className="px-3 ">
                  Teslimat: {foundedProduct.deliver_time} Saat İçinde
                  Gerçekleşir
                </span>
              ) : (
                <div className="cur-pointer" onClick={handleScroll}>
                  Devam et...
                </div>
              )}
            </div>
          </div>
          <div className="information area-part d-flex flex-wrap flex-sm-nowrap gap-4 flex-row justify-content-around">
            <div className="boxes-info w-100 d-flex flex-sm-column justify-content-center align-items-center">
              <span className="box-headings">İlan No:</span>
              <span className="fw-bold">#{foundedProduct.id}</span>
            </div>
            <div className="boxes-info w-100 d-flex  flex-sm-column justify-content-center align-items-center">
              <span className="box-headings">Görülme: </span>
              <span className="fw-bold d-flex justify-content-center align-items-center gap-1">
                <IoEyeOutline />
                {foundedProduct.visits}
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
                <Link
                  to={`/magaza/${slugify(
                    `${
                      foundedProduct.profiles.display_name
                    }~${foundedProduct.profiles.id.substring(0, 8)}`
                  )}`}
                >
                  <span className="h5">
                    {foundedProduct.profiles.display_name}{" "}
                    {foundedProduct.profiles.is_verified ? (
                      <FaCircleCheck className="text-info" />
                    ) : (
                      ""
                    )}
                  </span>
                </Link>
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
                    {(
                      foundedProduct.price * currencyObj[currency].value
                    ).toFixed(2, 0)}{" "}
                    {currencyObj[currency].symbol}
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
                      (
                        foundedProduct.price * currencyObj[currency].value
                      ).toFixed(2) -
                      (foundedProduct.price *
                        currencyObj[currency].value *
                        foundedProduct.discount) /
                        100
                    ).toFixed(2, 0)}
                    {currencyObj[currency].symbol}
                  </p>
                </span>
              </div>
            </div>
            <div className="d-flex w-100 justify-content-center gap-2 align-items-center">
              <div className="amount d-flex align-items-center justify-content-center gap-0 rounded-4 overflow-hidden">
                <span className="px-3">Adet: </span>
                <div className="d-flex ingredients justify-content-center align-items-center p-2 gap-2 ">
                  <div
                    onClick={() => {
                      count == 1 ? "" : setCount((prev) => prev - 1);
                    }}
                    className={`  p-0 w-25 text-center ${
                      count == 1 ? "" : "decrease btn"
                    }`}
                    style={{ cursor: count == 1 ? "default" : "" }}
                  >
                    -
                  </div>
                  <div className="amount w-50 text-center">{count}</div>
                  <div
                    onClick={() => setCount((prev) => prev + 1)}
                    className="increase btn p-0 w-25 text-center"
                  >
                    +
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleAddCart(session, foundedProduct, count)}
                className="purchase  btn btn-success px-3"
                style={{ fontSize: "15px" }}
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
        {foundedProduct.features != null ? (
          <div className="card bg-custom border-0 my-2">
            <div className="card-head">
              <Lent
                back={
                  "https://www.gamesatis.com/assets/header-bg-icon-game.png"
                }
                leftHead={"Ürün Özellikleri"}
              ></Lent>
            </div>
            <div className="card-body d-flex gap-2 align-items-center flex-wrap">
              {foundedProduct.features.map((item, index) => (
                <div className="bg-dark-custom p-3 rounded-4" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        <div ref={targetRef} className="card my-3 border-0 bg-custom">
          <div className="card-head">
            <Lent
              back={"https://www.gamesatis.com/assets/header-bg-icon-game.png"}
              leftHead={`${foundedProduct.title} Hakkında`}
              rightHead={""}
            />
          </div>
          <div
            className="card-body bottom-description"
            style={{ whiteSpace: "preserve-breaks" }}
          >
            {foundedProduct.description}
          </div>
        </div>
        <IlgiCard />

        <div className="card my-3 border-0 bg-custom">
          <div className="card-head p-3 h3 fw-bolder">Kullanıcı yorumları</div>
          <hr />
          <div
            className="card-body d-flex flex-lg-row flex-column gap-2 justify-content-between align-items-center"
            style={{ whiteSpace: "preserve-breaks" }}
          >
            <img
              width={200}
              src={foundedProduct.image_url}
              alt={foundedProduct.title}
            />
            <div className="stars d-flex flex-column gap-2 w-75">
              {[
                { num: 5, tit: "Mükemmel" },
                { num: 4, tit: "Çok İyi" },
                { num: 3, tit: "İyi" },
                { num: 2, tit: "Kötü" },
                { num: 1, tit: "Çok Kötü" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex flex-row gap-3 align-items-center justify-content-center"
                >
                  <StarSet rate={item.num} />

                  <span
                    className="d-none d-lg-block"
                    style={{ minWidth: "6.5em" }}
                  >
                    {item.tit}
                  </span>
                  <div className="d-flex justify-content-center align-items-center w-100 gap-2">
                    <div
                      style={{ height: "11px" }}
                      className="progress w-100"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="progress-bar"
                        style={{
                          width: `${
                            ratingCounts.total == 0
                              ? "0%"
                              : (ratingCounts[item.num] / ratingCounts.total) *
                                100
                          }%`,
                        }}
                      />
                    </div>

                    <span className="fw-bold" style={{ fontSize: "17px" }}>
                      {ratingCounts.total == 0
                        ? "0"
                        : (ratingCounts[item.num] / ratingCounts.total) * 100}
                      %
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="ortalama text-center d-flex flex-column gap-1">
              <span className="h6 fw-bold">Ortalama Puan</span>
              <StarSet rate={Math.floor(averageRating)} />
              <h1 className="fw-bolder" style={{ color: "#6395EE" }}>
                {averageRating}
              </h1>
            </div>
          </div>
        </div>

        {/* Yorumlarin bulundugu hisse */}
        {foundedProduct.feedbacks.map((item, index) => (
          <div key={index} className="card my-3 border-0 bg-custom">
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
                rightHead={<StarSet rate={item.rate} />}
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
