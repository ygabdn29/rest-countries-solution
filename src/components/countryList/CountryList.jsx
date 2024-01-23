import styles from "./CountryList.module.css";
import CountryItem from "../country/CountryItem";

function CountryList({ countries }) {
  return (
    <div className={styles["country-container"]}>
      {countries.map((country, i) => (
        <CountryItem country={country} key={i} />
      ))}
    </div>
  );
}

export default CountryList;
