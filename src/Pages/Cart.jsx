import React, { useContext, useEffect, useRef, useState } from "react";
import Lent from "../Addons/Lent";
import IlgiCard from "../components/CardCompon/IlgiCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Addons/Loading";
import {
  addCart,
  changeQuan,
  deleteCart,
  fetchCart,
  resetCart,
} from "../tools/Slices/CartSlice";
import { UserAuth } from "../Context/AuthContext";
import { BsShieldFillCheck, BsTrash } from "react-icons/bs";
import supabase from "../helpers/supabaseClient";
import Swal from "sweetalert2";
import { addOrders } from "../tools/Slices/OrdersSlice";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { SettingsContext } from "../Context/SettingsProvider";

const Cart = () => {
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { userProfile } = UserAuth();
  const dispatch = useDispatch();
  const hasFetched = useRef(false);
  const [total, setTotal] = useState(null);
  const { currency, currencyObj } = useContext(SettingsContext);
  useEffect(() => {
    if (userProfile && !hasFetched.current) {
      dispatch(fetchCart(userProfile.id));
      hasFetched.current = true;
    }
  }, [userProfile]);

  useEffect(() => {
    if (userProfile) {
      const fetchTotalCost = async () => {
        const { data, error } = await supabase
          .from("cart")
          .select("quantity, products(price,discount,stock)")
          .eq("user_id", userProfile.id);
        if (!error) {
          setTotal(
            data.reduce(
              (acc, item) =>
                acc +
                item.quantity *
                  (item.products.price -
                    (item.products.price * item.products.discount) / 100),
              0
            )
          );
        } else console.log(error);
      };
      fetchTotalCost();
    }
  }, [cart]);

  const handleDecrease = (id, quantity) => {
    dispatch(changeQuan({ id, quantity, type: "decrease" }));
  };
  const handleIncrease = (id, quantity) => {
    dispatch(changeQuan({ id, quantity, type: "increase" }));
  };
  const deleteCartItem = (cart_id) => {
    dispatch(deleteCart(cart_id));
  };

  const handleCheckout = async () => {
    if (userProfile.balance > total) {
      const { errorBalanceUpdate } = await supabase
        .from("profiles")
        .update({ balance: userProfile.balance - total.toFixed(2, 0) })
        .eq("id", userProfile.id);


      if (!errorBalanceUpdate) {
        dispatch(addOrders({ cart: cart, total: total }));
        dispatch(resetCart(userProfile.id));
        Swal.fire({
          title: "Ödeme başarılı",
          text: "Sipariş başarıyla gerçekleşmiştir. Lütfen hesabınızdan 'siparişler' bölümünü gözden geçirin.",
          icon: "success",
          background: "#222631",
          color: "#fff",
          confirmButtonText: "Tamam",
          confirmButtonColor: "#3085d6",
        }).then(() => window.location.reload());


      } else {
        console.log(errorBalanceUpdate);
      }
    } else {
      Swal.fire({
        title: "Ödeme geçersiz",
        text: "Bakiyenizde yeterli nakit yok. Lütfen bakiyenizi artırın",
        icon: "error",
        background: "#222631",
        color: "#fff",
        confirmButtonText: "Tamam",
        confirmButtonColor: "#3085d6",
      });
    }
  };

  if (loading) return <Loading />;
  if (error) alert(error);
  return (
    <div className="cart-page container-fluid">
      {cart.length == 0 ? (
        <div className="card bg-custom my-5 border-0">
          <div className="card-head">
            <Lent
              leftHead={"Sepetinizde ürün bulunmamaktadır"}
              rightHead=""
              back={"https://www.gamesatis.com/assets/header-bg-icon-game.png"}
            />
          </div>
          <div className="card-body row align-items-center g-5">
            <div className="col-lg-2 col-12 text-center">
              <img
                src="https://www.gamesatis.com/assets/payment-empty-163x141-532ff9d744870a6398a05fbca8797d77fb37866f2845e10cd97e57baaa31a6ee.png"
                alt="Cart-icon"
              />
            </div>
            <div className="text col-12 col-lg-6">
              Sepetini GameSatış'ın fırsatlarla dolu dünyasından doldurmak için
              ürünleri incelemeye başlayabilirsin.
            </div>
            <div className="right col-12 col-lg-4">
              <h5>Sepetime eklediğim ürünler neden yok?</h5>
              <ul>
                <li>Ürünler tükenmiş olabilir.</li>
                <li>Ürünlerin satışı bitmiş olabilir.</li>
                <li>Ürünün satıcısı satışı sonlandırmış olabilir.</li>
                <li>
                  Üye girişinden sonra sepete eklenen ürünler üye çıkışı
                  yaptıktan sonra sepette görünmez.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex gap-3 align-items-center flex-column flex-lg-row">
          <div className="mt-4 w-75 d-flex flex-column gap-3">
            {cart.map((item, index) => (
              <div className="cart-row gap-3 d-flex flex-column flex-lg-row align-items-center" key={index}>
                <div className="image-grid  overflow-hidden">
                  <img
                    width={240}
                    className="rounded-2"
                    src={item.products.image_url}
                    alt=""
                  />
                </div>
                <div className="content-grid w-100 bg-custom p-3 h-100 rounded-2 ">
                  <div className="top d-flex justify-content-between align-items-center align-items-sm-start flex-column flex-sm-row">
                    <Link to={`/${slugify(item.products.title).toLowerCase() }`} className="h5 fw-bold">{item.products.title}</Link>

                    <div className="price-1 h4 fw-bolder">
                      {item.products.discount != 0 ? (
                        <>
                          <span className="text-danger fs-5 text-decoration-line-through">
                            {(
                              item.products.price * currencyObj[currency].value
                            ).toFixed(2)}{" "}
                            {currencyObj[currency].symbol}
                          </span>{" "}
                          <span>
                            {(
                              (item.products.price -
                                (item.products.price * item.products.discount) /
                                  100) *
                              currencyObj[currency].value
                            ).toFixed(2)}{" "}
                            {currencyObj[currency].symbol}
                          </span>
                        </>
                      ) : (
                        <>
                          {(
                            item.products.price * currencyObj[currency].value
                          ).toFixed(2)}{" "}
                          {currencyObj[currency].symbol}
                        </>
                      )}
                    </div>
                  </div>
                  <div className="botommo d-flex align-items-center gap-3 align-items-lg-end justify-content-between flex-column flex-lg-row h-75">
                    <div className="left d-flex align-content-end flex-column flex-sm-row gap-3">
                      <img
                        width={90}
                        className="rounded-3"
                        src={item.products.profiles.profile_photo}
                        alt={item.products.profiles.display_name}
                      />
                      <div className="infos">
                        <Link
                          to={`/magaza/${slugify(
                            `${
                              item.products.profiles.display_name
                            }~${item.products.profiles.id.substring(0, 8)}`
                          )}`}
                          className=" h5 fw-bold"
                        >
                          {item.products.profiles.display_name}
                        </Link>
                        <div className="d-flex gap-2 align-items-center">
                          <div
                            style={{ width: "130px", height: "10px" }}
                            className="progress"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow={100}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span style={{ fontSize: "12px" }}>%100</span>
                        </div>
                        <div style={{ fontSize: "13px" }}>
                          Mağaza yorumları: (2455)
                        </div>
                        <div style={{ fontSize: "13px" }}>
                          Mağazanın diğer ürünleri: (55)
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <div className="d-flex w-100 justify-content-between gap-2 align-items-center">
                        <div className="amount   main-back d-flex align-items-center justify-content-center rounded-3">
                          <span className="ms-2 w-100" style={{ maxWidth: "10em" }}>
                            Adet:{" "}
                          </span>
                          <div className="d-flex ingredients bg-none w-100 gap-1 justify-content-between align-items-center p-2 ">
                            <div
                              onClick={
                                item.quantity == 1
                                  ? () => {}
                                  : () => handleDecrease(item.id, item.quantity)
                              }
                              className={` p-0  px-2 text-center btn ${
                                item.quantity == 1 ? "" : "decrease bg-custom"
                              }`}
                            >
                              -
                            </div>
                            <div className="amount rounded-2 bg-custom px-2 item-quantity w-50 text-center">
                              {item.quantity}
                            </div>
                            <div
                              onClick={
                                item.products.stock > item.quantity
                                ? () =>
                                  handleIncrease(item.id, item.quantity,item) 
                                 :()=>{} 
                              }
                              className={`${item.products.stock > item.quantity ? "increase bg-custom": " "} btn  p-0 px-2 text-center`}
                            >
                              +
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => deleteCartItem(item.id)}
                          className="purchase  btn btn-outline-danger px-3"
                        >
                          <BsTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="mt-4 p-3 final-right bg-custom rounded-2 w-75"
            style={{
              minHeight: "10em",
              maxHeight: "25em",
              height: "fit-content",
            }}
          >
            <div className="top w-100 d-flex flex-column gap-3">
              {cart.length != 0 ? (
                cart.map((item, index) => (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        maxWidth: "16em",
                      }}
                    >
                      {item.products.title}:
                    </span>
                    <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
                      {(
                        (item.products.price -
                          (item.products.price * item.products.discount) /
                            100) *
                        currencyObj[currency].value
                      ).toFixed(2)}{" "}
                      {currencyObj[currency].symbol}
                      <span className="fs-6"> x {item.quantity}</span>
                    </span>
                  </div>
                ))
              ) : (
                <>Loading...</>
              )}
            </div>
            <div className="d-flex my-3 w-100 justify-content-center">
              <hr className="w-100" style={{ border: "1px solid white", maxWidth: "20em" }} />
            </div>
            <div className="bottom d-flex align-items-center justify-content-between">
              <span style={{ fontSize: "17px", fontWeight: "700" }}>
                Ödenecek Tutar:
              </span>
              <span style={{ fontSize: "25px", fontWeight: "700" }}>
                {cart.length == 0 ? (
                  <>Loading...</>
                ) : (
                  <>
                    {total ? (
                      <>
                        {(total * currencyObj[currency].value).toFixed(2)}{" "}
                        {currencyObj[currency].symbol}{" "}
                      </>
                    ) : (
                      "loading..."
                    )}
                  </>
                )}
              </span>
            </div>
            <div
              style={{ width: "100%" }}
              className=" d-flex align-items-center mt-2 gap-1"
            >
              <BsShieldFillCheck className="text-info fs-4" />
              <span
                className="d-flex justify-content-center flex-column"
                style={{ fontSize: "10px", fontWeight: "bold" }}
              >
                <span>Paranız %100 GameSatış güvencesi altındadır.</span>{" "}
              </span>
            </div>
            <div className="mt-3">
              <button
                onClick={handleCheckout}
                className="btn w-100 btn-success"
              >
                Bakiye ile öde
              </button>
            </div>
          </div>
        </div>
      )}

      <IlgiCard />
    </div>
  );
};

export default Cart;
