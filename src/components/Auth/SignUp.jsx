import React, { useEffect, useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";

const SignUp = (props) => {
    
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="login-form gap-3 mt-4 d-flex flex-column justify-content-center align-items-center"
      >
        <input type="text" placeholder="Ad: " />
        <input type="text" placeholder="Soyad: " />
        <input type="email" placeholder="E-Posta Adresi: " />
        <input type="password" placeholder="Şifre: " />
        <input type="password" placeholder="Şifre Tekrar: " />
        <div className="guvenlik-arenasi d-flex gap-2 justify-content-center">
          <input type="text" className="w-50" placeholder="Güvenlik kodu:" />
          <div className="security-code d-flex justify-content-between align-items-center w-50">
            <div className="area-code w-100 text-center">
              {props.random}
            </div>
            <button onClick={()=>{props.settingRandom()}} className="regenerate btn btn-info text-white">
              <FaArrowRotateRight />
            </button>
          </div>
        </div>
        <div className="w-100  d-flex justify-content-start align-items-center">
          <input type="checkbox" style={{ width: 40 }} />
          <span className="w-100" style={{ fontSize: 15 }}>
            <div>
              <a className=" text-decoration-underline" href="/kullanici-sozlesmesi#acik-riza-metni" target="_blank">
                Açık Rıza Metni
              </a>{" "}
              ve{" "}
              <a className=" text-decoration-underline" href="/kullanici-sozlesmesi#aydinlatma-metni" target="_blank">
                Aydınlatma Metni
              </a>{" "}
              şartlarını okudum kabul ediyorum.
            </div>
          </span>
        </div>
        <div className="w-100  d-flex justify-content-start align-items-center">
          <input type="checkbox" style={{ width: 40 }} />
          <span className="w-100" style={{ fontSize: 15 }}>
          <div>Kampanyalardan haberdar olmak için sms ve elektronik ileti almak istiyorum.</div>
          </span>
        </div>
        <button
          className=" w-100 btn text-white login-btn-active"
          style={{ padding: "8px" }}
        >
          Giris Yap
        </button>
      </form>
      <div className="mb-3 mt-2">Üye Ol'a basarak Kullanıcı Sözleşmesi ve şartlarını kabul ediyorum.</div>
    </>
  );
};

export default SignUp;
