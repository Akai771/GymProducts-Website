import React from "react";
import { useState } from "react";
import "./ProdPageCard.css";


const ProtienCard = ({ProtienShakeData}) => {
  const [buttonTxt, setButtonTxt] = useState('Add to Cart');
  const {ProtienShakeImage, ProtienShakeTitle, ProtienShakeDesc, ProtienShakePrice} = ProtienShakeData;

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
            <img src={ProtienShakeImage} alt={ProtienShakeTitle} />
          </div>
          <div class="Prodcard-info">
            <p class="text-title Mont200" style={{fontSize:16}}>{ProtienShakeTitle}</p>
            <p class="text-body " style={{fontSize:12}}>{ProtienShakeDesc}</p>
            <span class="text-title Mont200" style={{fontSize:16}}>{ProtienShakePrice}</span>
          </div>
          <div class="ProductDispCard-footer">
            <button class="button2" onClick={handleChange}>{buttonTxt}</button>
          </div>
        </div>
      </>
    );
};



export default ProtienCard;