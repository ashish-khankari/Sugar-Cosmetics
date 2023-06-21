import React from 'react'
import CardCarousal1 from './HeroSection/CardCarousal1/CardCarousal1'
import BestSeller from './HeroSection/BestSeller/BestSeller'
import HotDeals from './HeroSection/HotDeals/HotDeals'
import TipTacToe from './HeroSection/TipTacToe/TipTacToe'
import ReferFriend from './HeroSection/ReferFriends/ReferFriend'
import ThisOrThat from './HeroSection/ThisOrThat/ThisOrThat'
import NewlyLaunched from './HeroSection/NewlyLaunched/NewlyLaunched'
import JustIn from './HeroSection/JustIn/JustIn'

export default function LandindPageComponents() {
  return (
    <div>
        <CardCarousal1/>
        <BestSeller/>
        <HotDeals/>
        <TipTacToe/>
        <JustIn/>
        <ReferFriend/>
        <NewlyLaunched/>
        <ThisOrThat/>
    </div>
  )
}
