import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/Home/HomePage';
import WebDs from '../Pages/DesenvolvimentoWeb/WebDs';
import DadosAi from '../Pages/AIDados/DadosAi';
import CyberSec from '../Pages/SecurityCyber/CyberSec';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/web" element={<WebDs />} />
                <Route path="/dados" element={<DadosAi />} />
                <Route path="/cyber" element={<CyberSec />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
