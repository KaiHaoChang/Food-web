import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 

const RecipesSearch = () => {

  const searches = [
    'pizza','burger','cookies','juice','biriyani','salad','ice cream','lasagna','pudding','soup'
  ]

  return (
    <div className="previous-searches-section">
      <h2 className="title">Previous Search</h2>
      <div className="previous-searches-container">
        {searches.map((item, index) => (
          <div style={{animationDelay: index * 0.2 + 's'}} key={index} className="search-item">{item}</div>
        ))}
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">
        <FontAwesomeIcon icon = {faSearch}/>
        </button>
      </div>
    </div>
  )
}

export default RecipesSearch