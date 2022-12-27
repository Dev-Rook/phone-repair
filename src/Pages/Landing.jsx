import React, {useState} from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

import Hero from '../Page-Sections/Hero'
import Services from "../Page-Sections/Services"
import Staff from '../Page-Sections/Staff'
import News from '../Page-Sections/News'
import IosBanner from '../Page-Sections/IosBanner'

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Services />
      <Staff />
      <News />
      <IosBanner />
    </div>
  )
}

export default Landing