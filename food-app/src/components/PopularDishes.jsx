import React from 'react'
import './PopularDishes.css'
import DishCard from './Dish_Card'
import { popularDishesData } from '../data/popularDishesData'

const PopularDishes = () => {
  return (
    <div className='popular_dishes_container' id='popular_dishes_container'>
        <h1 className='center'>Popular Dishes</h1>
        <div className="dishes_container">
          {popularDishesData.map((dish) => <DishCard data={dish}/>)}
        </div>
    </div>
  )
}

export default PopularDishes