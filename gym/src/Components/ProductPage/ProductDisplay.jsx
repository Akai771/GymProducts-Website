import React from "react";
import ProtienCard from "./ProtienCard";
import ProtienShakeData from "./ProductData/ProtienShakesData";
// import { Link } from "react-router-dom";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const ProductDisplay = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800" style={{color:"#FFD369"}}>Protien <span className="Mont800" style={{color:"black"}}>Powder</span></h1>
        <p className="Mont400" style={{fontSize:13}}>MuscleBlaze® Protein Shakes are made with high-quality ingredients and are available in a variety of flavors. They are a convenient way to get your daily protein intake.</p>
          <div className="ProdAlnCard">
              {ProtienShakeData.map((ProtienShakeData) => (
                  <ProtienCard key={ProtienShakeData.id} ProtienShakeData={ProtienShakeData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default ProductDisplay;
