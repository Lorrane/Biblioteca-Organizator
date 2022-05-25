import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAdmin from '../../../components/menu-admin';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Rodape from '../../../components/rodape';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AddCircle, MenuBook, Person } from '@mui/icons-material';



const mdTheme = createTheme();

export default function Home() {

    const navigate = useNavigate();

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>

                <MenuAdmin titulo='Página Inicial' />

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

                    <Container maxWidth="false" >
                        <Container maxWidth="false"
                            sx={{
                                p: 6,
                                display: 'flex',
                                flexDirection: 'inline-block'
                            }} >
                            <Card sx={{ maxWidth: 345, m: 4 }} onClick={() => navigate('/usuarios/cadastrar')} >
                                <CardActionArea>
                                    <CardContent>
                                        <AddCircle color='primary' sx={{ fontSize: 140 }} />
                                        <Person color='primary' sx={{ fontSize: 140 }} />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cadastro de Usuários
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Clique aqui para ser direcionado ao formulário em que será possível realizar o
                                            cadastro de um novo Usuário no sistema.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345, m: 4 }} onClick={() => navigate('/usuarios/cadastrar')} >
                                <CardActionArea>
                                    <CardContent>
                                        <AddCircle color='primary' sx={{ fontSize: 140 }} />
                                        <Person color='primary' sx={{ fontSize: 140 }} />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cadastro de Usuários
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Clique aqui para ser direcionado ao formulário em que será possível realizar o
                                            cadastro de um novo Usuário no sistema.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345, m: 4 }} onClick={() => navigate('/usuarios/cadastrar')} >
                                <CardActionArea>
                                    <CardContent>
                                        <AddCircle color='primary' sx={{ fontSize: 140 }} />
                                        <Person color='primary' sx={{ fontSize: 140 }} />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cadastro de Usuários
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Clique aqui para ser direcionado ao formulário em que será possível realizar o
                                            cadastro de um novo Usuário no sistema.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Container>
                        <Container maxWidth="false"
                            sx={{
                                p: 6,
                                display: 'flex',
                                flexDirection: 'inline-block'
                            }} >
                            <Card sx={{ maxWidth: 345, m: 4 }} onClick={() => navigate('/livros/cadastrar')} >
                                <CardActionArea>
                                    <CardContent>
                                        <AddCircle color='primary' sx={{ fontSize: 140 }} />
                                        <MenuBook color='primary' sx={{ fontSize: 140 }} />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cadastro de Livros
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Clique aqui para ser direcionado ao formulário em que será possível realizar o
                                            cadastro de um novo Usuário no sistema.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345, m: 4 }} onClick={() => navigate('/livros/cadastrar')} >
                                <CardActionArea>
                                    <CardContent>
                                        <AddCircle color='primary' sx={{ fontSize: 140 }} />
                                        <MenuBook color='primary' sx={{ fontSize: 140 }} />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cadastro de Livros
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Clique aqui para ser direcionado ao formulário em que será possível realizar o
                                            cadastro de um novo Usuário no sistema.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            <Card sx={{ maxWidth: 345, m: 4 }} onClick={() => navigate('/livros/cadastrar')} >
                                <CardActionArea>
                                    <CardContent>
                                        <AddCircle color='primary' sx={{ fontSize: 140 }} />
                                        <MenuBook color='primary' sx={{ fontSize: 140 }} />
                                        <Typography gutterBottom variant="h5" component="div">
                                            Cadastro de Livros
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Clique aqui para ser direcionado ao formulário em que será possível realizar o
                                            cadastro de um novo Usuário no sistema.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Container>
                        <Rodape sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
