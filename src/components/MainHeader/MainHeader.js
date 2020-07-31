import React from "react";
import axios from "axios";
import classes from "./MainHeader.module.css";
import MainItem from "./mainItem/mainItem";
import StatTable from "./StatTable/StatTable";
import Footer from "../Footer/Footer";
import Jello from 'react-reveal/Jello';

// active: "510781"
// confirmed: "1535335"
// deaths: "34252"
// deltaconfirmed: "3201"
// deltadeaths: "24"
// deltarecovered: "1096"
// lastupdatedtime: "29/07/2020 12:01:27"
// migratedother: "424"
// recovered: "989878"
// state: "Total"
// statecode: "TT"
// statenotes: ""

class MainHeader extends React.Component {
  state = {
    totalConfirmed: 0,
    totalDeceased: 0,
    totalRecovered: 0,
    totalActive: 0,
    inCon: 0,
    inRe: 0,
    inDe: 0,
    inAc: 0,
  };

  componentDidMount() {
    axios.get("https://api.covid19india.org/data.json").then((response) => {
      const reqHead =response.data.statewise[0];
      const t = reqHead.confirmed;
      const d = reqHead.deaths;
      const r = reqHead.recovered;
      console.log(response)

      const de = response.data.statewise[0].deltadeaths;

      const ci = response.data.statewise[0].deltaconfirmed;

      const re = response.data.statewise[0].deltarecovered;

      const ac = ci - de - re;

      this.setState({
        totalConfirmed: parseInt(reqHead.confirmed)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        totalDeceased: parseInt(reqHead.deaths)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        totalRecovered: parseInt(reqHead.recovered)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        totalActive: parseInt(reqHead.active)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        inCon: ci,
        inRe: re,
        inDe: de,
        inAc: ac,
      });
      //   console.log(c);
      //   console.log(de);
      //   console.log(this.state.inDe);
    });
  }

  render() {
    const {
      totalConfirmed,
      totalActive,
      totalDeceased,
      totalRecovered,
      inCon,
      inRe,
      inDe,
      inAc,
    } = this.state;
    return (
      <React.Fragment>
        <div className={classes.mainImage}></div>
        <Jello>
          <div className={classes.MainHeader}>
          <MainItem conName="Confirmed" in={inCon}>
            {totalConfirmed}
          </MainItem>
          <MainItem conName="Active" in={inAc}>
            {" "}
            {totalActive}{" "}
          </MainItem>
          <MainItem conName="Recovered" in={inRe}>
            {" "}
            {totalRecovered}{" "}
          </MainItem>
          <MainItem conName="Deceased" in={inDe}>
            {" "}
            {totalDeceased}{" "}
          </MainItem>
        </div>
        </Jello>
        
        <StatTable />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default MainHeader;
