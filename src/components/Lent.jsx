import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Lent = (props) => {
  return (
    <>
      <div
        style={{ height: "3em", backgroundColor: "#0d0d12", cursor: "pointer" }}
        className="d-flex fw-bold overflow-hidden position-relative p-4 rounded-2 justify-content-between align-items-center my-3 w-100 "
      >
        <div
          className="backg position-absolute w-100  start-0 "
          style={{
            height: "10vw",
            transform: "rotate(-4deg)",
            opacity: "60%",
            background: `url(${props.back})`,
            backgroundPosition: "0 0, 120px 120px",
            backgroundRepeat: "repeat",
            backgroundSize: "30px",
          }}
        ></div>
        <div className="left" style={{ cursor: "pointer" }}>
          {props.leftHead}
        </div>
        <div className="right">
          {props.rightHead} <FaArrowRightLong />
        </div>
      </div>
    </>
  );
};

export default Lent;
