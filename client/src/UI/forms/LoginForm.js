import React, {useContext, useEffect, useState} from "react";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import {Button, TextField} from "@mui/material";
import Box from "@mui/material/Box";
import {useHttp} from "../../hooks/http.hooks";
import {AuthContext} from "../../context/AuthContext";
import LowAlert from "../emelents/alert/LowAlert";

function LoginForm(){
    const {loading, error, request, clearError} = useHttp()
    const auth = useContext(AuthContext)
    const [toastList, setToastList] = useState([]);
    const [form, setForm] = useState({
        email: '', password: '', confirm: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(()=>{
        if(error){
            setToastList(toastList.concat(<LowAlert text={error} key={toastList.length} />));
        }
        clearError()
    }, [error, clearError, toastList])

    const loginHandler = async () =>{
        try {
            const data = await request('../api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        }catch (e){}
    }

    const style = {
                width: '100%',
                label:{color: '#ed6c02'},
                input: { color: '#ed6c02', border: '#ed6c02' },
                fieldset: {borderColor: '#ed6c02'}
    };
    return(
        <div>
            {toastList}
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                <AlternateEmailIcon sx={{color: '#ed6c02', mr: 1, my: 0.5 }} />
                <TextField name="email" onChange={changeHandler} label="Email" variant="standard" sx={style} color="warning"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 3 }}>
                <LockIcon sx={{ color: '#ed6c02', mr: 1, my: 0.5 }} />
                <TextField name="password" onChange={changeHandler} label="Password" variant="standard" sx={style} color="warning" type="password"/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button onClick={loginHandler} disabled={loading} variant="contained" color="warning" sx={{px: 4, py: 1, fontSize: '16px'}}>
                    LOGIN
                </Button>
            </Box>
        </div>
    )
}

export default LoginForm;
