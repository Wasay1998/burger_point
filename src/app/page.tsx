import React from 'react'
import Navbar from "../app/components/Navbar"
import Banner from './components/Banner'
import Card from './components/Card'
import Carousel from './components/Carousel'
import ProductList from './components/ProductList'
import Progressor from './components/Progressor'
import Menuitems from './components/Menuitems'
import Offer from './components/Offer'
import Reservation from './components/Reservation'
import Footer from './components/Footer'
import Testimonals from './components/Testimonals'

export default function App() {
  return (
    <div className='bg-gradient-to-r from-white to-grey min-h-screen'>
      <Navbar/>
      <Banner/>
      <Carousel/>
      <ProductList/>
      <Progressor/>
      <Testimonals/>
      <Menuitems/>
      <Offer/>
      <Card/>
      <Reservation/>
      <Footer/>

      
    </div>
  )
}
