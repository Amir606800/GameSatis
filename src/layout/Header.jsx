import React, { useContext, useState } from "react";
import { FaCartShopping, FaShare } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import Authentication from "../components/Auth/Authentication";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { CgMail } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import OffCanvas from "../Addons/OffCanvas";
import { SettingsContext } from "../Context/SettingsProvider";
import LogoDark from "../assets/Images/gmsrenklikoyuyatay.svg";
import { ProductContext } from "../Context/ProductsProvider";
import slugify from "slugify";
import { useTranslate } from "../helpers/Language/Translator";
const Header = () => {
  const { userProfile, privacyStatus } = UserAuth();
  const { currency, currencyObj, theme } = useContext(SettingsContext);
  const [searchInputResult, setSearchInputResult] = useState("");
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchInputResult.toLowerCase())
  );
  const t = useTranslate()

  return (
    <>
      {searchInputResult.trim() != "" ? (
        <div
          className="search-result container-fluid position-absolute  bg-dark-custom border border-2 rounded-4 start-50 translate-middle"
          style={{
            maxWidth: "36em",
            width: "37%",
            minWidth: "20em",
            zIndex: "15",
            height: "15em",
            top: "13.5em",
          }}
        >
          <div className="search-result-list d-flex flex-column gap-3 overflow-y-scroll h-100 w-100 pt-3 pe-3">
            {filteredProducts.length == 0
            ? <p className="text-center bg-custom p-2 rounded-3">Sonuç Bulunamadı</p>
            :filteredProducts.map((item, index) => (
              <div key={index} className="list-comp d-flex gap-2 align-items-center justify-content-between bg-custom p-2 rounded-3">
                <img width={60} src={item.image_url} alt={item.title} />
                <div className="title" style={{fontSize:"12px"}}>{item.title}</div>
                <Link to={`/${slugify(item.title.toLowerCase())}`}>
                  <button onClick={()=>{setSearchInputResult("")}} className="btn btn-info text-custom align-content-center fw-bold" style={{fontSize:"10px",minWidth:"9em"}}>
                    Oyuna Git <FaShare />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="header mb-0 pb-0 h-auto flex-column bg-custom">
        <div className=" container-fluid d-none d-lg-block">
          <div className="top-head d-flex justify-content-end align-items-center   ">
            <ul className="list-unstyled m-0 py-2 gap-2 d-flex align-items-center justify-content-center ">
              <li>
                <Link to="/magaza">{t("header.topShopInfo")}</Link>
              </li>
              <span>|</span>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <span>|</span>
              <li>Blog</li>
              <span>|</span>
              <li>{t("header.topComments")}</li>
              <span>|</span>
              <li>
                <Link to={"/yardim-destek"}>{t("header.topQA")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="pb-1 container-fluid">
          <div className="mid-head  gap-2 py-3">
            <Link
              to="/"
              className="brand grid-logo d-flex flex-wrap align-items-center h-auto my-3 my-lg-0 mx-3 mx-lg-0 text-decoration-none justify-content-between justify-content-lg-evenly text-light"
            >
              <img
                src={
                  theme == "dark"
                    ? "https://images.gamesatis.com/assets/logo-light.svg"
                    : LogoDark
                }
                alt=""
                width={170}
              />
              <span className="text-custom">
                {t("header.siteTitle")}
              </span>
            </Link>
            <div className="search grid-search d-flex justify-content-center align-items-center mx-lg-0 mx-3 ">
              <div className="position-relative z-3 w-100 ">
                <IoIosSearch className="lupa  position-absolute top-50 translate-middle-y" />
                <input
                  className="mx-1 text-custom"
                  placeholder={t("header.searchPlaceholder")}
                  type="search"
                  value={searchInputResult}
                  onChange={(e) => setSearchInputResult(e.target.value)}
                />
              </div>
            </div>
            <div className="account grid-account d-flex gap-3 mx-lg-0 mx-3 justify-content-between justify-content-lg-center align-items-center">
              <Link to={userProfile ? "/ilan_ekle" : "/giris-yap"}>
                <button
                  className="btn btn-success d-flex align-items-center d-flex  justify-content-center gap-1 "
                  style={{ minHeight: "2.5em", maxHeight: "3.5em" }}
                >
                  <IoWalletSharp />
                  <span>{t("header.sellButon")}</span>
                </button>
              </Link>
              <div className="header-account-button d-none d-lg-flex">
                {userProfile ? (
                  <>
                    <button
                      style={{ fontSize: "13px", width: "13em" }}
                      className="btn border border-1 d-flex align-items-center justify-content-between d-flex gap-1 rounded-1 fw-bold text-white sell"
                    >
                      <Link to={"/profilim"}>
                        <img
                          className="rounded-2"
                          width={25}
                          src={userProfile.profile_photo}
                          alt="profil photo"
                        />
                      </Link>
                      <Link to={"/profilim"}>
                        <div>
                          <div
                            style={{
                              fontSize: "12px",
                              fontFamily: "Roboto,sans-serif",
                            }}
                            className="name fw-bold"
                          >
                            {userProfile.first_name}{" "}
                            {userProfile.last_name.substring(0, 1)}.
                          </div>
                          <div
                            className="balance fw-bold"
                            style={{ fontSize: "11px", color: "orange" }}
                          >
                            {privacyStatus ? (
                              "#####"
                            ) : (
                              <>
                                {(
                                  userProfile.balance *
                                  currencyObj[currency].value
                                ).toFixed(2)}{" "}
                                {currencyObj[currency].symbol}
                              </>
                            )}
                          </div>
                        </div>
                      </Link>
                      <CgMail className="fs-5" />
                      <Link to="/favoriler">
                        <BiHeart className="fs-5" />
                      </Link>
                    </button>
                  </>
                ) : (
                  <Authentication />
                )}
              </div>
              <Link
                to={userProfile ? "/cart" : "/giris-yap"}
                className="cart  fs-4 d-none d-lg-block "
              >
                <FaCartShopping />
              </Link>
              <div className="d-flex gap-4 d-lg-none">
                {userProfile ? (
                  <Link
                    to={userProfile ? "/cart" : "/giris-yap"}
                    className="cart fs-6 px-2 py-1 text-center align-content-center rounded-3"
                    style={{ backgroundColor: "#FF5F1F" }}
                  >
                    <FaCartShopping />{" "}
                    <span style={{ fontWeight: "bolder" }}>{t("header.cart")}</span>
                  </Link>
                ) : (
                  <Authentication />
                )}
                <div className="offCanvas  d-block d-lg-none ">
                  <OffCanvas />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="scroll-nav-head-top  mt-0 pt-0">
        <div className="container-fluid d-flex overflow-x-scroll overflow-y-visible mt-0 pt-0">
          <div className="nav-head-top d-flex flex-row mt-0 pt-0 w-100 py-2">
            <Link to={"/oyunlar"} className="nav-element">
              {t("header.navigation.games")}
            </Link>
            <Link to="/oyuncu-pazari" className="nav-element"> {t("header.navigation.gameShop")} </Link>
            <div className="nav-element">KNIGHT ONLINE</div>
            <Link to={"/oyunlar/League-Of-Legends"} className="nav-element">
              League Of Legends
            </Link>
            <Link to={"/oyunlar/PUBG-Mobile"} className="nav-element">
              PUBG UC
            </Link>
            <Link to={"/oyunlar/Valorant"} className="nav-element">
              VALORANT VP
            </Link>
            <Link to={"/oyunlar/Supercell"} className="nav-element">
              Supercell
            </Link>
            <div style={{ color: "#75ba15" }} className="nav-element fw-bolder">
              <span className="fs-6">+</span> {t("header.navigation.balance")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
