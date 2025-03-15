import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Lent = (props) => {
  return (
    <>
      <div
        style={{ height: "3em",padding:"30px",justifyContent:props.center?"center":"space-between" }}
        className="d-flex fw-bold  overflow-hidden bg-dark-custom position-relative px-4 rounded-3 align-items-center w-100 custom-back Lent"
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
        <div className="left fs-5 d-flex gap-1" >
          {props.leftHead}
        </div>
        <div className="right">
           {props.rightHead?<>{props.rightHead}<FaArrowRightLong /></>:""}
        </div>
      </div>
    </>
  );
};

export default Lent;
