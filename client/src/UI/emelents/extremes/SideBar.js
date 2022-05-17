import React from "react";

import PaidIcon from '@mui/icons-material/Paid';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LinkIcon from '@mui/icons-material/Link';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import FactoryIcon from '@mui/icons-material/Factory';
import HandymanIcon from '@mui/icons-material/Handyman';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListItemText,
    Typography
} from "@mui/material";
function SideBar() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className={'side_bar'}>
            <Accordion style={{backgroundColor: '#222222', color: '#6d7070'}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Що такє криптовалюта</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'div'}>
                        <List style={{ filter:'invert(1)'}}>
                            <ListItem disablePadding>
                                <a href={'#fiat'}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <PaidIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Що такє фіатна валюта?" />
                                    </ListItemButton>
                                </a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#cur'}><ListItemButton>
                                    <ListItemIcon>
                                        <CurrencyBitcoinIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Що такє криптовалюта?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#block'}><ListItemButton>
                                    <ListItemIcon>
                                        <LinkIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Що такє Blockchain?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#money'}><ListItemButton>
                                    <ListItemIcon>
                                        <AccountBalanceWalletIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Що такє криптогаманець?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#data'}><ListItemButton>
                                    <ListItemIcon>
                                        <DataObjectIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Які дані зберігає криптогаманець?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#get'}><ListItemButton>
                                    <ListItemIcon>
                                        <DataSaverOnIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Яким чином множна отримати криптовалюту?" />
                                </ListItemButton></a>
                            </ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion style={{backgroundColor: '#222222', color: '#6d7070'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Як отримати криптовалюту?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography component={'div'}>
                        <List style={{ filter:'invert(1)'}}>
                            <ListItem disablePadding>
                                <a href={'#help'}><ListItemButton>
                                    <ListItemIcon>
                                        <FactoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Як отримати криптовалюту за допомогою майнінга?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#help'}><ListItemButton>
                                    <ListItemIcon>
                                        <HandymanIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Що такє майнінг?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#buy'}><ListItemButton>
                                    <ListItemIcon>
                                        <AttachMoneyIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Як купити криптовалюту?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#bank'}><ListItemButton>
                                    <ListItemIcon>
                                        <AccountBalanceIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Що такє біржа?" />
                                </ListItemButton></a>
                            </ListItem>
                            <ListItem disablePadding>
                                <a href={'#japan'}><ListItemButton>
                                    <ListItemIcon>
                                        <WaterfallChartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Що такє «Японскі свічки»?" />
                                </ListItemButton></a>
                            </ListItem>
                        </List>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default SideBar
