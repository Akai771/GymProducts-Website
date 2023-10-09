import React from "react";
import { useState } from "react";
import "./ProdPageCard.css";


const VitaminsCard = ({VitaminsData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {VitaminsImage, VitaminsTitle, VitaminsDesc, VitaminsPrice} = VitaminsData;

  function handleChange() {
      if (buttonTxt === 'Added to Cart') {
        setButtonTxt('Add to Cart');
      } else{
        setButtonTxt('Added to Cart');
      }
    }
    return (
      <>
        <div class="ProductDispCard">
          <div class="ProductDispCard-img">
            <img src={VitaminsImage} alt={VitaminsTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{VitaminsTitle}</p>
            <p class="text-body " style={{fontSize:12}}>{VitaminsDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>{VitaminsPrice}</span>
          </div>
          <div class="ProductDispCard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default VitaminsCard;