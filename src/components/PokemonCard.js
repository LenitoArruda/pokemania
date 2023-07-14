import styles from "./PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  return (
    <div key={pokemon.id} className={styles.card}>
      <p>{pokemon.name}</p>
      <ul>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <li key={type.id}>{type.pokemon_v2_type.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonCard;
