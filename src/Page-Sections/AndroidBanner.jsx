import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/Banner.module.scss";

const AndroidBanner = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Image_Container}>
        <div className={Styles.Diffuser}></div>
        <img
          src={`https://github.com/Dev-Rook/phone-repair/blob/master/src/Assets/Images/Android-Banner-Image.jpg?raw=true`}
          alt=""
          className={Styles.Banner}
        />
      </div>
    </div>
  );
};

export default AndroidBanner;
