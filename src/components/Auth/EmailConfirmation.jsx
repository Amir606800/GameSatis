import { Modal } from "bootstrap/dist/js/bootstrap.bundle";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import supabase from "../../helpers/supabaseClient";

const EmailConfirmation = () => {
    const [email,setEmail] = useState()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const {data,error} = await supabase.auth.resetPasswordForEmail(email)
        if(data) alert("Check your mail box!")
        else alert(error)
    }
  return (
    <>
      <div
        className="container-fluid my-4"
        style={{ width: "30vw", maxWidth: "50em" }}
      >
        <div className="sign-box  d-flex  w-100 rounded-3">
          <div className="left p-4  w-100 rounded-3">
            <div className="head h4">Email</div>
            <form
              onSubmit={handleSubmit}
              className="login-form mt-4  gap-3 d-flex flex-column"
            >
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="E-post Adresiniz:"
              />
              <button className="btn mt-2 w-100 login-btn-active text-white">
                {" "}
                Onayla{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailConfirmation;
