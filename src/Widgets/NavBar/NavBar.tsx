import Button from "@/Entities/Button";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";
import Codering from "@/Entities/Codering";
import Surface from "@/Entities/Surface";

import Texts from "./Consts/Texts.ts";
import styles from "./NavBar.module.scss";

const centerButtons = [
  Texts.navigation.button1,
  Texts.navigation.button2,
  Texts.navigation.button3,
];

const NavBar = () => {
  return (
    <Surface className={styles.surface}>
      <nav className={styles.navBar}>
        <Codering />
        <div className={styles.centerButtons}>
          {centerButtons.map((text, index) => (
            <Button
              key={index}
              text={text}
              style={ButtonStyles.TRANSPARENT}
            />
          ))}
        </div>
        <Button text={Texts.login} style={ButtonStyles.PRIMARY} />
      </nav>
    </Surface>
  );
};

export default NavBar;
