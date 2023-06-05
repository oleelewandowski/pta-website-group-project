import Link from "next/link";
import Image from "next/image";
import styles from "./article-item.module.css";
import { useRouter } from "next/router";

const ArticleItem = ({ article }) => {
  const { translations, image, date, _id } = article;
  const router = useRouter();

  const { locale: activeLocale } = router;
  const { title, snippet } = translations[activeLocale];

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/articles/${image}`;

  const linkPath = `/articles/${_id}`;

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
