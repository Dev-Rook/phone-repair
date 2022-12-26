import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

// Material UI Icon Import Start
import NavigationIcon from "@mui/icons-material/Navigation";
// Material UI Icon Import End

// Componet Import Start
import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";
// Componet Import End

// Page Imports Start
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Android from "./Pages/Android";
import Ios from "./Pages/Ios";
import Accesories from "./Pages/Accesories";
// Page Imports End

// Dynamic Page Import Start
import IosDevices from "./Dynamic-Pages/IosDevices";
import AndroidDevices from "./Dynamic-Pages/AndroidDevices";
import SingleItem from "./Dynamic-Pages/SingleItem";
// Dynamic Page Import End

function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"Contact"} element={<Contact />} />
          <Route path={"Ios"} element={<Ios />} />
          <Route path={"Android"} element={<Android />} />
          <Route path={"Accesories"} element={<Accesories />} />
          <Route path={"*"} element={<Error />} />

          {/* Dynamic Routes Start */}
          <Route path={"/Android/:id"} element={<AndroidDevices />} />
          <Route path={"/Ios/:id"} element={<IosDevices />} />
          <Route path={"/Single/:id"} element={<SingleItem />} />
          {/* Dynamic Routes End */}
        </Routes>
        <Footer />
      </BrowserRouter>

      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30, color: "black" }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
}

export default App;
