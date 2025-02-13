import React, { useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";
import supabase from "../../helpers/supabaseClient";

const Login = (props) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [verCode,setVerCode] = useState("")
  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(verCode != props.random){
      alert("Verification code doesn't matches");
      props.settingRandom();
      return;
    }

    const {data,error} =await supabase.auth.signInWithPassword({
      email:email,
      password:password
    })

    if(error){
      alert("Error: "+error.message);
      return;
    }
    if(data){
      alert("Succesfully Logged in!")
    }
    setEmail("");
    setPassword("");
    props.settingRandom()
  }
  return (
    <>
      <div className="sub-head mt-3">
        <div className="e-posta" style={{ color: "#33FF33" }}>
          E-posta ile Giris
        </div>
        <div className="telefon text-danger">Telefon ile Giris</div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="login-form gap-3 mt-4 d-flex flex-column justify-content-center align-items-center"
      >
        <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="E-Posta Adresi: " value={email} required/>
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Şifre: " value={password} required/>
        <div className="guvenlik-arenasi d-flex gap-2 justify-content-center">
          <input onChange={(e)=>setVerCode(e.target.value)} type="text" className="w-50" placeholder="Güvenlik kodu:" value={verCode} required/>
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
