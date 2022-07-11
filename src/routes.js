import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home';
import Contatos from './Pages/contato';
import Loguin from './Pages/loguin';

const MainRoutes = () => {
    return(
        <Routes>
            <Route
                path="/"
                element={<HomePage />}
            />
            <Route
                path="/contato"
                element={<Contatos />}
            />

            <Route
                path="/usuario"
                element={<Loguin />}
            />
            
        </Routes>
    )
}

export default MainRoutes;
