import styles from "@/Entities/Button/Button.module.scss";
import ButtonSizes from "@/Entities/Button/Types/ButtonSizes.ts";

const ButtonSizesToClassMap = {
  [ButtonSizes.S]: styles.small,
  [ButtonSizes.M]: styles.medium,
  [ButtonSizes.L]: styles.large,
};

export default ButtonSizesToClassMap;
