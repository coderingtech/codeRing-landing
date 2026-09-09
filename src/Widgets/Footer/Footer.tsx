import Codering from "@/Entities/Codering";
import FooterLink from "@/Entities/FooterLink";
import Text from "@/Entities/Text";
import TextSizes from "@/Entities/Text/Types/TextSizes.ts";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";
import TextTypes from "@/Entities/Text/Types/TextTypes.ts";
import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./Footer.module.scss";

const GOOGLE_URL = "https://www.google.com";

const documentLinks = [
  { text: Texts.publicOffer },
  { text: Texts.privacyPolicy },
  { text: Texts.termsOfUse },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Codering />
          <Text
            type={TextTypes.TEXT}
            size={TextSizes.M}
            weight={TextWeights.REGULAR}
            style={TextStyles.SUBTITLE}
            className={styles.slogan}
          >
            {Texts.slogan}
          </Text>
        </div>
        <nav className={styles.links}>
          {documentLinks.map((link, index) => (
            <FooterLink key={index} text={link.text} href={GOOGLE_URL} />
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
