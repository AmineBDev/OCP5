import React from "react";

const Star = ({ rating }) => {
  let rate = parseInt(rating);

  return (
    <div className="star-rating">
      {rate >= 1 ? (
        <i class="fa-solid fa-star full-star"></i>
      ) : (
        <i class="fa-solid fa-star empty-star"></i>
      )}
      {rate >= 2 ? (
        <i class="fa-solid fa-star full-star"></i>
      ) : (
        <i class="fa-solid fa-star empty-star"></i>
      )}
      {rate >= 3 ? (
        <i class="fa-solid fa-star full-star"></i>
      ) : (
        <i class="fa-solid fa-star empty-star"></i>
      )}
      {rate >= 4 ? (
        <i class="fa-solid fa-star full-star"></i>
      ) : (
        <i class="fa-solid fa-star empty-star"></i>
      )}
      {rate >= 5 ? (
        <i class="fa-solid fa-star full-star"></i>
      ) : (
        <i class="fa-solid fa-star empty-star"></i>
      )}
    </div>
  );
};

export default Star;
