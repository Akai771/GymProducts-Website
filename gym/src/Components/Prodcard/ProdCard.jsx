import React from "react";
import { useState } from "react";
import "./ProdCard.css";
// import ProdData from './prod_Data';

const ProdCard = ({ProdData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {ProdImage, ProdTitle, ProdDesc, ProdPrice} = ProdData;

  function handleChange() {
      if (buttonTxt === 'Added to Cart') {
        setButtonTxt('Add to Cart');
      } else{
        setButtonTxt('Added to Cart');
      }
    }
    return (
      <>
        <div class="Prodcard">
          <div class="Prodcard-img">
            <img src={ProdImage} alt={ProdTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{ProdTitle}</p>
            <p class="text-body " style={{fontSize:12}}>{ProdDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>{ProdPrice}</span>
          </div>
          <div class="Prodcard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default ProdCard;