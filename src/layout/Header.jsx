import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import Authentication from "../components/Auth/Authentication";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import { CgMail } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import OffCanvas from "../Addons/OffCanvas";

const Header = () => {
  const { session, userProfile } = UserAuth();


  return (
    <>
      <div className="header mb-0 pb-0 h-auto flex-column bg-dark">
        <div className=" container-fluid d-none d-lg-block">
          <div className="top-head d-flex justify-content-end align-items-center   ">
            <ul className="list-unstyled m-0 py-2 gap-2 d-flex align-items-center justify-content-center ">
              <li>Mağaza Paketleri</li>
              <span>|</span>
              <li>Donate</li>
              <span>|</span>
              <li>Blog</li>
              <span>|</span>
              <li>Yorumlar</li>
              <span>|</span>
              <li>Yardim & destek</li>
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
                src="https://images.gamesatis.com/assets/logo-light.svg"
                alt=""
                width={170}
              />
              <span>Türkiyenin En Büyük Oyuncu Pazarı</span>
            </Link>
            <div className="search grid-search d-flex justify-content-center align-items-center mx-lg-0 mx-3">
              <div className="position-relative w-100 ">
                <IoIosSearch className="lupa text-white position-absolute top-50 translate-middle-y" />
                <input className="mx-1" placeholder="Oyun Ara..." type="text" />
              </div>
            </div>
            <div className="account grid-account d-flex gap-3 mx-lg-0 mx-3 justify-content-between justify-content-lg-center align-items-center">
              <button
                className="btn btn-success d-flex align-items-center d-flex  justify-content-center gap-1 "
                style={{ minHeight: "2.5em", maxHeight: "3.5em" }}
              >
                <IoWalletSharp />
                <span>Satış Yap</span>
                
              </button>
              <div className="header-account-button d-none d-lg-flex">
                {userProfile ? (
                  <Link to={"/profilim"}>
                    <button
                      style={{ fontSize: "13px", width: "13em" }}
                      className="btn border border-1 d-flex align-items-center justify-content-between d-flex gap-1 rounded-1 fw-bold text-white sell"
                    >
                      <img
                        className="rounded-2"
                        width={25}
                        src={userProfile.profile_photo}
                        alt="profil photo"
                      />
                      <div>
                        <div
                          style={{
                            fontSize: "12px",
                            fontFamily: "Roboto,sans-serif",
                          }}
                          className="name fw-bold"
                        >
                          Hesabim
                        </div>
                        <div
                          className="balance text-warning"
                          style={{ fontSize: "11px" }}
                        >
                          {userProfile.balance.toFixed(2)}TL
                        </div>
                      </div>
                      <Link to="/">
                        <CgMail className="fs-5" />
                      </Link>
                      <Link to="/giris-yap">
                        <BiHeart className="fs-5" />
                      </Link>
                    </button>
                  </Link>
                ) : (
                  <Authentication />
                )}
              </div>
              <div className="cart fs-4 d-none d-lg-block ">
                <FaCartShopping />
              </div>
              <div className="d-flex gap-4 d-lg-none">
                {userProfile
                ?(<div
                  className="cart fs-6 px-2 py-1  rounded-3"
                  style={{ backgroundColor: "#FF5F1F" }}
                >
                  <FaCartShopping /> <span style={{fontWeight:"bolder"}}>Sepet</span>
                </div>)
                :<Authentication />}
                <div className="offCanvas  d-block d-lg-none ">
                  <OffCanvas />
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <hr />
      </div>
      <div className="container-fluid d-lg-flex d-none mt-0 pt-0">
        <div className="nav-head-top d-flex flex-row mt-0 pt-0 w-100 py-2">
          <div className="nav-element">
            <Link to={"/oyunlar"}>OYUNLAR </Link>
          </div>
          <div className="nav-element">OYUNCU PAZARI</div>
          <div className="nav-element">KNIGHT ONLINE</div>
          <div className="nav-element position-relative">
            MOBILE LEGENDS{" "}
            <span className="position-absolute top-0 end-0 translate-middle-y badge  bg-danger">
              EN UYGUN
            </span>{" "}
          </div>
          <div className="nav-element">PUBG UC</div>
          <div className="nav-element">VALORANT VP</div>
          <div className="nav-element">CS2 SKIN</div>
          <div className="nav-element">RAZER AL-SAT</div>
          <div className="nav-element">AÇIK ARTIRMA</div>
          <div style={{ color: "#75ba15" }} className="nav-element fw-bolder">
            <span className="fs-6">+</span>BAKİYE YÜKLE
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
