/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom"


function NotFound() {
  return (
    <div>
      <h1>Comme la petite cuillère, cette page n'existe pas !</h1>
      <NavLink to="/" >Retour à l'accueil?</NavLink>
    </div>
  )
}

export default NotFound
