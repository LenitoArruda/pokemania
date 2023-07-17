import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.dotspinner}>
      <div className={styles.dotspinner__dot}></div>
      <div className={styles.dotspinner__dot}></div>
      <div className={styles.dotspinner__dot}></div>
      <div className={styles.dotspinner__dot}></div>
      <div className={styles.dotspinner__dot}></div>
      <div className={styles.dotspinner__dot}></div>
      <div className={styles.dotspinner__dot}></div>
      <div className={styles.dotspinner__dot}></div>
    </div>
  );
}
