import Button from "@/Entities/Button";
import ButtonSizes from "@/Entities/Button/Types/ButtonSizes.ts";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./RegistrationCta.module.scss";

const RegistrationCta = () => {
  return (
    <section className={styles.registrationCta}>
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
        <Button
          text={Texts.button}
          size={ButtonSizes.L}
          style={ButtonStyles.PRIMARY}
          className={styles.button}
        />
      </Surface>
    </section>
  );
};

export default RegistrationCta;
