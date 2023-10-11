import React from "react";
import CartPageCard from "./CartPageCard";
import CartPageData from "./CartPageData";
import FooterNew from "../Footer/Footer";

function CartPage() {
    var TotalValue = 0;
    for(var i=0; i<CartPageData.length; i++) {  
        TotalValue = TotalValue + parseInt(CartPageData[i].CartPagePrice);
    }

    return(<>
        <section>
            <div style={{padding:"60px"}}>
                <h1 className="Mont800" style={{textAlign:"center", color:"#393E46"}}>Cart</h1>
                {CartPageData.map((CartPageData) => (
                  <CartPageCard key={CartPageData.id} CartPageData={CartPageData}/>
              ))
              }
            </div>
            <hr/>
            <div>
                <h1 className="Mont800" style={{textAlign:"right", fontSize:20, paddingRight:50}}><span style={{color:"#fcbb21"}}>TOTAL:</span> ₹{TotalValue}</h1>
                <br/><br/>
            </div>
        </section>
        <FooterNew />
    </>)
}

export default CartPage;