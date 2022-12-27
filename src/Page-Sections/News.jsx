import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../Styles/Page-Section-Styles/News.module.scss"

import NewsData from "../Assets/Data/News.json";

const News = () => {
  const [data, setData] = useState(NewsData);

  return (
    <div className={Styles.Section}>
      <div className={Styles.Section_Title_Container}>
        <p className={Styles.Question}>- News</p>
        <p className={Styles.Section_Title}>Latest Updates</p>
      </div>
      <div className={Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={Styles.Blog_Card} key={value.id}>
                <div className={Styles.Image_Container}>
                  <p className={Styles.Category}>{value.Category}</p>
                  <img src={value.Image} alt="" className={Styles.Image} />
                </div>
                <div className={Styles.Information_Box}>
                  <p className={Styles.Tite}>{value.Title}</p>
                  <p className={Styles.Date}>{value.Date}</p>
                  <p className={Styles.Description}>{value.Description}</p>
                </div>
              </div>
            );
          })}
      </div>

      <Link className={Styles.Link} to={"Articles"}>
        <button className={Styles.View_More_Button}>View All</button>
      </Link>
    </div>
  );
}

export default News