import Button from "@/Entities/Button";
import ButtonSizes from "@/Entities/Button/Types/ButtonSizes.ts";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";
import useIsMobile from "@/Shared/Hooks/useIsMobile.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./RegistrationCta.module.scss";

const RegistrationCta = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.registrationCta}>
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
        <Button
          text={Texts.button}
          size={ButtonSizes.M}
          style={ButtonStyles.PRIMARY}
          allWidth={isMobile}
        />
      </Surface>
    </section>
  );
};

export default RegistrationCta;
