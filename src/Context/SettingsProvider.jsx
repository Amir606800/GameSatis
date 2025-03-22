import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext()

const currencyObj = {
    "TL": {
        value: 1,
        symbol: "₺"
    },
    "USD": {
        value: 0.027,
        symbol: "$"
    },
    "AZN": {
        value: 0.047,
        symbol: "₼"
    },
    "EUR": {
        value: 0.025,
        symbol: "€"
    },
    "GBP": {
        value: 0.021,
        symbol: "£"
    },
    "RUB": {
        value: 2.47,
        symbol: "₽"
    },
    "CNY": {
        value: 0.19,
        symbol: "¥"
    },
    "JPY": {
        value: 4.06,
        symbol: "¥"
    },
    "KZT": {
        value: 12.14,
        symbol: "₸"
    },
    "CAD": {
        value: 0.036,
        symbol: "C$"
    },
    "AUD": {
        value: 0.041,
        symbol: "A$"
    },
    "CHF": {
        value: 0.024,
        symbol: "Fr"
    },
    "SEK": {
        value: 0.28,
        symbol: "kr"
    },
    "NOK": {
        value: 0.29,
        symbol: "kr"
    },
    "DKK": {
        value: 0.19,
        symbol: "kr"
    },
    "UAH": {
        value: 1.08,
        symbol: "₴"
    },
    "INR": {
        value: 2.25,
        symbol: "₹"
    },
    "BRL": {
        value: 0.14,
        symbol: "R$"
    },
    "MXN": {
        value: 0.49,
        symbol: "$"
    }
}

export const SettingsProvider = ({children})=>{
    const getInitialState = (key, defaultValue) => localStorage.getItem(key) || defaultValue;

    const [theme,setTheme] = useState(getInitialState("theme","dark"))
    const [lang,setLang] = useState(getInitialState("lang","tr"))
    const [currency,setCurrency] = useState(getInitialState("currency","TL"))


    useEffect(()=>{
        document.documentElement.setAttribute("data-bs-theme",theme)
        localStorage.setItem("theme",theme)
    },[theme])
    useEffect(()=>{localStorage.setItem("lang",lang)},[lang])
    useEffect(()=>{localStorage.setItem("currency",currency)},[currency])



    return(
        <SettingsContext.Provider value={{theme,setTheme,lang,setLang,currency,setCurrency,currencyObj}}>{children}</SettingsContext.Provider>
    )
}

