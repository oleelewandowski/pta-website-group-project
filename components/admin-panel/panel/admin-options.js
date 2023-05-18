import styles from "./admin-options.module.css";
import AddArticle from "./add-article";
import ManageArticles from "./manage-articles";

const AdminOptions = () => {
  return (
    <section className={styles.options}>
      <AddArticle />
      <ManageArticles />
    </section>
  );
};

export default AdminOptions;
