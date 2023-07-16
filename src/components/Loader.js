import styles from "./Loader.module.css";

function Loader() {
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

export default Loader;
