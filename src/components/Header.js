import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src="../img/logo.svg" alt="Logo de l'agence Kasa" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
