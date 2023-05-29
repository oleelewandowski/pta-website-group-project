import Image from "next/image";
import styles from "./article-header.module.css";

const ArticleHeader = ({ title, image }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={250} height={200} />
    </header>
  );
};

export default ArticleHeader;
