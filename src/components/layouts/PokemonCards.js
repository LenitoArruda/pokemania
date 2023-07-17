import { request } from "graphql-request";
import { useEffect, useState } from "react";

//CSS
import styles from "./PokemonCards.module.css";
//COMPONENTES
import PokemonCard from "./PokemonCard.js";
import Loader from "./Loader";
import PageExibition from "../inputs/PageExibition";
import TypeFilter from "../inputs/TypeFilter";

export default function PokemonCards({ searchContent }) {
  const [pokemons, setPokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pageQt, setPageQt] = useState(50);
  const [offSet, setOffSet] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  //Coleta os dados da api PokeAPI atraves do graphQL
  async function fetchData() {
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
      setPokemons(data.pokemon_v2_pokemon);
      setTotalPokemons(data.pokemon_v2_pokemon_aggregate.aggregate.count);
      setIsLoading(false);
    } catch (error) {
      setError("Erro ao buscar os dados.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offSet, searchContent, setPageQt]);

  // Funcionalidades do botão Próximo
  const handleNext = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPageNumber(pageNumber + 1);
    setOffSet(offSet + pageQt);
  };

  // Funcionalidades do botão Anterior
  const handlePrev = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPageNumber(pageNumber - 1);
    setOffSet(offSet - pageQt);
  };

  //Atualização de total páginas existentes para a lógica dos botoes de paginação
  useEffect(() => {
    setTotalPages(Math.ceil(totalPokemons / pageQt));
  }, [totalPokemons, pageQt]);

  //Dados recebidos do componente PageExibition
  const pagNum = (childdata) => {
    setPageQt(childdata);
    setOffSet(0);
  };

  return (
    <div className={styles.main}>
      <div className={styles.menuCards}>
        <PageExibition pagNum={pagNum} />
        <span className={styles.qtdPokemons}>{totalPokemons} Pokemons</span>
        <TypeFilter pagNum={pagNum} />
      </div>
      {isLoading ? (
        <div className={styles.loader}>
          <Loader />
        </div>
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
      <div className={styles.pagination}>
        <button
          onClick={handlePrev}
          className={styles.pagControl}
          disabled={pageNumber === 1}
        >
          {"<< Anterior"}
        </button>
        <button
          onClick={handleNext}
          className={styles.pagControl}
          disabled={pageNumber === totalPages}
        >
          {"Próximo >>"}
        </button>
      </div>
    </div>
  );
}
