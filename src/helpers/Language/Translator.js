import { useContext } from "react";
import { EngLanguage } from "./EngLanguage"
import { TrLanguage } from "./TrLanguage"
import { SettingsContext } from "../../Context/SettingsProvider";
import { AzeLanguage } from "./AzeLanguage";

const languages = {
    eng:EngLanguage,
    tr:TrLanguage,
    aze:AzeLanguage
}


export const useTranslate = () => {
    const {lang} = useContext(SettingsContext)
    const translationPack = languages[lang] || languages["tr"]; // Fallback to Turkish
  
    const t = (key) => {
      const keys = key.split("."); // Split the key into parts (e.g., ["common", "welcome"])
      let value = translationPack;
  
      for (const k of keys) {
        if (!value || !value[k]) return key; // Return the key itself if not found
        value = value[k];
      }
  
      return value;
    };
  
    return t;
  };