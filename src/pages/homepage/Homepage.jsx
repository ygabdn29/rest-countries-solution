import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";
import { useEffect, useState } from "react";
import CountryList from "../../components/countryList/CountryList";
import Loading from "../../components/loadingSpinner/Loading";

function Homepage() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
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
    fetchCountries();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CountryList countries={countries}></CountryList>
      )}
    </>
  );
}

export default Homepage;
