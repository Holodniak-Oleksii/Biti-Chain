import React from "react";
import Header from "../UI/emelents/extremes/Header";
import {Button, TextareaAutosize, TextField} from "@mui/material";

function ContactUsPage({AuthVisible}) {


    return (
        <div className={'color_back contact'}>
            <Header path={'../img/logo.png'} AuthVisible={AuthVisible}/>
            <div className={'container contact__flex'}>
                <div className={'contact__form'}>
                    <div className={'contact__label'}>Зв'яжіться з нами</div>
                    <TextField
                        required
                        id="filled-required"
                        className={'contact__field'}
                        label="Ім'я" variant="standard" />
                    <TextField
                        required
                        id="filled-required"
                        className={'contact__field'}
                        label="Email" variant="standard" />
                    <TextareaAutosize
                        required
                        placeholder={'Ваше питання'}
                        style={{width: '100%', height: '70px', border: '1px solid #8a8585',backgroundColor: 'rgba(255,255,255,0)', color: 'white'}}
                    />
                    <Button style={{color: '#9a9292', backgroundColor: '#222', padding: '15px 0'}}>Надіслати</Button>
                </div>
            </div>
        </div>
    );
}

export default ContactUsPage
