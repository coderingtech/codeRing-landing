import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import { technologies, type Technology } from "./Consts/Technologies.ts";
import Texts from "./Consts/Texts.ts";
import styles from "./TechStack.module.scss";

const renderTechnology = (
  technology: Technology,
  key: number,
  hidden: boolean,
) => (
  <svg
    key={key}
    className={styles.logo}
    viewBox={technology.viewBox}
    role="img"
    aria-label={technology.label}
    aria-hidden={hidden || undefined}
  >
    {technology.paths.map((path, pathIndex) => (
      <path key={pathIndex} d={path.d} fill={path.fill ?? technology.color} />
    ))}
  </svg>
);

const TechStack = () => {
  return (
    <section className={styles.techStack}>
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
        <div className={styles.marquee}>
          <div className={styles.marqueeTrack}>
            {[false, true].map((hidden, copyIndex) => (
              <div
                className={styles.marqueeContent}
                aria-hidden={hidden || undefined}
                key={copyIndex}
              >
                {technologies.map((technology, index) =>
                  renderTechnology(technology, index, hidden),
                )}
              </div>
            ))}
          </div>
        </div>
      </Surface>
    </section>
  );
};

export default TechStack;
