import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Imports do Admin
import Dashboard from './pages/admin/dashboard';

import Livros from './pages/admin/livros';
import CadastrarLivros from './pages/admin/livros/cadastrar';
import EditarLivros from './pages/admin/livros/editar';

import Usuarios from './pages/admin/usuarios';
import CadastrarUsuarios from './pages/admin/usuarios/cadastrar';
import EditarUsuarios from './pages/admin/usuarios/editar';

// Imports do Clients
import Home from './pages/client/home';
import Livro from './pages/client/livro';


function Rotas() {
    return (
        <BrowserRouter >
            <Routes>
                {/* Rota do cliente */}
                <Route path="/" exact element={<Home />} />
                <Route path="/livro/:idLivro" exact element={<EditarLivros />} />

                {/* Rota do Admin */}
                <Route path="/admin" exact element={<Dashboard />} />

                <Route path="/livros" exact element={<Livros />} />
                <Route path="/livros/cadastrar" exact element={<CadastrarLivros />} />
                <Route path="/livros/editar" exact element={<EditarLivros />} />

                <Route path="/usuarios" exact element={<Usuarios />} />
                <Route path="/usuarios/cadastrar" exact element={<CadastrarUsuarios />} />
                <Route path="/usuarios/editar" exact element={<EditarUsuarios />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas
