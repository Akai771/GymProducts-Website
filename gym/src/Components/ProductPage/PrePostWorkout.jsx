import React from "react";
import ProtienCard from "./ProductCard/ProtienCard";
import PrePostWorkoutData from "./ProductData/PrePostWorkoutData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const PrePostWorkout = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Pre/Post <span className="Mont800" style={{color:"white"}}>Workout</span></h1>
        <p className="Mont400" style={{fontSize:13}}>Pre-workout supplements are a great addition to the supplement rack of every fitness enthusiast. They enhance workout performance & focus - preventing early fatigue and reducing protein breakdown.</p>
          <div className="ProdAlnCard">
              {PrePostWorkoutData.map((PrePostWorkoutData) => (
                  <ProtienCard key={PrePostWorkoutData.id} PrePostWorkoutData={PrePostWorkoutData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default PrePostWorkout;
