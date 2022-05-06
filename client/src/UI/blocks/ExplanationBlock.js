import React from "react";
import {Button} from "@mui/material";
import Step from "./auxiliary blocks/Step";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {NavLink} from "react-router-dom";

function ExplanationBlock() {
    return (
        <div className={'w80'}>
            <div className={'main_flex'} style={{margin: '100px 0'}}>
                <h1 className={'h30'} style={{width: '50%'}}>Ми допоможемо тобі розібратися у <span className={'span_yellow'}>криптосфері</span></h1>
                <div>
                    <Button variant={'contained'} style={{ padding: '10px 20px', backgroundColor: 'rgb(195,210,28)', borderRadius: '10px'}}>
                        <NavLink to="/blog" style={{color:'black',fontWeight: 'bold'}}>
                            Давай розпочнемо
                        </NavLink>
                    </Button>
                </div>
            </div>
            <div className={'main_flex'}>
                <Step context={
                    <div className={'flex_space'} style={{padding: '20px'}}>
                        <div className={'center_flex main_flex'}>
                            <AccountCircleIcon style={{fontSize: '40px'}}/>
                            <p style={{margin: '0 20px'}}>- - - - - - - - - - - - -</p>
                            <span className={'circle_span'}>1</span>
                        </div>
                        <h2 style={{margin: '20px 0'}}>Створіть акаунт</h2>
                        <p style={{lineHeight: '26px'}}>Це твій перший крок для того щоб
                            разом із нами ропочати досліджувати сферу криптовалют,
                            розпочни зараз і створи своє майбутьнє</p>
                    </div>
                }/>
                <Step context={
                    <div className={'flex_space'} style={{padding: '20px'}}>
                        <div className={'center_flex main_flex'}>
                            <FeaturedPlayListIcon style={{fontSize: '40px'}}/>
                            <p style={{margin: '0 20px'}}>- - - - - - - - - - - - -</p>
                            <span className={'circle_span'}>2</span>
                        </div>
                        <h2 style={{margin: '20px 0'}}>Відстежуйте криптовалюти</h2>
                        <p style={{lineHeight: '26px'}}>Ти маєш можливість переглядати курси понад 200 криптовалют,
                            і додавати їх у власний список для відстеження</p>
                    </div>
                }/>
                <Step context={
                    <div className={'flex_space'} style={{padding: '20px'}}>
                        <div className={'center_flex main_flex'}>
                            <TravelExploreIcon style={{fontSize: '40px'}}/>
                            <p style={{margin: '0 20px'}}>- - - - - - - - - - - - -</p>
                            <span className={'circle_span'}>3</span>
                        </div>
                        <h2 style={{margin: '20px 0'}}>Дізнавайся більше</h2>
                        <p style={{lineHeight: '26px'}}>Сучасні технології підрозумівають під собою
                            винаходження багато чого нового,
                            і щоб залишатися у темі тобі доведеться вивчати більше) </p>
                    </div>
                }/>
            </div>
        </div>
    );
}

export default ExplanationBlock
