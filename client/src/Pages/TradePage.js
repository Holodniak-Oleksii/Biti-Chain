import React, {useEffect} from "react";
import {Chart, registerables} from "chart.js";
import renderChart from "../Utils/renderChart"
import getHistory from "../Utils/getHistory";
import setPointRadius from "../Utils/setPointRadius";
import LineChartConfig from "../Constants/LineChartConfig";
import Header from "../UI/emelents/extremes/Header";
import axios from "axios";
import TradeForm from "../UI/emelents/forms/TradeForm";
import VanillaChart from "../UI/emelents/charts/VanillaChart";
import {useParams} from "react-router-dom";
import Hamburger from "../UI/emelents/extremes/Hamburger";
import useMediaQuery from "@mui/material/useMediaQuery";
Chart.register(...registerables);

function TradePage({AuthVisible}) {
    const matches768 = useMediaQuery('(min-width:770px)')
    const {id} = useParams();
    let currency = id.toString().toUpperCase()
    let data = [];
    let labels = [];
    let result = []
    let allRate = []
    const authData = JSON.parse(localStorage.getItem('userData'))
    getHistory(labels, data, currency).then()
    setPointRadius(result, data)

    let datasets = [{
        label: currency,
        radius: 0,
        data: data,
        fill: true,
        backgroundColor: null,
        pointRadius: result,
        pointBackgroundColor: "#fff",
        borderColor: '#7e8eb6',
        borderJoinStyle: 'miter',
    }]

    const check = async (datasets, times) => {
        if(times){
            times.forEach(element => {
                let dataRate = new Date(element.date)
                    if(dataRate < Date.now()){
                        axios.get(`https://api.binance.com/api/v3/trades?symbol=${currency}USDT&limit=1`)
                            .then(r=>{
                                if(element.color === '#00DA64FF'){
                                    if(element.rate < r.data[0].price){
                                        axios.get(`/api/auth/all`, {
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${authData.token}`
                                            }
                                        }).then(r=>{
                                            let newScore = +r.data[0].score + ( (+element.score/ 100) * 30)
                                            axios.post('/api/rate/new-messages', {
                                                message: newScore,
                                                id: Date.now()
                                            })
                                            axios.post('/api/auth/set-score', {score: newScore}, {headers: {
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${authData.token}`
                                                }
                                            })

                                        })
                                        return true
                                    }else {
                                        axios.get(`/api/auth/all`, {
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${authData.token}`
                                            }
                                        }).then(r=>{
                                            let newScore = +r.data[0].score - (+element.score)
                                            axios.post('/api/rate/new-messages', {
                                                message: newScore,
                                                id: Date.now()
                                            })
                                            axios.post('/api/auth/set-score', {score: newScore}, {headers: {
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${authData.token}`
                                                }
                                            })
                                        })
                                        return  false
                                    }
                                }else{
                                    if(element.rate > r.data[0].price){
                                        axios.get(`/api/auth/all`, {
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${authData.token}`
                                            }
                                        }).then(r=>{
                                            let newScore = +r.data[0].score + ( (+element.score/ 100) * 30)
                                            axios.post('/api/rate/new-messages', {
                                                message: newScore,
                                                id: Date.now()
                                            })
                                            axios.post('/api/auth/set-score', {score: newScore}, {headers: {
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${authData.token}`
                                                }
                                            })
                                        })
                                        return true
                                    }else {
                                        axios.get(`/api/auth/all`, {
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': `Bearer ${authData.token}`
                                            }
                                        }).then(r=>{
                                            let newScore = +r.data[0].score - (+element.score)
                                            axios.post('/api/rate/new-messages', {
                                                message: newScore,
                                                id: Date.now()
                                            })
                                            axios.post('/api/auth/set-score', {score: newScore}, {headers: {
                                                    'Content-Type': 'application/json',
                                                    'Authorization': `Bearer ${authData.token}`
                                                }
                                            })
                                        })
                                        return false
                                    }
                                }
                        }).then(result=>{
                            let index = times.indexOf(element)
                            times.splice(index, 1)
                            datasets.splice(index+1, 1)
                            axios.post('/api/rate/delete', {data: element, result: result}, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${authData.token}`
                                }
                            }).then()
                        })
                    }
                })
            }
    }

    const AddingRate = async (color, score, time)=>{
        axios.get(`https://api.binance.com/api/v3/trades?symbol=${currency}USDT&limit=1`).then(
            res =>{
                let empty = [];
                for(let i = 0; i < 1100; i++){
                    empty[i] = res.data[0].price
                }
                datasets.push({
                    type: "line",
                    label: "Stocks",
                    radius: 0,
                    fill: false,
                    borderColor: color,
                    borderJoinStyle: 'miter',
                    pointBackgroundColor: "#fff",
                    data: empty
                })
            })
        axios.get(`https://api.binance.com/api/v3/trades?symbol=${currency}USDT&limit=1`)
            .then(res => {
                let date = new Date();
                let dd = date.setMinutes(date.getMinutes() + time);
                let dateNow = new Date(dd)
                return {rate: res.data[0].price, date: dateNow.toISOString(), color: color, score: score, currency: currency}
            }).then(data =>{
            allRate.push(data)
            axios.post(`/api/rate/add`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authData.token}`
                }
            })
        })
    }

    useEffect(()=>{
        axios.get(`/api/rate/data`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authData.token}`
            }
        })
            .then(res => {
                let rate = []
                res.data.forEach(element => {
                    rate.push({
                        'currency': element.currency,
                        'score': element.score,
                        'color': element.color,
                        'rate': element.rate,
                        'date': element.date
                    })
                })
                return rate
            })
            .then(r => {
                allRate = r
                r.map((cur)=>{
                    if(cur.currency === currency){
                        let empty = [];
                        for(let i = 0; i < 1100; i++){
                            empty[i] = cur.rate
                        }
                        datasets.push({
                            type: "line",
                            label: "Stocks",
                            radius: 0,
                            fill: false,
                            borderColor: cur.color,
                            borderJoinStyle: 'miter',
                            pointBackgroundColor: "#fff",
                            data: empty
                        })
                    }
                })
            })
    })


    window.onload = function () {
        setInterval(()=>{
            check(datasets, allRate)
        }, 2000)
        let ctxEL = document.getElementById("myChart").getContext('2d');
        const  gradientBg = ctxEL.createLinearGradient(0,500,0,0);
        gradientBg.addColorStop(0, 'transparent');
        gradientBg.addColorStop(0.8, '#7e8eb6');
        datasets[0].backgroundColor = gradientBg;
        LineChartConfig.data.labels = labels;
        LineChartConfig.data.datasets = datasets;
        let ctx = new Chart(ctxEL, LineChartConfig);
        renderChart(ctx, data, currency.toString().toLowerCase(), labels).then()
    }


return (
        <div className="trade">
            {matches768 ? <Header position={'static'} AuthVisible={AuthVisible}/>: <Hamburger AuthVisible={AuthVisible}/>}
            <div className={'trade__flex'}>
                <VanillaChart/>
                <TradeForm currency={currency} add={AddingRate}/>
            </div>
        </div>
    )
}

export default TradePage