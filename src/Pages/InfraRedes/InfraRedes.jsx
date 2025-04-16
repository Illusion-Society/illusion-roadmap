import React from 'react'
import './infraredes.css'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar/NavBar'


const InfraRedes = () => {
    return (
        <>
            <NavBar />
            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Conteúdos de Desenvolvimento Web</p>
            </div>

            <div className="roadmap-grid">
                <div className="step">
                    <Link to="/conteudos/redes/infraestrutura" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Infraestrutura na Nuvem
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/desenvolvimentonuvem" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Desenvolvimento na Nuvem
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/arquitetura" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Arquitetura em Nuvem
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/hibridoemulticloud" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Computação Quântica
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/administracaodesistemas" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Administração de Sistemas
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/administraçaoderedes" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Administração de Redes
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/segurançainfraestrutura" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Segurança de Infraestrutura
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/infraestrutura-e-data-center" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Infraestrutura de Data Center
                    </Link>
                </div>
                <div className="step">
                    <Link to="/conteudos/redes/telecomunicações-e-redes-corporativas" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Telecomunicações e Redes Corporativas
                    </Link>
                </div>
            </div>
        </>
    )
}

export default InfraRedes