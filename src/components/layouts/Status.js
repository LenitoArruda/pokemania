import styles from "./Status.module.css";

export default function ProgressBar({ stats, color }) {
  console.log(stats);
  return (
    <div className={styles.container}>
      {stats
        ? stats.map((stat) => {
            return (
              <div>
                <h3>{stat.pokemon_v2_stat.name}</h3>
                <div
                  className={styles.progress}
                  style={{
                    width: `${stat.base_stat}%`,
                    backgroundColor: color,
                  }}
                ></div>
                <h3>{stat.base_stat}</h3>
              </div>
            );
          })
        : ""}
    </div>
  );
}
