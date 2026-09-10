import Button from "@/Entities/Button";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import Codering from "@/Entities/Codering";
import Surface from "@/Entities/Surface";

import Texts from "./Consts/Texts.ts";
import styles from "./NavBar.module.scss";

const navigationItems = [
  { text: Texts.navigation.howItWorks, sectionId: "how-it-works" },
  { text: Texts.navigation.security, sectionId: "security" },
  { text: Texts.navigation.compatibility, sectionId: "tech-stack" },
];

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const NavBar = () => {
  return (
    <>
      <div className={styles.gradient} aria-hidden="true" />
      <Surface className={styles.surface}>
        <nav className={styles.navBar}>
          <Codering />
          <div className={styles.centerButtons}>
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                text={item.text}
                style={ButtonStyles.TRANSPARENT}
                onClick={() => scrollToSection(item.sectionId)}
              />
            ))}
          </div>
          <Button text={Texts.login} style={ButtonStyles.PRIMARY} />
        </nav>
      </Surface>
    </>
  );
};

export default NavBar;
