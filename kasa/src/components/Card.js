import React from "react";

const Card = ({ title, cover }) => {
  return (
    <div className="card" style={{ background: `url(${cover}) center/cover` }}>
      <p>{title}</p>
    </div>
  );
};

export default Card;
