import styles from "./Types.module.css";
import getTypeBackgroundColor from "../../functions/getTypeBackgroundColor";

export default function Types({ pokemon }) {
  return (
    <ul className={styles.types}>
      {pokemon.pokemon_v2_pokemontypes.map((type) => (
        <li
          key={type.pokemon_v2_type.name}
          className={styles.type}
          style={{
            backgroundColor: getTypeBackgroundColor(type.pokemon_v2_type.name),
          }}
        >
          {type.pokemon_v2_type.name}
        </li>
      ))}
    </ul>
  );
}
