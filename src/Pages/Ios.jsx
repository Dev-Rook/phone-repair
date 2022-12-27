import React, { useState } from "react";
import Styles from "../Styles/Page-Styles/Ios.module.scss";

const Ios = () => {
  return (
    <div className={Styles.Page}>
      <div className={Styles.Section_Text_Container}>
        <p className={Styles.Section_Title}>IOS</p>
      </div>
      <div className={Styles.Page_Banner_Container}>
        <img src={``} alt="" className={Styles.Banner} />
      </div>
    </div>
  );
};

export default Ios;
