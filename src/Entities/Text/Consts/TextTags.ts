import type { ElementType } from "react";

import TextTypes, {
  type TextType,
} from "@/Entities/Text/Types/TextTypes.ts";

const TextTags: Record<TextType, ElementType> = {
  [TextTypes.TITLE]: "h2",
  [TextTypes.TEXT]: "p",
};

export default TextTags;
