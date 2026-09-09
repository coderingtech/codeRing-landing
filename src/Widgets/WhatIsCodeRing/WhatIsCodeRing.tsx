import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

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
    <section className={styles.whatIsCodeRing}>
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
          className={styles.paragraph}
        >
          {Texts.description.paragraph1}
        </Text>
        <Text
          type={TextTypes.TEXT}
          size={TextSizes.L}
          weight={TextWeights.REGULAR}
          className={styles.paragraph}
        >
          {Texts.description.paragraph2}
        </Text>
        <div className={styles.howItWorks}>
          <Text
            type={TextTypes.TEXT}
            size={TextSizes.L}
            weight={TextWeights.BOLD}
          >
            {Texts.howItWorksTitle}
          </Text>
          <ul className={styles.steps}>
            {steps.map((step, index) => (
              <li className={styles.step} key={index}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div className={styles.stepContent}>
                  <Text
                    type={TextTypes.TEXT}
                    size={TextSizes.L}
                    weight={TextWeights.SEMIBOLD}
                    className={styles.stepTitle}
                  >
                    {step.title}
                  </Text>
                  <Text
                    type={TextTypes.TEXT}
                    size={TextSizes.M}
                    weight={TextWeights.REGULAR}
                    style={TextStyles.SUBTITLE}
                    className={styles.stepText}
                  >
                    {step.text}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Surface>
    </section>
  );
};

export default WhatIsCodeRing;
