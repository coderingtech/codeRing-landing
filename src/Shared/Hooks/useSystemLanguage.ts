import { useState } from "react";

import Languages, {
  type Language,
} from "@/Shared/Types/Languages.ts";

export const useSystemLanguage = (): Language => {
  const [language] = useState<Language>(() => {
    if (typeof window === "undefined") return Languages.EN;

    const browserLang = navigator.language.split("-")[0];

    const isSupported = Object.values(Languages).includes(
      browserLang as Language,
    );

    return isSupported ? (browserLang as Language) : Languages.EN;
  });

  return language;
};

export default useSystemLanguage;
