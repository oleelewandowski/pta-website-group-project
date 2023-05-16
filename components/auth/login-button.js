import React from "react";
import Link from "next/link";
import styles from "./login-button.module.css";

const LoginButton = ({ t }) => {
  return (
    <li className={styles.loginButton}>
      <Link href="/login"> {t("loginButton")} </Link>
    </li>
  );
};

export default LoginButton;
