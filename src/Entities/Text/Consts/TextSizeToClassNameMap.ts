import TextSizes from "@/Entities/Text/Types/TextSizes.ts";

import styles from "../Text.module.scss";

const TextSizeToClassNameMap = {
  [TextSizes.XS]: styles.extraSmallSize,
  [TextSizes.S]: styles.smallSize,
  [TextSizes.M]: styles.mediumSize,
  [TextSizes.L]: styles.largeSize,
};

export default TextSizeToClassNameMap;
