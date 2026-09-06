import type { ReactNode } from "react";

import type { MultiLanguage } from "@/Shared/Types/MultiLanguage.ts";
import cn from "classnames";

import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import { type TextStyle } from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import styles from "./Surface.module.scss";

interface Props {
  children: ReactNode | null;
  className?: string;
  title?: MultiLanguage | string;
  rightSection?: ReactNode;
  titleStyle?: TextStyle;
}

const Surface = ({
  children,
  className,
  title,
  rightSection,
  titleStyle,
}: Props) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      {title && (
        <div className={styles.titleWrapper}>
          <Text
            type={TextTypes.TITLE}
            size={TextSizes.XS}
            weight={TextWeights.SEMIBOLD}
            style={titleStyle}
          >
            {title}
          </Text>
          {rightSection}
        </div>
      )}
      {children}
    </div>
  );
};

export default Surface;
