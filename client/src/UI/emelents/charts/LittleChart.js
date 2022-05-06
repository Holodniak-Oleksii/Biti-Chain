import React from "react";
import {Chart, registerables} from "chart.js";
import { Line } from "react-chartjs-2";
Chart.register(...registerables);

function LittleChart({prices,color}){
    let labels = []
    prices.map(()=>{
        labels.push('')
    })
    const LittleChartConfig = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                // label: 'I want to remove',
                radius: 0,
                data: prices,
                fill: false,//true
                pointBackgroundColor: "#fff",
                borderColor: color,
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
                tooltip: {enabled:false}
            },
            scales: {
                title:{
                    display: false
                },
                x: {
                    grid: {
                        borderWidth: 0,
                        display: false
                    }
                },
                y: {
                    ticks:{
                        display: false
                    },
                    grid: {
                        borderWidth: 0,
                        display: false
                    }
                }
            }
        }
    }
        return (
            <div style={{width:'100%'}}>
                <Line data={LittleChartConfig.data} options={LittleChartConfig.options} redraw={true} type={'line'}/>
            </div>
        );
}
export default LittleChart;