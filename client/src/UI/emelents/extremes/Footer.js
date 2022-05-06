import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Link} from "react-router-dom";

function Footer({color = 'gradient_block'}) {
    return (
        <footer className={color} style={{padding: ' 30px 0'}}>
            <div className={'main_flex w80'}>
                <div style={{width: '40%'}}>
                    <div className={'flex_star'}>
                        <img src={'../img/logo.png'} alt={'logo'} width={'8%'} style={{margin: '10px'}}/><h3>BitiChain</h3>
                    </div>
                    <div style={{fontSize: '16px', lineHeight: '24px'}}>
                            Твій найкращий криптовалютний сервіс,
                            який допоможе розібратися у темі "крипто інвестиції" та зробити твої перші кроки,
                            крім того, покаже всю найновішу інформацію про курси криптовалют,
                            кожен клац вирішує твоє майбутнє
                    </div>
                    <div className={"icon_space"}>
                        <YouTubeIcon/>
                        <InstagramIcon/>
                        <FacebookIcon/>
                        <TwitterIcon/>
                    </div>
                </div>
                <div className={'main_flex'} >
                   <ul className={'push'} style={{margin: '20px'}}>
                       <Link to='/'><li>Головна</li></Link>
                       <Link to="/blog"><li>Навчальна інформація</li></Link>
                       <li>Трейдити</li>
                    </ul>
                    <ul className={'push'} style={{margin: '20px'}}>
                        <li>Зворотній зв'язок</li>
                        <li>Калькулятор</li>
                        <li>API документація</li>
                    </ul>
                    <ul className={'push'} style={{margin: '20px'}}>
                        <Link to='/courses'><li>Курси валют</li></Link>
                        <li>Доєднуйся</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
