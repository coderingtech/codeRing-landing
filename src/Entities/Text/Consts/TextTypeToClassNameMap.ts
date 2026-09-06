import TextTypes from "@/Entities/Text/Types/TextTypes.ts";

import styles from "../Text.module.scss";

const TextTypeToClassNameMap = {
  [TextTypes.TITLE]: styles.title,
  [TextTypes.TEXT]: styles.text,
};

export default TextTypeToClassNameMap;
