import { useEffect, useState } from "react";
import { fetchData } from "../pokeapi/pokemon";

//CSS
import styles from "./PokemonStats.module.css";
//Funções
import getTypeBackgroundColor from "../../functions/getTypeBackgroundColor";
//Componentes
import Types from "./Types";
import Status from "./Status";

export default function PokemonStats({ onClose, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemon, setPokemon] = useState(false);
  const [sprite, setSprite] = useState(false);
  const [color, setColor] = useState(false);
  const [habilities, setHabilities] = useState(false);
  const [status, setStatus] = useState(false);

  const captalizeFirstChar = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
  };

  //Coleta os dados da api PokeAPI atraves do graphQL
  async function fetchPokemonData() {
    try {
      const data = await fetchData(name);
      if (data) {
        setPokemon(data.pokemon[0]);
        setColor(
          data.pokemon[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name
        );
        setHabilities(data.pokemon[0].pokemon_v2_pokemonabilities);
        setStatus(data.pokemon[0].pokemon_v2_pokemonstats);
        setSprite(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.pokemon[0].id}.png`
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300); // Aguarda a conclusão da animação antes de chamar o onClose
  };

  return (
    <div className={`${styles.background} ${isOpen ? styles.open : ""}`}>
      <div
        className={`${styles.pokemonCard} ${isOpen ? styles.open : ""}`}
        style={{
          color: getTypeBackgroundColor(color),
        }}
      >
        <span className={styles.close} onClick={handleClose}>
          X
        </span>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.about}></div>
            <div className={styles.imgContainer}>
              <img
                src={sprite ? sprite : ""}
                alt={pokemon.name}
                className={styles.img}
              />
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.about}>
              <h1
                className={styles.name}
                style={{
                  color: getTypeBackgroundColor(color),
                }}
              >
                {captalizeFirstChar(pokemon.name)}
              </h1>
              <div className={styles.typeContainer}>
                <h2 className={styles.title}>Tipo: </h2>
                {pokemon ? <Types pokemon={pokemon} /> : ""}
              </div>
              <div>
                <h2 className={styles.title}>Habilidades: </h2>

                {habilities ? (
                  <ul className={styles.habilities}>
                    {habilities.map((hability) => (
                      <li
                        className={styles.hability}
                        key={hability.pokemon_v2_ability.name}
                      >
                        {hability.pokemon_v2_ability.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={styles.statsContainer}>
              <h2 className={styles.title}>Estatísticas: </h2>
              {status ? (
                <ul className={styles.stats}>
                  {status.map((stat) => (
                    <li className={styles.stat} key={stat.pokemon_v2_stat.name}>
                      <h4 className={styles.statName}>
                        {stat.pokemon_v2_stat.name}
                      </h4>
                      <div className={styles.progressContainer}>
                        <div
                          className={styles.progress}
                          style={{
                            width: `${stat.base_stat}%`,
                            backgroundColor: getTypeBackgroundColor(color),
                          }}
                        ></div>
                      </div>
                      <h4>{stat.base_stat}</h4>
                    </li>
                  ))}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
