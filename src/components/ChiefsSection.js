import React from "react";
import ChiefsCards from "./ChiefsCard";

const ChiefsSection = () => {

  const chiefs = [
    {
      name : 'Juan Carlos',
      img : '/img/top-chiefs/img_1.jpg',
      recipesCount : '10',
      cuisine : 'Mexican'
    },
    {
      name : 'John Doe',
      img : '/img/top-chiefs/img_2.jpg',
      recipesCount : '05',
      cuisine : 'Japanese'
    },
    {
      name : 'Juan Carlos',
      img : '/img/top-chiefs/img_3.jpg',
      recipesCount : '13',
      cuisine : 'Italian'
    },
        {
      name : 'Chris Brown',
      img : '/img/top-chiefs/img_4.jpg',
      recipesCount : '08',
      cuisine : 'American'
    },
    {
      name : 'Blake Lively',
      img : '/img/top-chiefs/img_5.jpg',
      recipesCount : '09',
      cuisine : 'French'
    },
    {
      name : 'Ben Affleck',
      img : '/img/top-chiefs/img_6.jpg',
      recipesCount : '04',
      cuisine : 'Indian'
    }
  ]

  return (
    <div class='chief-top-div'>
      <h1 className="title chiefs-title">Our Top Chiefs</h1>
      <div className="top-chiefs-container">
      {chiefs.map(chiefs => (
        <ChiefsCards key={chiefs.name} chiefs = {chiefs} />
      ))}

      </div>
    </div>
  )
}

export default ChiefsSection