import LogoStyles from "@/Entities/Logo/Types/LogoStyles.ts";

import styles from "../Logo.module.scss";

const LogoStyleToClassNameMap = {
  [LogoStyles.WHITE]: styles.white,
  [LogoStyles.BLACK]: styles.black,
};

export default LogoStyleToClassNameMap;
