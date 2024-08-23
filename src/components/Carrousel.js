import React, { useState } from "react";

const Carrousel = ({ pics }) => {
  const [currentPic, setCurrentPic] = useState(0);

  return (
    <section className="carrousel-container">
      {pics &&
        pics.map((pic, index) => (
          <div key={index}>
            {index === currentPic && (
              <div
                key={index}
                className="img-logement"
                style={{ backgroundImage: `url(${pic})` }}
              >
                <div
                  className="icons-logement"
                  style={{
                    visibility: pics.length > 1 ? "visible" : "hidden",
                  }}
                >
                  <div className="arrows">
                    <img
                      src="../img/left-arrow.svg"
                      alt="Précedent"
                      onClick={() => {
                        currentPic === 0
                          ? setCurrentPic(pics.length - 1)
                          : setCurrentPic((currentPic - 1) % pics.length);
                      }}
                    />
                    <img
                      src="../img/right-arrow.svg"
                      alt="Suivant"
                      onClick={() =>
                        setCurrentPic((currentPic + 1) % pics.length)
                      }
                    />
                  </div>
                  <p>
                    {index + 1}/{pics.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
    </section>
  );
};

export default Carrousel;
