import styles from "./Search.module.css";
import icon from "../../img/search.svg";

export default function Search({ searchToHeader }) {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    searchToHeader(inputValue);
  };
  return (
    <div className={styles.pesquisar}>
      <img src={icon} alt="Pesquisar" className={styles.icon} />
      <input
        type="text"
        placeholder="Pesquise o Pokemon"
        className={styles.label}
        id="search"
        onChange={handleInputChange}
      />
    </div>
  );
}
