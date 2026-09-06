import { type CSSProperties } from "react";

import cn from "classnames";

import LogoStyleToClassNameMap from "@/Entities/Logo/Consts/LogoStyleToClassNameMap.ts";
import LogoStyles, {
  type LogoStyle,
} from "@/Entities/Logo/Types/LogoStyles.ts";

import styles from "./Logo.module.scss";

interface Props {
  size?: number;
  isLoading?: boolean;
  style?: LogoStyle;
  clickable?: boolean;
  className?: string;
}

const Logo = ({
  size = 32,
  isLoading,
  style = LogoStyles.WHITE,
  clickable,
  className,
}: Props) => {
  return (
    <div
      className={cn(styles.wrapper, LogoStyleToClassNameMap[style], className, {
        [styles.clickable]: clickable,
      })}
      style={{ "--size": size } as CSSProperties}
    >
      <div
        className={cn(styles.ring, styles.back, {
          [styles.loading]: isLoading,
        })}
      />
      <div
        className={cn(styles.ring, styles.front, {
          [styles.loading]: isLoading,
        })}
      />
    </div>
  );
};

export default Logo;
