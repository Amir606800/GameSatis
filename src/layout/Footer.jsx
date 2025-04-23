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
import { useTranslate } from "../helpers/Language/Translator";

const Footer = () => {
  const { theme } = useContext(SettingsContext);
  const t = useTranslate()
  return (
    <>
      <div className="footer bg-custom position-relative">
        <div className="back position-absolute top-0 start-0" />
        <div className="main-footer container">
          <div className="row top-row">
            <div className="col">
              <div className="footer-icons fs-5">
                <IoRocketSharp className="footer-icon " />
              </div>
              <div>
                <h5>{t("footer.topInfos.deliverTitle")}</h5> {t("footer.topInfos.deliverDesc")}
              </div>
            </div>
            <div className="col">
              <div className="footer-icons">
                <BsFillShieldLockFill className="footer-icon" />
              </div>
              <div>
                <h5>{t("footer.topInfos.safetyTitle")}</h5>
                {t("footer.topInfos.safetyDesc")}
              </div>
            </div>
            <div className="col">
              <div className="footer-icons">
                <IoIosPricetags className="footer-icon" />
              </div>
              <div>
                <h5>{t("footer.topInfos.priceTitle")}</h5>
                {t("footer.topInfos.priceDesc")}
              </div>
            </div>
            <div className="col">
              <div className="footer-icons">
                <HiMiniUserGroup className="footer-icon" />
              </div>
              <div>
                <h5>{t("footer.topInfos.satisfyTitle")}</h5>
                <span>
                 {t("footer.topInfos.satisfyDesc")}
                </span>
              </div>
            </div>
          </div>
          <hr />
          <div className="row justify-content-center">
            <div className="col-9 p-2 ">
              <div className="row left-side g-0">
                <div className="col">
                  <h5>{t("footer.GameSatis.about")}</h5>
                  <ul>
                    <li>
                      <Link to="/hakkimizda">{t("footer.GameSatis.about")}</Link>
                    </li>
                    <li>{t("footer.GameSatis.corporate")}</li>
                    <li>{t("footer.GameSatis.blog")}</li>
                    <li>{t("footer.GameSatis.reviews")}</li>
                    <li>
                      <Link to="/iletişim">{t("footer.GameSatis.contact")}</Link>
                    </li>
                    <li>{t("footer.GameSatis.imprint")}</li>
                  </ul>
                </div>

                {/* Kullanici Section */}
                <div className="col">
                  <h5>{t("footer.User.register")}</h5>
                  <ul>
                    <li>
                      <Link to="/giris-yap">{t("footer.User.register")}</Link>
                    </li>
                    <li>
                      <Link to="/email-confirm">
                        {t("footer.User.forgotPassword")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/magaza">{t("footer.User.store")}</Link>
                    </li>
                    <li>{t("footer.User.storePackages")}</li>
                    <li>
                      <Link to="/donate">
                        {t("footer.User.supportPublishers")}
                      </Link>
                    </li>
                    {/* <li>{t("footer.User.publisherApplication")}</li>
                    <li>{t("footer.User.userAgreement")}</li>
                    <li>{t("footer.User.storeRules")}</li> */}
                  </ul>
                </div>

                {/* Oyuncu Pazari Section */}
                <div className="col">
                  <h5>{t("footer.MarketPlace.paymentMethods")}</h5>
                  <ul>
                    <li>{t("footer.MarketPlace.paymentMethods")}</li>
                    <li>{t("footer.MarketPlace.creditCard")}</li>
                    <li>{t("footer.MarketPlace.bankTransfer")}</li>
                    <li>{t("footer.MarketPlace.ininalCard")}</li>
                    <li>{t("footer.MarketPlace.installments")}</li>
                    <li>{t("footer.MarketPlace.returnCancelConditions")}</li>
                  </ul>
                </div>

                {/* Popüler Sayfalar Section */}
                <div className="col">
                  <h5>Popular</h5>
                  <ul>
                    <li><Link to="/oyunlar/Valorant">{t("footer.PopularSites.valorant")}</Link></li>
                    <li><Link to="/oyunlar/Knight-Online">{t("footer.PopularSites.knightOnline")}</Link></li>
                    <li><Link to="/oyunlar/PUBG-Mobile"> {t("footer.PopularSites.pubgMobileUC")}</Link></li>
                    <li><Link to="/oyunlar/League-Of-Legends">{t("footer.PopularSites.leagueOfLegends")}</Link></li>
                    <li><Link to="/oyunlar/Supercell">Supercell</Link></li>
                    <li><Link to="/oyunlar"> {t("footer.PopularSites.allGames")}</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col p-2">
              <div className="justify-content-center align-items-center d-flex flex-column h-100">
                <div className="d-flex flex-column justify-content-center fs-5 align-items-center gap-1 h-75">
                  <button className="btn btn-outline-light text-custom">
                    ? {t("footer.social.notification")}
                  </button>
                  <div className="">
                    <BiPhoneCall />
                    <span>0 850 532 42 63</span>
                  </div>
                  <div>
                    <TfiEmail />
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=destek@gamesatis.com" target="_blank" rel="noopener noreferrer"> destek@gamesatis.com</a>
                  </div>
                </div>
                <div className="social h-50 d-flex flex-column justify-content-center align-items-center">
                  <h5>{t("footer.social.follow")}</h5>
                  <div className="d-flex gap-2">
                    <a href="https://www.instagram.com/gamesatis/" className="social-icons cur-pointer">
                      <FaInstagram />
                    </a>
                    <a href="https://discord.com/invite/ZtvaNGn" className="social-icons cur-pointer">
                      <IoLogoDiscord />
                    </a>
                    <a href="https://www.twitch.tv/gamesatiscom/" className="social-icons cur-pointer">
                      <FaTwitch />
                    </a>
                    <a href="https://x.com/gamesatis" className="social-icons cur-pointer">
                      <FaXTwitter />
                    </a>
                    <a href="https://www.youtube.com/user/gamesatisTV" className="social-icons cur-pointer">
                      <FaYoutube />
                    </a>
                    <a href="https://www.facebook.com/gamesatis" className="social-icons cur-pointer">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.linkedin.com/company/gamesatis" className="social-icons cur-pointer">
                      <FaLinkedinIn />
                    </a>
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
