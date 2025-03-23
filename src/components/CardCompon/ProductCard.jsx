import React, { useContext, useEffect, useRef, useState } from "react";
import { GoVerified } from "react-icons/go";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { SettingsContext } from "../../Context/SettingsProvider";

const ProductCard = ({ main, vitrinIndex,keyIndex }) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  const textRef = useRef();
  const { currency, currencyObj } = useContext(SettingsContext);
  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { text: "" },
      {
        text: main.title,
        duration: main.title.length * 0.05, // Adjust speed based on sentence length
        ease: "none",
        repeat: 0,
        scrollTrigger: {
          trigger: ".product-card",
          start: "-100px 60%",
        },
      }
    );
  }, []);

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
      // Yellow
      border: "2px solid rgb(218, 186, 9)",
      shadow: "0 0 5px rgb(218, 186, 9), 0 0 10px rgb(178, 152, 7)",
      firstLayerColor: "rgb(175, 149, 6)",
    },
    {
      border: "3px solid #90EE90", // Light green border
      shadow: "0 0 5px #90EE90, 0 0 10px #66C766", // Light green shadows
      firstLayerColor: "#90EE90",
    },
    
  ];

  const [selectedShadow, setSelectedShadow] = useState("");

  useEffect(() => {
    if (keyIndex < vitrinIndex) {
      const productKey = main.id;
      const shadowIndex = (productKey - 1) % shadows.length;

      setSelectedShadow(shadows[shadowIndex]);
    }
  }, [main.id, vitrinIndex]);
  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2 product-card t">
      <Link to={`/${slugify(main.title).toLowerCase()}`}>
        <div
          className="card bg-custom prod-card rounded-3 overflow-hidden h-100"
          style={{
            border: `${main.is_vitrin ? selectedShadow.border : "none"}`,
            boxShadow: `${main.is_vitrin ? selectedShadow.shadow : ""}`,
          }}
        >
          <div className="card-img mb-4 position-relative text-center" style={{minHeight:"9em"}}>
            {main.is_vitrin ? (
              <div
                className="vitrin z-1 w-auto position-absolute translate-middle-x fw-bold px-3 pb-1 rounded-bottom-3 start-50"
                style={{
                  backgroundColor: selectedShadow.firstLayerColor,
                  fontSize: "12px",
                  minWidth: "100px",
                }}
              >
                {keyIndex < vitrinIndex ? "Vitrin İlani" : ""}
              </div>
            ) : (
              <></>
            )}

            <img src={main.image_url} alt={main.title} className="w-100" />
            <div
              className="manufacturer z-1 fw-bold rounded-2 position-absolute bg-white start-50 translate-middle-x text-success text-center"
              style={{ bottom: "-10px", width: "10em" }}
            >
              {main.is_vitrin ? (
                <p className="m-auto text-center py-1 px-2 w-100" style={{ fontSize: "clamp(9px, 1vw, 14px)" }}>
                  {main.profiles.display_name}
                </p>
              ) : (
                <div
                  className="d-flex flex-row w-100 py-1 justify-content-center text-center"
                  style={{ fontSize: "clamp(9px, 1vw, 14px)" }}
                >
                  {main.title.substring(0, 22)}
                </div>
              )}
            </div>

            <div className="details position-absolute h-100 translate-middle justify-content-center align-items-center top-50 start-50 w-100">
              <div className=" bg-white text-black py-1 px-2 rounded-2 fw-bold z-2">
                Detaylar
              </div>
              <div className="background-details"></div>
            </div>
          </div>
          <div className="card-head text-start h6 px-2" ref={textRef}></div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div className="verf text-success">
              {main.profiles.is_verified?
              <GoVerified />
              :""}
            </div>
            <div className="price">
              {main.discount != 0 ? (
                <>
                  <span className="text-danger text-decoration-line-through">
                    {(main.price * currencyObj[currency].value).toFixed(2)}
                    {currencyObj[currency].symbol}
                  </span>{"  "}
                  <span>
                    {(
                      (main.price - (main.price * main.discount) / 100) *
                      currencyObj[currency].value
                    ).toFixed(2)}{" "}
                    {currencyObj[currency].symbol}
                  </span>
                </>
              ) : (
                <>
                  {(main.price * currencyObj[currency].value).toFixed(2)}
                  {currencyObj[currency].symbol}
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
