import React from "react";
import ProtienCard from "./ProductCard/ProtienCard";
import FitFoodsData from "./ProductData/FitFoodsData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const FitFoods = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Fit <span className="Mont800" style={{color:"white"}}>Foods</span></h1>
        <p className="Mont400" style={{fontSize:13}}>Our Protein Shakes are made with high-quality ingredients and are available in a variety of flavors. They are a convenient way to get your daily protein intake.</p>
          <div className="ProdAlnCard">
              {FitFoodsData.map((FitFoodsData) => (
                  <ProtienCard key={FitFoodsData.id} FitFoodsData={FitFoodsData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default FitFoods;
