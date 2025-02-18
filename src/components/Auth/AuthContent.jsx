import { useEffect, useState } from "react";
import Login from "./Login";
import SignUpSec from "./SignUp";


const AuthContent=(props)=>{
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
    return(<div  className={!props.modalmi?"container-fluid my-4":""} style={!props.modalmi?{width:"60vw",maxWidth:"50em"}:{}}>
            <div className="sign-box  d-flex  w-100 ">
              <div className="left p-4 w-50">
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
                    Giris Yap
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
                    Uye Ol
                  </button>
                </div>
                {authState ? (
                  <Login
                    random={randomCharset}
                    settingRandom={generatorRandom}
                  />
                ) : (
                  <SignUpSec
                    settingRandom={generatorRandom}
                    random={randomCharset}
                    settingAuthState = {setAuthState}
                  />
                )}
              </div>
              <div className="right w-50 d-flex align-items-center justify-content-center">
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