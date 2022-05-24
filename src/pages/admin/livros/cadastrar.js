import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAdmin from '../../../components/menu-admin';


import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rodape from '../../../components/rodape';
import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Cancel, Save } from '@mui/icons-material';



const mdTheme = createTheme();

export default function CadastroLivro() {

    const [selectGenrer, setSelectGenrer] = React.useState([]);
    const { navigate } = useNavigate();

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

    const handleSelectChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectGenrer(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>

                <MenuAdmin titulo='Cadastro de Livro' />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Paper>
                            <FormControl fullWidth sx={{ p: 2 }}>
                                <TextField id="title" label="Título" variant="standard" />
                            </FormControl>
                            <FormControl fullWidth sx={{ p: 2 }}>
                                <TextField id="subtitle" label="Subtítulo" variant="standard" />
                            </FormControl>
                            <FormControl fullWidth sx={{ p: 2 }}>
                                <TextField id="author" label="Autor(es)" variant="standard" />
                            </FormControl>
                            <FormControl fullWidth sx={{ p: 2 }}>
                                <TextField id="publishing" label="Editora" variant="standard" />
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
                            <Container align='right'>
                                <Button
                                    startIcon={<Cancel />}
                                    color='error'
                                    variant="contained"
                                    sx={{ m: 2 }}
                                    size='large'
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    startIcon={<Save />}
                                    variant="contained"
                                    sx={{ m: 2 }}
                                    size='large'
                                >
                                    Salvar
                                </Button>
                            </Container>
                        </Paper>

                        <Rodape sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
