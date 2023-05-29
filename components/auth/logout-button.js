import { logoutToast } from "@/helpers/toast/toaster-utils";
import styles from "./logout-button.module.css";
import Link from "next/link";
import React from "react";

const LogoutButton = ({ signOut, t }) => {
  const onLogout = () => {
    signOut();
    logoutToast(t("logoutToast"));
  };
  return (
    <li className={styles.loginButton}>
      <Link href="/" onClick={onLogout}>
        {t("logoutButton")}
      </Link>
    </li>
  );
};

export default LogoutButton;
