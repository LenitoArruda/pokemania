//CSS
import styles from "./Header.module.css";

//SVG
import logo from "../img/logo.svg";

//COMPONENTS
import Search from "./inputs/Search";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <Search />
    </header>
  );
}

export default Header;
