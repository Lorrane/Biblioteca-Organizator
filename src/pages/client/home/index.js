import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAdmin from '../../../components/menu-admin';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Rodape from '../../../components/rodape';
import EnhancedTable from '../../../components/enhancedTable';



const mdTheme = createTheme();

export default function Home() {

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
                            onde ficará o botão de cadastro
                            <Container maxWidth="false" >
                            </Container>
                            <EnhancedTable tableName='Lista de Livros' />
                            <Rodape sx={{ pt: 4 }} />
                        </Container>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
