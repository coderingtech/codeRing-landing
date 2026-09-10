import FeatureCard from "@/Entities/FeatureCard";
import Section from "@/Entities/Section";
import SectionIds from "@/Shared/Consts/SectionIds.ts";

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
    <Section
      id={SectionIds.Security}
      title={Texts.title}
      subtitle={Texts.subtitle}
    >
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            title={card.title}
            text={card.text}
            className={styles.card}
          />
        ))}
      </div>
    </Section>
  );
};

export default Security;
