import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/IosBanner.module.scss"


const IosBanner = () => {
  return (
    <div className={Styles.Section}>
        <img src={``} alt="" className={Styles.Banner} />
    </div>
  )
}

export default IosBanner