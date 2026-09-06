import { useEffect } from "react";

import cn from "classnames";

import ButtonSizesToClassMap from "@/Entities/Button/Consts/ButtonSizesToClassMap.ts";
import ButtonSizesToLogoSizesMap from "@/Entities/Button/Consts/ButtonSizesToLogoSizesMap.ts";
import ButtonSizesToTextSizesMap from "@/Entities/Button/Consts/ButtonSizesToTextSizesMap.ts";
import ButtonStyleToClassMap from "@/Entities/Button/Consts/ButtonStyleToClassMap.ts";
import ButtonStyleToLogoStyleMap from "@/Entities/Button/Consts/ButtonStyleToLogoStyleMap.ts";
import ButtonStyleToTextStyleMap from "@/Entities/Button/Consts/ButtonStyleToTextStyleMap.ts";
import { type ButtonProps } from "@/Entities/Button/Types/ButtonProps.ts";
import ButtonSizes from "@/Entities/Button/Types/ButtonSizes.ts";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import ButtonTypes from "@/Entities/Button/Types/ButtonTypes.ts";
import Logo from "@/Entities/Logo";
import Text from "@/Entities/Text";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import styles from "./Button.module.scss";

const Button = ({
  text,
  onClick,
  icon: Icon,
  style = ButtonStyles.PRIMARY,
  allWidth,
  alignLeft,
  type = ButtonTypes.BUTTON,
  className,
  loading,
  size = ButtonSizes.M,
  error,
  hotkey,
}: ButtonProps) => {
  const iconButton = !!Icon && !text;

  useEffect(() => {
    if (!hotkey || !onClick) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === hotkey) {
        event.preventDefault();
        onClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hotkey, onClick]);

  return (
    <button
      onClick={onClick}
      type={type}
      className={cn(
        styles.button,
        ButtonStyleToClassMap[style],
        ButtonSizesToClassMap[size],
        className,
        {
          [styles.error]: error,
          [styles.allWidth]: allWidth,
          [styles.iconButton]: iconButton,
        },
      )}
      disabled={loading}
    >
      <div
        className={cn(styles.contentWrapper, {
          [styles.hide]: loading,
          [styles.alignLeft]: alignLeft,
        })}
      >
        {Icon && <Icon className={styles.icon} />}
        {text && (
          <Text
            type={TextTypes.TEXT}
            style={ButtonStyleToTextStyleMap[style]}
            size={ButtonSizesToTextSizesMap[size]}
            weight={TextWeights.MEDIUM}
          >
            {text}
          </Text>
        )}
      </div>
      {loading && (
        <div className={styles.loaderWrapper}>
          <Logo
            size={ButtonSizesToLogoSizesMap[size]}
            isLoading
            style={ButtonStyleToLogoStyleMap[style]}
          />
        </div>
      )}
    </button>
  );
};

export default Button;
