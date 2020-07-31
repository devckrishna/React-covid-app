import React from "react";
import classes from "./Footer.module.css";
import github from "../../images/github.svg";
import gmail from "../../images/gmail.svg";
import linkedin from "../../images/linkedin.svg";
import { Redirect } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className={classes.Footer}>
        <div className={classes.nameTag}>Developed By Dev C. Krishna</div>
        <a href="https://github.com/devckrishna">
          <img src={github} className={classes.git}></img>
        </a>
        <a href="https://www.gmail.com">
          <img src={gmail} className={classes.mail}></img>
        </a>
        <a href="https://www.linkedin.com/in/dev-c-krishna-8385a51ab/">
          <img src={linkedin} className={classes.linkedin}></img>
        </a>
      </div>
    );
  }
  
}
export default Footer;
