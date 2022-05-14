import React, {useContext, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import {Button, TextField} from "@mui/material";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import RepeatOnRoundedIcon from '@mui/icons-material/RepeatOnRounded';
import {useHttp} from "../../hooks/http.hooks";
import {AuthContext} from "../../context/AuthContext";
import LowAlert from "../emelents/alert/LowAlert";
import {AccountCircle} from "@mui/icons-material";

function SingUpForm(){
    const {loading, error, request, clearError} = useHttp()
    const auth = useContext(AuthContext)

    const [toastLists, setToastLists] = useState([]);
    const [form, setForm] = useState({
        name:'', email: '', password: '', confirm: ''
    })

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(()=>{
        if(error){
            setToastLists(toastLists.concat(<LowAlert text={error} key={toastLists.length} />));
        }
        clearError()
    }, [error, clearError, toastLists])

    const registerHandler = async () =>{
        try {
            const data = await request('../api/auth/register', 'POST', {...form})
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
            {toastLists}
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
                <AccountCircle sx={{color: '#ed6c02', mr: 1, my: 0.5 }} />
                <TextField
                    onChange={changeHandler}
                    name="name"
                    label="Логін" variant="standard" sx={style} color="warning"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 3}}>
                <AlternateEmailIcon sx={{color: '#ed6c02', mr: 1, my: 0.5 }} />
                <TextField
                    onChange={changeHandler}
                    name="email"
                    label="Email" variant="standard" sx={style} color="warning"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 3 }}>
                <LockIcon sx={{ color: '#ed6c02', mr: 1, my: 0.5 }} />
                <TextField
                    onChange={changeHandler}
                    name="password"
                    label="Пароль" variant="standard" sx={style} color="warning" type="password"/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: 3 }}>
                <RepeatOnRoundedIcon sx={{ color: '#ed6c02', mr: 1, my: 0.5 }} />
                <TextField
                    onChange={changeHandler}
                    name="confirm"
                    label="Підтвердити пароль" variant="standard" sx={style} color="warning" type="password"/>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Button
                    disabled={loading}
                    onClick={registerHandler}
                    variant="contained" color="warning" sx={{px: 4, py: 1, fontSize: '16px'}}>
                    Зареєструватися
                </Button>
            </Box>
        </div>
    )
}

export default SingUpForm;
