import React from "react";
import GainerCard from "./ProductCard/GainerCard";
import GainerData from "./ProductData/GainerData";
import "./ProductDisplay.css";
import FooterNew from "../Footer/Footer";

const Gainer = () => {
  return (
    <>
      <section className="ProdSectAln">
        <h1 className="Mont800">Gainer</h1>
        <p className="Mont400" style={{fontSize:13}}>Our Gainers are made with high-quality ingredients and are available in a variety of flavors. They are a convenient way to gain body mass.</p>
          <div className="ProdAlnCard">
              {GainerData.map((GainerData) => (
                  <GainerCard key={GainerData.id} GainerData={GainerData}/>
              ))
              }
          </div>
          <br/><br/>
      </section>
      <FooterNew />
    </>
  );
};

export default Gainer;
