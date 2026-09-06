import styles from "../Text.module.scss";
import TextStyles from "@/Entities/Text/Types/TextStyles.ts";

const TextStyleToClassNameMap = {
  [TextStyles.WHITE]: styles.white,
  [TextStyles.SUBTITLE]: styles.subtitle,
  [TextStyles.BLACK]: styles.black,
  [TextStyles.ERROR]: styles.error,
  [TextStyles.SUCCESS]: styles.success,
};

export default TextStyleToClassNameMap;
