import ArticlesGrid from "./articles-grid";
import styles from "./all-articles.module.css";
import { useArticles } from "@/hooks/articles";
import useTranslation from "next-translate/useTranslation";
import ErrorHandler from "../../helpers/error-handlers/error-occured";
import { ARTCILE_TYPE_FEATURED } from "@/constants/api-constants";
import Loader from "@/helpers/loaders/basic-loader";

const AllArticles = () => {
  const { data, isLoading, error } = useArticles(ARTCILE_TYPE_FEATURED);
  const { t } = useTranslation("home-page");

  return (
    <section className={styles.articles}>
      <div className={styles.wrapper}>
        <h2>{t("articles")}</h2>
        {!!error ? <ErrorHandler error={error} /> : null}
        {isLoading ? <Loader /> : <ArticlesGrid articles={data?.articles} />}
      </div>
    </section>
  );
};

export default AllArticles;
