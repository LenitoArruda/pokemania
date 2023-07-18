import styles from "./SocialLinks.module.css";

export default function SocialLinks() {
  return (
    <div className={styles.linksContainer}>
      <a
        href="https://www.linkedin.com/in/lenito-arruda/"
        className={`${styles.linkedin} ${styles.svgIcons}`}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
      <a
        href="https://github.com/LenitoArruda"
        className={`${styles.github} ${styles.svgIcons}`}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
      <a
        href="https://www.facebook.com/lenito.arruda"
        className={`${styles.facebook} ${styles.svgIcons}`}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
      <a
        href="https://www.instagram.com/lenitoarruda/"
        className={`${styles.instagram} ${styles.svgIcons}`}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
      <a
        href="mailto:lenitoarruda@hotmail.com"
        className={`${styles.mail} ${styles.svgIcons}`}
        target="_blank"
        rel="noreferrer"
      >
        {" "}
      </a>
    </div>
  );
}
