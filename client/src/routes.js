import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import MainPage from "./Pages/MainPage";
import BlogPage from "./Pages/BlogPage";
import CoursesPage from "./Pages/CoursesPage";
import CoinPage from "./Pages/CoinPage";
import TradePage from "./Pages/TradePage";
import Page404 from "./Pages/404Page";
import ChooseCoinPage from "./Pages/ChooseCoinPage";
import WatchList from "./Pages/WatchList";

export const useRoutes = (AuthVisible) =>{

    if(AuthVisible){
        return(
            <Routes>
                <Route path="/" element={<MainPage AuthVisible={AuthVisible}/>} />
                <Route path="/blog" element={<BlogPage AuthVisible={AuthVisible}/>} />
                <Route path="/courses" element={<CoursesPage AuthVisible={AuthVisible}/>} />
                <Route path="/coins/:id" element={<CoinPage AuthVisible={AuthVisible}/>} />
                <Route path="/trade" element={<ChooseCoinPage AuthVisible={AuthVisible}/>} />
                <Route path="/currency/:id" element={<TradePage AuthVisible={AuthVisible}/>} />
                <Route path="/watch" element={<WatchList AuthVisible={AuthVisible}/>} />
                <Route path="*" element={<Page404 AuthVisible={AuthVisible}/>} />
            </Routes>
        )
    }else{
        return(
            <Routes>
                <Route path="*" element={<Page404 AuthVisible={AuthVisible}/>} />
                <Route path="/" element={<MainPage AuthVisible={AuthVisible}/>} />
                <Route path="/blog" element={<BlogPage AuthVisible={AuthVisible}/>} />
                <Route path="/courses" element={<CoursesPage AuthVisible={AuthVisible}/>} />
                <Route path="/coins/:id" element={<CoinPage AuthVisible={AuthVisible}/>} />
            </Routes>
        )
    }
}
