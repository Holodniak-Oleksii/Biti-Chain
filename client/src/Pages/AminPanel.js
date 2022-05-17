import React, {useContext, useEffect, useState} from "react";
import Header from "../UI/emelents/extremes/Header";
import AdminTable from "../UI/emelents/table/AdminTable";
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function AminPanel({AuthVisible}) {
    const [userList, setUsers] = useState([])
    const token = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get('/api/auth/user-list',  {
            headers:{
                'Authorization': `Bearer ${token.token}`
            }})
            .then(res => {
                return res.data
            }).then(data => {
            setUsers(data)
            setLoading(false)
        })
    }, [])

    if(!loading){
        return (
            <div className={'color_back'} style={{height: '100vh'}}>
                <Header AuthVisible={AuthVisible}/>
                <div className={'container admin'}>
                    <AdminTable loading={loading} rows={userList}/>
                </div>
            </div>
        );
    }
}

export default AminPanel
