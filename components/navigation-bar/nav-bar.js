import { Fragment } from "react";
import styles from "./nav-bar.module.css";
import Link from "next/link";
import NavLogo from "./nav-logo";
import useTranslation from "next-translate/useTranslation";
import LoginButton from "../auth/login-button";
import { useSession, signOut } from "next-auth/react";
import LogoutButton from "../auth/logout-button";
import LanguageSwitcher from "../layout/language/language-switcher";

const NavLink = ({ id, text, route }) => {
  return <li key={id}>{<Link href={route}>{text}</Link>}</li>;
};

const NavBar = () => {
  const { data: session } = useSession();
  const { t } = useTranslation("nav-bar");

  const unprotectedRoutes = [
    { id: "up-route-1", route: "/administration", text: t("administration") },
    { id: "up-route-2", route: "/hydroacoustic", text: t("hydroacoustic") },
    { id: "up-route-3", route: "/database", text: t("database") },
    { id: "up-route-4", route: "/contact", text: t("contact") },
  ];

  const protectedRoutes = [
    { id: "p-route-1", route: "/panel", text: t("panel") },
  ];

  return (
    <Fragment>
      <header className={styles.header}>
        <Link href="/">
          <NavLogo />
        </Link>
        <nav>
          <ul>
            {unprotectedRoutes.map((props) => (
              <NavLink {...props} />
            ))}
            {session && protectedRoutes.map((props) => <NavLink {...props} />)}
            {session ? (
              <LogoutButton signOut={signOut} key="logout-button" t={t} />
            ) : (
              <LoginButton key="login-button" t={t} />
            )}
          </ul>
        </nav>
        <LanguageSwitcher />
      </header>
    </Fragment>
  );
};

export default NavBar;
