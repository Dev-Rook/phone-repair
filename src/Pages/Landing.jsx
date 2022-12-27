import React, {useState} from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

import Hero from '../Page-Sections/Hero'
import Services from "../Page-Sections/Services"
import Staff from '../Page-Sections/Staff'
import News from '../Page-Sections/News'

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Services />
      <Staff />
      <News />
    </div>
  )
}

export default Landing