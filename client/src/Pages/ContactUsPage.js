import React, {useEffect, useState} from "react";
import Header from "../UI/emelents/extremes/Header";
import {Button, TextareaAutosize, TextField} from "@mui/material";
import LowAlert from "../UI/emelents/alert/LowAlert";
import {useHttp} from "../hooks/http.hooks";

function ContactUsPage({AuthVisible}) {

    const [form, setForm] = useState({
        email: '', name: '', text: ''
    })
    const {loading, error, request, clearError} = useHttp()
    const [toastList, setToastList] = useState([]);
    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const sendHandler = async () => {
        await request('/api/auth/send-me-message', 'POST', form)
        setForm({
            email: '', name: '', text: ''
        })
    }
    useEffect(()=>{
        if(error){
            setToastList(toastList.concat(<LowAlert text={error} bottom={'10px'} left={'0'} key={toastList.length} />));
        }
        clearError()
    }, [error, clearError, toastList])

    return (
        <div className={'color_back contact'}>
            {toastList}
            <Header path={'../img/logo.png'} AuthVisible={AuthVisible}/>
            <div className={'container contact__flex'}>
                <div className={'contact__form'}>
                    <div className={'contact__label'}>Зв'яжіться з нами</div>
                    <TextField
                        onChange={changeHandler}
                        name='name'
                        required
                        value={form.name}
                        id="filled-required"
                        className={'contact__field'}
                        label="Ім'я" variant="standard" />
                    <TextField
                        onChange={changeHandler}
                        name='email'
                        value={form.email}
                        required
                        id="filled-required"
                        className={'contact__field'}
                        label="Email" variant="standard" />
                    <TextareaAutosize
                        onChange={changeHandler}
                        name='text'
                        value={form.text}
                        required
                        placeholder={'Ваше питання'}
                        style={{width: '100%', height: '70px', border: '1px solid #8a8585',backgroundColor: 'rgba(255,255,255,0)', color: 'white'}}
                    />
                    <Button disabled={loading} style={{color: '#9a9292', backgroundColor: '#222', padding: '15px 0'}}
                    onClick={sendHandler}
                    >Надіслати</Button>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage
