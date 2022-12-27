import React, { useState } from "react";
import Styles from "../Styles/Page-Section-Styles/GetInTouch.module.scss";

// Material UI Icons Import Start
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
// Material UI Icons Import End

const GetInTouch = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Text_Box}>
        <p className={Styles.Title}>Get In Touch?</p>

        <p className={Styles.Text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nemo
          delectus hic non recusandae officiis <br /> magni at cumque, est saepe
          dolorem, fugit expedita culpa laboriosam ipsa.
        </p>

        {/* <Link to={"/Contact"}>
          <button className={Styles.Contact_Button}>Contact US</button>
        </Link> */}
      </div>

      <div className={Styles.Social_Icon_Bar}>
        <div className={Styles.Social_Container}>
          <a href={`#`} target={"_blank"} rel={"noreferrer"}>
            <InstagramIcon sx={{ color: "white", fontSize: 25 }} />
            <p className={Styles.Social_Title}>Title</p>
          </a>
        </div>

        <div className={Styles.Social_Container}>
          <a href={`#`} target={"_blank"} rel={"noreferrer"}>
            <FacebookIcon sx={{ color: "white", fontSize: 25 }} />
            <p className={Styles.Social_Title}>Title</p>
          </a>
        </div>

        <div className={Styles.Social_Container}>
          <a href={`#`} target={"_blank"} rel={"noreferrer"}>
            <TwitterIcon sx={{ color: "white", fontSize: 25 }} />
            <p className={Styles.Social_Title}>Title</p>
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default GetInTouch;
