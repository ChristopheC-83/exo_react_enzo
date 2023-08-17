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
        <NavLink to="/boxy" className={({isActive})=>`${isActive && "sousligné"}`}>Boxy</NavLink>
        <NavLink to="/slider" className={({isActive})=>`${isActive && "sousligné"}`}>Slider</NavLink>
        <NavLink to="/meteo" className={({isActive})=>`${isActive && "sousligné"}`}>Meteo</NavLink>
        <NavLink to="/geodata" className={({isActive})=>`${isActive && "sousligné"}`}>Geodata</NavLink>
        <NavLink to="/ide" className={({isActive})=>`${isActive && "sousligné"}`}>IDE</NavLink>
        <NavLink to="/pomodoro" className={({isActive})=>`${isActive && "sousligné"}`}>Pomodoro</NavLink>
        <NavLink to="/audio" className={({isActive})=>`${isActive && "sousligné"}`}>Audio</NavLink>
        <NavLink to="/scroll" className={({isActive})=>`${isActive && "sousligné"}`}>Scroll</NavLink>
        <NavLink to="/commerce" className={({isActive})=>`${isActive && "sousligné"}`}>Commerce</NavLink>
        <NavLink to="/notes" className={({isActive})=>`${isActive && "sousligné"}`}>Notes</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
