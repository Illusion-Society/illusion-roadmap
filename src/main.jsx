import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './Pages/Homepage/HomePage.jsx'
import CadastroPage from './Pages/CadastroPage/CadastroPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
    <CadastroPage/>
  </StrictMode>,
)
