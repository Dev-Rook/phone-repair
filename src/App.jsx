import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

import NavigationIcon from "@mui/icons-material/Navigation";

import Navbar from "./Components/Main/Navbar";
import Footer from "./Components/Main/Footer";
import Fallback from "./Components/Main/Fallback";

// Page import Start
const Home = lazy(() => import("./Pages/Home"));
const Error = lazy(() => import("./Pages/Error"));
// Page Import End

// Dynamic Page Imports Start
const PostSingle = lazy(() => import("./Dynamic-Pages/PostSingle"));
const Profile = lazy(() => import("./Dynamic-Pages/Profile"));
// Dynamic Page Imports End

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
        <Navbar scroll={scrollUp} />
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"*"} element={<Error />} />

            {/* Dynamic Routes Start */}
            <Route path={"Post/:id"} element={<PostSingle />} />
            <Route path={"Profile/:id"} element={<Profile />} />
            {/* Dynamic Routes End */}
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>

      <NavigationIcon
        onClick={scrollUp}
        sx={{ fontSize: 30 }}
        className={`${Styles.Back_To_Top_Icon} ${
          backToTop ? Styles.Show_Back_To_Top : ""
        }`}
      />
    </div>
  );
}

export default App;
