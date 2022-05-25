import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAdmin from '../../../components/menu-admin';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Rodape from '../../../components/rodape';
import { Button, FormControl, InputLabel, Select, TextField } from '@mui/material';
import { Cancel, Save } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const mdTheme = createTheme();

export default function CadastroUsuario() {

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>

                <MenuAdmin />
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
                                <TextField id="name" label="Nome Completo" variant="standard" />
                            </FormControl>
                            <FormControl fullWidth sx={{ p: 2 }}>
                                <TextField id="user" label="Usuário" variant="standard" />
                            </FormControl>
                            <FormControl fullWidth sx={{ p: 2 }}>
                                <TextField type='password' id="password" label="Senha" variant="standard" />
                            </FormControl>
                            {/* <FormControl fullWidth sx={{ p: 2 }}>
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
                            </FormControl> */}
                            <Container align='right'>
                                <Button
                                    startIcon={<Cancel />}
                                    color='error'
                                    variant="contained"
                                    sx={{ m: 2 }}
                                    size='large'
                                    onClick={() => navigate('/usuarios')}
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
