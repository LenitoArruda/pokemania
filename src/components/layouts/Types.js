//CSS
import styles from "./Types.module.css";
//Funcionalidades
import getTypeBackgroundColor from "../../functions/getTypeBackgroundColor";
import getPokemonTypes from "../../functions/getPokemonTypes";

export default function Types({ pokemon }) {
  console.log(getPokemonTypes);
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
