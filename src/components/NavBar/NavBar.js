import React from "react";
import classes from "./NavBar.module.css";
import logo from "../../images/covid-logo.png";
import { Link, Route } from "react-router-dom";
import Prevention from "../../Pages/Prevention/Prevention";
import Symptoms from "../../Pages/Symtoms/Symtoms";
import MainHeader from "../MainHeader/MainHeader";

const navBar = (porps) => {
  return (
    <div className={classes.NavBar}>
      <ul className={classes.NavList}>
        <img src={logo} className={classes.logo} alt="logo" />
        <li className={classes.navHome}>
          <Link to="/" className={[classes.Links].join(" ")}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link to="/prevention" className={classes.Links}>
            Prevention And Symptoms
          </Link>
        </li>
      </ul>
      <Route exact path="/">
        <MainHeader />
      </Route>

      <Route path="/prevention">
        <Prevention />
      </Route>
    </div>
  );
};

export default navBar;
