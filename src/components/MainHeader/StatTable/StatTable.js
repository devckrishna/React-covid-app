import React from "react";
import axios from "axios";
import classes from "./StatTable.module.css";

// active: "144694"
// confirmed: "391440"
// deaths: "14165"
// deltaconfirmed: "0"
// deltadeaths: "0"
// deltarecovered: "0"
// lastupdatedtime: "28/07/2020 20:50:34"
// migratedother: "304"
// recovered: "232277"
// state: "Maharashtra
// statecode: "MH"

class StatTable extends React.Component {
  state = {
    data: [],
  };

  componentDidUpdate() {
    axios.get("https://api.covid19india.org/data.json").then((response) => {
      const temp = [];
      response.data.statewise.map((el) => {
        return temp.push(el);
      });
      const tab = temp.slice(1, temp.length);
      // console.log(tab);
      this.setState({ data: tab });
      // console.log(this.state);
    });
  }

  render() {
    const { data } = this.state;
    return (

      <div className={classes.mainTable}>

        <div className={classes.StatTable}>
          <div
            className={[
              classes.StatDiv,
              classes.state,
              classes.StatHeader,
            ].join(" ")}
          >
            State
          </div>
          <div className={[classes.StatDiv, classes.StatHeader].join(" ")}>
            Confirmed
          </div>
          <div className={[classes.StatDiv, classes.StatHeader].join(" ")}>
            Active
          </div>
          <div className={[classes.StatDiv, classes.StatHeader].join(" ")}>
            Recovered
          </div>
          <div className={[classes.StatDiv, classes.StatHeader].join(" ")}>
            Deaths
          </div>
        </div>
        {data.map((el) => {
          return (
            <div className={classes.StatTable}>
              <div className={[classes.StatDiv, classes.state].join(" ")}>
                {el.state} 
              </div>
              <div className={[classes.StatDiv, classes.Confirmed].join(" ")}>
                <div className={classes.delta}>
                  <div className={classes.deltaIncC}>+{el.deltaconfirmed}</div>
                  <div>{el.confirmed}</div>
                </div>
              </div>
              <div className={[classes.StatDiv, classes.Active].join(" ")}>
                <div className={classes.delta}>
                  <div className={classes.deltaIncR}> -</div>
                  <div>{el.active}</div>
                </div>
              </div>
              <div className={[classes.StatDiv, classes.Recovered].join(" ")}>
                <div className={classes.delta}>
                  <div className={classes.deltaIncR}>+{el.deltarecovered}</div>
                  <div>{el.recovered}</div>
                </div>
              </div>
              <div className={[classes.StatDiv, classes.Deaths].join(" ")}>
                <div className={classes.delta}>
                  <div className={classes.deltaIncD}>+{el.deltadeaths}</div>
                  <div>{el.deaths}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default StatTable;
