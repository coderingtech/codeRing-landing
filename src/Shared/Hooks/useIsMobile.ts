import { useEffect, useState } from "react";

import MobileBreakPoint from "@/Shared/Consts/MobileBreakPoint.ts";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < MobileBreakPoint,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MobileBreakPoint);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
