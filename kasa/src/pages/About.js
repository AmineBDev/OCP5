import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import Collapse from "../components/Collapse";
import axios from "axios";

const About = () => {
  const [dataAbout, setDataAbout] = useState([]);

  useEffect(() => {
    axios.get("./aboutArray.json").then((res) => setDataAbout(res.data));
  });

  return (
    <>
      <Header />
      <BannerAbout />
      {dataAbout.map((rule, index) => (
        <div key={index} className="collapse-about-announce">
          <Collapse
            titleCollapse={rule.titleCollapse}
            textCollapse={rule.textCollapse}
          />
        </div>
      ))}
      <Footer />
    </>
  );
};

export default About;
