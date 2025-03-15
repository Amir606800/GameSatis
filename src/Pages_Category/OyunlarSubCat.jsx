import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Lent from "../Addons/Lent";
import Path from "../Addons/Path";

import slugify from "slugify";
import Loading from "../Addons/Loading";
import { CategoryContext } from "../Context/CategoryContext";

const OyunlarSubCat = () => {
  const { sub_name } = useParams();
  const navigate = useNavigate();
  const { loading, subCat, fetchSubCategory, mainCat } =
    useContext(CategoryContext);

  useEffect(() => {
    fetchSubCategory(sub_name);
  }, [mainCat, sub_name]);

  const [catSelect, setCatSelect] = useState("");
  const alphabet = () => {
    return Array.from({ length: 26 }, (_, i) => (
      <span
        onClick={() => {
          setCatSelect(String.fromCharCode(65 + i));
        }}
        className="alphabet-item"
        key={i}
      >
        {String.fromCharCode(65 + i)}
      </span>
    ))
      .reduce((acc, ins) => [...acc, ins, "-"], [])
      .slice(0, -1);
  };
  const filteredMainCat = subCat.filter((item) =>
    item.name.includes(catSelect)
  );
  const handleCategory = (item) => {
    navigate(`/oyunlar/${sub_name}/${slugify(`${item.name}`)}`);
  };
  if (loading) return <Loading />;
  return (
    <div className="container-fluid">
      <Path />
      <div className="image">
        <img
          className="w-100 custom-blend-mode"
          src="https://img.gamesatis.com/assets/category-default-image.webp"
          alt="toop-banner"
        />
      </div>
      <div className="heading h5">{sub_name} kategorileri </div>
      <div className="my-4">
        <Lent
          center={true}
          back={"https://www.gamesatis.com/assets/header-bg-icon-game.png"}
          leftHead={alphabet()}
        />
      </div>
      <div className="list row g-4 my-5 justify-content-center">
        {filteredMainCat.map((item, i) => (
          <div
            onClick={() => handleCategory(item)}
            key={i}
            className="col-6 col-md-4 col-lg-3 col-xl-2 "
          >
            <div className="card border-0 position-relative rounded-3 overflow-hidden cur-pointer ">
              <div className="card-image">
                <img className="w-100" src={item.image_url} alt={item.name} />
              </div>
              <div
                className="title position-absolute fw-bolder w-100 bottom-0 start-50 translate-middle text-center text-white"
                style={{ fontSize: "14px" }}
              >
                {item.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OyunlarSubCat;
