import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAdmin from '../../../components/menu-admin';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rodape from '../../../components/rodape';



const mdTheme = createTheme();

export default function EditarLivro() {

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

                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: 240,
                                }}
                            >
                            </Paper>
                        </Grid>

                        <Rodape sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
