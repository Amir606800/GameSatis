import React from "react";

const SplitterAdvert = (props) => {
  return (
    <>
      <div
        className="splitter-advert row w-100 g-4 mb-4 mx-0">
        <div className="cardd col-12 col-md-6 col-xl-3 hovering-behaviour">
          <img
            className="w-100  rounded-1"
            src={props.img1}
            alt="LeagueOfLegends"
          />
        </div>
        <div className="cardd col-12 col-md-6 col-xl-3 hovering-behaviour">
          <img
            className="w-100  rounded-1"
            src={props.img2}
            alt="LeagueOfLegends"
          />
        </div>
        <div className="cardd col-12 col-md-6 col-xl-3 hovering-behaviour">
          <img
            className="w-100  rounded-1"
            src={props.img3}
            alt="LeagueOfLegends"
          />
        </div>
        <div className="cardd col-12 col-md-6 col-xl-3 hovering-behaviour">
          <img
            className="w-100  rounded-1"
            src={props.img4}
            alt="LeagueOfLegends"
          />
        </div>
      </div>
    </>
  );
};

export default SplitterAdvert;
