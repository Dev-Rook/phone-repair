import React, { useState } from "react";
import Styles from "../Styles/Page-Styles/Store.module.scss";

const Store = () => {
  return (
    <div className={Styles.Page}>
      <div className={Styles.Section_Text_Container}>
        <p className={Styles.Section_Title}>Store</p>
      </div>
      <div className={Styles.Page_Banner_Container}>
        <img src={``} alt="" className={Styles.Banner} />
      </div>
    </div>
  );
};

export default Store;
