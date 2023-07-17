import styles from "./PokemonCard.module.css";
import getTypeBackgroundColor from "../../functions/getTypeBackgroundColor";

export default function PokemonCard({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  //Exibir primeira letra do nome do pokemon em maiúsculo
  const captalizeFirstChar = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <div
      key={pokemon.id}
      className={styles.card}
      style={{
        color: getTypeBackgroundColor(
          pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
        ),
      }}
    >
      <span
        className={styles.id}
        style={{
          color: getTypeBackgroundColor(
            pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
          ),
        }}
      >
        {pokemon.id}
      </span>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt={pokemon.name} className={styles.img} />
      </div>
      <div className={styles.footer}>
        <p
          className={styles.name}
          style={{
            color: getTypeBackgroundColor(
              pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
            ),
          }}
        >
          {captalizeFirstChar(pokemon.name)}
        </p>
      </div>
      <ul className={styles.types}>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <li
            key={type.pokemon_v2_type.name}
            className={styles.type}
            style={{
              backgroundColor: getTypeBackgroundColor(
                type.pokemon_v2_type.name
              ),
            }}
          >
            {type.pokemon_v2_type.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
