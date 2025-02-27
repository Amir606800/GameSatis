import React, { useState } from 'react'
import supabase from '../../helpers/supabaseClient';

const ForgotPassword = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {error} = await supabase.auth.updateUser({
            email:email,
            password:password
        })
        if(!error) alert("Successfully changed")
        else alert(error)
    }
  return (
    <>
    <div  className="container-fluid my-4" style={{width:"30vw",maxWidth:"50em"}}>
            <div className="sign-box  d-flex  w-100 rounded-3">
              <div className="left p-4  w-100 rounded-3">
                <div className="head h4">
                  Şifre Kurtarma
                </div>
                <form onSubmit={handleSubmit} className='login-form mt-4  gap-3 d-flex flex-column'>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='E-post Adresiniz:'/>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Yeni şifreniz: ' />
                    <button className='btn mt-2 w-100 login-btn-active text-white'> Onayla </button>
                </form>
              </div>
              
            </div>
    </div>
    </>
  )
}

export default ForgotPassword