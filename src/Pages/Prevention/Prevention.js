import React from "react";
import classes from "./Prevention.module.css";
import cough from "../../images/cough.svg";
import fever from "../../images/fever.svg";
import bone from "../../images/bone.svg";
import fatigue from "../../images/fatigue.svg";
import dia from "../../images/dia.svg";
import breathing from "../../images/breathing.svg";
import Footer from "../../components/Footer/Footer";

const prevention = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Prevention}>
        <div className={classes.heading}>
          <h3 className={classes.headingMain}>How to protect yourself</h3>
          <h3 className={classes.headingPrimary}>Stay safe from coronavirus</h3>
        </div>
        <div className={classes.cards}>
          <div className={classes.cardItem}>
            <img src={cough}></img>
            <h3>Coughing And Sneezing</h3>
            <p>
              The cough is dry and persistent. It is accompanied with shortness
              of breath and muscle pain.
            </p>
          </div>

          <div className={[classes.cardItem,classes.high].join(" ")}>
            <img src={fever}></img>
            <h3>Hot Fever</h3>
            <p>Patient might develop high fever similar to common flu.</p>
          </div>

          <div className={[classes.cardItem,classes.high].join(" ")}>
            <img src={bone}></img>
            <h3>Aches And Pains</h3>
            <p>Ache and pain in body may be observed in some patients.</p>
          </div>

          <div className={classes.cardItem}>
            <img src={fatigue}></img>
            <h3>Fatigue</h3>
            <p>Patients may experience extreme fatigue</p>
          </div>

          <div className={classes.cardItem}>
            <img src={dia}></img>
            <h3>Diarrhea</h3>
            <p>In some cases patients experience diarrhea.</p>
          </div>

          <div className={[classes.cardItem,classes.high].join(" ")}>
            <img src={breathing}></img>
            <h3>Shortness of breath or difficulty breathing</h3>
            <p>
              In extreme cases patients might experience shortness fo breath or
              difficulty breathing
            </p>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className={classes.SymptomsHeading}>Symptoms of Covid-19</h3>
        <div className={classes.dosHeading}>
          <h3>What you should do</h3>
          <h3>What you should avoid</h3>
        </div>

        <div className={classes.Sym}>
          <div className={[classes.SItem, classes.dos].join(" ")}>
            <h4>Hand Wash</h4>
            <p>
              Regular hand wash for 30 seconds will help you avoid germs or any
              kind of infection
            </p>
          </div>
          <div className={[classes.SItem, classes.dont].join(" ")}>
            <h4>Avoid Close Contact With Anyone</h4>
            <p>
              Do not get close to anyone, especially touching or laughing
              closely.{" "}
            </p>
          </div>
          <div className={[classes.SItem, classes.dos].join(" ")}>
            <h4>Consult A Doctor If Sick</h4>
            <p>
              If you are suffering from a common cold, cough, nausea, vomiting,
              shortness of breath and fatigue make it a point to consult a
              doctor at the earliest.
            </p>
          </div>
          <div className={[classes.SItem, classes.dont].join(" ")}>
            <h4>Avoid Using Public Transport</h4>
            <p>
              Travelling by cab, flight, bus, train and tramp can get you
              infected.
            </p>
          </div>

          <div className={[classes.SItem, classes.dos].join(" ")}>
            <h4>Cover Your Mouth & Nose</h4>
            <p>
              Covering your mouth and nose while sneezing or when anyone next to
              coughs or sneezes can do you a lot better.{" "}
            </p>
          </div>
          {/* 1 */}
          <div className={[classes.SItem, classes.dont].join(" ")}>
            <h4> Do Not Spit</h4>
            <p>
              Spitting can increase the spread of the virus. Avoid spiting at in
              public and home.
            </p>
          </div>
          <div className={[classes.SItem, classes.dos].join(" ")}>
            <h4>Stay Indoors</h4>
            <p>
              Avoid being in crowded places. An infected person can spread the
              virus instantly{" "}
            </p>
          </div>
          {/* 2 */}
          <div className={[classes.SItem, classes.dont].join(" ")}>
            <h4>Don’t Touch Your Face</h4>
            <p>
              Do not touch your face, nose and mouth often. This avoids the
              risks of developing the virus.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default prevention;
