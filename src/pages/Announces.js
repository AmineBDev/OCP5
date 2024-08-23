import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Star from "../components/Star";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";

const Announces = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [announce, setAnnounce] = useState([]);

  useEffect(() => {
    axios
      .get("/logements.json")
      .then((res) => {
        const picked = res.data.find(({ id }) => id === params.id);
        if (!picked) {
          navigate("/404", { state: { message: "Can't get data" } });
        } else {
          setAnnounce(picked);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        navigate("/404", { state: { message: "Can't get data" } });
      });
  }, [navigate, params.id]);

  const equipments =
    announce.equipments &&
    announce.equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ));

  return (
    <>
      <Header />
      <main className="announce">
        <Carrousel pics={announce && announce.pictures} />
        <section className="announce-container">
          <div className="infos-announce">
            <h1>{announce.title}</h1>
            <span>{announce.location}</span>
            <ul>
              {announce.tags &&
                announce.tags.map((tag, index) => <li key={index}>{tag}</li>)}
            </ul>
          </div>

          <div className="host-infos">
            {announce.host && (
              <div className="host-announce">
                <p>{announce.host.name}</p>
                <img
                  src={announce.host.picture}
                  alt={"Photo de " + announce.host.name}
                />
              </div>
            )}
            <Star rating={announce.rating} />
          </div>
        </section>
        <div className="collapse-announce">
          <Collapse
            titleCollapse="Description"
            textCollapse={announce.description}
          />
          <Collapse titleCollapse="Équipements" textCollapse={equipments} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Announces;
