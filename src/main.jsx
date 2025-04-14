import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './router/router'; // importe o arquivo de rotas

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
