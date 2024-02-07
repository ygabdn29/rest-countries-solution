import { Link } from "react-router-dom";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <div className={styles["country__card"]}>
      <Link
        to={`/${country.name.common.toLowerCase()}`}
        className={styles["country-link"]}
      >
        <div className={styles["country-flag-container"]}>
          <img
            src={country?.flags.png}
            className={styles["country__flag"]}
          ></img>
        </div>

        <div className={styles["country__details-text-box"]}>
          <h2
            className={styles["country__name"]}
          >{` ${country.name.common}`}</h2>

          <p className={styles["country__detail-type"]}>
            Population:
            <span className={styles["country__population"]}>
              {` ${country.population.toLocaleString()}`}
            </span>
          </p>
          <p className={styles["country__detail-type"]}>
            Region:
            <span className={styles["country__population"]}>
              {` ${country.region}`}
            </span>
          </p>
          <p className={styles["country__detail-type"]}>
            Capital:
            <span className={styles["country__population"]}>
              {` ${country.capital}`}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default CountryItem;
