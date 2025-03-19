import React from "react";
import { FaStar } from "react-icons/fa6";

const StarSet = ({ rate }) => {
  const fillStar = 
    Array(rate)
    .fill()
    .map((_, index) => <FaStar key={index} style={{ color: "#6395EE",fontSize:"20px" }} />);

  const outlineStar = 
    Array(5 - rate)
    .fill()
    .map((_, index) => <FaStar key={index} style={{ color: "white",fontSize:"20px" }} />);

  return (
    <div className="d-flex flex-row gap-1">
      {fillStar} {outlineStar}
    </div>
  );
};

export default StarSet;
