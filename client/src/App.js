import "./App.css";
import NavbarComp from "./components/navbar";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RentList from "./components/rentlist";

function App() {
  return (
    <Fragment>
      <NavbarComp />
      <RentList />
      <RentList />
    </Fragment>
  );
}

export default App;
