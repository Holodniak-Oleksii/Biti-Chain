import React from "react";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";

function Motive() {
    return (
        <div className={'advertising_gradient'} style={{margin: '100px auto'}}>
            <div className={'advertising'}>
                <h2 className={'h20'}>Ми допоможемо вам скоріше опанувати всією необхідною інформацією</h2>
                <div className={'main_flex'}>
                    <Button variant={'contained'} style={{
                        padding: '10px 20px',
                        backgroundColor: 'rgb(195,210,28)',
                        borderRadius: '10px'}}>
                        <NavLink to="/blog" style={{fontWeight: 'bold',color: 'black'}}>
                            Давай розпочнемо
                        </NavLink>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Motive
