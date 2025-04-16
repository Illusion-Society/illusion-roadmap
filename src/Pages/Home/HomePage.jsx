import React from 'react';
import './homepage.css';
import DsWeb from '../../Components/DesenvolvimentoWeb/DsWeb';
import AiDados from '../../Components/AiDados/AiDados';
import CyberSecurity from '../../Components/CyberSecurity/CyberSecurity';
import BancoDados from '../../Components/BancoDeDados/BancoDados';
import CloudComputing from '../../Components/CloudComputing/CloudComputing';
import GameDevelop from '../../Components/DevGames/GameDevelop';
import Dados from '../../Components/Dados/Dados';
import TecEmergentes from '../../Components/TecEmergentes/TecEmergentes';
import SisEmbarque from '../../Components/SistemasEmbarcados/SisEmbarque';
import DevMobile from '../../Components/DevMobile/DevMobile';
import Hardware from '../../Components/Hardware/Hardware';
import NavBar from '../../Components/NavBar/NavBar';

const HomePage = () => {

  return (
    <>
      <NavBar/>

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
    </>
  );
};

export default HomePage;
