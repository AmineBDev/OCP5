import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { NavLink } from "react-router-dom";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("./logements.json").then((res) => setData(res.data));
  }, []);

  return (
    <main className="card-container">
      {data.map((appart, id) => (
        <NavLink key={id} to={`/annonce/${appart.id}`}>
          <div className="card-logement">
            <Card title={appart.title} cover={appart.cover} />
          </div>
        </NavLink>
      ))}
    </main>
  );
};

export default Main;
