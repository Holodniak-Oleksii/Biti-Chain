import React from "react";
import {useParams} from "react-router-dom";
import ChartTime from "../UI/emelents/charts/ChartTime";
import InfoCoin from "../UI/emelents/coins/InfoCoin";
import Footer from "../UI/emelents/extremes/Footer";
import Navbar from "../UI/emelents/extremes/Navbar";

function CoinPage({AuthVisible}) {
    const { id } = useParams();

    return (
        <div className={'color_back'}>
            <Navbar AuthVisible={AuthVisible}/>
            <div className={'container'}>
                <InfoCoin nameCoin={id}/>
                <ChartTime nameCoin={id}/>
            </div>
            <Footer color={'new-footer-color'}/>
        </div>
    );
}

export default CoinPage
