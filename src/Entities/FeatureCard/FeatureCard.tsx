import cn from "classnames";

import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";
import { type MultiLanguage } from "@/Shared/Types/MultiLanguage.ts";

import styles from "./FeatureCard.module.scss";

interface Props {
  title: MultiLanguage;
  text: MultiLanguage;
  number?: number;
  className?: string;
}

const FeatureCard = ({ title, text, number, className }: Props) => {
  return (
    <div
      className={cn(
        styles.card,
        { [styles.withNumber]: number !== undefined },
        className,
      )}
    >
      {number !== undefined && <span className={styles.number}>{number}</span>}
      <div className={styles.content}>
        <Text
          type={TextTypes.TEXT}
          size={TextSizes.M}
          weight={TextWeights.SEMIBOLD}
          className={styles.title}
        >
          {title}
        </Text>
        <Text
          type={TextTypes.TEXT}
          size={TextSizes.M}
          weight={TextWeights.REGULAR}
          style={TextStyles.SUBTITLE}
          className={styles.text}
        >
          {text}
        </Text>
      </div>
    </div>
  );
};

export default FeatureCard;
