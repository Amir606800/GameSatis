import React, { useContext } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { HiMiniUserGroup } from "react-icons/hi2";
import { IoIosPricetags } from "react-icons/io";
import { IoRocketSharp } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaTwitch } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoDark from "../assets/Images/gmsrenklikoyuyatay.svg";
import { SettingsContext } from "../Context/SettingsProvider";

const Footer = () => {
  const {theme} = useContext(SettingsContext)
  return (
    <>
      <div className="footer bg-custom position-relative">
        <div className="back position-absolute top-0 start-0" />
        <div className="main-footer container">
          <div className="row top-row">
            <div className="col">
              <div className="footer-icons">
                <IoRocketSharp className="footer-icon" />
              </div>
              <div>
                <h5>Hızlı Teslimat</h5>7 gün 24 saat aldığınız kod anında
                hesabınızda! Oyun içi teslimatlar Sabah 09:00 - Gece 02:00
                arasında yapılır.
              </div>
            </div>
            <div className="col">
              <div className="footer-icons">
                <BsFillShieldLockFill className="footer-icon" />
              </div>
              <div>
                <h5>Güvenli Alışveriş</h5>
                3D Secure ve SSL güvencesiyle dilediğiniz ödeme yöntemi ile
                ödeme yapın.
              </div>
            </div>
            <div className="col">
              <div className="footer-icons">
                <IoIosPricetags className="footer-icon" />
              </div>
              <div>
                <h5>En Uygun Fiyatlar</h5>
                İndirimli ve en ucuz fiyatlarla alışverişin keyfini çıkarın.
              </div>
            </div>
            <div className="col">
              <div className="footer-icons">
                <HiMiniUserGroup className="footer-icon" />
              </div>
              <div>
                <h5>Müşteri Memnuniyeti</h5>
                <span>
                  Oyun alışverişlerinizde bizi tercih ettiğiniz için teşekkür
                  ederiz.
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-9 p-2 ">
              <div className="row left-side g-0">
                <div className="col">
                  <h5>GameSatis</h5>
                  <ul>
                    <li>
                      <Link to="/hakkimizda">Hakkımızda</Link>
                    </li>
                    <li>Kurumsal</li>
                    <li>Blog</li>
                    <li>Yorumlar</li>
                    <li>
                      <Link to="/iletişim"> İletişim</Link>
                    </li>
                    <li>Künye</li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Kullanici</h5>
                  <ul>
                    <li>
                      <Link to="/giris-yap">Üye ol</Link>
                    </li>
                    <li>
                      <Link to="/email-confirm">Parolamı Unuttum</Link>
                    </li>
                    <li>
                      <Link to="/magaza">Mağaza</Link>
                    </li>
                    <li>Mağaza Paketleri</li>
                    <li>
                      <Link to="/donate"> Yayıncılar - Destekle</Link>
                    </li>
                    <li>Yayıncı Başvurusu</li>
                    <li>Kullanıcı Sözleşmesi</li>
                    <li>Mağaza Kuralları</li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Odeme</h5>
                  <ul>
                    <li>Ödeme Yöntemleri</li>
                    <li>Kredi Kartı</li>
                    <li>Havale/EFT</li>
                    <li>İninal Kart</li>
                    <li>Kredi Kartına Taksit</li>
                    <li>İade-İptal Koşulları</li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Oyuncu Pazari</h5>
                  <ul>
                    <li>Ödeme Yöntemleri</li>
                    <li>Kredi Kartı</li>
                    <li>Havale/EFT</li>
                    <li>İninal Kart</li>
                    <li>Kredi Kartına Taksit</li>
                    <li>İade-İptal Koşulları</li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Popüler Sayfalar</h5>
                  <ul>
                    <li>Valorant</li>
                    <li>Knight Online</li>
                    <li>Pubg Mobile UC</li>
                    <li>Black Desert Online</li>
                    <li>League of Legends</li>
                    <li>CS2 Skin</li>
                    <li>Tüm Oyunlar</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col p-2">
              <div className="justify-content-center align-items-center d-flex flex-column h-100">
                <div className="d-flex flex-column justify-content-center fs-5 align-items-center gap-1 h-75">
                  <button className="btn btn-outline-light text-custom">
                    ? Bize Geri Bildirim Birak
                  </button>
                  <div className="">
                    <BiPhoneCall />
                    <span>0 850 532 42 63</span>
                  </div>
                  <div>
                    <TfiEmail />
                    <span> destek@gamesatis.com</span>
                  </div>
                </div>
                <div className="social h-50 d-flex flex-column justify-content-center align-items-center">
                  <h5>Bizi Takip Et</h5>
                  <div className="d-flex gap-2">
                    <span className="social-icons cur-pointer">
                      <FaInstagram />
                    </span>
                    <span className="social-icons cur-pointer">
                      <IoLogoDiscord />
                    </span>
                    <span className="social-icons cur-pointer">
                      <FaTwitch />
                    </span>
                    <span className="social-icons cur-pointer">
                      <FaXTwitter />
                    </span>
                    <span className="social-icons cur-pointer">
                      <FaYoutube />
                    </span>
                    <span className="social-icons cur-pointer">
                      <FaFacebookF />
                    </span>
                    <span className="social-icons cur-pointer">
                      <FaLinkedinIn />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer py-3 container-fluid align-items-center justify-content-center ">
        <div className="row">
          <div className=" text-center col">
            <img
              width={110}
              src={
                theme == "dark"
                  ? "https://images.gamesatis.com/assets/logo-light.svg"
                  : LogoDark
              }
              alt="Logo"
            ></img>
          </div>
          <div className="col" style={{ fontSize: "9px" }}>
            Copyright © 2005 - 2025 | GameSatış (Biradım Game LTD.) Gizlilik ve
            Çerez Politikası | Kullanıcı Sözleşmesi
          </div>
          <div className="col text-center">
            <img
              width={300}
              src="https://www.gamesatis.com/assets/footer-banks-78ee04f3a23f61bb2f733708b3bf6258ac258deb8d60f72fd9c789bfad101512.png"
              alt="SPONSORS"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
