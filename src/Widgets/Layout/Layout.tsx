import useFontsLoaded from "@/Shared/Hooks/useFontsLoaded.ts";
import Hero from "@/Widgets/Hero";
import LoadingScreen from "@/Widgets/LoadingScreen";
import NavBar from "@/Widgets/NavBar";

import styles from "./Layout.module.scss";

const Layout = () => {
  const fontsLoaded = useFontsLoaded();

  if (!fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className={styles.layout}>
      <div className={styles.navBarWrapper}>
        <NavBar />
      </div>
      <Hero />
    </div>
  );
};

export default Layout;
