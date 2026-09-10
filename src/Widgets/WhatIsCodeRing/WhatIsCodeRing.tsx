import FeatureCard from "@/Entities/FeatureCard";
import Section from "@/Entities/Section";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";
import SectionIds from "@/Shared/Consts/SectionIds.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./WhatIsCodeRing.module.scss";

const steps = [
  Texts.steps.createProject,
  Texts.steps.connectRepositories,
  Texts.steps.assignTask,
  Texts.steps.development,
  Texts.steps.readyPullRequest,
];

const WhatIsCodeRing = () => {
  return (
    <Section id={SectionIds.HowItWorks} title={Texts.title}>
      <Text
        type={TextTypes.TEXT}
        size={TextSizes.M}
        weight={TextWeights.REGULAR}
        className={styles.paragraph}
      >
        {Texts.description.paragraph1}
      </Text>
      <Text
        type={TextTypes.TEXT}
        size={TextSizes.M}
        weight={TextWeights.REGULAR}
        className={styles.paragraph}
      >
        {Texts.description.paragraph2}
      </Text>
      <div className={styles.howItWorks}>
        <Text
          type={TextTypes.TEXT}
          size={TextSizes.M}
          weight={TextWeights.BOLD}
        >
          {Texts.howItWorksTitle}
        </Text>
        <ul className={styles.steps}>
          {steps.map((step, index) => (
            <li key={index}>
              <FeatureCard
                number={index + 1}
                title={step.title}
                text={step.text}
                className={styles.step}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default WhatIsCodeRing;
