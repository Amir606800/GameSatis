import { useEffect, useState } from "react"
import supabase from "../helpers/supabaseClient"
import { Navigate } from "react-router-dom"
import { UserAuth } from "../Context/AuthContext"

const Wrapper = ({children})=>{
    const {session} = UserAuth()
    
    if(session === undefined){
        return <>Loading</>
    }
    
    return session?<>{children}</>:<Navigate to="/giris-yap" />
    
}

export default Wrapper;