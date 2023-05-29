import styles from "./articles-grid.module.css";
import ArticleItem from "./article-item";

const ArticlesGrid = ({ articles }) => {
  return (
    <ul className={styles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </ul>
  );
};

export default ArticlesGrid;
