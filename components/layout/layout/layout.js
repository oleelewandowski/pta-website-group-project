import styles from "./layout.module.css";
import NavBar from "../../navigation-bar/nav-bar";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
