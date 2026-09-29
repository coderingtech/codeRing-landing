import { useState } from "react";

import Button from "@/Entities/Button";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import Surface from "@/Entities/Surface";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";
import useCookies from "@/Shared/Hooks/useCookies.ts";
import CookieKeys from "@/Shared/Types/CookieKeys.ts";

import Texts from "./Consts/Texts.ts";
import CookiesAgreementTypes, {
  type CookiesAgreementType,
} from "./Types/CookiesAgreementTypes.ts";
import styles from "./CookiesNotification.module.scss";

const CookiesNotification = () => {
  const { read, write } = useCookies();
  const [isVisible, setIsVisible] = useState(
    () => read(CookieKeys.COOKIES_AGREEMENT) === null,
  );

  const handleAgreement = (agreement: CookiesAgreementType) => {
    write(CookieKeys.COOKIES_AGREEMENT, agreement);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Surface className={styles.notification}>
      <div className={styles.content}>
        <Text
          type={TextTypes.TITLE}
          size={TextSizes.XS}
          weight={TextWeights.SEMIBOLD}
        >
          {Texts.title}
        </Text>
        <Text
          type={TextTypes.TEXT}
          size={TextSizes.S}
          weight={TextWeights.REGULAR}
          style={TextStyles.SUBTITLE}
        >
          {Texts.text}
        </Text>
      </div>
      <div className={styles.buttons}>
        <Button
          text={Texts.acceptAllButton}
          style={ButtonStyles.PRIMARY}
          onClick={() => handleAgreement(CookiesAgreementTypes.ALL)}
        />
        <Button
          text={Texts.onlyNecessaryButton}
          style={ButtonStyles.TRANSPARENT}
          onClick={() => handleAgreement(CookiesAgreementTypes.ONLY_NECESSARY)}
        />
      </div>
    </Surface>
  );
};

export default CookiesNotification;
