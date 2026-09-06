import * as React from "react";

import useMultiLanguage from "@/Shared/Hooks/useMultiLanguage.ts";
import cn from "classnames";

import TextDefaults from "@/Entities/Text/Consts/TextDefaults.ts";
import TextSizeToClassNameMap from "@/Entities/Text/Consts/TextSizeToClassNameMap.ts";
import TextStyleToClassNameMap from "@/Entities/Text/Consts/TextStyleToClassNameMap.ts";
import TextTags from "@/Entities/Text/Consts/TextTags.ts";
import TextTypeToClassNameMap from "@/Entities/Text/Consts/TextTypeToClassNameMap.ts";
import TextWeightToClassNameMap from "@/Entities/Text/Consts/TextWeightToClassNameMap.ts";
import { type TextProps } from "@/Entities/Text/Types/TextProps.ts";

import styles from "./Text.module.scss";

const Text = ({
  type,
  children,
  size = TextDefaults.size,
  weight = TextDefaults.weight,
  style = TextDefaults.style,
  className,
}: TextProps) => {
  const { getText } = useMultiLanguage();

  const text = typeof children === "string" ? children : getText(children);

  return React.createElement(
    TextTags[type],
    {
      className: cn(
        styles.common,
        className,
        TextTypeToClassNameMap[type],
        TextSizeToClassNameMap[size],
        TextWeightToClassNameMap[weight],
        TextStyleToClassNameMap[style],
      ),
    },
    text,
  );
};

export default Text;
