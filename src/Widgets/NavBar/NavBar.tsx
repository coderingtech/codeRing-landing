import Button from "@/Entities/Button";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import Codering from "@/Entities/Codering";
import Surface from "@/Entities/Surface";
import SectionIds, { type SectionId } from "@/Shared/Consts/SectionIds.ts";
import useScrollToSection from "@/Shared/Hooks/useScrollToSection.ts";
import { type MultiLanguage } from "@/Shared/Types/MultiLanguage.ts";

import Texts from "./Consts/Texts.ts";
import styles from "./NavBar.module.scss";

interface NavigationItem {
  text: MultiLanguage;
  sectionId: SectionId;
}

const navigationItems: NavigationItem[] = [
  { text: Texts.navigation.howItWorks, sectionId: SectionIds.HowItWorks },
  { text: Texts.navigation.security, sectionId: SectionIds.Security },
  { text: Texts.navigation.compatibility, sectionId: SectionIds.TechStack },
  { text: Texts.navigation.pricing, sectionId: SectionIds.Pricing },
];

const NavBar = () => {
  const scrollToSection = useScrollToSection();

  return (
    <>
      <div className={styles.gradient} aria-hidden="true" />
      <Surface className={styles.surface}>
        <nav className={styles.navBar}>
          <Codering isClickable />
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
