import styles from "./header-home.module.css";
import useTranslation from "next-translate/useTranslation";

const HeaderHome = () => {
  const { t } = useTranslation("home-page");

  const tasks = [
    t("tasks.first"),
    t("tasks.second"),
    t("tasks.third"),
    t("tasks.fourth"),
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p>{t("introduction")}</p>
        <p>{t("tasks.description")}</p>
        <ul>
          {tasks.map((task) => (
            <li key={task}>{task}</li>
          ))}
        </ul>
        <p>{t("members")}</p>
      </div>
    </header>
  );
};

export default HeaderHome;
