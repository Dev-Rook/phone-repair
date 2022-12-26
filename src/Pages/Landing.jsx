import React, {useState} from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

import Hero from '../Page-Sections/Hero'
import Staff from '../Page-Sections/Staff'

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
      <Staff />
    </div>
  )
}

export default Landing