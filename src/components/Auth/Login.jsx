import React from "react";
import { FaArrowRotateRight } from "react-icons/fa6";

const Login = (props) => {
  return (
    <>
      <div className="sub-head mt-3">
        <div className="e-posta" style={{ color: "#33FF33" }}>
          E-posta ile Giris
        </div>
        <div className="telefon text-danger">Telefon ile Giris</div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="login-form gap-3 mt-4 d-flex flex-column justify-content-center align-items-center"
      >
        <input type="email" placeholder="E-Posta Adresi: " />
        <input type="password" placeholder="Şifre: " />
        <div className="guvenlik-arenasi d-flex gap-2 justify-content-center">
          <input type="text" className="w-50" placeholder="Güvenlik kodu:" />
          <div className="security-code d-flex justify-content-between align-items-center w-50">
            <div className="area-code w-100 text-center">{props.random}</div>
            <button
              onClick={() => {
                props.settingRandom();
                console.log("sdawd");
              }}
              className="regenerate btn btn-info text-white"
            >
              <FaArrowRotateRight />
            </button>
          </div>
        </div>
        <div className="w-100  d-flex justify-content-start align-items-center">
          <input type="checkbox" style={{ width: 40 }} />
          <span className="w-100" style={{ fontSize: 16, fontWeight: "bold" }}>
            Bu cihaz guvenilir
          </span>
        </div>
        <button
          className=" w-100 btn text-white login-btn-active"
          style={{ padding: "8px" }}
        >
          Giris Yap
        </button>
        <button
          className=" w-100 btn btn-outline-light "
          style={{ padding: "8px" }}
        >
          Şifremi Unuttum
        </button>
        <button
          className=" w-100 btn btn-outline-light "
          style={{ padding: "8px" }}
        >
          Üyelik Doğrula
        </button>
      </form>
    </>
  );
};

export default Login;
