import { request } from "graphql-request";

export async function fetchData(name) {
  try {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
    const query = `query pokeAPIquery {
        pokemon_v2_pokemon {
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
              id
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
