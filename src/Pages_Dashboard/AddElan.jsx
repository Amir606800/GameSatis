import React, { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../Context/CategoryContext";
import { UserAuth } from "../Context/AuthContext";
import slugify from "slugify";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProduct } from "../tools/Slices/UserProductSlice";
import Swal from "sweetalert2";
import { SettingsContext } from "../Context/SettingsProvider";
import { useTranslate } from "../helpers/Language/Translator";

const AddElan = () => {
  const { mainCat, subCat, fetchSubCategory } = useContext(CategoryContext);
  const [selMainCat, setSelMainCat] = useState(null);
  const [selSubCat, setSelSubCat] = useState(null);
  const { userProfile } = UserAuth();
  const t = useTranslate()
  const dispatch = useDispatch();
  const [addedItem, setAddedItem] = useState({
    title: "",
    image_url: "",
    description: "",
    price: null,
    stock: null,
    category_id: 0,
    profile_id: userProfile.id,
    deliver_time: null,
    features: "",
  });

  const { currency, currencyObj } = useContext(SettingsContext);
  const checkimageURL = (url) => {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  };

  const handleSubCat = (e) => {
    const mainCatId = e.target.value;
    const againProduct = subCat.find(
      (item) => slugify(item.name) == slugify(mainCatId)
    );
    setSelSubCat(mainCatId);
    setAddedItem((prev) => ({
      ...prev,
      title: "",
      image_url: "",
      description: "",
      price: null,
      stock: null,
      deliver_time: null,
      category_id: againProduct.id,
      profile_id: userProfile.id,
      features: "",
    }));
  };

  const handleInputFields = (e) => {
    setAddedItem({ ...addedItem, [e.target.name]: e.target.value });
  };

  const handleMainCat = (e) => {
    setSelMainCat(e.target.value);
    setSelSubCat(null);
    fetchSubCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Convert features into an array before using it
    let updatedFeatures = addedItem.features.includes(",")
      ? addedItem.features.split(",").map((feature) => feature.trim()) // Trim spaces
      : [addedItem.features];
  
    const updatedItem = { ...addedItem, features: updatedFeatures };
  
    if (updatedItem.title.trim() === "") {
      alert("Lütfen başlığı doldurun");
      return;
    }
    if (!checkimageURL(updatedItem.image_url)) {
      alert("Lütfen geçerli bir fotoğraf linki giriniz");
      return;
    }
    if (updatedItem.price < 1 || isNaN(updatedItem.price)) {
      alert("Fiyat bir sayı olmalı ve minimum 10TL olmalı");
      return;
    }
    if (
      updatedItem.stock != Math.floor(updatedItem.stock) ||
      updatedItem.stock < 1 ||
      isNaN(updatedItem.stock)
    ) {
      alert("Ürün sayısı 0'dan büyük ve tam sayı olmalı");
      return;
    }
    if (
      updatedItem.deliver_time != Math.floor(updatedItem.deliver_time) ||
      updatedItem.deliver_time > 24 ||
      updatedItem.deliver_time === "" ||
      isNaN(updatedItem.deliver_time)
    ) {
      alert("Teslimat süresi tam sayı olmalı ve 24 saatten fazla olmamalıdır");
      return;
    }
    if (updatedItem.description.trim() === "") {
      alert("Lütfen açıklama kısmını doldurun!");
      return;
    }
  
    try {
      dispatch(addProduct({...updatedItem,is_vitrin:userProfile.site_role == "admin"?false:true})); // Use updatedItem instead of addedItem
      
      setAddedItem({
        title: "",
        image_url: "",
        description: "",
        price: "",
        stock: "",
        deliver_time: "",
        features: "",
        
      });
      Swal.fire({
        title: "Successful",
        text: "Your product successfully added!",
        icon: "success",
        background: "#222631",
        color: "#fff",
        confirmButtonText: "OK",
        confirmButtonColor: "#3085d6",
      }).then(()=>window.location.reload());
      
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="Ilan-ekle-profile px-2 pb-2">
      <div className="head bg-custom py-2 mb-3 rounded-2 h4 text-center w-100">
      {t("addListing.title")}
      </div>
      <div className="main">
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center flex-column justify-content-center gap-4"
        >
          <select
            className="text-center align-self-center bg-custom py-2 rounded-3 px-3"
            style={{ border: "none" }}
            onChange={handleMainCat}
            value={selMainCat || ""}
            name="gameSelect"
            id="gameSelect"
          >
            <option value="" disabled>
            {t("addListing.chooseGame")}
            </option>
            {mainCat.map((item, index) => (
              <option key={index} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          {selMainCat && (
            <select
              className="text-center align-self-center bg-custom py-2 rounded-3 px-3"
              style={{ border: "none" }}
              onChange={handleSubCat}
              value={selSubCat || ""}
              name="subSelect"
              id="subSelect"
            >
              <option value="" disabled>
              {t("addListing.chooseCategory")}
              </option>
              {subCat.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}{" "}
                </option>
              ))}
            </select>
          )}

          {selSubCat && (
            <div className="list_of_inputs d-flex flex-column w-100 gap-3">
              <div className="w-75 d-flex align-items-center gap-3 justify-content-center flex-column flex-lg-row">
                <div
                  className="border-1 border text-center align-content-center"
                  style={{ minHeight: "8em", minWidth: "8em" }}
                >
                  {addedItem.image_url == "" ? (
                    <div>{t("productInfos.photoDisplay")}</div>
                  ) : (
                    <img
                      width={200}
                      src={addedItem.image_url}
                      alt={addedItem.title}
                    />
                  )}
                </div>
                <div className=" w-75 align-content-end text-start ">
                  <div className="list-of-inputs-elements ">
                    <label style={{ width: "120px" }} htmlFor="name_prod">
                      {t("productInfos.name")}
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={addedItem.title} 
                      onChange={handleInputFields}
                      id="name_prod"
                      placeholder={t("productInfos.name")} 
                    />
                  </div>
                  <div className="list-of-inputs-elements mt-3 mt-lg-4">
                    <label style={{ width: "120px" }} htmlFor="photo_prod">
                    {t("productInfos.photo")}
                    </label>
                    <input
                      type="text"
                      name="image_url"
                      value={addedItem.image_url}
                      onChange={handleInputFields}
                      id="photo_prod"
                      placeholder={t("productInfos.photo")}
                    />
                  </div>
                </div>
              </div>
              <div className="list-of-inputs-elements w-75">
                <label htmlFor="price_prod">
                {t("productInfos.price")} ({currencyObj[currency].symbol}):
                </label>
                <input
                  type="text"
                  id="price_prod"
                  value={addedItem.price}
                  onChange={handleInputFields}
                  name="price"
                  placeholder={t("productInfos.price")}
                />
              </div>

              <div className="list-of-inputs-elements w-75">
                <label htmlFor="amount_prod">{t("productInfos.count")} </label>
                <input
                  type="text"
                  name="stock"
                  value={addedItem.stock}
                  onChange={handleInputFields}
                  placeholder={t("productInfos.count")}
                />
              </div>
              <div className="list-of-inputs-elements w-75">
                <label htmlFor="amount_prod">{t("productInfos.delTime")} </label>
                <input
                  type="text"
                  name="deliver_time"
                  min={1}
                  value={addedItem.deliver_time}
                  onChange={handleInputFields}
                  placeholder={t("productInfos.delTime")}
                />
              </div>
              {selSubCat.toLowerCase().includes("hesap") ? (
                <div className="list-of-inputs-elements w-75">
                  <label htmlFor="feat_prod">{t("productInfos.features")} </label>
                  <input
                    style={{ width: "30em" }}
                    type="text"
                    name="features"
                    value={addedItem.features}
                    onChange={handleInputFields}
                    placeholder={t("productInfos.writefeatures")}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="list-of-inputs-elements w-75">
                <label htmlFor="desc_prod">{t("productInfos.desc")}</label>
                <textarea
                  type="text"
                  name="description"
                  value={addedItem.description}
                  onChange={handleInputFields}
                  id="desc_prod"
                  placeholder={t("productInfos.desc")}
                />
              </div>
              <button className="btn btn-info text-white login-btn-active mt-3">
              {t("addListing.publish")}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddElan;
