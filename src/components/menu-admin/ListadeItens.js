import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import PeopleIcon from '@mui/icons-material/People';
import { ExitToApp, Home, MenuBook } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export const mainListItems = (
    <React.Fragment>
        <Link to={'/'}>
            <ListItemButton >
                <ListItemIcon>
                    <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
        </Link>
        <Link to={'/usuarios'} >
            <ListItemButton >
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Usuários" />
            </ListItemButton>
        </Link>
        <Link to={'/livros'} >
            <ListItemButton href='/admin/livros' >
                <ListItemIcon>
                    <MenuBook />
                </ListItemIcon>
                <ListItemText primary="Livros" />
            </ListItemButton>
        </Link>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Opções
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Sair" />
        </ListItemButton>
    </React.Fragment>
);
