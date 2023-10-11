import React from "react";
import "./ProductDesc.css";
import CartButton from "../CartPage/CartButtons/CartButton";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function ProductDesc() {
    return(<>
    <br/>
    <section className="sectProdAln">
        <div className="prodDescImgCard">
        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to="/">Home</Link>
            <Link underline="hover" color="inherit" to="/Categories">Categories</Link>
            <Link underline="hover" color="inherit" to="/ProductDisplay">Protien Powder</Link>
            <Link underline="hover" color="text.primary" to="/ProductDesc" aria-current="page">Breadcrumbs</Link>
        </Breadcrumbs>
            <div className="productDescImg">
                <img src="https://img2.hkrtcdn.com/30466/prd_3046521-MuscleBlaze-Biozyme-Performance-Whey-4.4-lb-Chocolate-Hazelnut_o.jpg" alt="product" />
            </div>
        </div>
        <div className="prodDescInfo">
            <p>Whey Protiens</p>
            <h2>MuscleBlaze Biozyme Performance Whey</h2>
            <p>2 kg (4.4 lb), Chocolate Hazelnut</p>
            <div className="prodDescPrice">
                <p>MRP: <s>₹3,999</s></p>
                <h3>Price: ₹5,999 <span>(33% off)</span></h3>
                <p>Inclusive all Taxes</p>
                <hr />
                <div className="quantityBtn">
                    <span>Select Quantity</span>
                    <CartButton />
                </div>
                <hr />
                <div className="prodDescShipping">
                    <LocalShippingOutlinedIcon style={{fontSize:30, transform: "scaleX(-1)"}}/> 
                    <span className="Mont600" style={{fontSize:"20px"}}> Deliver to</span>
                    <br/>
                    <span className="Mont400" style={{fontSize:14}}>Enter Pincode to check Delivery Date</span>
                    <div class="inputCoupon">
                        <input type="text" class="CouponTxt" id="Coupon" name="Coupon" placeholder="Enter Pincode" autocomplete="off" />
                        <input class="button--submit" value="Check" type="submit" />
                    </div>
                </div>
                <hr />
                
            </div>
        </div>
    </section>
    </>)
}

export default ProductDesc;
