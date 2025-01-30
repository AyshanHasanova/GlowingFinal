import React from 'react'
import Discount from '../components/Discount'
import Features from '../components/Features'
import Companies from '../components/Companies'
import Discover from '../components/Discover'
import Hero from '../components/Hero'





const Home:React.FC = () => {
  return (
    <>
      <Hero/>
      <Discount/>
      <Features/>
      <Companies/>
      <Discover/>
    </>
  
  )
}

export default Home