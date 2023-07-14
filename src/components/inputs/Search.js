import styles from "./Search.module.css";
import icon from "../../img/search.svg";

function Search() {
  return (
    <div className={styles.pesquisar}>
      <img src={icon} alt="Pesquisar" className={styles.icon} />
      <input
        type="text"
        placeholder="Pesquise o Pokemon"
        className={styles.label}
      />
    </div>
  );
}

export default Search;
