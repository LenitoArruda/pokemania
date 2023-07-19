import styles from "./PageExibition.module.css";

export default function PageExibition({ pagNum }) {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    pagNum(selectedValue);
  };

  return (
    <div className={styles.exibition}>
      <span>Pokemons por página: </span>
      <select
        className={styles.options}
        onChange={handleSelectChange}
        defaultValue="100"
      >
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
      </select>
    </div>
  );
}
