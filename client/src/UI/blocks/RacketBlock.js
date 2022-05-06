import React from "react";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

function RacketBlock() {
    return (
        <div className={'gradient_block'}>
            <div className={'w80 main_flex'} style={{alignItems: 'center'}}>
                <div className={'side_block'}>

                    <h1  className={'h40'}>
                        Стартуємо на першій космічній!
                    </h1>
                    <p className={'thin_p'}>
                        Твій найкращий крипто порадник, який допоможе розібратися у темі "крипто інвестиції" та зробити твої перші кроки, крім того, покаже всю найновішу інформацію про курси крипто валют
                    </p>
                    <div>
                        <Button variant={'contained'} style={{ padding: '10px 20px', backgroundColor: 'rgba(25,25,25,255)', borderRadius: '10px'}}>
                            <NavLink to="/blog" style={{color: 'white'}}>Дізнайся більше</NavLink>
                        </Button>
                    </div>
                </div>
                <div className={'side_block'}>
                    <img src={'img/orbit.png'} alt={'img'} width={'100%'}/>
                </div>
            </div>
        </div>
    );
}

export default RacketBlock
