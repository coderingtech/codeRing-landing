import { type FC } from "react";

import { type MultiLanguage } from "@/Shared/Types/MultiLanguage.ts";
import { type IconProps } from "@tabler/icons-react";

import { type ButtonSize } from "@/Entities/Button/Types/ButtonSizes.ts";
import { type ButtonStyle } from "@/Entities/Button/Types/ButtonStyles.ts";
import { type ButtonType } from "@/Entities/Button/Types/ButtonTypes.ts";
import { type Key } from "@/Entities/Button/Types/Keys.ts";

export interface ButtonProps {
  text?: MultiLanguage | string;
  onClick?: () => void;
  icon?: FC<IconProps>;
  style?: ButtonStyle;
  allWidth?: boolean;
  alignLeft?: boolean;
  type?: ButtonType;
  className?: string;
  loading?: boolean;
  size?: ButtonSize;
  error?: boolean;
  hotkey?: Key;
}
