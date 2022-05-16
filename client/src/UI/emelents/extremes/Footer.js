import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                        <a style={{color: 'white'}} target={'_blank'} href="https://www.youtube.com/channel/UCLcOuJzfH2oIEcDmSfnWprw"><YouTubeIcon/></a>
                        <a style={{color: 'white'}} target={'_blank'} href="https://www.instagram.com/oleksiigolodniak/?hl=uk"><InstagramIcon/></a>
                        <a style={{color: 'white'}} target={'_blank'} href="https://www.facebook.com/profile.php?id=100021938161472"><FacebookIcon/></a>
                        <a style={{color: 'white'}} target={'_blank'} href="https://www.linkedin.com/in/holodniak-oleksii/"><LinkedInIcon/></a>
                    </div>
                </div>
                <div className={'main_flex'} >
                   <ul className={'push'} style={{margin: '20px'}}>
                       <Link to='/'><li>Головна</li></Link>
                       <Link to="/blog"><li>Навчальна інформація</li></Link>
                   </ul>
                   <ul className={'push'} style={{margin: '20px'}}>
                        <Link to="/contact"><li>Зворотній зв'язок</li></Link>
                        <Link to='/courses'><li>Курси валют</li></Link>
                        <a target={'_blank'} href="https://coinmarketcap.com/"><li>CoinMarketCap</li></a>
                   </ul>
                   <ul className={'push'} style={{margin: '20px'}}>
                        <a target={'_blank'} href="https://www.coingecko.com/"><li>API документація</li></a>
                        <a target={'_blank'} href="https://binance-docs.github.io/apidocs/spot/en/"><li>API Binance</li></a>
                   </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
