import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import StackItems from "./Consts/StackItems.ts";
import Texts from "./Consts/Texts.ts";
import styles from "./Stack.module.scss";

interface StackItemProps {
  name: string;
}

const StackItem = ({ name }: StackItemProps) => (
  <li className={styles.item}>
    <Text
      type={TextTypes.TEXT}
      size={TextSizes.M}
      weight={TextWeights.SEMIBOLD}
    >
      {name}
    </Text>
  </li>
);

const Stack = () => {
  return (
    <section className={styles.stack}>
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
        <div className={styles.marquee}>
          <div className={styles.track}>
            <ul className={styles.group}>
              {StackItems.map((item) => (
                <StackItem key={item} name={item} />
              ))}
            </ul>
            <ul className={`${styles.group} ${styles.duplicate}`} aria-hidden="true">
              {StackItems.map((item) => (
                <StackItem key={item} name={item} />
              ))}
            </ul>
          </div>
        </div>
      </Surface>
    </section>
  );
};

export default Stack;
