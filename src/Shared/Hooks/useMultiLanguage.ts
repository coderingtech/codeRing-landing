import {type MultiLanguage} from "@/Shared/Types/MultiLanguage.ts";
import useSystemLanguage from "@/Shared/Hooks/useSystemLanguage.ts";

const useMultiLanguage = () => {
    const language = useSystemLanguage();

    const getText = (texts: MultiLanguage) => texts[language] || "";

    return {getText};
};

export default useMultiLanguage;
