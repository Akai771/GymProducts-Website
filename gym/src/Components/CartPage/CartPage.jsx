import React from "react";
import CartPageCard from "./CartPageCard";
import CartPageData from "./CartPageData";
import FooterNew from "../Footer/Footer";
import CheckoutCard from "./CheckoutCard";
import "./CartPage.css";
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';

function CartPage() {
    var TotalValue = 0;
    for(var i=0; i<CartPageData.length; i++) {  
        TotalValue = TotalValue + parseInt(CartPageData[i].CartPagePrice);
    }

    return(<>
        <h1 className="Mont800 hCart">Cart</h1>
        <section className="CartPageAln">
            <div className="CartCardAln">
                {CartPageData.map((CartPageData) => (
                  <CartPageCard key={CartPageData.id} CartPageData={CartPageData}/>
                    ))
                }
            </div>
            <div className="CheckoutCardAlnOut">
                <div className="CheckoutCardAlnIn">
                    <CheckoutCard/>
                </div>
                <div className="CouponAln">
                    <LocalOfferOutlinedIcon style={{fontSize:30, transform: "scaleX(-1)", color:"#FFD369"}}/> 
                    <span className="Mont600" style={{fontSize:"20px"}}> Apply Coupon</span>
                    <div class="inputCoupon">
                        <input type="text" class="CouponTxt" id="Coupon" name="Coupon" placeholder="Enter Coupon/Gift Code" autocomplete="off" />
                        <input class="button--submit" value="Apply" type="submit" />
                    </div>
                </div>
            </div>
        </section>
        <FooterNew />
    </>)
}

export default CartPage;