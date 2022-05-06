import React, {useEffect, useState} from "react";
import Header from "../UI/emelents/extremes/Header";
import axios from "axios";
import InformationBlock from "../UI/blocks/InformationBlock";
import CarouselBlock from "../UI/blocks/CarrouselBlock";
import RacketBlock from "../UI/blocks/RacketBlock";
import ExplanationBlock from "../UI/blocks/ExplanationBlock";
import Motive from "../UI/blocks/auxiliary blocks/Motive";
import Footer from "../UI/emelents/extremes/Footer";

function MainPage({AuthVisible}) {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=1h`)
            .then(res => {
                let result = []
                res.data.map((cur) => {
                    result.push({
                        'id': cur.id,
                        'name': cur.name,
                        'symbol': cur.symbol,
                        'price': cur.current_price,
                        'img': cur.image,
                        'total_volume': cur.total_volume,
                        'price_change_percentage_1h_in_currency': cur.price_change_percentage_1h_in_currency,
                        'sparkline_in_7d': cur.sparkline_in_7d
                    })
                })
                return result
            }).then(data => {
                setCoins(data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <Header AuthVisible={AuthVisible}/>
            <RacketBlock/>
            <CarouselBlock coins={coins} loading={loading}/>
            <InformationBlock/>
            <ExplanationBlock/>
            <Motive/>
            <Footer/>
        </>
    );
}

export default MainPage
