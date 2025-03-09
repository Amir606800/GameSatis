import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext()

export const SettingsProvider = ({children})=>{
    const getInitialState = (key, defaultValue) => localStorage.getItem(key) || defaultValue;

    const [theme,setTheme] = useState(getInitialState("theme","dark"))
    const [lang,setLang] = useState(getInitialState("lang","tr"))
    const [currency,setCurrency] = useState(getInitialState("currency","tl"))

    useEffect(()=>{
        document.documentElement.setAttribute("data-bs-theme",theme)
        localStorage.setItem("theme",theme)
    },[theme])
    useEffect(()=>{localStorage.setItem("lang",lang)},[lang])
    useEffect(()=>{localStorage.setItem("currency",currency)},[currency])



    return(
        <SettingsContext.Provider value={{theme,setTheme,lang,setLang,currency,setCurrency}}>{children}</SettingsContext.Provider>
    )
}

