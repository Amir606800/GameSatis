import React, { useEffect, useState } from "react";
import { RiCustomerService2Fill, RiMailSendLine } from "react-icons/ri";

const CanliDestek = () => {
    const [hiddenStat,setHidden] = useState(false)
    useEffect(()=>{
        if(hiddenStat){
            document.querySelector(".destek-canli").classList.add("destek-canli-opened")
        }else{
            document.querySelector(".destek-canli").classList.remove("destek-canli-opened")
        }
    },[hiddenStat])
  return (
    <div
      className="destek-canli d-flex justify-content-end position-fixed position-relative"
      style={{ right: "7px", bottom: "10px", zIndex: "100" }}
    >
      <button onClick={()=>{setHidden(true)}} className="canli-buton btn btn-info  align-items-center justify-content-center text-white gap-2">
        <RiCustomerService2Fill />
        <span className="fw-bold ">Canlı Destek</span>
      </button>
      <div className="platform-destek position-absolute bottom-100 ">
        <div className="card h-100 p-1 bg-info">
          <div className="card-head position-relative">
            <div className="bg-info d-flex align-items-center fs-5 py-2 justify-content-center text-white gap-2">
              <RiCustomerService2Fill />
              <span className="fw-bold ">Yardım Merkezi</span>
            </div>
            <span onClick={()=>{setHidden(false)}} className="fs-1 position-absolute" style={{top:"-10px",right:"10px",cursor:"pointer"}}>-</span>
          </div>
          <div className="card-body rounded-2 p-3 bg-body">
            <div className="card-body d-flex flex-column  border border-1 h-100">
              <div
                style={{ height: "10%", color: "#32a0db" }}
                className="head  border-bottom border-1 border-white text-center"
              >
                Canlı Destek{" "}
                <span style={{ fontSize: "13px" }}>
                  (Sabah 09:00 - Gece 02:00)
                </span>
              </div>
              <div className="mesage-list" style={{ height: "80%" }}></div>
              <form
                method="POST"
                className="w-100 d-flex align-items-end gap-1"
                onSubmit={(e)=>{e.preventDefault()}}
              >
                <input
                  placeholder="Mesajınızı Buraya yazınız..."
                  type="text"
                  style={{ background: "none" }}
                  className="border-0 message-input w-100 px-2 py-1 border-3 border-bottom border-info-subtle"
                />
                <RiMailSendLine className="fs-3 text-info" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanliDestek;
