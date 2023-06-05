import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./language-switcher.module.css";
import Flag from "react-flagkit";
import { languageChangedToast } from "@/helpers/toast/toaster-utils";
import useTranslation from "next-translate/useTranslation";

const ENFlag = <Flag country="GB" size={18} />;
const PLFlag = <Flag country="PL" size={18} />;

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation("nav-bar");

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  return (
    <span className={styles.language}>
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link
              href={{ pathname, query }}
              as={asPath}
              locale={locale}
              onClick={() => languageChangedToast(t("LANGUAGE_SWITCH"))}
            >
              {locale === "en" ? ENFlag : locale === "pl" ? PLFlag : null}
            </Link>
          </span>
        );
      })}
    </span>
  );
};

export default LanguageSwitcher;
