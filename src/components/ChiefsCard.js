import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ChiefsCards = ( {chiefs} ) => {
  return (
    <div className="chief-card">
      <img src={chiefs.img} alt="" />
      <div className="chief-card-info">
        <p className="chief-card-name">{chiefs.name}</p>
        <p className="chief-recipe-count">Recipes: <b>{chiefs.recipesCount}</b>
        </p>
        <p className="chief-culsine">Culsine: <b>{chiefs.cuisine}</b>
        </p>
        <p className="chief-icon">
          <FontAwesomeIcon icon = {faFacebook} />
          <FontAwesomeIcon icon = {faTwitter} />
          <FontAwesomeIcon icon = {faInstagram} />
        </p>
      </div>
    </div>
  )
}

export default ChiefsCards