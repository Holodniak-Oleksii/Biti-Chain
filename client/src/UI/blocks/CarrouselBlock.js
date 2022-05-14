import React from "react";
import Advertising from "./auxiliary blocks/Advertising";
import DoubleCarousel from "../emelents/carrousel/DoubleCarousel";

function CarouselBlock() {

        return (
            <div>
                <Advertising/>
                <div className={'w80 main_flex padding_side'}>
                    <h1 className={'h30'} style={{width: '40%'}}> Най більш <span style={{color: '#c3d21c'}}> популярні</span> криптовалюти світу</h1>
                    <p style={{width: '40%', fontSize:'20px',lineHeight: '28px' }}>Топ найбільш популярних криптомонет, щоб ознайомитися краще із якоюсь монеткою натисни на неї</p>
                </div>
                <DoubleCarousel/>
            </div>
        );
}

export default CarouselBlock
