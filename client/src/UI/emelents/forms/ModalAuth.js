import React from "react";
import {Backdrop, Fade, Modal} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoginForm from "./LoginForm";
import SingUpForm from "./SignUpForm";
import useMediaQuery from "@mui/material/useMediaQuery";

function ModalAuth({handleClose, open}){
    const [value, setValue] = React.useState('1');
    const matches500 = useMediaQuery('(min-width:500px)')
    const handleChange = (event, newValue) => {
            setValue(newValue);
    };

    const style = {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: matches500 === true ? 400 : 250,  background: `rgb(17, 17, 17)`, padding: `30px 35px 40px`,
            boxSizing: `border-box`, borderRadius: `20px`
    };
    return(
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{timeout: 500,}}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList variant={'fullWidth'} sx={{color: 'rgba(255,255,255,0.52)', marginBottom: '20px'}} onChange={handleChange} >
                                    <Tab label="Увійти" value="1" sx={{color: 'rgba(255,255,255,0.52)'}}/>
                                    <Tab label="Зареєструватися" value="2" sx={{color: 'rgba(255,255,255,0.52)'}}/>
                                </TabList>
                            </Box>
                            <TabPanel sx={{color: 'rgba(255,255,255,0.52)'}} value="1">
                                <LoginForm/>
                            </TabPanel>
                            <TabPanel value="2">
                                <SingUpForm/>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default ModalAuth;
