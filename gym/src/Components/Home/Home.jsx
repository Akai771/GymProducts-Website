import React from "react";
import CarouselHome from "../Carousel/Carousel.jsx";
import ProdCard from "../Prodcard/ProdCard.jsx";
import HomeInfoSec from "../HomeInfo/homeInfoSec.jsx";
import ProdData from "../Prodcard/prod_Data.jsx";
import JustLaunchedData from "../Prodcard/JLData.jsx";
import JLCard from "../Prodcard/JLCard.jsx";
import "./Home.css";
import "../Fonts.css";
import FooterNew from "../Footer/Footer.jsx";
import TopRedirect from "../TopRedirectButton/TopRedirect";

const Home = () =>{
    return(<>
    <div id="topCarousel">
        <CarouselHome />
    </div>
    <section className="alignHomeItems popSect">
        <br/>
        <div class="vl"><h1 className="Mont800" style={{color:"#393E46", paddingLeft:"10px"}}>Popular</h1></div>
        <br/>
        <div className="rowCard">
            {ProdData.map((ProdData) => (
                <ProdCard key={ProdData.id} ProdData={ProdData}/>
                ))
            }
        </div>
        <br/><br/>    
    </section>
    <section className="alignHomeItems">
        <br/>
        <div class="vl"><h1 className="Mont800" style={{color:"#393E46", paddingLeft:"10px"}}>Just Launched!</h1></div>
        <br/>
        <div className="rowCard">
            {JustLaunchedData.map((JustLaunchedData) => (
                <JLCard key={JustLaunchedData.id} JustLaunchedData={JustLaunchedData}/>
            ))
            }
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
    <TopRedirect location="#topCarousel"/>
    <FooterNew/>
    </>);

}

export default Home;