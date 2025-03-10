import React, { useContext, useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import { UserAuth } from "../Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { deleteWish, fetchWish } from "../tools/Slices/WhishListSlice";
import { FaCheck, FaHeart, FaStar } from "react-icons/fa6";
import Loading from "../Addons/Loading";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { BiHeart } from "react-icons/bi";
import { SettingsContext } from "../Context/SettingsProvider";

const Favoriler = () => {
  const { userProfile } = UserAuth();
  const { currency, currencyObj } = useContext(SettingsContext);
  const { wishes, loading, error } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const reloadRef = useRef(false);
  useEffect(() => {
    if (userProfile && !reloadRef.current) {
      dispatch(fetchWish(userProfile.id));
      reloadRef.current = true;
    }
  }, [userProfile]);

  if (wishes.length == 0)
    return (
      <div className=" p-3 bg-custom text-center rounded-2 fw-bold ">
        Hiç favori iteminiz yok.
      </div>
    );
  if (error) console.log(error);
  if (loading) return <Loading />;
  return (
    <div className="Siparisler-profile d-flex flex-column gap-3">
      {wishes.length == 0 ? (
        <>Loading...</>
      ) : (
        wishes.map((item, index) => (
          <div key={index}>
            <div
              className="content bg-custom p-2 pe-3 d-flex  justify-content-between align-items-center rounded-2"
              style={{ minHeight: "6em" }}
            >
              <div className="d-flex gap-2 align-items-center">
                <img
                  className="rounded-2 d-block m-auto h-100"
                  style={{ maxWidth: "7em", width: "100%" }}
                  src={item.products.image_url}
                  alt={item.products.title}
                />
                <div className="d-flex flex-column gap-2">
                  <h6 className="fw-bold">{item.products.title}</h6>
                  <div style={{ fontSize: "16px" }}>
                    {item.products.profiles.display_name}
                  </div>
                </div>
              </div>
              <div className="d-flex gap-3 align-items-center">
                <span className="h5 p-0 m-0 text-center d-flex flex-column">
                  <span>Tutar:</span>{" "}
                  <span className="fw-bold">
                    {(
                      item.products.price * currencyObj[currency].value
                    ).toFixed(2)}{" "}
                    {currencyObj[currency].symbol}
                  </span>
                </span>
                <div className="d-flex flex-column gap-2 w-50">
                  <Link
                    to={`/${slugify(item.products.title).toLowerCase()}`}
                    className="btn btn-outline-light"
                    style={{ fontSize: "12px" }}
                  >
                    İlana git
                  </Link>
                  <button
                    style={{ fontSize: "15px" }}
                    className="btn btn-outline-light text-danger"
                    onClick={() => dispatch(deleteWish(item.id))}
                  >
                    <BiHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Favoriler;
