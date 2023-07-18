//CSS
import styles from "./Footer.module.css";

//Componentes
import SocialLinks from "../layouts/SocialLinks";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <SocialLinks />
      <p>&copy; 2023 Lenito Arruda</p>
    </footer>
  );
}
