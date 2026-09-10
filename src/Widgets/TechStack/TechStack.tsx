import Section from "@/Entities/Section";
import SectionIds from "@/Shared/Consts/SectionIds.ts";

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
    <Section
      id={SectionIds.TechStack}
      title={Texts.title}
      subtitle={Texts.subtitle}
    >
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
    </Section>
  );
};

export default TechStack;
