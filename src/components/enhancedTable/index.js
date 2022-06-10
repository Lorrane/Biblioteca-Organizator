import React, { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';
import { Divider, FormControl, IconButton, InputBase, InputLabel, MenuItem, Select, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledTableRow = styled(TableRow)({
    cursor: 'pointer',
    '&:nth-of-type(odd)': {
        backgroundColor: '#ededed',
        color: 'white',
    }
});

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'isbn',
        numeric: true,
        disablePadding: false,
        label: 'ISBN',
    },
    {
        id: 'author',
        numeric: false,
        disablePadding: true,
        label: 'Autor(es)',
    },
    {
        id: 'title',
        numeric: false,
        disablePadding: true,
        label: 'Título',
    },
    {
        id: 'subtitle',
        numeric: false,
        disablePadding: true,
        label: 'SubTítulo',
    },
    {
        id: 'publishing',
        numeric: false,
        disablePadding: true,
        label: 'Editora',
    },
    {
        id: 'genrer',
        numeric: false,
        disablePadding: true,
        label: 'Gênero(s)',
    },
    {
        id: 'year',
        numeric: true,
        disablePadding: true,
        label: 'Ano de Publicação',
    },

];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};



export default function EnhancedTable(tableName) {
    const navigate = useNavigate();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [genrers, setGenrers] = React.useState();
    const [selected, setSelected] = React.useState();
    const [search, setSearch] = React.useState('');
    const [books, setBooks] = useState([{
        isbn: 0,
        title: "",
        subtitle: "",
        author: "",
        publishing: "",
        yearPubli: 0
    }]);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - books.length) : 0;

    // const getGenrers = (book) => {
    //     axios.get(`${BASE_URL}/book_genrers/${book.isbn}`)
    //         .then(book_genrersResponse => {
    //             book_genrersResponse.data.map((bookGenrer, index) => (
    //                 axios.get(`${BASE_URL}/genrer/${bookGenrer.genrerId}`)
    //                     .then(genrerResponse => {
    //                         setGenrers([...genrers, genrerResponse.data.genrer]); 
    //                     })
    //             ))
    //         });
    //     let stringGenrers = '';
    //     return genrers.map((genrer, index) => {
    //         if (stringGenrers === '') {
    //             stringGenrers = `${genrer}`;
    //         } else {

    //             stringGenrers = +`, ${genrer}`;
    //         }
    //         return stringGenrers
    //     })
    // }

    useEffect(() => {
        axios.get(`${BASE_URL}/book`)
            .then(bookResponse => {
                setBooks(bookResponse.data);
            });
    }, []);


    const filteredTable = books.filter(
        (book) => {
            switch (selected) {
                case 'ISBN':
                    return (
                        book.isbn === search
                    );
                case 'Autor':
                    return book.author.startsWith(search);
                case 'Titulo':
                    return book.title.startsWith(search);
                case 'Classificação':
                    return book.subtitle.startsWith(search);
                default:
                    return book.author.startsWith(search);
            }
        });

    // books.filter((book) => {//book.author.startsWith(search))
    //     let v = [];
    //     if (selected === 'ISBN') {
    //         v = books.filter((book) => book.isbn.startsWith(search));
    //     } else {
    //         v = books.filter((book) => book.author.startsWith(search));
    //     }
    //     return v;
    // })





    return (
        <Box sx={{ width: '100%' }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '60%', m: '0 auto 4px auto' }}
            >
                <IconButton sx={{ p: '5px', width: '17%' }}>

                    <Select defaultValue={'Autor'} sx={{ width: '100%' }} onChange={(event) => { setSelected(event.target.value) }} >
                        <MenuItem value='ISBN' >
                            ISBN
                        </MenuItem>
                        <MenuItem value='Titulo'  >
                            Titulo
                        </MenuItem>
                        <MenuItem value='Autor'>
                            Autor
                        </MenuItem>
                        <MenuItem value='Classificação'>
                            Classificação
                        </MenuItem>
                    </Select>
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={`Digite o ${selected} que deseja buscar`}
                    inputProps={{ 'aria-label': 'busca na lista' }}
                    value={search}
                    onChange={(event) => { setSearch(event.target.value) }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
                    <SearchIcon />
                </IconButton>
                {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <DirectionsIcon />
                </IconButton> */}
            </Paper>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'medium' : 'small'}
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={books.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(filteredTable, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const labelId = `enhanced-table-checkbox-${index}`;
                                    return (
                                        <StyledTableRow
                                            hover
                                            onClick={() => (navigate(`/livro/${row.isbn}`))}
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.isbn}
                                        >
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="checkbox"
                                            >
                                                {row.isbn}
                                            </TableCell>
                                            <TableCell align="left">{row.author}</TableCell>
                                            <TableCell align="left">{row.title}</TableCell>
                                            <TableCell align="left">{row.subtitle}</TableCell>
                                            <TableCell align="center">{row.publishing}</TableCell>
                                            <TableCell align="center">verificar, resposta, da, API</TableCell>
                                            {/* <TableCell align="center">{getGenrers(row)}</TableCell> */}
                                            <TableCell align="center" padding='checkbox'>{row.yearPubli}</TableCell>
                                        </StyledTableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (dense ? 53 : 33) * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={books.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch checked={dense} onChange={handleChangeDense} />}
                label="Fortalecer Espaçamento"
            />
        </Box>
    );
}
