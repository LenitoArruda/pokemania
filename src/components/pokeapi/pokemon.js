import { request } from "graphql-request";

export async function fetchData(name) {
  try {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
    const query = `query pokeAPIquery {
        pokemon_v2_pokemon(where: {name: {_eq: "${name}"}}) {
          id
          name
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
            }
          }
          pokemon_v2_pokemonstats {
            pokemon_v2_stat {
              name
            }
            base_stat
          }
          pokemon_v2_pokemonsprites {
            sprites
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
      `;

    const data = await request(endpoint, query);
    return {
      pokemon: data.pokemon_v2_pokemon,
    };
  } catch (error) {
    throw new Error("Erro ao buscar os dados.");
  }
}
