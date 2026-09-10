import FeatureCard from "@/Entities/FeatureCard";
import Section from "@/Entities/Section";
import SectionIds from "@/Shared/Consts/SectionIds.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <Section
      id={SectionIds.Pricing}
      title={Texts.title}
      subtitle={Texts.subtitle}
    >
      <FeatureCard
        title={Texts.realCase.title}
        text={Texts.realCase.text}
        className={styles.card}
      />
    </Section>
  );
};

export default Pricing;
