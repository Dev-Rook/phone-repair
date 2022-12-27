import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Styles from "../../Styles/Component-Styles/Navbar.module.scss";

import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // const doubleFunction = () => {
  //   showMenu();
  //   scrollUp();
  // };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={Styles.Navbar}>
      <div className={Styles.Logo_Container}>
        <img src={`https://github.com/Dev-Rook/phone-repair/blob/master/src/Assets/Images/Ios-Banner-Image.jpg?raw=true`} alt="" className={Styles.Logo} />
      </div>

      <ul className={Styles.Navlink_Container}>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={""}>
            Home
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={""}>
            Store
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={""}>
            Repair
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={""}>
            Trade-In
          </Link>
        </li>
        <li className={Styles.NavItem}>
          <Link className={Styles.Navlink} to={""}>
            Contact
          </Link>
        </li>

        <MenuIcon
          onClick={showMenu}
          sx={{ color: "black", fontSize: 30 }}
          className={Styles.MenuIcon}
        />
      </ul>
    </div>
  );
};

export default Navbar;
