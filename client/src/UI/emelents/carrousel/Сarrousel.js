import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {NavLink} from "react-router-dom";
import LittleChart from "../charts/LittleChart";

const Carousel = ({trending, direction}) => {
        return(
            <div className={'carousel_block'}>
            <AliceCarousel
                responsive={{
                    0:{items: 2},
                    600:{items: 3},
                    1024: { items:4 }
                }}
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDurationc={1500}
                disableButtonsControls={true}
                disableDotsControls={true}
                autoPlay
                autoPlayDirection={direction}
                controlsStrategy="alternate"
            >
                {trending.map((coin, idx) =>{
                    return (
                        <div key={idx} className={'carrousel_item'}>
                            <NavLink to={`/coins/${coin.id}`} style={{display: 'flex'}} >
                                <img alt={"coin"}
                                     src={coin.img}
                                     width={'20%'}
                                />
                                <div style={{marginLeft: '10px'}}>
                                    <div style={{marginBottom:'5px'}}>
                                        {Number(coin.price_change_percentage_1h_in_currency) < 0 ?
                                            <div style={{color: "#F90716",fontSize: '1rem'}}>{coin.price_change_percentage_1h_in_currency.toFixed(1)}%</div> :
                                            <div style={{color: "#00da64",fontSize: '1rem'}}>+{coin.price_change_percentage_1h_in_currency.toFixed(1)}%</div>}
                                    </div>
                                    <div style={{color: '#fff', fontSize: '0.8rem'}}>
                                        <span style={{textTransform: 'uppercase'}}>{coin.symbol}: </span> ${coin.price}
                                    </div>
                                </div>
                                <div style={{width: '150px', marginLeft:'10px'}}>
                                    <LittleChart color={'#c3d21c'} prices={coin.sparkline_in_7d.price}/>
                                </div>
                            </NavLink>
                        </div>
                    )
                })
                }
            </AliceCarousel>
            </div>
        )
}

export default Carousel
