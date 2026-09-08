import Logo from "@/Entities/Logo";
import useIsMobile from "@/Shared/Hooks/useIsMobile.ts";
import useMultiLanguage from "@/Shared/Hooks/useMultiLanguage.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./Codering.module.scss";

interface Props {
  size?: number;
  isLoading?: boolean;
}

const Codering = ({ size, isLoading }: Props) => {
  const isMobile = useIsMobile();
  const { getText } = useMultiLanguage();

  return (
    <div className={styles.wrapper}>
      <Logo
        size={size || (isMobile ? 20 : 28)}
        className={styles.logo}
        isLoading={isLoading}
      />
      <h1
        className={styles.codering}
        style={{ fontSize: size && `${isMobile ? size - 4 : size - 8}px` }}
      >
        {getText(Texts.brandName)}
      </h1>
    </div>
  );
};

export default Codering;
