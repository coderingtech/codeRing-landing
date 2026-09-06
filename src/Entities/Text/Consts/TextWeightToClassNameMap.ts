import TextWeights from "@/Entities/Text/Types/TextWeights.ts";

import styles from "../Text.module.scss";

const TextWeightToClassNameMap = {
  [TextWeights.LIGHT]: styles.lightWeight,
  [TextWeights.REGULAR]: styles.regularWeight,
  [TextWeights.MEDIUM]: styles.mediumWeight,
  [TextWeights.SEMIBOLD]: styles.semiboldWeight,
  [TextWeights.BOLD]: styles.boldWeight,
};

export default TextWeightToClassNameMap;
