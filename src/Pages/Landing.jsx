import React, {useState} from 'react'
import Styles from "../Styles/Page-Styles/Landing.module.scss"

import Hero from '../Page-Sections/Hero'

const Landing = () => {
  return (
    <div className={Styles.Page}>
      <Hero />
    </div>
  )
}

export default Landing