import styles from "@/Entities/Button/Button.module.scss";
import ButtonStyles from "@/Entities/Button/Types/ButtonStyles.ts";

const ButtonStyleToClassMap = {
  [ButtonStyles.PRIMARY]: styles.primary,
  [ButtonStyles.SECONDARY]: styles.secondary,
  [ButtonStyles.BORDER]: styles.border,
  [ButtonStyles.TRANSPARENT]: styles.transparent,
  [ButtonStyles.PRIMARY_RED]: styles.primaryRed,
};

export default ButtonStyleToClassMap;
