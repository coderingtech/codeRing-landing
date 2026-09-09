import cn from "classnames";

import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import StackItems, { type StackItem } from "./Consts/StackItems.ts";
import Texts from "./Consts/Texts.ts";
import styles from "./Stack.module.scss";

interface StackItemProps {
  item: StackItem;
}

const StackLogo = ({ item }: StackItemProps) => (
  <li className={styles.item}>
    <svg
      className={styles.logo}
      viewBox="0 0 24 24"
      role="img"
      aria-label={item.name}
    >
      <path d={item.path} fill={item.color} />
    </svg>
  </li>
);

const Stack = () => {
  return (
    <section className={styles.stack}>
      <div className={styles.surfaceWrap}>
        <Surface className={styles.surface}>
          <Text
            type={TextTypes.TITLE}
            size={TextSizes.L}
            weight={TextWeights.MEDIUM}
            className={styles.title}
          >
            {Texts.title}
          </Text>
          <Text
            type={TextTypes.TEXT}
            size={TextSizes.L}
            weight={TextWeights.REGULAR}
            style={TextStyles.SUBTITLE}
            className={styles.subtitle}
          >
            {Texts.subtitle}
          </Text>
        </Surface>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          <ul className={styles.group}>
            {StackItems.map((item) => (
              <StackLogo key={item.name} item={item} />
            ))}
          </ul>
          <ul className={cn(styles.group, styles.duplicate)} aria-hidden="true">
            {StackItems.map((item) => (
              <StackLogo key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stack;
