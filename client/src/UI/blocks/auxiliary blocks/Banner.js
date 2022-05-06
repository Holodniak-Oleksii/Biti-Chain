import React from "react";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

function Banner({text, header, direction, button, special , img, link}) {
    if(direction === true){
    return (
        <div className={'main_flex'} style={{padding: '50px 0', marginTop:'50px'}}>
            <div style={{width: '50%' }} className={'center_flex'}>
                <div className={"noise_block"}>
                    <img src={img} style={{borderRadius: '20px'}} alt={'img'} width={"100%"}/>
                </div>
            </div>
            <div style={{width: '50%' , padding: '0 50px'}} className={'center_flex'}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 className={'h30'}>{header}</h1>
                    <p style={{fontSize: '25px', marginTop: '20px', lineHeight: '35px'}}>
                            <span className={'span_yellow'}>{special}</span>
                        {text}
                    </p>
                    <div style={{ marginTop: '20px'}}>
                        <Button variant={'contained'} style={{ padding: '10px 20px', backgroundColor: 'rgba(25,25,25,255)', borderRadius: '10px'}}>
                            <NavLink to={link} style={{color: 'white'}}>
                                {button}
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );}else {
        return(
        <div className={'main_flex'} style={{padding: '50px 0', marginTop:'50px'}}>
            <div style={{width: '50%' , padding: '0 50px'}} className={'center_flex'}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <h1 className={'h30'}>{header}</h1>
                    <p style={{fontSize: '25px', marginTop: '20px'}}>
                        {text}
                        <span className={'span_yellow'}>{special}</span>
                    </p>
                    <div style={{ marginTop: '20px'}}>
                        <Button variant={'contained'} style={{ padding: '10px 20px', backgroundColor: 'rgba(25,25,25,255)', borderRadius: '10px'}}>
                            <NavLink to={link} style={{color: 'white'}}>
                                {button}
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </div>
            <div style={{width: '50%' }} className={'center_flex'}>
                <div className={"noise_block"}>
                    <img src={img} style={{borderRadius: '20px'}} alt={'img'} width={"100%"}/>
                </div>
            </div>
        </div>
        )
    }
}

export default Banner
