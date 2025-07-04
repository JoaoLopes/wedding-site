import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./translate/translationEN.json";
import translationPT from "./translate/translationPT.json";

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: translationEN
      },
      pt: {
        translation: translationPT
      }
    }
  });

export default i18n;
