import Hero from "@/Widgets/Hero";
import NavBar from "@/Widgets/NavBar";

import styles from "./Layout.module.scss";

const Layout = () => {
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
