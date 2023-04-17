import { Fragment } from "react";
import styles from "./nav-bar.module.css";
import Link from "next/link";
import NavLogo from "./nav-logo";
import useTranslation from "next-translate/useTranslation";

const NavLink = ({ id, text, route }) => {
  return <li>{<Link href={route}>{text}</Link>}</li>;
};

const NavBar = () => {
  const { t } = useTranslation("nav-bar");

  const routes = [
    { id: "route-1", route: "/administration", text: t("administration") },
    { id: "route-2", route: "/hydroacoustic", text: t("hydroacoustic") },
    { id: "route-3", route: "/database", text: t("database") },
    { id: "route-4", route: "/contact", text: t("contact") },
  ];

  return (
    <Fragment>
      <header className={styles.header}>
        <Link href="/">
          <NavLogo />
        </Link>
        <nav>
          <ul>
            {routes.map((props) => (
              <NavLink {...props} />
            ))}
          </ul>
        </nav>
        {/* LOGOWANIE / JĘZYKI */}
      </header>
    </Fragment>
  );
};

export default NavBar;
