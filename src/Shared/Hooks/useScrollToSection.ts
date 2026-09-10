import { useCallback } from "react";

import { type SectionId } from "@/Shared/Consts/SectionIds.ts";

const useScrollToSection = () => {
  return useCallback((sectionId: SectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);
};

export default useScrollToSection;
