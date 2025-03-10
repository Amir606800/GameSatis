import { FaCartArrowDown, FaRegMessage } from "react-icons/fa6";
import { LuSquarePen } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import React, { useContext } from "react";
import { useMemo } from "react";
import { TfiEmail } from "react-icons/tfi";
import {  MdOutlineFavorite } from "react-icons/md";
import { BsClipboard2Plus } from "react-icons/bs";
import { PiClipboardText } from "react-icons/pi";
import Loading from "../Addons/Loading";
import { SettingsContext } from "../Context/SettingsProvider";


const Profile = React.memo((props) => {
  const navigate = useNavigate()
  const {userProfile,signOut,privacyStatus} = UserAuth()
  const {currency,currencyObj} = useContext(SettingsContext)
  const memoizedUserProfile = useMemo(() => userProfile, [userProfile]);

  const handleCloseAccount = async ()=>{
    try{
      await signOut();
      navigate("/")
    }catch(err){
      alert(err)
    }
  }
  if(memoizedUserProfile === undefined || memoizedUserProfile === null){
    return(<Loading />)
  }
  
  
  const iconPackJSON = [
    {
      title:"Siparisler",
      icon:<><FaCartArrowDown className="fs-4" /></>,
      link:"siparislerim"
    },{
      title:"Mesajlarım",
      icon:<><TfiEmail  className="fs-4" /></>,
      link:"ilan_ekle"
    },{
      title:"Yorumlarım",
      icon:<><FaRegMessage className="fs-4" /></>,
      link:"yorumlarim"
    },{
      title:"İlanlarım",
      icon:<><PiClipboardText className="fs-4" /></>,
      link:"ilanlarim"
    },{
      title:"İlan Ekle",
      icon:<><BsClipboard2Plus className="fs-4" /></>,
      link:"ilan_ekle"
    },{
      title:"Favoriler",
      icon:<><MdOutlineFavorite  className="fs-4" /></>,
      link:"favoriler"
    },{
      title:"Siparisler",
      icon:<><FaCartArrowDown className="fs-4" /></>,
      link:"siparislerim"
    },{
      title:"Siparisler",
      icon:<><FaCartArrowDown className="fs-4" /></>,
      link:"siparislerim"
    },{
      title:"Siparisler",
      icon:<><FaCartArrowDown className="fs-4" /></>,
      link:"siparislerim"
    }
  ]
  return (
    <div className="User-Profile container-fluid mt-2 mb-4">
      <div
        className="area w-100 gap-2  rounded-2 py-4 px-4 d-flex justify-content-around flex-column align-items-center align-items-md-start flex-md-row"
        style={{ backgroundColor: "#111318",minHeight:"30em",height:'fit-content' }}
      >
        <div
          className="left d-flex flex-column justify-content-start align-items-center gap-3 h-100"
          style={{ width:"20em" }}
        >
          <div
            className="top-part bg-dark overflow-hidden rounded-2 d-flex justify-content-between w-100"
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
                <span className="fs-6 fw-bolder m-0 p-0 ">{privacyStatus?"#####":memoizedUserProfile.first_name} {privacyStatus?"#####":memoizedUserProfile.last_name[0]}.</span>
                <span
                  className="text-warning mb-1 p-0"
                  style={{ fontSize: "14px" }}
                >
                  {privacyStatus?"#####":<>{(memoizedUserProfile.balance*currencyObj[currency].value).toFixed(2)}{currencyObj[currency].symbol}</>}
                </span>
                <button
                  className="btn btn-outline-danger px-3 m-0 py-1"
                  style={{ fontSize: "9px", width: "fit-content" }}
                  onClick={handleCloseAccount}
                >
                  ÇIKIŞ YAP
                </button>
              </div>
            </div>
            <Link to={"/profilim"}>
              <div
                className="top-right cur-pointer h-100 py-2 d-flex justify-content-center align-items-center gap-2 flex-column px-3 profile-section-element-active profile-section-element"
                style={{ backgroundColor: "#161820"}}
              >
                <LuSquarePen className="fs-2" />
                <span className="fw-bold" style={{ fontSize: "12px" }}>
                  Bilgilerim
                </span>
              </div>
            </Link>
          </div>
          <div className="middle-part d-flex align-items-center justify-content-center " >
            <div className="row g-3 h-100">
              {iconPackJSON.map((item,index)=>(
                <div key={index} className=" col-4 d-flex justify-content-center align-items-center cur-pointer">
                <Link
                  style={{ minWidth:"6em",width:"8em",height:"6em" }}
                  to={`/${item.link}`}
                  className="bg-dark d-flex rounded-3 justify-content-center align-items-center flex-column  profile-section-element"
                >
                  {item.icon}
                  <span className="fw-bold" style={{ fontSize: "12px" }}>
                    {item.title}
                  </span>
                </Link>
              </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right px-2 mt-md-0 mt-4 " style={{ width: "78%",minHeight:"24em", maxHeight:"fit-content",height:"100%" }}>
          {props.section}
        </div>
      </div>
    </div>
  );
});

export default Profile;


