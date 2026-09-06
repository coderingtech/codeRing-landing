import { type MouseEvent } from "react";

import useIsMobile from "@/Shared/Hooks/useIsMobile.ts";
import cn from "classnames";

import Logo from "@/Entities/Logo";

import Paths from "@/Widgets/Router/Consts/Paths.ts";
import useGoTo from "@/Widgets/Router/Hooks/useGoTo.ts";

import styles from "./Codering.module.scss";

interface Props {
  homeButton?: boolean;
  size?: number;
  isLoading?: boolean;
}

const Codering = ({ homeButton, size, isLoading }: Props) => {
  const isMobile = useIsMobile();
  const goTo = useGoTo();

  const handleCoderingClick = (e: MouseEvent<HTMLDivElement>) => {
    if (homeButton) {
      e.stopPropagation();
      goTo({ path: Paths.HOME });
    }
  };

  return (
    <div
      className={cn(styles.wrapper, { [styles.clickable]: homeButton })}
      onClick={handleCoderingClick}
    >
      <Logo
        size={size || (isMobile ? 20 : 28)}
        className={styles.logo}
        isLoading={isLoading}
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
