import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CadastroPage from '../../Pages/CadastroPage/CadastroPage'; // importa o componente popup
import './navbar.css';

const NavBar = () => {
    const [showCadastro, setShowCadastro] = useState(false);
    const [loading, setLoading] = useState(false); // Estado para controlar a tela de loading
    const navigate = useNavigate(); // Hook para navegação

    const abrirCadastro = () => {
        console.log("Clicou em cadastre-se");
        setShowCadastro(true);
        document.body.style.overflow = 'hidden';
    };

    const fecharCadastro = () => {
        setShowCadastro(false);
        document.body.style.overflow = 'auto';
    };

    const handleRoadmapsClick = () => {
        setLoading(true); // Ativa a tela de loading
        setTimeout(() => {
            navigate('/'); // Redireciona para a homepage
        }, 1000); // Exibe a tela de loading por 2 segundos (ajuste conforme necessário)
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
                    <Link to="#" onClick={handleRoadmapsClick}>Roadmaps</Link>
                    <Link to="#">Comunidade</Link>
                    <Link to="#">Créditos</Link>
                </nav>
                <div className="auth-buttons">
                    <button onClick={abrirCadastro}>Cadastre-se</button>
                    <button>Acessar minha conta</button>
                </div>
            </header>

            {/* Exibe a tela de loading */}
            {loading && (
                <div className="loading-screen">
                    <p>Carregando...</p>
                    <div className="spinner"></div> {/* Um simples spinner */}
                </div>
            )}

            {/* Componente popup de cadastro */}
            <CadastroPage show={showCadastro} onClose={fecharCadastro} />
        </>
    );
};

export default NavBar;
