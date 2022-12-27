import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Banner.module.scss";

const IosBanner = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Text_Container}>
        <p className={Styles.Section_Title}>Ios Devices</p>
      </div>
      <div className={Styles.Image_Container}>
        <div className={Styles.Diffuser}></div>
        <img src={``} alt="" className={Styles.Banner} />
      </div>
    </div>
  );
};

export default IosBanner;
