import React, {useEffect, useState} from "react";
import {Chart, registerables} from "chart.js";
import { Line } from "react-chartjs-2";
import Box from "@mui/material/Box";
import {Button, ButtonGroup} from "@mui/material";
import axios from "axios";
import {Skeleton} from "@mui/material";
Chart.register(...registerables);

function ChartTime({nameCoin}){
    const [statisticsPatients, setStatisticsPatients] = useState([])
    const [time, setTime] = useState('1')
    const [loading, setLoading] = useState(true)
    const stylesButton =  {
        color: 'gold',
        borderColor: 'gold'
    }
    const stylesButtonActive =  {
        color: 'black',
        backgroundColor: 'gold',
        borderColor: 'gold'
    }
    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${nameCoin}/market_chart?vs_currency=USD&days=${time}`)
            .then(res => {
                let dataRate = []
                let labels = []
                res.data.prices.map((cur) => {
                    dataRate.push(cur[1]);
                    let time = new Date(cur[0])
                    let timeDay = time.getUTCDate()
                    let timeMonth = time.getMonth()+1
                    if(timeDay<10) timeDay = '0'+timeDay
                    if(timeMonth<10) timeMonth = '0'+timeMonth
                    labels.push(`${timeDay}:${timeMonth}:${time.getFullYear()}`)
                })
                return {'data': dataRate, 'labels': labels}
            }).then(data => {
                console.log(data)
                setStatisticsPatients(data)
                setLoading(false)
            })
    }, [time, nameCoin])

    const LittleChartConfig = {
        type: 'line',
        data: {
            labels: statisticsPatients.labels,
            datasets: [{
                label: nameCoin,
                radius: 0,
                data: statisticsPatients.data,
                fill: false,
                borderColor: 'gold',
                borderJoinStyle: 'miter',
            }]
        },
        options: {
            hover: {mode: null},
            responsive: true,
            interaction: {
                intersect: false
            },
            plugins: {
                legend: false,
            },
            scales: {
                title:{
                    display: false
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 20
                    }
                },
            }
        }
    }
    if(loading){
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a' }}
                      width={'100%'} height={'110vh'} />
        )
    }else {
        return (
            <div style={{width: '100%', height:'110vh'}}>
                <Box sx={{ my: 3, height: '40px', display: "flex", justifyContent: 'space-between'}}>
                    <ButtonGroup aria-label="outlined button group">
                        <Button variant={time === '1'?"contained":"outlined"} style={time === '1'? stylesButtonActive : stylesButton} onClick={()=>{
                            setTime('1')
                        }}>День</Button>
                        <Button variant={time === '7'?"contained":"outlined"} style={time === '7'? stylesButtonActive : stylesButton} onClick={()=>{
                            setTime('7')
                        }}>Тиждень</Button>
                        <Button variant={time === '30'?"contained":"outlined"} style={time === '30'? stylesButtonActive : stylesButton} onClick={()=>{
                            setTime('30')
                        }}>Місяць</Button>
                        <Button variant={time === '365'?"contained":"outlined"} style={time === '365'? stylesButtonActive : stylesButton} onClick={()=>{
                            setTime('365')
                        }}>Рік</Button>
                    </ButtonGroup>
                    <span className={'h5-chart'}>Курс {nameCoin}</span>
                </Box>
                <Line data={LittleChartConfig.data} options={LittleChartConfig.options} type={'line'} redraw={true}/>
            </div>
        );
    }
}
export default ChartTime;