import React from 'react'

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Rodape(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/lorrane">
                Biblioteca Organizator
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Rodape
