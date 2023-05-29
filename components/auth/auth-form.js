import { useRef } from "react";
import styles from "./auth-form.module.css";
import { signIn } from "next-auth/react";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import {
  pendingToast,
  successToast,
  errorToast,
} from "@/helpers/toast/toaster-utils";

const AuthForm = () => {
  const { t } = useTranslation("auth");
  const emailInputRef = useRef();
  const router = useRouter();
  const passwordInputRef = useRef();

  const onSubmit = async (e) => {
    e.preventDefault();

    const notification = pendingToast(t("pendingToast"));

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (!enteredEmail || !enteredEmail.includes("@"))
      throw new Error("Check out your email! It has to contain an '@' char! ");

    if (!enteredPassword || enteredPassword.trim() < 6)
      throw new Error(
        "Check out your password! It has to be at least 6 characters long..."
      );

    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (result.ok) successToast(notification, t("successToast"));
    if (!result.ok) errorToast(notification, t("errorToast"));

    if (!result.error) {
      router.replace("/");
    }
  };

  return (
    <section className={styles.auth}>
      <h1>{t("greet")}</h1>
      <form onSubmit={onSubmit}>
        <div className={styles.control}>
          <label htmlFor="email">{t("greet")} </label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="password">{t("password")} </label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={styles.actions}>
          <button>{t("login")}</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
