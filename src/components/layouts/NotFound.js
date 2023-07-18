import styles from "./NotFound.module.css";
import error from "../../img/error.svg";

export default function Loader() {
  return (
    <div className={styles.notfoundContainer}>
      <img src={error} alt="Error" />
      <span> Nenhum pokemon encontrado.</span>
    </div>
  );
}
