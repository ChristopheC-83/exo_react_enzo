/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

function ListCard({country}) {
  return (
    <li className="listCard">
      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.flags.alt} />
    </li>
  )
}

export default ListCard
