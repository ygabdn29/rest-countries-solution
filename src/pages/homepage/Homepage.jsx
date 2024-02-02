import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Navigation from "../../components/navigation/Navigation";
import CountryList from "../../components/countryList/CountryList";
import Loading from "../../components/loading/Loading";
import SearchInput from "../../components/searchInput/SearchInput";
import Filter from "../../components/filter/Filter";

function Homepage() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  // const regions = countries?.reduce((regionArr, currCountry) => {
  //   if (!regionArr?.map((el) => el).includes(currCountry.region))
  //     return [currCountry.region, ...regionArr];
  //   else return regionArr;
  // }, []);

  useEffect(function () {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    try {
      setIsLoading(true);

      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();

      setCountries(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function searchMovies(search) {
    if (search.length < 3) return;
    else {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://restcountries.com/v3.1/name/${search}`
        );
        const data = await res.json();

        setCountries(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
  }

  async function filterCountries(region) {
    try {
      setIsLoading(true);

      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();

      setCountries(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearch(search) {
    setSearch(search);

    if (search === "") fetchCountries();
    else searchMovies(search);
  }

  function handleFilterChange(region) {
    setRegionFilter(region);

    if (region === "") fetchCountries();
    else filterCountries(region);
  }

  return (
    <div className={styles["country__homepage-wrapper"]}>
      <main className={styles["country__homepage"]}>
        <div className={styles["country__input-container"]}>
          <div className={styles["country__search-input"]}>
            <SearchInput search={search} onSearch={handleSearch} />
          </div>

          <div className={styles["country__filter-select-container"]}>
            <Filter regionFilter={regionFilter} onFilter={handleFilterChange} />
          </div>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <CountryList countries={countries}></CountryList>
        )}
      </main>
    </div>
  );
}

export default Homepage;
