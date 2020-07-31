import React from "react";
import classes from "./mainItem.module.css";
import CountUp from "react-countup";

const mainItem = (props) => {
  // console.log(classes  .props.conName)
  return (
    <div
      className={[
        classes.mainItem,
        props.conName === "Active" ? classes.Active : null,
        props.conName === "Confirmed" ? classes.Confirmed : null,
        props.conName === "Deceased" ? classes.Deceased : null,
        props.conName === "Recovered" ? classes.Recovered : null,
      ].join(" ")}
    >
      <div className={classes.Inc}>
        +{props.in.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </div>

      <div className={classes.Total}>
        {props.children}
      </div>
      <div className={classes.typeName}>Total {props.conName}</div>
    </div>
  );
};

export default mainItem;
