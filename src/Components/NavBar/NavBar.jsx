import React, { useState } from 'react'
import CadastroPage from '../../Pages/CadastroPage/CadastroPage'; // importa o componente popup
import './navbar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
      const [showCadastro, setShowCadastro] = useState(false);
    
      const abrirCadastro = () => {
        console.log("Clicou em cadastre-se");
        setShowCadastro(true);
        document.body.style.overflow = 'hidden';
      };
    
      const fecharCadastro = () => {
        setShowCadastro(false);
        document.body.style.overflow = 'auto';
      };
    
    return (
        <>
         <header>
        <div className="logo">
          <img
            src="/imgs/logo.png"
            alt="Illusion Roadmaps"
            style={{ height: '60px', verticalAlign: 'middle' }}
          />
        </div>
        <nav>
            <Link to="/">Roadmaps</Link>
          <Link to="#">Comunidade</Link>
          <Link to="#">Créditos</Link>
        </nav>
        <div className="auth-buttons">
          <button onClick={abrirCadastro}>Cadastre-se</button>
          <button>Acessar minha conta</button>
        </div>
      </header>
      <CadastroPage show={showCadastro} onClose={fecharCadastro} />
        </>
    )
}

export default NavBar