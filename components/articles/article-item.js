import Link from "next/link";
import Image from "next/image";
import styles from "./article-item.module.css";

const ArticleItem = ({ article }) => {
  const { title, image, snippet, date, slug } = article;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/articles/${slug}/${image}`;

  const linkPath = `/articles/${slug}`;

  return (
    <li className={styles.article}>
      <Link href={linkPath}>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} fill />
        </div>
        <div className={styles.content}>
          <h3> {title} </h3>
          <time> {formattedDate} </time>
          <p> {snippet} </p>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;
