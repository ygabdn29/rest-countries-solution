import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./countryDetail.module.css";
import Loading from "../../components/loading/Loading";
import Button from "../../components/button/Button";

function CountryDetail() {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [borderCountryName, setBorderCountryName] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    flags,
    name,
    population,
    capital,
    region,
    subregion,
    currencies,
    languages,
    tld,
  } = country;

  const countryCurrencies =
    currencies && Object.entries(currencies).map(([key, value], i) => value);

  const countryNames =
    name &&
    Object.entries(name["nativeName"])
      .map(([key, value], i) => value)
      .map(({ official, common }) => official)
      .join(" , ");

  const countryLanguages =
    languages &&
    Object.entries(languages)
      .map(([key, value], i) => value)
      .join(", ");

  const borderCountries =
    borderCountryName && borderCountryName.map(({ name }) => name["common"]);

  useEffect(
    function () {
      async function getSelectedCountry(countryName) {
        try {
          setIsLoading(true);

          const res = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
          );
          const data = await res.json();

          setCountry(data[0]);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
        }
      }
      getSelectedCountry(countryName);
    },
    [countryName]
  );

  useEffect(
    function () {
      async function fetchBorderCountryName() {
        const { borders } = country || "";
        const bordersName = [];

        for (let i = 0; i < borders?.length; i++) {
          let response = await fetch(
            `https://restcountries.com/v3.1/alpha/${borders[i]}?fields=name`
          );
          let data = await response.json();
          bordersName.push(data);
        }

        setBorderCountryName(bordersName);
      }
      fetchBorderCountryName();
    },
    [country]
  );

  return (
    <div className={styles["country-container-wrapper"]}>
      <main className={styles["country-container"]}>
        {isLoading && <Loading />}

        {!isLoading && !country.length && (
          <>
            <div className={styles["btn-container"]}>
              <Button>&larr; Back</Button>
            </div>

            <div className={styles["country-detail-container"]}>
              <img
                src={flags ? flags.png : ""}
                alt={flags ? flags.alt : ""}
                className={styles["country__flag-img"]}
              />
              <div className={styles["country__text-box"]}>
                <div className={styles["country__name-container"]}>
                  <h1 className={styles["country__name"]}>{name?.common}</h1>
                </div>
                <div className={styles["country__detail-text-box"]}>
                  <div className={styles["country__detail-box"]}>
                    <p className={styles["country__detail-type"]}>
                      Native Name:
                      <span className={styles["country__detail-description"]}>
                        {` ${countryNames}`}
                      </span>
                    </p>

                    <p className={styles["country__detail-type"]}>
                      Population:
                      <span className={styles["country__detail-description"]}>
                        {` ${population?.toLocaleString()}`}
                      </span>
                    </p>

                    <p className={styles["country__detail-type"]}>
                      Region:
                      <span
                        className={styles["country__detail-description"]}
                      >{` ${region}`}</span>
                    </p>

                    <p className={styles["country__detail-type"]}>
                      Sub Region:
                      <span
                        className={styles["country__detail-description"]}
                      >{` ${subregion}`}</span>
                    </p>

                    <p className={styles["country__detail-type"]}>
                      Capital:
                      <span
                        className={styles["country__detail-description"]}
                      >{` ${capital}`}</span>
                    </p>
                  </div>

                  <div className={styles["country__detail-box"]}>
                    <p className={styles["country__detail-type"]}>
                      Top Level Domain:
                      <span className={styles["country__detail-description"]}>
                        {tld && ` ${tld[0]}`}
                      </span>
                    </p>

                    <p className={styles["country__detail-type"]}>
                      Currencies:
                      <span className={styles["country__detail-description"]}>
                        <span>
                          {` ${
                            countryCurrencies && countryCurrencies[0]["name"]
                          }`}
                        </span>
                      </span>
                    </p>

                    <p className={styles["country__detail-type"]}>
                      Languages:
                      <span className={styles["country__detail-description"]}>
                        {` ${countryLanguages}`}
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles["country__borders-container"]}>
                  <p className={styles["country__borders"]}>
                    Border Countries:
                  </p>
                  <span className={styles["country__border-button-container"]}>
                    {borderCountries &&
                      borderCountries.map((country) => (
                        <Link
                          key={country}
                          className={styles["country__border-button"]}
                          to={`/${country.toLowerCase()}`}
                        >
                          {country}
                        </Link>
                      ))}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CountryDetail;
