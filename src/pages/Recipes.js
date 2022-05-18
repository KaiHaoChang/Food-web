import React from 'react'
import RecipesSearch from '../components/RecipesSearch'
import RecipesMain from '../components/RecipesMain'

const Recipes = () => {

    const images = [
    {
      title :"American Sausage Pizza",
      image :"/img/gallery/img_1.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg"
    },
    {
      title :"Gyu-don",
      image :"/img/gallery/img_2.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg"
    },
    {
      title :"Korean BBQ",
      image :"/img/gallery/img_3.jpg",
      authorImg: "/img/top-chiefs/img_3.jpg"
    },
    {
      title :"Red Sauce Spaghetti",
      image :"/img/gallery/img_4.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg"
    },
    {
      title :"Beef Cheeseburger",
      image :"/img/gallery/img_5.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg"
    },
    {
      title :"Lamb Biryani",
      image :"/img/gallery/img_6.jpg",
      authorImg: "/img/top-chiefs/img_4.jpg"
    },
    {
      title :"Roasted Chicken",
      image :"/img/gallery/img_7.jpg",
      authorImg: "/img/top-chiefs/img_6.jpg"
    },
    {
      title :"Bibimbap",
      image :"/img/gallery/img_8.jpg",
      authorImg: "/img/top-chiefs/img_2.jpg"
    },
    {
      title :"Fancy Steak",
      image :"/img/gallery/img_9.jpg",
      authorImg: "/img/top-chiefs/img_1.jpg"
    },
    {
      title :"Japanese Sushi",
      image :"/img/gallery/img_10.jpg",
      authorImg: "/img/top-chiefs/img_5.jpg"
    }
  ].sort(() => Math.random() - 0.5)

  return (
    <div>
      <RecipesSearch />
      <div className="recipes-container">
        {images.map((item, index) => (
        <RecipesMain key={index} item ={item} />
        ))}
      </div>
    </div>
  )
}

export default Recipes