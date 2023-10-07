import React from "react";
import CarouselHome from "./Carousel.jsx";
import ProdCard from "./Prodcard/ProdCard";
import HomeInfoSec from "./HomeInfo/homeInfoSec.jsx";
import "./Home.css";
import "./Fonts.css";
import FooterNew from "./Footer/Footer.jsx";

const Home = () =>{
    return(<>
    <div>
        <CarouselHome />
    </div>
    <section className="alignHomeItems popSect">
        <br/>
        <div class="vl"><h1 className="Mont800" style={{color:"#393E46", paddingLeft:"10px"}}>Popular</h1></div>
        <br/>
        <div className="rowCard">
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
        </div>
        <br/><br/>    
    </section>
    <section className="alignHomeItems">
        <br/>
        <div class="vl"><h1 className="Mont800" style={{color:"#393E46", paddingLeft:"10px"}}>Just Launched!</h1></div>
        <br/>
        <div className="rowCard">
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
            <ProdCard/>
        </div>
        <br/><br/>   
    </section>
    <section className="alignHomeItems infoSect">
        <HomeInfoSec/> 
    </section>
    <section className="rowCard" style={{paddingTop:"30px"}}>
        <br/>
        <div className="txtCard">
            <h1 className="Mont800" style={{fontSize:25, textAlign:"center"}}>+ MuscleBlaze - Leading Bodybuilding & Sports Nutrition Supplement Brand</h1>
        </div>
    </section>
    <FooterNew/>
    </>);

}

export default Home;