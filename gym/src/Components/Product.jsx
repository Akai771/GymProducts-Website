import React from "react";
import "./Product.css";
import "./Fonts.css";
import FooterNew from "./Footer/Footer";
// import ProdCard from "./Prodcard/ProdCard";

const Prod = () => {
  return (
    <>
      <div className="alignProdItems resizeCard">
        <h1 className="Mont800" style={{paddingTop:"50px"}}>Categories</h1>
        <br></br>
        <section>
          <div className="rowCatCard">
            <div className="CatCard">
              <img
                src="https://img1.hkrtcdn.com/27140/smn_image_2713960_o.png"
                alt="Protien Shakes"
              />
            </div>
            <div className="CatCard">
              <img
                src="https://img7.hkrtcdn.com/27140/smn_image_2713966_o.png"
                alt="Gainers"
              />
            </div>
            <div className="CatCard">
              <img
                src="https://img5.hkrtcdn.com/27140/smn_image_2713974_o.png"
                alt="Pre/Post Workout"
              />
            </div>
          </div>
          <br />
          <div className="rowCatCard">
            <div className="CatCard">
              <img
                src="https://img9.hkrtcdn.com/27140/smn_image_2713968_o.png"
                alt="Fit Foods"
              />
            </div>
            <div className="CatCard">
              <img
                src="https://img1.hkrtcdn.com/27140/smn_image_2713980_o.png"
                alt="Fat Loss"
              />
            </div>
            <div className="CatCard">
              <img
                src="https://img9.hkrtcdn.com/27140/smn_image_2713978_o.png"
                alt="Vitamins & Supplements"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Prod;
