/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
//https://restcountries.com/v3.1/region/europe

import { useState, useEffect } from "react";
import Loaders from "../Components/Loaders";
import ListCard from "./4_Geodata/ListCard";

function donnéesApi() {
  const [infos, setInfos] = useState({
    loading: false,
    error: false,
    data: undefined,
  });

  useEffect(() => {
    setInfos({ ...infos, loading: true });
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur : mauvaise ressource.");
        return response.json();
      })
      .then((data) => {
        console.log(data)
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
        setInfos({ loading: false, error: false, data: data });
        return;
      })
      .catch((e) => {
        setInfos({ loading: false, error: true, data: undefined });
      });
  }, []);

  let content;

  if (infos.loading) {
    content = (
      <div className="loader">
        <Loaders />
      </div>
    );
  } else if (infos.error) {
    content = <p>Une erreur est survenue !</p>;
  } else if (infos.data?.length > 0) {
    content = (
      <ul className="countriesList">
        {infos.data.map((info, index) => (
          <ListCard key={index} country={info} />
        ))}
      </ul>
      
    );
  }

  return (
    <div className="infosContainer">
      <h1>Les infos</h1>
      {content}
    </div>
  );
}

export default donnéesApi;
