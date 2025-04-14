import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Homepage/HomePage';
import CadastroPage from '../Pages/CadastroPage/CadastroPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                
            </Routes>
        </Router>
    );
};

export default AppRouter;
