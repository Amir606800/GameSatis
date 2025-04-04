import { useEffect, useState } from "react";
import Login from "./Login";
import SignUpSec from "./SignUp";
import { useTranslate } from "../../helpers/Language/Translator";


const AuthContent=(props)=>{
    const [authState, setAuthState] = useState(true);
    const t = useTranslate()
    const [randomCharset, setRandomCharset] = useState();
    const generatorRandom = () => {
      setRandomCharset(
        Math.random().toString(36).substring(2, 6).toLocaleLowerCase()
      );
    };
    useEffect(() => {
      generatorRandom()
    }, []);
    return(<div className={!props.modalmi?"container-fluid my-4":""} style={!props.modalmi?{width:"70vw",maxWidth:"50em"}:{}}>
            <div className="sign-box  d-flex  w-100 ">
              <div className="left bg-custom p-4  w-100">
                <div className="head">
                  <button
                    onClick={(e) => {
                      setAuthState(true);
                        e.target.classList.add("login-btn-active");
                      document
                        .querySelector(".sign-buton")
                        .classList.remove("login-btn-active");
                      
                    }}
                    className="login-buton login-btn-active"
                  >
                    {t("auth.login")}
                  </button>
                  <button
                    className="sign-buton"
                    onClick={(e) => {
                      setAuthState(false);
                      
                        e.target.classList.add("login-btn-active");
                      document
                        .querySelector(".login-buton")
                        .classList.remove("login-btn-active");
                      
                      
                    }}
                  >
                    {t("auth.signUp")}
                  </button>
                </div>
                {authState ? (
                  <Login
                    random={randomCharset}
                    settingRandom={generatorRandom}
                    settingAuthState={setAuthState}
                  />
                ) : (
                  <SignUpSec
                    settingRandom={generatorRandom}
                    random={randomCharset}
                    settingAuthState = {setAuthState}
                  />
                )}
              </div>
              <div className="right w-75 d-md-flex align-items-center justify-content-center d-none">
                <img
                  className="w-100 h-100"
                  src="https://www.gamesatis.com/assets/sign-box-banner"
                  alt="signIn"
                />
              </div>
            </div>
    </div>)
  }

  export default AuthContent;