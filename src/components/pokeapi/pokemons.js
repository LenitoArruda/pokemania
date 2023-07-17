import { request } from "graphql-request";

export async function fetchData(searchContent, pageQt, offSet) {
  try {
    const endpoint = "https://beta.pokeapi.co/graphql/v1beta";
    const query = `query pokeAPIquery {
      pokemon_v2_pokemon(limit: ${pageQt}, offset: ${offSet} ${
      searchContent ? `, where: {name: {_iregex: "${searchContent}"}}` : ""
    }){
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
      pokemon_v2_pokemon_aggregate (where: {name: {_iregex: "${searchContent}"}}) {
        aggregate {
          count
        }
      }
    }`;

    const data = await request(endpoint, query);
    return {
      pokemons: data.pokemon_v2_pokemon,
      totalPokemons: data.pokemon_v2_pokemon_aggregate.aggregate.count,
    };
  } catch (error) {
    throw new Error("Erro ao buscar os dados.");
  }
}
