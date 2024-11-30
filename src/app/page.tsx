
import BestSelling from '@/components/bestSelling/bestSelling'
import Contact from '@/components/contactpage/contact'
import Herosection from '@/components/hero-section/hero-section'
import Services from '@/components/servicespage/services'

import React from 'react'

function Homepage() {
  return (
    <>
    <Herosection/>
    <BestSelling/>
    <Services />
    <Contact/>
    </>
  )
}

export default Homepage


