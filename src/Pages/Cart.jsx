import React, { useEffect, useRef } from "react";
import Lent from "../components/Lent";
import IlgiCard from "../components/CardCompon/IlgiCard";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Addons/Loading";
import { fetchCart } from "../tools/Slices/CartSlice";
import { UserAuth } from "../Context/AuthContext";
import { BsShieldFillCheck, BsTrash } from "react-icons/bs";

const Cart = () => {
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { userProfile } = UserAuth();
  const dispatch = useDispatch();
  const hasFetched = useRef(false);
  useEffect(() => {
    if (userProfile && !hasFetched.current) {
      dispatch(fetchCart(userProfile.id));
      hasFetched.current = true;
    }
  }, [userProfile]);
  if (loading) return <Loading />;
  if (error) alert(error);

  console.log(cart);
  return (
    <div className="cart-page container-fluid">
      {cart.length == 0 ? (
        <div className="card bg-dark my-5 border-0">
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
        <div className="d-flex gap-3 align-items-center">
          <div className="mt-4 w-75 d-flex flex-column gap-3">
            {cart.map((item, index) => (
              <div className="cart-row gap-3" key={index}>
                <div className="image-grid  overflow-hidden">
                  <img
                    width={240}
                    className="rounded-2"
                    src={item.products.image_url}
                    alt=""
                  />
                </div>
                <div className="content-grid bg-dark p-3 rounded-2">
                  <div className="top d-flex justify-content-between align-items-start">
                    <div className="h5 fw-bold">{item.products.title}</div>
                    <div className="price-1 h4 fw-bolder">
                      {item.products.price} TL
                    </div>
                  </div>
                  <div className="botommo d-flex align-items-end justify-content-between h-75">
                    <div className="left d-flex align-content-end gap-3">
                      <img
                        width={90}
                        className="rounded-3"
                        src={item.products.profiles.profile_photo}
                        alt={item.products.profiles.display_name}
                      />
                      <div className="infos">
                        <span className=" h5 fw-bold">
                          {item.products.profiles.display_name}
                        </span>
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
                        <div className="amount d-flex align-items-center justify-content-center rounded-3">
                          <span className="ms-2" style={{ width: "10em" }}>
                            Adet:{" "}
                          </span>
                          <div className="d-flex ingredients justify-content-between align-items-center p-2 ">
                            <div className="decrease btn p-0 w-25 text-center">
                              -
                            </div>
                            <div className="amount w-50 text-center">
                              {item.quantity}
                            </div>
                            <div className="increase btn p-0 w-25 text-center">
                              +
                            </div>
                          </div>
                        </div>
                        <button className="purchase  btn btn-outline-danger px-3">
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
            className="mt-4 p-3 final-right bg-dark rounded-2 w-25 "
            style={{
              minHeight: "10em",
              maxHeight: "25em",
              height: "fit-content",
            }}
          >
            <div className="top  d-flex flex-column gap-3">
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
                      {item.products.price}TL
                    </span>
                  </div>
                ))
              ) : (
                <>Loading...</>
              )}
            </div>
            <div className="d-flex my-3 justify-content-center">
              <hr style={{ border: "1px solid white", minWidth: "20em" }} />
            </div>
            <div className="bottom d-flex align-items-center justify-content-between">
              <span style={{ fontSize: "17px", fontWeight: "700" }}>
                Ödenecek Tutar:
              </span>
              <span style={{ fontSize: "25px", fontWeight: "700" }}>
                {cart.length == 0 ? <>Loading...</> : <>123,567TL</>}
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
                <button className="btn w-100 btn-success">Bakiye ile öde</button>
            </div>
          </div>
        </div>
      )}

      <IlgiCard />
    </div>
  );
};

export default Cart;
