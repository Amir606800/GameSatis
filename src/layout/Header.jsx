import React from "react";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import Authentication from "../components/Auth/Authentication";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div className="mid-head d-flex gap-2 py-3">
            <Link
              to="/"
              className="brand d-flex flex-wrap align-items-end gap-4 h-auto text-decoration-none text-light"
            >
              <img
                src="https://images.gamesatis.com/assets/logo-light.svg"
                alt=""
                width={170}
              />
              <span>Türkiyenin En Büyük Oyuncu Pazarı</span>
            </Link>
            <div className="search d-flex justify-content-center align-items-center">
              <div className="position-relative w-100">
                <IoIosSearch className="lupa text-white position-absolute top-50 translate-middle-y" />
                <input placeholder="Oyun Ara..." type="text" />
              </div>
            </div>
            <div className="account d-flex gap-3 justify-content-end">
              <button className="btn btn-success d-flex align-items-center d-lg-flex d-none justify-content-center gap-1 sell">
                <IoWalletSharp />
                <span>Satış Yap</span>
              </button>
              <Authentication />
              <div className="cart fs-4">
                <FaCartShopping />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container-fluid d-lg-flex d-none mt-0 pt-0">
        <div className="nav-head-top d-flex flex-row mt-0 pt-0 w-100 py-2">
          <div className="nav-element"><Link to={"/oyunlar"}>OYUNLAR</Link></div>
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
