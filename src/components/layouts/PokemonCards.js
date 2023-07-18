import { useEffect, useState } from "react";
import { fetchData } from "../pokeapi/pokemons";

//CSS
import styles from "./PokemonCards.module.css";
//Componentes
import PokemonCard from "./PokemonCard.js";
import Loader from "./Loader";
import PageExibition from "../inputs/PageExibition";
import TypeFilter from "../inputs/TypeFilter";
import PokemonStats from "./PokemonStats";

export default function PokemonCards({ searchContent }) {
  const [pokemons, setPokemons] = useState([]);
  const [totalPokemons, setTotalPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [pageQt, setPageQt] = useState(50);
  const [offSet, setOffSet] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedPokemonName, setSelectedPokemonName] = useState(null);

  //Coleta os dados da api PokeAPI atraves do graphQL
  async function fetchPokemonData() {
    try {
      const data = await fetchData(searchContent, pageQt, offSet);
      setPokemons(data.pokemons);
      setTotalPokemons(data.totalPokemons);
      setIsLoading(false);
    } catch (error) {
      setError("Erro ao buscar os dados.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offSet, searchContent, pageQt]);

  //Atualiza os pokemons, o numero da pagina para 1 e a posição inicial (offSet)
  //da pesquisa no graphql toda vez que o usuario digita algo
  useEffect(() => {
    setPageNumber(1);
    setOffSet(0);
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchContent]);

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

  //Funções para lidar com o fechamento e abertura do PokemonStats
  const handlePokemonCardClick = (pokemon) => {
    setSelectedPokemonName(pokemon.target.alt);
  };
  const handleCloseStats = () => {
    setSelectedPokemonName(null);
  };

  return (
    <div className={styles.main}>
      {selectedPokemonName ? (
        <PokemonStats onClose={handleCloseStats} name={selectedPokemonName} />
      ) : (
        ""
      )}
      <div className={styles.menuCards}>
        <span className={styles.qtdPokemons}>
          {totalPokemons} {totalPokemons === 1 ? "Pokemon |" : "Pokemons |"}{" "}
          {offSet} -{" "}
          {+offSet
            ? +offSet + pageQt
            : pageQt > totalPokemons
            ? totalPokemons
            : pageQt}
        </span>
        <PageExibition pagNum={pagNum} />
        {/*<TypeFilter pagNum={pagNum} />*/}
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
            <div className={styles.cards} onClick={handlePokemonCardClick}>
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
