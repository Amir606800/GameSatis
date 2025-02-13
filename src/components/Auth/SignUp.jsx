import React, { useEffect, useState } from "react";
import { FaArrowRotateRight } from "react-icons/fa6";
import supabase from "../../helpers/supabaseClient";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [verCode, setVerCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordAgain) {
      alert("Passwords do not match");
      return;
    }

    if (verCode !== props.random) {
      alert("Verification code does not match");
      props.settingRandom(); 
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert("Sign-up error: " + error.message);
      return;
    }

    const user = data.user;

    const { profileError } = await supabase.from("profiles").insert([
      {
        id: user.id, 
        first_name: firstName,
        last_name: lastName,
        display_name: `${firstName} ${lastName}`, 
      },
    ]);

    if (profileError) {
      alert("Error creating profile: " + profileError.message);
      return;
    }

    alert("Account created successfully");

    setEmail("");
    setPassword("");
    setPasswordAgain("");
    setFirstName("");
    setLastName("");
    setVerCode("");

    props.settingRandom();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="login-form gap-3 mt-4 d-flex flex-column justify-content-center align-items-center"
      >
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Ad: "
          required
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Soyad: "
          required
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-Posta Adresi: "
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Şifre: "
          required
        />
        <input
          onChange={(e) => setPasswordAgain(e.target.value)}
          type="password"
          placeholder="Şifre Tekrar: "
          required
        />
        <div className="guvenlik-arenasi d-flex gap-2 justify-content-center">
          <input
            onChange={(e) => setVerCode(e.target.value)}
            type="text"
            className="w-50"
            placeholder="Güvenlik kodu:"
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
          <input type="checkbox" style={{ width: 40 }} required />
          <span className="w-100" style={{ fontSize: 15 }}>
            <div>
              <a
                className=" text-decoration-underline"
                href="/kullanici-sozlesmesi#acik-riza-metni"
                target="_blank"
              >
                Açık Rıza Metni
              </a>{" "}
              ve{" "}
              <a
                className=" text-decoration-underline"
                href="/kullanici-sozlesmesi#aydinlatma-metni"
                target="_blank"
              >
                Aydınlatma Metni
              </a>{" "}
              şartlarını okudum kabul ediyorum.
            </div>
          </span>
        </div>
        <div className="w-100  d-flex justify-content-start align-items-center">
          <input type="checkbox" style={{ width: 40 }} />
          <span className="w-100" style={{ fontSize: 15 }}>
            <div>
              Kampanyalardan haberdar olmak için sms ve elektronik ileti almak
              istiyorum.
            </div>
          </span>
        </div>
        <button
          className=" w-100 btn text-white login-btn-active"
          style={{ padding: "8px" }}
        >
          Üye Ol
        </button>
      </form>
      <div className="mb-3 mt-2">
        Üye Ol'a basarak Kullanıcı Sözleşmesi ve şartlarını kabul ediyorum.
      </div>
    </>
  );
};

export default SignUp;
