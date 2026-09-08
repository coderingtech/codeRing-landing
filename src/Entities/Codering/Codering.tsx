import Logo from "@/Entities/Logo";
import useIsMobile from "@/Shared/Hooks/useIsMobile.ts";

import styles from "./Codering.module.scss";

interface Props {
  size?: number;
  isLoading?: boolean;
}

const Codering = ({ size, isLoading }: Props) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.wrapper}>
      <Logo size={size || (isMobile ? 20 : 28)} isLoading={isLoading} />
      <h1
        className={styles.codering}
        style={{ fontSize: size && `${isMobile ? size - 4 : size - 8}px` }}
      >
        CodeRing
      </h1>
    </div>
  );
};

export default Codering;
