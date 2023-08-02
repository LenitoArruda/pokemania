import styles from "./TypeFilter.module.css";

export default function TypeFilter({ pokemonTypes, pokemonType }) {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    pokemonType(selectedValue);
  };

  return (
    <div className={styles.exibition}>
      <span>Filtrar por tipo: </span>
      <select
        className={styles.options}
        onChange={handleSelectChange}
        defaultValue="todos"
      >
        <option value="todos">Todos pokemons</option>
      </select>
    </div>
  );
}
