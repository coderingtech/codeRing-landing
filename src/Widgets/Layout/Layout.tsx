import useFontsLoaded from "@/Shared/Hooks/useFontsLoaded.ts";
import Hero from "@/Widgets/Hero";
import LoadingScreen from "@/Widgets/LoadingScreen";
import NavBar from "@/Widgets/NavBar";
import Security from "@/Widgets/Security";
import Stack from "@/Widgets/Stack";
import WhatIsCodeRing from "@/Widgets/WhatIsCodeRing";

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
      <WhatIsCodeRing />
      <Security />
      <Stack />
    </div>
  );
};

export default Layout;
