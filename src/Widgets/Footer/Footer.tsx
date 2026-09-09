import Codering from "@/Entities/Codering";
import Link from "@/Entities/Link";
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
        <Codering />
        <div className={styles.columns}>
          <Text
            type={TextTypes.TEXT}
            size={TextSizes.M}
            weight={TextWeights.REGULAR}
            style={TextStyles.SUBTITLE}
            className={styles.slogan}
          >
            {Texts.slogan}
          </Text>
          <nav className={styles.links}>
            {documentLinks.map((link, index) => (
              <Link key={index} text={link.text} href={GOOGLE_URL} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
