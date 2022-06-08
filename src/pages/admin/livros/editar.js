import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MenuAdmin from '../../../components/menu-admin';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Rodape from '../../../components/rodape';
import axios from 'axios';
import { BASE_URL } from '../../../utils/requests';
import FormBook from '../../../components/form-book';
import { useParams } from 'react-router-dom';



const mdTheme = createTheme();


export default function EditarLivro() {

    const [book, setBook] = React.useState([]);
    const params = useParams();


    React.useEffect(() => {
        axios.get(`${BASE_URL}/book/${params.idLivro}`)
            .then(response => {
                setBook(response.data);
            })
    }, [params.idLivro])

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>

                <MenuAdmin titulo='Consulta de Livro' />
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
                        <FormBook book={book} buttonName='Confirmar edição' />
                        <Rodape sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
