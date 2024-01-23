import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/loadingSpinner/Loading";

function CountryDetail() {
  const { countryName } = useParams();
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(function () {
    async function getSelectedCountry(countryName) {
      try {
        setIsLoading(true);

        const res = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
        );
        const data = await res.json();
        setCountry(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    getSelectedCountry(countryName);
  }, []);

  return <>{isLoading ? <Loading /> : <main></main>}</>;
}

export default CountryDetail;
