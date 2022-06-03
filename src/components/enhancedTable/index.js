import React, { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../utils/requests';


function createData(isbn, title, subtitle, author, publishing, genrer, yearPubli) {
    return {
        isbn,
        title,
        subtitle,
        author,
        publishing,
        genrer,
        yearPubli,
    };
}

const rows = [
    // createData(123, 'Harry Potter', 'e a Pedra Filosofal', 'ROWLING, J.K.', 'Rocco', 'Fantasia, Aventura, Ação'),
    // createData(321, 'Harry Potter', 'e a Câmara Secreta', 'ROWLING, J.K.', 'Rocco', 'Fantasia, Aventura, Ação'),
    // createData(258, 'Harry Potter', 'e o Prisioneiro de Askaban', 'ROWLING, J.K.', 'Rocco', 'Fantasia, Aventura, Ação'),
    // createData(852, 'Senhor dos Aneis', 'A Sociedade do Anel', 'TOLKIEN, J.R.R.', 'Allen & Unwin', 'Fantasia, Aventura, Ação'),
    // createData(456, 'Senhor dos Aneis', 'As Duas Torres', 'TOLKIEN, J.R.R.', 'Allen & Unwin', 'Fantasia, Aventura, Ação'),
    // createData(654, 'O Hobbit', '', 'TOLKIEN, J.R.R.', 'Allen & Unwin', 'Fantasia, Aventura, Ação'),
    // createData(789, 'A sutil Arte de ligar o F*da-se', 'Uma estratégia Inusitada de uma vida melhor', 'MANSON, Mark', 'Intrinsica', 'Auto-Ajuda'),
    // createData(987, 'O Cortiço', '', 'AZEVEDO, Aluísio', 'FTD Educação', 'Didático'),
    // createData(951, 'Memórias Postumas de Brás Cubas', '', 'ASSIS, Machado de', 'Principis', 'Ficção'),
    // createData(753, 'Dom Casmurro', '', 'ASSIS, Machado de', 'Principis', 'Fantasia, Aventura, Ação'),
];

// pegar os dados que estão chegando da Api, adicionar um por um no rows usando o createData.

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
        id: 'author',
        numeric: false,
        disablePadding: true,
        label: 'Autor(es)',
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

];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    {/* <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'Selecione todos os Livros',
                        }}
                    /> */}
                </TableCell>
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
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const { numSelected, tableName } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selecionado(s)
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {`${tableName.tableName}`}
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable(tableName) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('title');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [book, setBook] = useState({
        isbn: 0,
        title: "",
        subtitle: "",
        author: "",
        publishing: "",
        genrers: ""
    });
    const [book_genrer, setBook_genrer] = useState({
        id: 0,
        book_id: 0,
        genrer_id: 0
    });
    const [genrers, setGenrers] = useState([]);

    function handleGenrers(param) {
        let genrersString = "";

        param.map(item => (
            genrersString = genrersString.concat(', ')
        ));

        return genrersString;
    }

    useEffect(() => {
        axios.get(`${BASE_URL}/books`)
            .then(response => {
                const data = response.data;
                console.log(data);
                data.content.map(book => {
                    axios.get(`${BASE_URL}/book_genrers/${book.isbn}`)
                        .then(book_genrers => {
                            book_genrers.content.map(book_genrer => (
                                axios.get(`${BASE_URL}/genrer/${book_genrer.genrer_id}`)
                                    .then(genrerslist => {
                                        genrerslist.map(genrer => (
                                            genrers.push(genrer.name)
                                        ));
                                        rows.push(
                                            createData(
                                                book.isbn,
                                                book.title,
                                                book.subtitle,
                                                book.author,
                                                book.publishing,
                                                handleGenrers(genrers),
                                                book.yearPubli
                                            )
                                        )
                                    })
                            ))

                        })
                })
            });
    }, []);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.isbn);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const navigate = useNavigate();

    // const handleClick = (event, isbn) => {
    // const selectedIndex = selected.indexOf(isbn);
    // let newSelected = [];

    // if (selectedIndex === -1) {
    //     newSelected = newSelected.concat(selected, isbn);
    // } else if (selectedIndex === 0) {
    //     newSelected = newSelected.concat(selected.slice(1));
    // } else if (selectedIndex === selected.length - 1) {
    //     newSelected = newSelected.concat(selected.slice(0, -1));
    // } else if (selectedIndex > 0) {
    //     newSelected = newSelected.concat(
    //         selected.slice(0, selectedIndex),
    //         selected.slice(selectedIndex + 1),
    //     );
    // }
    // navigate(`/livros/cadastrar/${isbn}`)

    // setSelected(newSelected);
    // };

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

    const isSelected = (isbn) => selected.indexOf(isbn) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <EnhancedTableToolbar numSelected={selected.length} tableName={tableName} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={dense ? 'medium' : 'small'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.isbn);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            // onClick={(event) => handleClick(event, row.isbn)}
                                            onClick={() => (navigate(`/livro/${row.isbn}`))}
                                            role="checkbox"
                                            // aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.isbn}
                                        // selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                {/* <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                /> */}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.isbn}
                                            </TableCell>
                                            <TableCell align="left">{row.title}</TableCell>
                                            <TableCell align="left">{row.subtitle}</TableCell>
                                            <TableCell align="center">{row.author}</TableCell>
                                            <TableCell align="center">{row.publishing}</TableCell>
                                            <TableCell align="center">{row.genrer}</TableCell>
                                            <TableCell align="center">{row.yearPubli}</TableCell>
                                        </TableRow>
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
                    count={rows.length}
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
