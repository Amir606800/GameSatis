import React, { useEffect, useState } from "react";
import { GoVerified } from "react-icons/go";

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
    <div className="col-sm-4 col-lg-2 t">
      <div
        className="card prod-card rounded-3 overflow-hidden h-100"
        style={{
          border: `${selectedShadow.border}`,
          boxShadow: selectedShadow.shadow,
        }}
      >
        <div className="card-img mb-4 position-relative text-center">
          <div
            className="vitrin z-1 w-auto position-absolute translate-middle-x fw-bold px-3 pb-1 rounded-bottom-3 start-50"
            style={{
              backgroundColor: selectedShadow.firstLayerColor,
              fontSize: "12px",
            }}
          >
            {main.id < vitrinIndex?"Vitrin İlani":""}
          </div>
          <img
            src="https://img.gamesatis.com/images/2473981/istediginiz-2-oyun-garanti.webp"
            alt={main.title}
            className="w-100"
          />
          <div
            className="manufacturer z-1 fw-bold rounded-2 position-absolute bg-white px-5 start-50 translate-middle-x text-success"
            style={{ bottom: "-10px" }}
          >
            XEOSPIN
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
          <div className="price">${main.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
