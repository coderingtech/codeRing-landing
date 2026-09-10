import { IconChevronDown, IconExternalLink } from "@tabler/icons-react";

import useMultiLanguage from "@/Shared/Hooks/useMultiLanguage.ts";

import Button from "@/Entities/Button";
import ButtonSizes from "@/Entities/Button/Types/ButtonSizes.ts";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import LetterGlitch from "@/Entities/LetterGlitch";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./Hero.module.scss";

const REPOSITORY_URL = "https://github.com/coderingtech/codeRing-landing";
const HOW_IT_WORKS_SECTION_ID = "how-it-works";

const openRepository = () => {
  window.open(REPOSITORY_URL, "_blank", "noopener,noreferrer");
};

const scrollToHowItWorks = () => {
  document.getElementById(HOW_IT_WORKS_SECTION_ID)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Hero = () => {
  const { getText } = useMultiLanguage();

  return (
    <section className={styles.hero}>
      <LetterGlitch
        className={styles.background}
        glitchColors={["#4c1d95", "#5b21b6", "#6d28d9", "#7c3aed"]}
        glitchSpeed={60}
        smooth
      />
      <div className={styles.content}>
        <Text
          type={TextTypes.TITLE}
          size={TextSizes.L}
          weight={TextWeights.BOLD}
          style={TextStyles.WHITE}
          className={styles.title}
        >
          {Texts.title}
        </Text>
        <Text
          type={TextTypes.TEXT}
          size={TextSizes.L}
          weight={TextWeights.REGULAR}
          style={TextStyles.WHITE}
          className={styles.subtitle}
        >
          {Texts.subtitle}
        </Text>
        <Button
          text={Texts.repositoryButton}
          onClick={openRepository}
          icon={IconExternalLink}
          size={ButtonSizes.L}
          style={ButtonStyles.PRIMARY}
        />
      </div>
      <div className={styles.scrollCta}>
        <button
          type="button"
          className={styles.scrollButton}
          onClick={scrollToHowItWorks}
          aria-label={getText(Texts.scrollToHowItWorks)}
        >
          <Text
            type={TextTypes.TEXT}
            size={TextSizes.M}
            weight={TextWeights.MEDIUM}
            style={TextStyles.WHITE}
          >
            {Texts.next}
          </Text>
          <IconChevronDown className={styles.scrollArrow} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
