import styles from "./PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  const gifUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`;
  const captalizeFirstChar = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const getTypeBackgroundColor = (type) => {
    switch (type) {
      case "grass":
        return "rgb(107, 207, 132)";
      case "fire":
        return "rgb(219, 105, 105)";
      case "water":
        return "rgb(95, 154, 243)";
      case "bug":
        return "rgb(248, 177, 119)";
      case "normal":
        return "rgb(223, 220, 220)";
      case "poison":
        return "rgb(185, 83, 173)";
      case "electric":
        return "rgb(255, 185, 56)";
      case "ground":
        return "rgb(104, 82, 56)";
      case "fairy":
        return "rgb(194, 151, 171)";
      case "fighting":
        return "rgb(148, 45, 45)";
      case "psychic":
        return "rgb(102, 80, 109)";
      case "rock":
        return "rgb(102, 100, 100)";
      case "rgb(29, 28, 28);":
        return "blue";
      // Adicione mais casos para outros tipos de Pokémon
      default:
        return "rgb(223, 220, 220)";
    }
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
        <img src={gifUrl} alt={pokemon.name} className={styles.gif} />
      </div>
      <ul className={styles.types}>
        {pokemon.pokemon_v2_pokemontypes.map((type) => (
          <li
            key={type.id}
            className={styles.type}
            style={{
              backgroundColor: getTypeBackgroundColor(
                pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
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

export default PokemonCard;
