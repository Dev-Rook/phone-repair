import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Banner.module.scss";

const IosBanner = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Image_Container}>
        <div className={Styles.Diffuser}></div>
        <img
          src={`https://i.pinimg.com/564x/2a/99/33/2a9933216cf35bcda11f9585f98e3ad8.jpg`}
          alt=""
          className={Styles.Banner}
        />
      </div>
    </div>
  );
};

export default IosBanner;
