import React from "react";
import CustomImage from "./CustomImage";

const RecipesMain = ({item}) => {

  return (
    <div className="recipe-card">
      <CustomImage imgSrc={item.image} pt='65%'/>
      <div className="recipe-info">
        <img className="author-image" src={item.authorImg} alt="" />
      </div>
      <p className="recipe-title">
        {item.title}
      </p>
      <p className="recipe-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, esse.
      </p>
      <p className="recipe-view">
        VIEW RECIPE
      </p>
    </div>
  )
}

export default RecipesMain