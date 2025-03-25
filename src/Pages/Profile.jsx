import { FaCartArrowDown, FaRegMessage } from "react-icons/fa6";
import { LuSquarePen } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import React, { useContext, useState } from "react";
import { useMemo } from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { BsClipboard2Plus } from "react-icons/bs";
import { PiClipboardText } from "react-icons/pi";
import Loading from "../Addons/Loading";
import { SettingsContext } from "../Context/SettingsProvider";
import { useTranslate } from "../helpers/Language/Translator";

const Profile = React.memo((props) => {
  const navigate = useNavigate();
  const { userProfile, signOut } = UserAuth();
  const { currency, currencyObj, privacy } = useContext(SettingsContext);
  const memoizedUserProfile = useMemo(() => userProfile, [userProfile]);
  const [activeSection, setActiveSection] = useState(0);
  const t = useTranslate();
  const handleCloseAccount = async () => {
    try {
      await signOut();
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const iconPackJSON = [
    {
      title: t("profile.icons.orders"),
      icon: (
        <>
          <FaCartArrowDown className="fs-4" />
        </>
      ),
      link: "siparislerim",
    },
    {
      title: t("profile.icons.comments"),
      icon: (
        <>
          <FaRegMessage className="fs-4" />
        </>
      ),
      link: "yorumlarim",
    },
    {
      title: t("profile.icons.products"),
      icon: (
        <>
          <PiClipboardText className="fs-4" />
        </>
      ),
      link: "ilanlarim",
    },
    {
      title: t("profile.icons.addProduct"),
      icon: (
        <>
          <BsClipboard2Plus className="fs-4" />
        </>
      ),
      link: "ilan_ekle",
    },
    {
      title: t("profile.icons.favorites"),
      icon: (
        <>
          <MdOutlineFavorite className="fs-4" />
        </>
      ),
      link: "favoriler",
    },
  ];

  if (memoizedUserProfile === undefined || memoizedUserProfile === null) {
    return <Loading />;
  }
  return (
    <div className="User-Profile container-fluid mt-2 mb-4">
      <div
        className="area w-100 gap-2  rounded-2 py-4 px-4 d-flex justify-content-around flex-column align-items-center align-items-md-start flex-md-row"
        style={{
          minHeight: "30em",
          height: "fit-content",
        }}
      >
        <div
          className="left d-flex flex-column justify-content-start align-items-center gap-3 h-100"
          style={{ width: "20em" }}
        >
          <div
            className="top-part bg-custom overflow-hidden rounded-2 d-flex justify-content-between w-100"
            style={{ height: "5.8em", minWidth: "20em", maxWidth: "100%" }}
          >
            <div className="top-left  px-3 d-flex align-items-center gap-3">
              <img
                width={60}
                className="rounded-2"
                src={memoizedUserProfile.profile_photo}
                alt="Profil-Photo"
              />
              <div className="d-flex flex-column  align-items-start justify-content-center ">
                <span className="fs-6 fw-bolder m-0 p-0 ">
                  {privacy ? "#####" : memoizedUserProfile.first_name}{" "}
                  {privacy ? "#" : memoizedUserProfile.last_name[0]}.
                </span>
                <span
                  className="fw-bold mb-1 p-0"
                  style={{ fontSize: "14px", color: "orange" }}
                >
                  {privacy ? (
                    "#####"
                  ) : (
                    <>
                      {(
                        memoizedUserProfile.balance *
                        currencyObj[currency].value
                      ).toFixed(2)}
                      {currencyObj[currency].symbol}
                    </>
                  )}
                </span>
                <button
                  className="btn btn-outline-danger px-3 m-0 py-1"
                  style={{ fontSize: "9px", width: "fit-content" }}
                  onClick={handleCloseAccount}
                >
                  {t("profile.exit")}
                </button>
              </div>
            </div>
            <Link to={"/profilim"}>
              <div
                onClick={() => {
                  setActiveSection(0);
                }}
                className={`top-right cur-pointer h-100 py-2 d-flex justify-content-center align-items-center gap-2 flex-column px-3 ${
                  activeSection == 0 ? "profile-section-element-active" : ""
                } bg-light-dark profile-section-element`}
              >
                <LuSquarePen className="fs-2" />
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  {t("profile.icons.infos")}
                </span>
              </div>
            </Link>
          </div>
          <div className="middle-part d-flex align-items-center justify-content-center ">
            <div className="row g-3 h-100">
              {iconPackJSON.map((item, index) => (
                <div
                  key={index}
                  className=" col-4 d-flex justify-content-center align-items-center cur-pointer"
                >
                  <Link
                    to={`/${item.link}`}
                    style={{ minWidth: "6em", width: "8em", height: "6em" }}
                  >
                    <div
                      onClick={() => {
                        setActiveSection(index + 1);
                      }}
                      className={`bg-custom d-flex rounded-3 justify-content-center gap-2 align-items-center ${
                        activeSection == index + 1
                          ? "profile-section-element-active"
                          : ""
                      } flex-column profile-section-element w-100 h-100`}
                    >
                      {item.icon}
                      <span className="fw-bold" style={{ fontSize: "12px" }}>
                        {item.title}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
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
          {props.section}
        </div>
      </div>
    </div>
  );
});

export default Profile;
