//CSS
import styles from "./Header.module.css";

//SVG
import logo from "../img/logo.svg";

//COMPONENTS
import Search from "./inputs/Search";

function Header({ headerToApp }) {
  const searchToHeader = (childdata) => {
    headerToApp(childdata);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <Search searchToHeader={searchToHeader} />
    </header>
  );
}

export default Header;
