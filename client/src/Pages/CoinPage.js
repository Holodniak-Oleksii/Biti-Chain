import React from "react";
import {useParams} from "react-router-dom";
import ChartTime from "../UI/emelents/charts/ChartTime";
import InfoCoin from "../UI/emelents/coins/InfoCoin";
import Footer from "../UI/emelents/extremes/Footer";
import Header from "../UI/emelents/extremes/Header";

function CoinPage({AuthVisible}) {
    const { id } = useParams();
    console.log(id)
    return (
        <div className={'color_back'}>
            <Header position={'sticky'} path={'../img/logo.png'} AuthVisible={AuthVisible}/>
            <div className={'container'}>
                <InfoCoin nameCoin={id}/>
                <ChartTime nameCoin={id}/>
            </div>
            <Footer color={'new-footer-color'}/>
        </div>
    );
}

export default CoinPage
