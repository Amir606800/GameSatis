import { useContext, useEffect, useState } from "react";
import Lent from "../Addons/Lent";
import Path from "../Addons/Path";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

import Loading from "../Addons/Loading";
import { CategoryContext } from "../Context/CategoryContext";
import { SettingsContext } from "../Context/SettingsProvider";
import { useTranslate } from "../helpers/Language/Translator";

const Oyunlar = () => {
  const navigate = useNavigate();
  const { mainCat, loading } = useContext(CategoryContext);
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
  const filteredMainCat = mainCat.filter((item) =>
    item.name[0].includes(catSelect)
  );
  const handleCategory = (item) => {
    navigate(`/oyunlar/${slugify(`${item.name}`)}`);
  };

  const t = useTranslate()

  if (loading) return <Loading />;
  return (
    <div className="container-fluid">
      <Path />
      <div className="image ">
        <img
          className="w-100 custom-blend-mode "
          src="https://img.gamesatis.com/assets/category-default-image.webp"
          alt="toop-banner"
        />
      </div>
      <div className="heading h5">{t("oyunlarTitle")}</div>
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
            <div className="card border-0 position-relative rounded-3 overflow-hidden cur-pointer">
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
export default Oyunlar;
