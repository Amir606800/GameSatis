import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Path from "../Addons/Path";
import { CategoryContext } from "../Context/CategoryContext";
import slugify from "slugify";
import ProductCard from "../components/CardCompon/ProductCard";
import Loading from "../Addons/Loading";
import { useTranslate } from "../helpers/Language/Translator";

const Productlar = () => {
  const { prod_name } = useParams();
  const { sub_name } = useParams();
  const { subCat, fetchSubCategory, mainCat } = useContext(CategoryContext);
  const category = subCat.find((item) => slugify(item.name) == prod_name);

  useEffect(() => {
    fetchSubCategory(sub_name);
  }, [mainCat, sub_name]);
  const t = useTranslate()
  if (!category) return <Loading />;
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
      <div className="heading h5 my-4">{t("oyunlarItems")}</div>

      <div className="list row g-4 mb-5  justify-content-center">
        {category.products.map((item, index) => (
          <ProductCard vitrinIndex={11} key={index} main={item} />
        ))}
      </div>
    </div>
  );
};

export default Productlar;
