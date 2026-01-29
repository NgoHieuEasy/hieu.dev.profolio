import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vi from "./vi.json";
import en from "./en.json";
import ja from "./ja.json";
import ko from "./ko.json";
import zh from "./zh.json";

i18n.use(initReactI18next).init({
  resources: {
    vi: { translation: vi },
    en: { translation: en },
    ja: { translation: ja },
    ko: { translation: ko },
    zh: { translation: zh },
  },
  lng: "vi",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
