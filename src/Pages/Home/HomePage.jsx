import React, { useState } from 'react';
import './homepage.css';
import CadastroPage from '../CadastroPage/CadastroPage'; // importa o componente popup
import DsWeb from '../DesenvolvimentoWeb/DsWeb';
import AiDados from '../AiDados/AiDados';
import CyberSecurity from '../CyberSecurity/CyberSecurity';
import BancoDados from '../BancoDeDados/BancoDados';
import CloudComputing from '../CloudComputing/CloudComputing';
import GameDevelop from '../DevGames/GameDevelop';
import Dados from '../Dados/Dados';
import TecEmergentes from '../TecEmergentes/TecEmergentes';
import SisEmbarque from '../SistemasEmbarcados/SisEmbarque';
import DevMobile from '../DevMobile/DevMobile';
import Hardware from '../Hardware/Hardware';

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

      <div className="roadmap-grid" style={{gap: '2px'}}>
          <DsWeb/>
          <AiDados/>
          <CyberSecurity/>
          <BancoDados/>
          <CloudComputing/>
          <GameDevelop/>
          <Dados/>
          <TecEmergentes/>
          <SisEmbarque/>
          <DevMobile/>
          <Hardware/>
      </div>

      {/* Popup de cadastro */}
      <CadastroPage show={showCadastro} onClose={fecharCadastro} />
    </>
  );
};

export default HomePage;
