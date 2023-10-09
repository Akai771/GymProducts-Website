import React from "react";
import FatLossCard from "./ProductCard/FatLossCard";
import FatLossData from "./ProductData/FatLossData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const FatLoss = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Fat <span className="Mont800" style={{color:"white"}}>Loss</span></h1>
        <p className="Mont400" style={{fontSize:13}}>Our Protein Shakes are made with high-quality ingredients and are available in a variety of flavors. They are a convenient way to get your daily protein intake.</p>
          <div className="ProdAlnCard">
              {FatLossData.map((FatLossData) => (
                  <FatLossCard key={FatLossData.id} FatLossData={FatLossData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default FatLoss;
