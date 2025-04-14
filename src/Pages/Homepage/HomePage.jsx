import React, { useState } from 'react';
import './homepage.css';
import CadastroPage from '../CadastroPage/CadastroPage'; // importa o componente popup
import DsWeb from '../DesenvolvimentoWeb/DsWeb';
import AiDados from '../AiDados/AiDados';
import CyberSecurity from '../CyberSecurity/CyberSecurity';
import BancoDados from '../BancoDeDados/BancoDados';
import CloudComputing from '../CloudComputing/CloudComputing';

const HomePage = () => {
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
          <a href="#">Roadmaps</a>
          <a href="#">Comunidade</a>
          <a href="#">Créditos</a>
        </nav>
        <div className="auth-buttons">
          <button onClick={abrirCadastro}>Cadastre-se</button>
          <button>Acessar minha conta</button>
        </div>
      </header>

      <div className="main-title">
        <h1>Illusion Roadmaps</h1>
        <p>Diversos guias de aprendizado na área de tecnologia</p>
      </div>

      <div className="roadmap-grid">
          <DsWeb/>
          <AiDados/>
          <CyberSecurity/>
          <BancoDados/>
          <CloudComputing/>
        {/*
        
        <div className="step">Cloud-Computing</div>
        <div className="step">Infraestrutura e Redes</div>
        <div className="step">Game Development</div>
        <div className="step">Dados</div>
        <div className="step">Tecnologia Aplicada</div>
        <div className="step">Tecnologias Emergentes</div>
        <div className="step">Sistemas Embarcados</div>
        <div className="step">Desenvolvimento Mobile</div>
        <div className="step">UI-UX Design</div>
        <div className="step">Hardware</div> */}
      </div>

      {/* Popup de cadastro */}
      <CadastroPage show={showCadastro} onClose={fecharCadastro} />
    </>
  );
};

export default HomePage;
