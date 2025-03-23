import { EngLanguage } from "./EngLanguage"
import { TrLanguage } from "./TrLanguage"

const languages = {
    eng:EngLanguage,
    tr:TrLanguage
}

export const useTranslate = (lang)=>{
    const translationPack = languages[lang]
    return (key)=>{translationPack[key]}
}