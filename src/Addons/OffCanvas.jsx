import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { UserAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import { CgMail } from "react-icons/cg";
import { BiHeart } from "react-icons/bi";
import { SettingsContext } from "../Context/SettingsProvider";
import { useTranslate } from "../helpers/Language/Translator";

function OffCanvas() {
  const [show, setShow] = useState(false);
  const { currency, currencyObj, privacy } = useContext(SettingsContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const t = useTranslate();

  const { userProfile,  session } = UserAuth();
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 bg-info">
        <FaBars />
      </Button>
      <Offcanvas
        show={show}
        className="w-75 main-back"
        onHide={handleClose}
        placement={"end"}
        scroll={true}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="w-100" style={{ height: "2em" }}>
            <Link
              to={userProfile ? "/cart" : "/giris-yap"}
              className="cart fs-6 px-2 py-1  h-100 rounded-3 text-center align-content-center custom-cursor-hover"
              style={{
                background: "none",
                border: "2px solid #FF5F1F",
                color: "#FF5F1F",
                width: "96%",
              }}
            >
              <FaCartShopping />{" "}
              <span style={{ fontWeight: "bolder" }}>{t("header.cart")}</span>
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="top ">
            {userProfile ? (
              <div
                onClick={() => setShow(false)}
                style={{ fontSize: "13px", width: "100%", height: "6em" }}
                className="d-flex align-items-center justify-content-center d-flex gap-1 rounded-1 fw-bold text-white sell"
              >
                <Link className="d-flex flex-row " to={"/profilim"}>
                  <img
                    className="rounded-2"
                    width={50}
                    src={userProfile.profile_photo}
                    alt="profil photo"
                  />
                  <div className="px-3 py-2 rounded-3 bg-custom">
                    <div
                      style={{
                        fontSize: "12px",
                        fontFamily: "Roboto,sans-serif",
                      }}
                      className="name fw-bold"
                    >
                      {t("header.account")}
                    </div>
                    <div
                      className="balance fw-bold"
                      style={{ fontSize: "11px", color: "orange" }}
                    >
                      {privacy ? (
                        "#####"
                      ) : (
                        <>
                          {(
                            userProfile.balance * currencyObj[currency].value
                          ).toFixed(2)}
                          {currencyObj[currency].symbol}
                        </>
                      )}
                    </div>
                  </div>
                </Link>
                <div className="p-3 rounded-3 bg-custom">
                  {" "}
                  <CgMail className="fs-6" />
                </div>

                <Link to={"/favoriler"} className="p-3 rounded-3 bg-custom">
                  {" "}
                  <BiHeart className="fs-6" />
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="main w-100">
            <div className="nav-head-top d-flex flex-column gap-1 w-100 py-2">
              <Link
                to={"/oyunlar"}
                onClick={() => setShow(false)}
                className="nav-element rounded-3 w-100"
              >
                {t("header.navigation.games")}
              </Link>
              <div
                className="nav-element rounded-3 w-100"
                onClick={() => setShow(false)}
              >
                {t("header.navigation.gameShop")}
              </div>
              <div
                className="nav-element rounded-3 w-100"
                onClick={() => setShow(false)}
              >
                KNIGHT ONLINE
              </div>
              <div
                className="nav-element rounded-3 w-100 position-relative"
                onClick={() => setShow(false)}
              >
                MOBILE LEGENDS{" "}
                <span className="position-absolute rounded-pill top-0 end-0 translate-middle-y badge bg-danger">
                  EN UYGUN
                </span>{" "}
              </div>
              <Link
                to={"/oyunlar/PUBG-Mobile"}
                className="nav-element rounded-3 w-100"
                onClick={() => setShow(false)}
              >
                PUBG UC
              </Link>
              <Link
                to={"/oyunlar/Valorant"}
                className="nav-element rounded-3 w-100"
                onClick={() => setShow(false)}
              >
                VALORANT VP
              </Link>
              <div
                className="nav-element rounded-3 w-100"
                onClick={() => setShow(false)}
              >
                CS2 SKIN
              </div>

              <div
                style={{
                  color: "#75ba15",
                  border: "2px solid #75ba15",
                  background: "none",
                }}
                onClick={() => setShow(false)}
                className="nav-element rounded-3 w-100 fw-bolder"
              >
                <span className="fs-6">+</span>
                {t("header.navigation.balance")}
              </div>
              <Link
                to={userProfile ? "/ilan_ekle" : "/giris-yap"}
                className="py-2 btn-success btn rounded-3 w-100"
                onClick={() => setShow(false)}
              >
                {t("header.sellButon")}
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;
