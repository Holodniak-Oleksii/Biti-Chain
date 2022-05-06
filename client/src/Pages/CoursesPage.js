import React, {useEffect, useState}  from "react";
import Header from "../UI/emelents/extremes/Header";
import Footer from "../UI/emelents/extremes/Footer";
import CustomPaginationActionsTable from "../UI/emelents/table/CryptoTable";
import axios from "axios";
import FamousCoins from "../UI/emelents/coins/FamousCoins";

function CoursesPage({AuthVisible}) {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=1h`)
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
        <div className={'color_back'}>
            <Header position={'static'} AuthVisible={AuthVisible}/>
            <div className={'tb'}>
                <FamousCoins coins={coins.slice(0, 12)} loading={loading}/>
                <CustomPaginationActionsTable rows={coins} loading={loading}/>
            </div>
            <Footer color={'new-footer-color'}/>
        </div>
    );
}

export default CoursesPage
