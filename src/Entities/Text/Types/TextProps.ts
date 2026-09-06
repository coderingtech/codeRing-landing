import { type MultiLanguage } from "@/Shared/Types/MultiLanguage.ts";

import { type TextSize } from "@/Entities/Text/Types/TextSizes.ts";
import { type TextStyle } from "@/Entities/Text/Types/TextStyles.ts";
import { type TextType } from "@/Entities/Text/Types/TextTypes.ts";
import { type TextWeight } from "@/Entities/Text/Types/TextWeights.ts";

export interface TextProps {
  type: TextType;
  children: MultiLanguage | string;
  size?: TextSize;
  weight?: TextWeight;
  style?: TextStyle;
  className?: string;
}
