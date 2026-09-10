import Button from "@/Entities/Button";
import ButtonSizes from "@/Entities/Button/Types/ButtonSizes.ts";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import Section from "@/Entities/Section";
import useIsMobile from "@/Shared/Hooks/useIsMobile.ts";

import Texts from "./Consts/Texts.ts";

const RegistrationCta = () => {
  const isMobile = useIsMobile();

  return (
    <Section title={Texts.title} subtitle={Texts.subtitle}>
      <Button
        text={Texts.button}
        size={ButtonSizes.M}
        style={ButtonStyles.PRIMARY}
        allWidth={isMobile}
      />
    </Section>
  );
};

export default RegistrationCta;
