import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import {InputAdornment, TableHead, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {NavLink} from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import LittleChart from "../charts/LittleChart";
import {Skeleton} from "@mui/lab";
import axios from "axios";

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


export default function CustomPaginationActionsTable({rows, classPagin = 'footer__table', width = '40%', styleCellNormalHead, styleCellNormal, size = '100%', loading, flag = false}) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [search, setSearch] = React.useState("");
    const [itemDel, setDel] = React.useState("");
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const deleteItem = (el) => {
        axios.post(`/api/watch/delete-item`, {'data': el.idx}).then()
        rows.splice(rows.indexOf(el), 1);
        setDel(el)
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handlesearch= ()=>{
        let searchList = rows.filter( (coin)=>
            coin.name.toLowerCase().includes(search) ||  coin.symbol.toLowerCase().includes(search)
        )
        return (rowsPerPage > 0
                ? searchList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : searchList
        )
    }

    if(loading){
        return (
            <Skeleton variant="rectangular"  sx={{ bgcolor: '#1a1a1a', marginTop: '50px' }}
                      width={'100%'} height={'100vh'} />
        )
    }else {
        return (
            <div>
                {flag ?
                    <div style={{width: '100%', display: 'flex'}}>
                        <div style={{width: '25%'}} className={'watch-list'}>Твій список спостереження</div>
                        <div style={{width: '75%'}}>
                            <TextField variant="outlined"
                                       className={'tb__field'}
                                       sx={{
                                           label: {color: 'white'},
                                           input: {color: 'white', border: 'white'},
                                           fieldset: {borderColor: '#464141'}
                                       }}
                                       onChange={(e) => setSearch(e.target.value)}
                                       InputProps={{
                                           startAdornment: (<InputAdornment position="start"><SearchIcon
                                               sx={{color: 'white'}}/></InputAdornment>),
                                       }}
                            />
                        </div>
                    </div>
                    :
                    <TextField variant="outlined"
                               className={'tb__field'}
                               sx={{
                                   label: {color: 'white'},
                                   input: {color: 'white', border: 'white'},
                                   fieldset: {borderColor: '#464141'}
                               }}
                               onChange={(e) => setSearch(e.target.value)}
                               InputProps={{
                                   startAdornment: (<InputAdornment position="start"><SearchIcon
                                       sx={{color: 'white'}}/></InputAdornment>),
                               }}
                    />
                }
                <div>
                    <TableContainer component={Paper} sx={{borderRadius: '20px', border: 0, backgroundColor: '#222'}}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center" style={styleCellNormalHead}>Менета</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Символ</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Ціна</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Зміна ціни</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>Капіталізація</TableCell>
                                    <TableCell align="center" style={styleCellNormalHead}>7 днів</TableCell>
                                    {flag === true && <TableCell align="center" style={styleCellNormalHead}/>}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {handlesearch().map((row) => (
                                    <TableRow key={row.name} hover>
                                        <TableCell align="center" sx={{width: '150px'}} style={styleCellNormal}>
                                            <NavLink to={`/coins/${row.id}`}>
                                                <img src={row.img} width={width} alt={'img'}/>
                                                <p style={{color: '#fff'}}>{row.name}</p>
                                            </NavLink>
                                        </TableCell>
                                        <TableCell style={styleCellNormal} align="center">
                                            {row.symbol.toUpperCase()}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            ${row.price}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            {Number(row.price_change_percentage_1h_in_currency) < 0 ? <div
                                                    style={{color: "#F90716"}}>{row.price_change_percentage_1h_in_currency.toFixed(3)}%</div> :
                                                <div
                                                    style={{color: "#00da64"}}>+{row.price_change_percentage_1h_in_currency.toFixed(3)}%</div>}
                                        </TableCell>
                                        <TableCell align="center" style={styleCellNormal}>
                                            ${row.total_volume}
                                        </TableCell>
                                        <TableCell align="center" sx={{width: '150px'}} style={styleCellNormal}>
                                            {Number(row.price_change_percentage_1h_in_currency) < 0 ?
                                                <LittleChart size={size} prices={row.sparkline_in_7d.price} color={"#F90716"}/> :
                                                <LittleChart size={size} prices={row.sparkline_in_7d.price} color={"#00da64"}/>}
                                        </TableCell>
                                        {flag === true &&
                                            <TableCell align="center" style={styleCellNormal}>
                                                <DeleteIcon style={{cursor: 'pointer'}} onClick={()=>{deleteItem(row)}
                                                } fontSize={'large'}/>
                                            </TableCell>
                                        }
                                    </TableRow>
                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{height: 53 * emptyRows}}>
                                        <TableCell colSpan={6}/>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <div className={classPagin}>
                        <TablePagination style={{color: "white", borderBottom: 0}}
                                         rowsPerPageOptions={[]}
                                         colSpan={3}
                                         count={rows.length}
                                         rowsPerPage={rowsPerPage}
                                         page={page}
                                         SelectProps={{
                                             inputProps: {
                                                 'aria-label': 'rows per page',
                                             },
                                             native: true,
                                         }}
                                         onPageChange={handleChangePage}
                                         onRowsPerPageChange={handleChangeRowsPerPage}
                                         ActionsComponent={TablePaginationActions}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
