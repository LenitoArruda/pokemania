import style from "./TopPage.module.css";
import arrow from "../../img/arrow.svg";
import { useState, useEffect } from "react";

export default function TopPage() {
  const [positionTop, setPositionTop] = useState(true);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //Verifica se o scroll top = 0 e define true caso verdadeiro
  useEffect(() => {
    const handleScroll = () => {
      const scrolTop = window.scrollY;

      if (scrolTop === 0) setPositionTop(true);
      else setPositionTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {!positionTop ? (
        <div className={style.main} onClick={handleClick}>
          <img src={arrow} alt="arrow" className={style.arrow} />
          <p className={style.text}>Topo</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
