import "./App.css";
import React, { Fragment } from "react";
import ShowRents from "./components/showRents";
import Navbar from "./components/navbar";
import CreateRent from "./components/createRent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowRents />} />
          <Route path="/create" element={<CreateRent />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
