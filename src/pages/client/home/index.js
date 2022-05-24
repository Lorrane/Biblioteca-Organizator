import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAdmin from '../../../components/menu-admin';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Rodape from '../../../components/rodape';
import EnhancedTable from '../../../components/enhancedTable';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const mdTheme = createTheme();

export default function Home() {

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

                    <Container maxWidth="false" >
                        <Container maxWidth="false" sx={{ p: 6 }} >
                            <Button onClick={() => navigate('/livro/cadastrar')} variant="outlined">Cadastrar Livros</Button>
                            <Container maxWidth="false" sx={{ p: 1 }} >
                                <EnhancedTable tableName='Lista de Livros' />
                            </Container>
                            <Rodape sx={{ pt: 4 }} />
                        </Container>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
