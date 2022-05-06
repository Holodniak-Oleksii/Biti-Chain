import React from "react";
import Advertising from "./auxiliary blocks/Advertising";
import Carousel from "../emelents/carrousel/Сarrousel";
import {Skeleton} from "@mui/lab";

function CarouselBlock({coins, loading}) {
    if(loading){
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a' }}
                      width={'100%'} height={'250px'} />
        )
    }else {
        return (
            <div>
                <Advertising/>
                <div className={'w80 main_flex padding_side'}>
                    <h1 className={'h30'} style={{width: '40%'}}> Най більш <span style={{color: '#c3d21c'}}> популярні</span> криптовалюти світу</h1>
                    <p style={{width: '40%', fontSize:'20px',lineHeight: '28px' }}>Топ найбільш популярних криптомонет, щоб ознайомитися краще із якоюсь монеткою натисни на неї</p>
                </div>
                <div style={{width: '100%', overflow: 'hidden'}}>
                    <div style={{marginLeft:'-100px'}}>
                        <Carousel trending={coins.slice(0, 9)} direction={'rtl'}/>
                    </div>
                    <div style={{marginRight:'-100px'}}>
                        <Carousel trending={coins.slice(9, 19)} direction={'ltr'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselBlock
