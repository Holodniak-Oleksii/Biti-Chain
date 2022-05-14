import React, {useEffect, useState} from "react";
import axios from "axios";
import Header from "../UI/emelents/extremes/Header";

import DoubleCarousel from "../UI/emelents/carrousel/DoubleCarousel";
import HistoryTable from "../UI/emelents/table/HistoryTable";

function ProfilePage({AuthVisible}) {
    const [history, setHistory] = useState([])
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [load, setLoad] = useState(true)
    const [rang, setRang] = useState([])
    const authData = JSON.parse(localStorage.getItem('userData'))

    function dict_reverse(obj) {
       let new_obj = []
        let rev_obj = Object.keys(obj).reverse();
       let item = 0
        rev_obj.forEach(function(i) {
            new_obj[item] = obj[i];
            item++
        })
        return new_obj;
    }

    useEffect(()=>{
        axios.get(`api/rate/all-history`, {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authData.token}`
            }})
            .then(res => {
                return res.data
            }).then(data => {
            setHistory(dict_reverse(data))
            setLoading(false)
        })
    }, [])

    useEffect(()=>{
        axios.get(`api/auth/all`, {headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authData.token}`
            }})
            .then(res => {
                return res.data
            }).then(data => {
            setUser(data[0])
            if(+data[0].score >= 11000 && +data[0].score < 20000){
                setRang([2, 'Даймьо'])
            }
            if(+data[0].score >= 20000 && +data[0].score < 30000){
                setRang([3, 'Сьоґун'])
            }
            if(+data[0].score >= 30000){
                setRang([4, 'Тенно'])
            }
            setLoad(false)
        })
    }, [])

    if(!load) {
        return (
            <div className={'color_back'}>
                <Header position={'static'} AuthVisible={AuthVisible}/>
                <div className={'profile'}>
                    <div className={'container profile__flex'}>
                        <div className={'profile__history'}>
                            <HistoryTable rows={history} loading={loading}/>
                        </div>
                        <div className={'profile__info'}>
                            <div className={'profile__item'}>
                                <span className={'profile__login'}>Логін:</span>
                                <span className={'profile__result'}>{user.name}</span>
                            </div>
                            <div className={'profile__item'}>
                                <span className={'profile__login'}>Email:</span>
                                <span className={'profile__result'}>{user.email}</span>
                            </div>
                            <div className={'profile__item'}>
                                <span className={'profile__login'}>Рахунок:</span>
                                <span className={'profile__result'}>{user.score}$</span>
                            </div>
                            <div className={'profile__item_rank'}>
                                <span className={'profile__login'}>Ранг:</span>
                                <div className={'profile__result'}>
                                    <div className={'profile__rang'}>
                                        <img src={`../img/ranges/${rang[0]}.png`} alt={rang[1]}/>
                                    </div>
                                    <span>{rang[1]}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <DoubleCarousel flag={false}/>
                    </div>
                </div>
            </div>
        );
    }else {<div>loading...</div>}
}

export default ProfilePage
