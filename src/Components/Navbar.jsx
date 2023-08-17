/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="hamburgerNavbar" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FaChevronDown /> : <FaChevronUp />}
      </div>
      <div
        className={`${!showMenu ? "" : "contentNavbarHidden"} contentNavbar`}
      >
        <NavLink to="/" className={({isActive})=>`${isActive && "sousligné"}`}>Accueil</NavLink>
        <NavLink to="/services" className={({isActive})=>`${isActive && "sousligné"}`}>Services</NavLink>
        <NavLink to="/tarifs" className={({isActive})=>`${isActive && "sousligné"}`}>Tarifs</NavLink>
        <NavLink to="/contact" className={({isActive})=>`${isActive && "sousligné"}`}>Contact</NavLink>
        <NavLink to="/profil" className={({isActive})=>`${isActive && "sousligné"}`}>Profil</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
