import React from 'react'

function livro() {

    // function createData(isbn, title, subtitle, author, publishing, genrer, yearPubli) {
    //     return {
    //         isbn,
    //         title,
    //         subtitle,
    //         author,
    //         publishing,
    //         genrer,
    //         yearPubli,
    //     };
    // }

    // const rows = [
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
    // ];

    // const [book_genrer, setBook_genrer] = useState({
    //     id: 0,
    //     book_id: 0,
    //     genrer_id: 0
    // });
    // const [genrers, setGenrers] = useState([]);

    // function handleGenrers(param) {
    //     let genrersString = "";

    //     param.map(item => (
    //         genrersString = genrersString.concat(', ')
    //     ));

    //     return genrersString;
    // }

    // const handleSelectAllClick = (event) => {
    //     if (event.target.checked) {
    //         const newSelecteds = rows.map((n) => n.isbn);
    //         setSelected(newSelecteds);
    //         return;
    //     }
    //     setSelected([]);
    // };

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

    return (
        /* <TableCell padding="checkbox">
                             <Checkbox
                                color="primary"
                                indeterminate={numSelected > 0 && numSelected < rowCount}
                                checked={rowCount > 0 && numSelected === rowCount}
                                onChange={onSelectAllClick}
                                inputProps={{
                                    'aria-label': 'Selecione todos os Livros',
                                }}
                            /> 
                        </TableCell>*/

        // const EnhancedTableToolbar = (props) => {
        //     const { numSelected, tableName } = props;

        //     return (
        //         <Toolbar
        //             sx={{
        //                 pl: { sm: 2 },
        //                 pr: { xs: 1, sm: 1 },
        //                 ...(numSelected > 0 && {
        //                     bgcolor: (theme) =>
        //                         alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        //                 }),
        //             }}
        //         >
        //             {numSelected > 0 ? (
        //                 <Typography
        //                     sx={{ flex: '1 1 100%' }}
        //                     color="inherit"
        //                     variant="subtitle1"
        //                     component="div"
        //                 >
        //                     {numSelected} selecionado(s)
        //                 </Typography>
        //             ) : (
        //                 <Typography
        //                     sx={{ flex: '1 1 100%' }}
        //                     variant="h6"
        //                     id="tableTitle"
        //                     component="div"
        //                 >
        //                     {`${tableName.tableName}`}
        //                 </Typography>
        //             )}

        //             {numSelected > 0 ? (
        //                 <Tooltip title="Delete">
        //                     <IconButton>
        //                         <DeleteIcon />
        //                     </IconButton>
        //                 </Tooltip>
        //             ) : (
        //                 <Tooltip title="Filter list">
        //                     <IconButton>
        //                         <FilterListIcon />
        //                     </IconButton>
        //                 </Tooltip>
        //             )}
        //         </Toolbar>
        //     );
        // };

        // EnhancedTableToolbar.propTypes = {
        //     numSelected: PropTypes.number.isRequired,
        // };

        <div>livro</div>
    )
}

export default livro
