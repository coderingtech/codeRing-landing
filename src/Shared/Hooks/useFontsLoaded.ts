import { useEffect, useState } from "react";

import FontFaceObserver from "fontfaceobserver";

const FONT_FAMILIES = ["Inter", "Josefin Sans"] as const;

const FALLBACK_TIMEOUT_MS = 5000;
const FONT_LOAD_TIMEOUT_MS = 10000;

const useFontsLoaded = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let isActive = true;

    const markAsLoaded = () => {
      if (isActive) {
        setFontsLoaded(true);
      }
    };

    const timeoutId = window.setTimeout(markAsLoaded, FALLBACK_TIMEOUT_MS);

    Promise.all(
      FONT_FAMILIES.map((family) =>
        new FontFaceObserver(family).load(undefined, FONT_LOAD_TIMEOUT_MS),
      ),
    )
      .then(markAsLoaded)
      .catch(() => undefined);

    return () => {
      isActive = false;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return fontsLoaded;
};

export default useFontsLoaded;
