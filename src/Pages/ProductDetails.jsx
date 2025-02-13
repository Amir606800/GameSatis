import { useParams } from "react-router-dom";
import Path from "../components/Path";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductsProvider";
import slugify from "slugify";
import { IoEyeOutline, IoShareSocialSharp } from "react-icons/io5";
import { BiHeart, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";

import {
  IoIosCheckmarkCircle,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { BsShieldFillCheck } from "react-icons/bs";
import Lent from "../components/Lent";

export const ProductDetails = () => {
  const products = useContext(ProductContext);
  const {slugName} = useParams();
  const foundedProduct = products.find(
    (item) => slugify(item.title).toLowerCase() === slugName
  );
  const text = `Bu İlanı Satın Aldığınızda Sizlere İçerisinde Marvel Spider-man 2 Deluxe Edition Bulunan Bir Steam Hesabı Teslim Edilir.
DRM Denuvo koruması ile karşılaşmadan sorunsuz bir oyun deneyimi yaşayacaksınız.
Hesap Etrafta Dolaşan Public Hesaplardan Değildir.
Hesaplara Çift doğrulama ile giriş yapılmaktadır.
XeoSpin Güvencesiyle Sınırsız Bir şekilde Save Dosyalarınız Karışmadan Oyununuzu Rahatlıkla Oynayabilirsiniz.
Hesaplar Yalnızca Çevrimdışı modları Destekler
Satın Aldıktan Sonra Hemen Teslimatlı Sağlanır
Ürünü Satın aldıktan sonra sizlere Steam Hesabı ID-Şifre İle Birlikte Kullanım Talimatlarıda Teslim edilecektir.
Hesaplar Tek 1 PCye özeldir Başka bir Pc için tekrardan satın almanız gerekmektedir.
Aktivasyon ve aktivatör kullanımı yoktur!
Herhangi bir oyundan atma sorunu söz konusu bile değildir
Oyunu orijinal platformdan indirip oynuyorsunuz.
XEOSPİN MARKET GÜVENCESİYLE MÜŞTERİLERİMİZİ ÖNEMSİYORUZ VE DEĞER VERİYORUZ. Yorumlarımız sizlere gerekli güveni sağlayacaktır.
14,000+ Satış Güvencesiyle`;

  return (
    <>
      <Path />
      <div className="detail-page container-fluid my-4">
        {!foundedProduct ? (
          " Loading..."
        ) : (
          <>
            <div className="area">
              <div className="image position-relative">
                <img
                  src="https://img.gamesatis.com/images/1065295/valorant-250-tl-89423.webp"
                  alt={foundedProduct.title}
                  style={{ height: "100%", width: "100%" }}
                />
                <div
                  className="del position-absolute bg-success p-1 rounded-1"
                  style={{ left: "20px", top: "12px", fontSize: "14px" }}
                >
                  {" "}
                  <BsLightningChargeFill /> Hemen Teslim
                </div>
              </div>
              <div className="description d-flex flex-column justify-content-between align-items-start area-part ">
                <div>
                  <span className="h5 fw-bolder">{foundedProduct.title}</span>
                  <div style={{ fontSize: "13px" }} className="fw-bold mt-1">
                    Ürün açıklaması:{" "}
                  </div>
                  <div
                    style={{ fontSize: "13px", maxHeight: "1em" }}
                    className="aciklama"
                  >
                    {text.substring(0, 250) + "..."}
                  </div>
                </div>
                <div
                  style={{ height: "2em" }}
                  className="d-flex w-100 justify-content-between align-items-center"
                >
                  <div className="left d-flex justify-content-center align-items-center gap-2">
                    <div className="btn btn-outline-light text-center">
                      <IoShareSocialSharp />
                    </div>
                    <div className="btn btn-outline-light text-center ">
                      <BiHeart /> <i style={{ fontSize: "12px" }}>1 Favori</i>
                    </div>
                  </div>
                  <div className="right ">
                    <div id="teslimat" className="px-3">
                      Teslimat: 12 Saat İçinde Gerçekleşir
                    </div>
                  </div>
                </div>
              </div>
              <div className="information area-part d-flex gap-4 flex-row justify-content-around">
                <div className="boxes-info w-100 d-flex flex-column justify-content-center align-items-center">
                  <span className="box-headings">İlan No:</span>
                  <span className="fw-bold">#12344</span>
                </div>
                <div className="boxes-info w-100 d-flex flex-column justify-content-center align-items-center">
                  <span className="box-headings">Görülme: </span>
                  <span className="fw-bold d-flex justify-content-center align-items-center gap-1">
                    <IoEyeOutline />
                    455
                  </span>
                </div>
                <div className="boxes-info w-100 d-flex flex-column justify-content-center align-items-center">
                  <span className="box-headings">Güncelleme: </span>
                  <span className="fw-bold">13.04.2025</span>
                </div>
                <div className="boxes-info w-100 d-flex flex-column justify-content-center align-items-center">
                  <span className="box-headings">Stok: </span>
                  <span className="fw-bold" style={{ fontSize: "22px" }}>
                    <IoIosCheckmarkCircleOutline />
                  </span>
                </div>
              </div>
              <div className="creator d-flex flex-column align-content-between justify-content-center area-part">
                <div className="creator-info d-flex flex-row justify-content-start gap-3 align-items-center">
                  <img
                    style={{ width: "5em" }}
                    className=" rounded-3 "
                    src="https://img.gamesatis.com/assets/avatar-set/avatar--1.jpg"
                    alt="Global Game"
                  />
                  <div>
                    <span className="h5">
                      Global Game <FaCircleCheck className="text-info" />
                    </span>
                    <div className="d-flex justify-content-center align-items-center gap-2">
                      <div
                        style={{ height: "9px", width: "170px" }}
                        className="percent my-2 rounded-pill bg-danger"
                      />
                      <span style={{ fontSize: "13px" }}>%100</span>
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      Magaza yorumlari: (123)
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      Magazanin Diger Urunleri: (342)
                    </div>
                  </div>
                </div>
                <div className="likes d-flex justify-content-between align-items-center">
                  <span>Toplam işlem adedi: 75221</span>
                  <div className="d-flex gap-2">
                    <div className="text-center align-content-center">
                      <BiSolidLike
                        style={{ fontSize: "14px", color: "green" }}
                      />
                      (75221)
                    </div>
                    <span>
                      <BiSolidDislike
                        style={{ fontSize: "14px", color: "red" }}
                      />
                      (0)
                    </span>
                  </div>
                </div>
                <div className="status">
                  <GoDotFill color="green" />
                  <span style={{ fontSize: "14px" }}>Çevrimiçi</span>
                </div>
              </div>
              <div className="payment d-flex flex-column align-items-center justify-content-between p-3 gap-3 area-part">
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
                      <span id="disc_price">124,356$</span>
                      <span
                        id="disc_percent"
                        className="px-2 d-flex justify-content-center align-items-center "
                      >
                        %5
                      </span>
                    </div>
                    <span style={{ fontWeight: "bolder", fontSize: "27px" }}>
                      227,50$
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
                  <button className="purchase btn btn-success px-3">
                    Satın Al
                  </button>
                </div>
              </div>
            </div>
            <div className="card my-3 border-0">
              <div className="card-head">
                <Lent
                  back={"https://www.gamesatis.com/assets/header-bg-icon-game.png"}
                  leftHead={`${foundedProduct.title} Hakkında`}
                  rightHead={""}
                />
              </div>
              <div className="card-body">{text}</div>
            </div>
          </>
        )}
            
        </div>
    </>
  );
};
