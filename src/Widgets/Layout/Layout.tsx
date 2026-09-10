import useFontsLoaded from "@/Shared/Hooks/useFontsLoaded.ts";
import Footer from "@/Widgets/Footer";
import Hero from "@/Widgets/Hero";
import LoadingScreen from "@/Widgets/LoadingScreen";
import NavBar from "@/Widgets/NavBar";
import RegistrationCta from "@/Widgets/RegistrationCta";
import Security from "@/Widgets/Security";
import TechStack from "@/Widgets/TechStack";
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
      <TechStack />
      <RegistrationCta />
      <Footer />
    </div>
  );
};

export default Layout;
