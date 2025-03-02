import React, { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";
import slugify from "slugify";

const ProductCard = ({ main, vitrinIndex }) => {
  const shadows = [
    {
      // Turquoise
      border: "3px solid #4F9C9C", // More blue, less turquoise
      shadow: "0 0 5px #4F9C9C, 0 0 10px #3A7D7D", // Blue-leaning shades
      firstLayerColor: "#4F9C9C",
    },
    {
      // Dark Green
      border: "3px solid #006400",
      shadow: "0 0 5px #006400, 0 0 10px #004d00",
      firstLayerColor: "#006400",
    },
    {
      // Orange
      border: "3px solid #FFA500",
      shadow: "0 0 5px #FFA500, 0 0 10px #CC8400",
      firstLayerColor: "#FFA500",
    },
    {
      // Red
      border: "3px solid #FF4444",
      shadow: "0 0 5px #FF4444, 0 0 10px #CC0000",
      firstLayerColor: "#FF4444",
    },
    {
      border: "3px solid #90EE90", // Light green border
      shadow: "0 0 5px #90EE90, 0 0 10px #66C766", // Light green shadows
      firstLayerColor: "#90EE90",
    },
    {
      // Yellow
      border: "3px solid #FFD700",
      shadow: "0 0 5px #FFD700, 0 0 10px #CCAC00",
      firstLayerColor: "#FFD700",
    },
  ];

  const [selectedShadow, setSelectedShadow] = useState("");

  useEffect(() => {
    if (main.id < vitrinIndex) {
      const productKey = main.id;
      const shadowIndex = (productKey - 1) % shadows.length;

      setSelectedShadow(shadows[shadowIndex]);
    }
  }, [main.id, vitrinIndex]);
  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2  t">
      <a href={`/${slugify(main.title).toLowerCase()}`}>
        <div
          className="card bg-dark prod-card rounded-3 overflow-hidden h-100"
          style={{
            border: `${main.is_vitrin?selectedShadow.border:""}`,
            boxShadow: `${main.is_vitrin?selectedShadow.shadow:""}`
          }}
        >
          <div className="card-img mb-4 position-relative text-center">
            {main.is_vitrin ? (
              <div
                className="vitrin z-1 w-auto position-absolute translate-middle-x fw-bold px-3 pb-1 rounded-bottom-3 start-50"
                style={{
                  backgroundColor: selectedShadow.firstLayerColor,
                  fontSize: "12px",
                  minWidth:"100px"
                }}
              >
                {main.id < vitrinIndex ? "Vitrin İlani" : ""}
              </div>
            ) : (
              <></>
            )}

            <img src={main.image_url} alt={main.title} className="w-100" />
            <div
              className="manufacturer z-1 fw-bold rounded-2 position-absolute bg-white px-5 start-50 translate-middle-x text-success"
              style={{ bottom: "-10px",width:"100%" }}
            >
              {main.is_vitrin?main.profiles.display_name:<div className="d-flex flex-row w-100 py-2" style={{fontSize:"12px"}}>{main.title.substring(0,20)}</div> }
            </div>
            
            <div className="details position-absolute h-100 translate-middle justify-content-center align-items-center top-50 start-50 w-100">
              <div className=" bg-white text-black py-1 px-2 rounded-2 fw-bold z-2">
                Detaylar
              </div>
              <div className="background-details"></div>
            </div>
            
          </div>
          <div className="card-head text-start h6 px-2">{main.title}</div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className="verf text-success">
              <GoVerified />
            </div>
            <div className="price">{main.price}TL</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
