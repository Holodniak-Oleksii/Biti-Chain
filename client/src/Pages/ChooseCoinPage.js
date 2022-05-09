import React, {useEffect, useState} from "react";
import Header from "../UI/emelents/extremes/Header";
import axios from "axios";
function ChooseCoinPage({AuthVisible}) {

    const [coins, setCoins] = useState([])
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=18&page=1&sparkline=true&price_change_percentage=1h`)
            .then(res => {
                let result = []
                res.data.map((cur) => {
                    if(cur.id !== 'tether' && cur.id !== 'usd-coin' && cur.id !== 'terrausd' && cur.id !== 'binance-usd' && cur.id !== 'staked-ether' && cur.id !== 'wrapped-bitcoin' ) {
                        result.push({
                            'id': cur.id,
                            'symbol': cur.symbol,
                            'img': cur.image,
                        })
                    }
                })
                return result
            }).then(data => {
            setCoins(data)
        })
    }, [])

    return (
        <div className={'currency'}>
            <Header position={'sticky'} path={'../img/logo.png'} AuthVisible={AuthVisible}/>
            <div className={'container currency__container'}>
                <div className={'currency__grid'}>
                {coins.map((cur, idx)=>(
                        <div key={idx} className={'currency__item'}>
                            <a href={`/currency/${cur.symbol}`} className={'currency__link'}>
                                <img src={cur.img} alt={cur.id} width={'30%'}/>
                                <span style={{display: 'block', textTransform: 'capitalize', marginLeft: '20px'}}>{cur.id}</span>
                                <span>({cur.symbol.toUpperCase()})</span>
                            </a>
                        </div>
                ))}
                </div>
            </div>
        </div>
    );
}
export default ChooseCoinPage
