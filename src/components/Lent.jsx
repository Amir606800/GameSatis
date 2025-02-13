import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Lent = (props) => {
  return (
    <>
      <div
        style={{ height: "3em", backgroundColor: "#121318", cursor: "pointer",padding:"30px" }}
        className="d-flex fw-bold overflow-hidden position-relative px-4 rounded-3 justify-content-between align-items-center  w-100 "
      >
        <div
          className="backg position-absolute w-100  start-0 "
          style={{
            height: "10vw",
            transform: "rotate(-4deg)",
            opacity: "80%",
            background: `url(${props.back})`,
            backgroundPosition: "0 0, 120px 120px",
            backgroundRepeat: "repeat",
            backgroundSize: "30px",
          }}
        ></div>
        <div className="left fs-5" style={{ cursor: "pointer" }}>
          {props.leftHead}
        </div>
        <div className="right">
          {props.rightHead} {props.rightHead?<FaArrowRightLong />:""}
        </div>
      </div>
    </>
  );
};

export default Lent;
