import React from "react";

const SplitterAdvert = (props) => {
  return (
    <>
      <div
        className="d-flex flex-row align-items-center w-100 justify-content-center pb-2 gap-3"
        style={{ height: "7em" }}
      >
        <div className="cardd h-100 w-25 hovering-behaviour">
          <img
            className="w-100 h-100 object-fit-contain rounded-1"
            src={props.img1}
            alt="LeagueOfLegends"
          />
        </div>
        <div className="cardd h-100 w-25 hovering-behaviour">
          <img
            className="w-100 h-100 object-fit-contain rounded-1"
            src={props.img2}
            alt="LeagueOfLegends"
          />
        </div>
        <div className="cardd h-100 w-25 hovering-behaviour">
          <img
            className="w-100 h-100 object-fit-contain rounded-1"
            src={props.img3}
            alt="LeagueOfLegends"
          />
        </div>
        <div className="cardd h-100 w-25 hovering-behaviour">
          <img
            className="w-100 h-100 object-fit-contain rounded-1"
            src={props.img4}
            alt="LeagueOfLegends"
          />
        </div>
      </div>
    </>
  );
};

export default SplitterAdvert;
