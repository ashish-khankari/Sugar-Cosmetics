import React from 'react'
import Navbar from './Header/Navbar/Navbar'
import NavProducts from './Header/NavProducts/NavProducts'
import CardCarousal1 from './HeroSection/CardCarousal1/CardCarousal1'
import BestSeller from './HeroSection/BestSeller/BestSeller'

export default function LandindPageComponents() {
  return (
    <div>
        <Navbar/>
        <NavProducts/>
        <CardCarousal1/>
        <BestSeller/>
    </div>
  )
}
