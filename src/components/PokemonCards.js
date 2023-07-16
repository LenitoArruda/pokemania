import styles from "./PokemonCards.module.css";
import PokemonCard from "./PokemonCard.js";
import { request } from "graphql-request";
import { useEffect, useState } from "react";

function PokemonCards() {
  const [pokemons, setPokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [pokemonsTypes, setPokemonsTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageQt, setPageQt] = useState(100);
  const [offSet, setOffSet] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  async function fetchData() {
    try {
      const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
      const query = `query pokeAPIquery {
        pokemon_v2_pokemon(limit: ${pageQt}, offset: ${offSet}) {
          id
          name
          pokemon_v2_pokemonsprites {
            sprites
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
        pokemon_v2_pokemon_aggregate {
          aggregate {
            count
          }
        }

      }
      `;

      const data = await request(endpoint, query);
      setPokemons(data.pokemon_v2_pokemon);
      setTotalPokemons(data.pokemon_v2_pokemon_aggregate.aggregate);
      setIsLoading(false);

      console.log(pokemons);
    } catch (error) {
      setError("Erro ao buscar os dados.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <div className={styles.cards}>
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
