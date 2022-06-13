import { Cancel, Delete, Save } from '@mui/icons-material'
import { Button, Checkbox, Container, FormControl, InputLabel, ListItemText, MenuItem, Paper, Select, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function FormBook({ book, buttonName }) {

    const [selectGenrer, setSelectGenrer] = React.useState([]);
    const navigate = useNavigate();
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;


    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const handleSelectChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectGenrer(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const names = [
        'Aventura',
        'Ação',
        'Documentário',
        'Ficção',
        'Fantasia',
        'Humor',
        'Terror',
        'Drama',
        'Auto-Ajuda',
        'Educação',
    ];

    return (
        <Paper>
            <FormControl fullWidth sx={{ p: 2 }}>
                {book
                    ?
                    <TextField id="title" label="Título" variant="standard" value={book.title} InputLabelProps={{ shrink: true }} />
                    :
                    <TextField id="title" label="Título" variant="standard" />
                }
            </FormControl>
            <FormControl fullWidth sx={{ p: 2 }}>
                {book
                    ?
                    <TextField id="subtitle" label="Subtítulo" variant="standard" value={book.subtitle} InputLabelProps={{ shrink: true }} />
                    :
                    <TextField id="subtitle" label="Subtítulo" variant="standard" />
                }
            </FormControl>
            <FormControl fullWidth sx={{ p: 2 }}>
                {book
                    ?
                    <TextField id="author" label="Autor(es)" variant="standard" value={book.author} InputLabelProps={{ shrink: true }} />
                    :
                    <TextField id="author" label="Autor(es)" variant="standard" />
                }
            </FormControl>
            <FormControl fullWidth sx={{ p: 2 }}>
                {book
                    ?
                    <TextField id="publishing" label="Editora" variant="standard" value={book.publishing} InputLabelProps={{ shrink: true }} />
                    :
                    <TextField id="publishing" label="Editora" variant="standard" />
                }
            </FormControl>
            <FormControl fullWidth sx={{ p: 2 }}>
                <InputLabel id='genrer-label'>Categorias</InputLabel>
                <Select
                    labelId='genrer-label'
                    id="genrer"
                    multiple
                    value={selectGenrer}
                    onChange={handleSelectChange}
                    MenuProps={MenuProps}
                    variant="standard"
                    renderValue={selected => selected.join(', ')}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={selectGenrer.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ p: 2 }}>
                {book
                    ?
                    <TextField id="year" label="Ano de Publicação" variant="standard" value={book.year} InputLabelProps={{ shrink: true }} />
                    :
                    <TextField id="year" label="Ano de Publicação" variant="standard" />
                }
            </FormControl>
            <FormControl fullWidth sx={{ p: 2 }}>
                {book
                    ?
                    <TextField id="classification" label="Classificação" variant="standard" value={book.year} InputLabelProps={{ shrink: true }} />
                    :
                    <TextField id="classification" label="Classificação" variant="standard" />
                }
            </FormControl>
            <Container align='right'>
                {book
                    ?
                    <Button
                        startIcon={<Delete />}
                        color='error'
                        variant="contained"
                        sx={{ m: 2 }}
                        size='large'
                        onClick={() => navigate('/livros')}
                    >
                        Excluir
                    </Button>
                    :
                    <span></span>
                }
                <Button
                    startIcon={<Cancel />}
                    // color='error'
                    variant="contained"
                    sx={{ m: 2 }}
                    size='large'
                    onClick={() => navigate('/livros')}
                >
                    Cancelar
                </Button>
                <Button
                    startIcon={<Save />}
                    color="success"
                    variant="contained"
                    sx={{ m: 2 }}
                    size='large'
                >

                    {buttonName}
                </Button>
            </Container>
        </Paper>
    )
}

export default FormBook
