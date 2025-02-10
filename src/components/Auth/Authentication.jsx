import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import Login from "./Login";
import SignUp from "./SignUp";

const Authentication = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [authState, setAuthState] = useState(true);

  const [randomCharset, setRandomCharset] = useState();
  const generatorRandom = () => {
    setRandomCharset(
      Math.random().toString(36).substring(2, 6).toLocaleLowerCase()
    );
  };
  useEffect(() => {
    generatorRandom()
  }, []);
  return (
    <>
      <Button
        onClick={handleShow}
        style={{ fontSize: "13px" }}
        className="btn btn-info d-flex align-items-center justify-content-center d-lg-flex d-none gap-1 fw-bold text-white sell"
      >
        <FaUser />
        <span>Giriş/Kayıt</span>
      </Button>

      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
        centered
      >
        <div className="modal-content">
          <div className="sign-box  d-flex  w-100 ">
            <div className="left p-4 w-50">
              <div className="head">
                <button
                  onClick={(e) => {
                    setAuthState(true);
                    e.target.classList.add("login-btn-active");
                    document
                      .querySelector(".sign")
                      .classList.remove("login-btn-active");
                  }}
                  className="login login-btn-active"
                >
                  Giris Yap
                </button>
                <button
                  className="sign"
                  onClick={(e) => {
                    setAuthState(false);
                    e.target.classList.add("login-btn-active");
                    document
                      .querySelector(".login")
                      .classList.remove("login-btn-active");
                  }}
                >
                  Uye Ol
                </button>
              </div>
              {authState ? (
                <Login
                  random={randomCharset}
                  settingRandom={generatorRandom}
                />
              ) : (
                <SignUp
                  settingRandom={generatorRandom}
                  random={randomCharset}
                />
              )}
            </div>
            <div className="right w-50">
              <img
                className="w-100 h-100"
                src="https://www.gamesatis.com/assets/sign-box-banner"
                alt="signIn"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Authentication;
