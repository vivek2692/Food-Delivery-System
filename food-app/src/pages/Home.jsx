import React from 'react'
import Categories from '../components/Categories'
import Features from '../components/Features'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBanner from '../components/Home_Banner'
import PopularDishes from '../components/PopularDishes'
import Review from '../components/Review'

const Home = () => {
  return (
    <div>
        <Header/>
        <HomeBanner/>
        <Categories/>
        <Features/>
        <PopularDishes/>
        <Feedback/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home