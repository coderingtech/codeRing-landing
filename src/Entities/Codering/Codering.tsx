import { type MouseEvent } from "react";

import cn from "classnames";

import Logo from "@/Entities/Logo";
import useIsMobile from "@/Shared/Hooks/useIsMobile.ts";

import styles from "./Codering.module.scss";

interface Props {
  size?: number;
  isLoading?: boolean;
  isClickable?: boolean;
}

const handleClick = (e: MouseEvent<HTMLDivElement>) => {
  e.stopPropagation();
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Codering = ({ size, isLoading, isClickable }: Props) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={cn(styles.wrapper, { [styles.clickable]: isClickable })}
      onClick={isClickable ? handleClick : undefined}
    >
      <Logo
        size={size || (isMobile ? 20 : 28)}
        className={styles.logo}
        isLoading={isLoading}
        isClickable={isClickable}
      />
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
