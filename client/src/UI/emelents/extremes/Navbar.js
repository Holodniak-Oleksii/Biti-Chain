import React, {useContext} from "react";
import {AppBar, Button, IconButton, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import ModalAuth from "../../forms/ModalAuth";
import {NavLink} from "react-router-dom";
import {AccountCircle, Logout} from "@mui/icons-material";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import {AuthContext} from "../../../context/AuthContext";

function Navbar({AuthVisible}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const auth = useContext(AuthContext)

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };
    const logoutHandler = async () =>{
        try {
            auth.logout()
        }catch (e){}
    }
    if(AuthVisible === false) {
        return (
            <AppBar position={'sticky'} sx={{backgroundColor: '#222222', padding: '0 10%'}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <IconButton>
                            <NavLink to="/">
                                <img alt={"img"} src={"../img/logo.png"} width={'50px'}/>
                            </NavLink>
                        </IconButton>
                    </div>
                    <Typography component="div" sx={{
                        width: '60%',
                        display: 'flex',
                        color: '#6d7070',
                        justifyContent: 'space-around',
                        fontWeight: 'lighter'
                    }}>
                        <div><NavLink to="/blog" className={'nav_hover'}>Навчальна інформація</NavLink></div>
                        <div><NavLink to="/courses" className={'nav_hover'}>Курси валют</NavLink></div>
                        <div><NavLink to="#" className={'nav_hover'}>Калькулятор</NavLink></div>
                        <div><NavLink to='#' className={'nav_hover'}>Зворотній зв'язок</NavLink></div>
                    </Typography>
                    <div>
                        <Button onClick={handleOpen} variant="contained" style={{
                            fontWeight: 'bold',
                            backgroundColor: '#c3d21c',
                            marginLeft: '10px',
                            color: 'black'
                        }}>Увійти</Button>
                        <ModalAuth handleClose={handleClose} open={open}/>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }else{
        return (
            <AppBar position={'sticky'} sx={{backgroundColor: '#222222', padding: '0 10%'}}>
                <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                        <IconButton>
                            <NavLink to="/">
                                <img alt={"img"} src={"../img/logo.png"} width={'50px'}/>
                            </NavLink>
                        </IconButton>
                    </div>
                    <Typography component="div" sx={{
                        width: '60%',
                        display: 'flex',
                        color: '#6d7070',
                        justifyContent: 'space-around',
                        fontWeight: 'lighter'
                    }}>
                        <div><NavLink to="/blog" className={'nav_hover'}>Навчальна інформація</NavLink></div>
                        <div><NavLink to="/courses" className={'nav_hover'}>Курси валют</NavLink></div>
                        <div><a href="/trade" className={'nav_hover'}>Трейдити</a></div>
                        <div><NavLink to="#" className={'nav_hover'}>Калькулятор</NavLink></div>
                        <div><NavLink to='#' className={'nav_hover'}>Зворотній зв'язок</NavLink></div>
                    </Typography>
                    <div>
                        <IconButton aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                            <AccountCircle sx={{color: '#c3d21c', fontSize: '40px'}} />
                        </IconButton>
                        <Menu id="menu-appbar"
                            sx={{
                                '& .MuiPaper-root': {
                                    backgroundColor: '#222',
                                },
                            }}
                            anchorEl={anchorEl}
                            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                            keepMounted
                            transformOrigin={{vertical: 'top', horizontal: 'right'}}
                            open={Boolean(anchorEl)}
                            onClose={handleCloseMenu}>
                            <MenuItem style={{backgroundColor: '#222'}}>
                                <NavLink style={{color: '#ffffff'}} to={"../watch"}>
                                    <FeaturedPlayListOutlinedIcon sx={{marginRight: '10px'}}/>Watchlist
                                </NavLink>
                            </MenuItem>
                            <MenuItem style={{backgroundColor: '#222'}} onClick={logoutHandler}>
                                <NavLink style={{color: '#ffffff'}} to={"/"}>
                                    <Logout sx={{marginRight: '10px'}}/>Logout
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        );
    }}

export default Navbar
