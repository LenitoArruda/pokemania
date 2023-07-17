import styles from "./TypeFilter.module.css";

export default function TypeFilter({ pagNum }) {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    pagNum(selectedValue);
  };

  return (
    <div className={styles.exibition}>
      <span>Filtrar por tipo: </span>
      <select
        className={styles.options}
        onChange={handleSelectChange}
        defaultValue="50"
      >
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="500">500</option>
      </select>
    </div>
  );
}
