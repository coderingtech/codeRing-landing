import Logo from "@/Entities/Logo";

import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <Logo size={48} isLoading />
    </div>
  );
};

export default LoadingScreen;
