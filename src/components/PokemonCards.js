import styles from "./PokemonCards.module.css";
import PokemonCard from "./PokemonCard.js";
import { request } from "graphql-request";
import { useEffect, useState } from "react";

function PokemonCards() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchPokemons() {
    try {
      const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
      const query = `query pokeAPIquery {
        pokemon_v2_pokemon {
          id
          name
          pokemon_v2_pokemontypes {
            id
            pokemon_v2_type {
              name
            }
          }
        }
      }`;

      const data = await request(endpoint, query);
      setPokemons(data.pokemon_v2_pokemon);
      setIsLoading(false);
    } catch (error) {
      setError("Erro ao buscar os dados.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className={styles.main}>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {error ? (
            <p>{error}</p>
          ) : (
            <div>
              <button onClick={fetchPokemons}>Buscar Dados</button>
              {pokemons.map((pokemon) => (
                <PokemonCard pokemon={pokemon} key={pokemon.id} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PokemonCards;
