import React, { useEffect, useState } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Styles from "./App.module.scss";

function App() {
  return (
    <div className={Styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
