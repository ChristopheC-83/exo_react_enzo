/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

function CountryModal({ country, closeModal }) {
  return (
    <div className="countryModal">
      <div className="upCountryModal">
        <h3>{country.name.common}</h3>
        <button onClick={closeModal}>X</button>
      </div>
      <div className="infoCountryModal">
        <p>
          <b>Langue(s) </b>:
          {Object.entries(country.languages).map((lang) => lang[1] + " ")}
        </p>
        <p>
          <b>Capitale </b>: {country.capital[0]}{" "}
        </p>
        <p>
          <b>Population </b>: {country.population} personnes
        </p>
      </div>
    </div>
  );
}

export default CountryModal;
