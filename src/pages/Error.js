import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Header />
      <main className="error-container">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <p>
          <NavLink to="/">Retourner sur la page d'accueil</NavLink>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Error;
