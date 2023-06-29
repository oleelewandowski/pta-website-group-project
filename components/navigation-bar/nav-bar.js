import styles from "./nav-bar.module.css";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import LoginButton from "../auth/login-button";
import { useSession, signOut } from "next-auth/react";
import LogoutButton from "../auth/logout-button";
import LanguageSwitcher from "../layout/language/language-switcher";
import { useRouter } from "next/router";

const NavLink = ({ id, text, route, active }) => {
  return (
    <li key={id} className={active ? styles.active : ""}>
      {<Link href={route}>{text}</Link>}
    </li>
  );
};

const NavBar = () => {
  const { data: session } = useSession();
  const { t } = useTranslation("nav-bar");
  const router = useRouter();

  const unprotectedRoutes = [
    { id: "up-route-0", route: "/", text: t("homePage") },
    { id: "up-route-1", route: "/administration", text: t("administration") },
    { id: "up-route-2", route: "/hydroacoustic", text: t("hydroacoustic") },
    { id: "up-route-3", route: "/database", text: t("database") },
    { id: "up-route-4", route: "/contact", text: t("contact") },
  ];

  const protectedRoutes = [
    { id: "p-route-1", route: "/panel/overview", text: t("panel") },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {unprotectedRoutes.map((props) => (
            <NavLink
              key={props.id}
              {...props}
              active={router.pathname === props.route}
            />
          ))}
          {session && protectedRoutes.map((props) => <NavLink {...props} />)}
          {session ? (
            <LogoutButton signOut={signOut} key="logout-button" t={t} />
          ) : (
            <LoginButton key="login-button" t={t} />
          )}
          <LanguageSwitcher />
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
