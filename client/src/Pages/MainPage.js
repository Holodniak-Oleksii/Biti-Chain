import React from "react";
import Header from "../UI/emelents/extremes/Header";
import InformationBlock from "../UI/blocks/InformationBlock";
import CarouselBlock from "../UI/blocks/CarrouselBlock";
import RacketBlock from "../UI/blocks/RacketBlock";
import ExplanationBlock from "../UI/blocks/ExplanationBlock";
import Motive from "../UI/blocks/auxiliary blocks/Motive";
import Footer from "../UI/emelents/extremes/Footer";

function MainPage({AuthVisible}) {
    return (
        <>
            <Header AuthVisible={AuthVisible}/>
            <RacketBlock/>
            <CarouselBlock/>
            <InformationBlock/>
            <ExplanationBlock/>
            <Motive/>
            <Footer/>
        </>
    );
}

export default MainPage
