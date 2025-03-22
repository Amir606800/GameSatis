import React, { useContext, useEffect } from "react";
import Path from "../Addons/Path";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../Context/ProductsProvider";
import Loading from "../Addons/Loading";
import NotFoundPage from "./NotFoundPage";
import { GoDotFill } from "react-icons/go";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import slugify from "slugify";
import { UserAuth } from "../Context/AuthContext";
import { useDispatch } from "react-redux";
import { addCart } from "../tools/Slices/CartSlice";
import Swal from "sweetalert2";
import { SettingsContext } from "../Context/SettingsProvider";

const Satici = () => {
  const { userName } = useParams();
  const { userProfile } = UserAuth();
  const { currency, currencyObj } = useContext(SettingsContext);
  const { foundUserProfile, fetchUserProfile, LoadingFound } =
    useContext(ProductContext);
  useEffect(() => {
    fetchUserProfile(userName);
  }, []);
  const dispatch = useDispatch();
  const handleAddCart = (session, foundedProduct, numberOfItems) => {
    try {
      dispatch(
        addCart({
          user_id: session.id,
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

  if (LoadingFound) return <Loading />;
  if (!foundUserProfile) return <NotFoundPage />;
  return (
    <>
      <Path />
      <div className="User-Profile container-fluid mt-2 mb-4">
        <div
          className="area w-100 gap-2  rounded-2 py-4 px-4 d-flex justify-content-around flex-column align-items-center align-items-md-start flex-md-row"
          style={{
            minHeight: "30em",
            height: "fit-content",
          }}
        >
          <div
            className="left d-flex bg-custom p-3 flex-column rounded-2 justify-content-start align-items-center gap-3 h-100"
            style={{ width: "30em" }}
          >
            <div
              className="top-part  overflow-hidden rounded-2 d-flex justify-content-start w-100"
              style={{ height: "5.8em", minWidth: "20em", maxWidth: "100%" }}
            >
              <img
                className="rounded-2"
                src={foundUserProfile.profile_photo}
                alt={foundUserProfile.display_name}
              />
              <div className="top-right px-3 d-flex align-items-start flex-column justify-content-evenly gap-1">
                <div>{foundUserProfile.display_name}</div>

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

                <div className="status px-3 rounded-2 py-1">
                  {foundUserProfile.is_online ? (
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
            </div>
            <div className="middle-part bg-custom-subtle w-100 rounded-2">
              <div className="head text-center py-2 fw-bold">
                Toplam işlem adeti:{" "}
                {foundUserProfile.dislikes + foundUserProfile.likes}
              </div>
              <hr className="my-2" style={{ border: "1px solid gray" }} />
              <div className="row my-2">
                <div className="col-6 text-center">
                  <div className="head  fw-bold">Başarılı satış:</div>
                  <div className="like mt-2">
                    <BiSolidLike className="text-success fs-3" />{" "}
                    <span>({foundUserProfile.likes})</span>
                  </div>
                </div>
                <div className="col-6 text-center">
                  <div className="head fw-bold">Başarısız satış:</div>
                  <div className="dislike mt-2">
                    <BiSolidDislike className="text-danger fs-3" />{" "}
                    <span>({foundUserProfile.dislikes})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="right px-2 mt-md-0 mt-4 "
            style={{
              width: "78%",
              minHeight: "24em",
              maxHeight: "fit-content",
              height: "100%",
            }}
          >
            <div className="Categ d-flex flex-row  mb-2 gap-3">
              <div
                className="bg-custom profile-section-element w-100 text-center align-content-center rounded-3 p-3"
                style={{ height: "4em" }}
              >
                Ilanlar
              </div>
              <div
                className="bg-custom profile-section-element w-100 text-center align-content-center rounded-3 p-3"
                style={{ height: "4em" }}
              >
                Yorumlar
              </div>
            </div>

            <div
              className="search-bar bg-custom w-100 p-3 rounded-3"
              style={{ height: "fit-content" }}
            >
              <div className="w-100 h-100 position-relative d-flex gap-2">
                <input
                  placeholder="Sipariş İD veya ilan başlığı ile ara..."
                  style={{ padding: "10px", backgroundColor: "#161820" }}
                  className="w-100 border-0 h-100 px-5 bg-custom-subtle rounded-3"
                  type="text"
                />
                <FaSearch
                  className="position-absolute top-50 translate-middle-y"
                  style={{ left: "15px" }}
                />
              </div>
            </div>
            <div className="list d-flex flex-column gap-3 mt-3">
              {foundUserProfile.products.map((item, index) => (
                <div
                  key={index}
                  style={{ height: "10em" }}
                  className="p-3 bg-custom rounded-3 d-flex flex-row align-items-center justify-content-between"
                >
                  <div className="h-100 d-flex align-items-center justify-content-start gap-3">
                    <img
                      src={item.image_url}
                      className="h-100 border border-1"
                      alt={item.title}
                    />
                    <Link
                      to={`/${slugify(item.title).toLowerCase()}`}
                      className="h5 fw-bold"
                    >
                      {item.title}
                    </Link>
                  </div>
                  <div className="right d-flex flex-row gap-5 align-items-center justify-content-center">
                    <div className="d-flex flex-column  justify-content-center align-items-center">
                      <h6 className="text-info">Satış fiyatı:</h6>
                      <div className="fs-4 fw-bold">
                        {item.discount != 0 ? (
                          <>
                            <span className="text-danger fs-5 text-decoration-line-through">
                              {(
                                item.price * currencyObj[currency].value
                              ).toFixed(2)}{" "}
                              {currencyObj[currency].symbol}
                            </span>{" "}
                            {(
                              (item.price -
                                (item.price * item.discount) / 100) *
                              currencyObj[currency].value
                            ).toFixed(2)}{" "}
                            {currencyObj[currency].symbol}{" "}
                          </>
                        ) : (
                          <>
                            {(item.price * currencyObj[currency].value).toFixed(
                              2
                            )}{" "}
                            {currencyObj[currency].symbol}{" "}
                          </>
                        )}
                      </div>
                    </div>
                    {userProfile ? (
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleAddCart(userProfile, item, 1);
                        }}
                      >
                        {userProfile.id == foundUserProfile.id ? (
                          <div className="btn btn-success ">Ürünü Görüntüle</div>
                        ) : (
                          <button
                            style={{ height: "2.5em", width: "5em" }}
                            className="btn btn-success"
                          >
                            Satın Al
                          </button>
                        )}
                      </form>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Satici;
