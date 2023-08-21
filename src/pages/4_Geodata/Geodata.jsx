/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//https://restcountries.com/v3.1/region/europe

import { useState, useEffect } from "react";
import Loaders from "../../Components/Loaders";
import ListCard from "./ListCard";

function Geodata() {
  const [countries, setCountries] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setCountries({ ...countries, loading: true });
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur : mauvaise ressource.");
        return response.json();
      })
      .then((data) => {
        // on trie par ordre alphabétique
        data.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        });
        console.log(data)
        setCountries({ loading: false, error: false, data: data });
        return;
      })
      .catch((e) => {
        console.log(e);
        setCountries({ loading: false, error: true, data: undefined });
      });
  }, []);

  let content;

  if (countries.loading) {
    content = (
      <div className="loader">
        <Loaders />
      </div>
    );
  } else if (countries.error) {
    content = <p>Une erreur est survenue !</p>;
  } else if (countries.data?.length > 0) {
    content = (
      <ul className="countriesList">
        {countries.data.map((country, index) => (
          <ListCard key={index} country={country} />
        ))}
      </ul>
    );
  }

  return (
    <div className="geodata">
      <h1>Europe Countries Data</h1>
      {content}
    </div>
  );
}

export default Geodata;
