//CSS
import styles from "./PokemonCard.module.css";
//Funcionalidades
import getTypeBackgroundColor from "../../functions/getTypeBackgroundColor";
//Componentes
import Types from "./Types";

export default function PokemonCard({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;

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
        <div
          className={styles.name}
          style={{
            color: getTypeBackgroundColor(
              pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
            ),
          }}
        >
          {captalizeFirstChar(pokemon.name)}
          <Types pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
}
