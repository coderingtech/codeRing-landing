import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./Security.module.scss";

const cards = [
  Texts.cards.zeroDataRetention,
  Texts.cards.minimalContext,
  Texts.cards.repositoryAccess,
  Texts.cards.controlOverChanges,
];

const Security = () => {
  return (
    <section className={styles.security} id="security">
      <Surface className={styles.surface} title={Texts.title}>
        <Text
          type={TextTypes.TEXT}
          size={TextSizes.M}
          weight={TextWeights.REGULAR}
          style={TextStyles.SUBTITLE}
          className={styles.subtitle}
        >
          {Texts.subtitle}
        </Text>
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>
              <Text
                type={TextTypes.TEXT}
                size={TextSizes.M}
                weight={TextWeights.SEMIBOLD}
                className={styles.cardTitle}
              >
                {card.title}
              </Text>
              <Text
                type={TextTypes.TEXT}
                size={TextSizes.M}
                weight={TextWeights.REGULAR}
                style={TextStyles.SUBTITLE}
                className={styles.cardText}
              >
                {card.text}
              </Text>
            </div>
          ))}
        </div>
      </Surface>
    </section>
  );
};

export default Security;
