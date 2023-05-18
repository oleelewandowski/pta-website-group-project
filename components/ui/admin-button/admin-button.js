import styles from "./admin-button.module.css";
import Link from "next/link";

const AdminButton = ({ href = "/", icon, description = "" }) => {
  return (
    <div className={styles.admin}>
      <Link href={href}>
        <div className={styles.content}>
          <div className={styles.icon}>{icon}</div>
          <p> {description} </p>
        </div>
      </Link>
    </div>
  );
};

export default AdminButton;
