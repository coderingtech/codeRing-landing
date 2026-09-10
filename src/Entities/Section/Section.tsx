import type { ReactNode } from "react";

import cn from "classnames";

import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";
import { type SectionId } from "@/Shared/Consts/SectionIds.ts";
import { type MultiLanguage } from "@/Shared/Types/MultiLanguage.ts";

import styles from "./Section.module.scss";

interface Props {
  children: ReactNode;
  title?: MultiLanguage;
  subtitle?: MultiLanguage;
  id?: SectionId;
  className?: string;
  surfaceClassName?: string;
}

const Section = ({
  children,
  title,
  subtitle,
  id,
  className,
  surfaceClassName,
}: Props) => {
  return (
    <section className={cn(styles.section, className)} id={id}>
      <Surface className={cn(styles.surface, surfaceClassName)} title={title}>
        {subtitle && (
          <Text
            type={TextTypes.TEXT}
            size={TextSizes.M}
            weight={TextWeights.REGULAR}
            style={TextStyles.SUBTITLE}
            className={styles.subtitle}
          >
            {subtitle}
          </Text>
        )}
        {children}
      </Surface>
    </section>
  );
};

export default Section;
