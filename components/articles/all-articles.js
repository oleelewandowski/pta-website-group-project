import ArticlesGrid from "./articles-grid";
import styles from "./all-articles.module.css";
import Spinner from "react-spinner";
import { useArticles } from "@/hooks/articles";
import ErrorHandler from "../ui/error-handlers/error-occured";
import { ARTCILE_TYPE_FEATURED } from "@/constants/api-constants";

const AllArticles = () => {
  const { data, isLoading, error } = useArticles(ARTCILE_TYPE_FEATURED);

  return (
    <section className={styles.articles}>
      {!!error ? <ErrorHandler error={error} /> : null}
      {isLoading ? (
        <Spinner className={styles.spinner} />
      ) : (
        <ArticlesGrid articles={data?.articles} />
      )}
    </section>
  );
};

export default AllArticles;
