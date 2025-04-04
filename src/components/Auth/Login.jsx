import React, { useContext, useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";
import supabase from "../../helpers/supabaseClient";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserAuth } from "../../Context/AuthContext";
import { useTranslate } from "../../helpers/Language/Translator";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verCode, setVerCode] = useState("");
  const [inputStatus, setInputStatus] = useState("email");
  const navigate = useNavigate();
  const { session, signIn } = UserAuth();
  const t = useTranslate()
  const resetInputFields = () => {
    setEmail("");
    setPassword("");
    setVerCode("");
    props.settingRandom();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (verCode != props.random) {
      Swal.fire({
        title: "Login unsuccessfull",
        text: "Verification code is wrong!",
        icon: "info",
        background: "#222631", // Custom dark background (optional)
        color: "#fff", // Text color for dark theme
        confirmButtonText: "Try Again",
        confirmButtonColor: "#3085d6",
      });
      resetInputFields();
      return;
    }

    const result = await signIn(email, password);

    if (result.success) {
      Swal.fire({
        title: "Successfully logged in!",
        icon: "success",
        background: "#222631", // Custom dark background (optional)
        color: "#fff", // Text color for dark theme
        confirmButtonText: "Continue",
        confirmButtonColor: "#3085d6",
      });
      navigate("/profilim");
    } else {
      Swal.fire({
        title: "Error Occured",
        text: result.error,
        icon: "error",
        background: "#222631", // Custom dark background (optional)
        color: "#fff", // Text color for dark theme
        confirmButtonText: "Try Again",
        confirmButtonColor: "#3085d6",
      });
      resetInputFields();
    }

    resetInputFields();
  };
  return (
    <>
      <div className="sub-head mt-3">
        <div
          onClick={(e) => {
            setInputStatus("email");
            e.target.style.color = "#33FF33";
            document.querySelector(".giris-telefon").style.color = "red";
          }}
          className="giris-ePosta"
          style={{ color: "#33FF33" }}
        >
          {t("auth.emailS")}
        </div>
        <div
          onClick={(e) => {
            setInputStatus("tel");
            e.target.style.color = "#33FF33";
            document.querySelector(".giris-ePosta").style.color = "red";
          }}
          className="giris-telefon cur-pointer"
          style={{ color: "red"}}
        >
          {t("auth.passwS")}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="login-form gap-3 mt-4 d-flex flex-column justify-content-center align-items-center"
      >
        {inputStatus == "email" ? (
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder={t("auth.placeEmail")}
            value={email}
            required
          />
        ) : (
          <div className="d-flex align-items-center gap-3 w-100">
            <span>+994</span>
            <input type="phone" placeholder="5X XXX XX XX" required />{" "}
          </div>
        )}
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder={t("auth.placePassw")}
          value={password}
          required
        />
        <div className="guvenlik-arenasi d-flex gap-2 justify-content-center">
          <input
            onChange={(e) => setVerCode(e.target.value)}
            type="text"
            className="w-50"
            placeholder={t("auth.placeSec")}
            value={verCode}
            required
          />
          <div className="security-code d-flex justify-content-between align-items-center w-50">
            <div className="area-code w-100 text-center">{props.random}</div>
            <button
              onClick={() => {
                props.settingRandom();
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
          {t("auth.trust")}
          </span>
        </div>
        <button
          className=" w-100 btn text-white login-btn-active"
          style={{ padding: "8px" }}
        >
          {t("auth.login")}
        </button>
        <a className="w-100" href="/email-confirm">
        <button
          
          className=" w-100 btn btn-outline-light "
          style={{ padding: "8px" }}
          type="button"
        >
          {t("auth.forget")}
        </button>
        </a>
        
      </form>
    </>
  );
};

export default Login;
