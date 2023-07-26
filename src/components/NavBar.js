import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <div> {/* Add a <div> wrapper */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
  );

  return (
    <div className="navbar">
      {navLinks}
    </div>
  );
};

export default NavBar;
