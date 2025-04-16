import React from 'react';
import { Link } from 'react-router-dom';
import './aidados.css';
import NavBar from '../../Components/NavBar/NavBar';

const DadosAi = () => {
    const steps = [
        { label: 'AI', path: '/ai_e_dados/ai' },
        { label: 'Ciência de Dados', path: '/ai_e_dados/ciencia_de_dados' },
        { label: 'Big Data', path: '/ai_e_dados/big_data' },
    ];

    return (
        <>
            <NavBar />

            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Conteúdos de Inteligência Artificial e Dados</p>
            </div>

            <div className="roadmap-grid">
                {steps.map((step, index) => (
                    <div className="step" key={index}>
                        <Link to={step.path} style={{ color: 'inherit', textDecoration: 'none' }}>
                            {step.label}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DadosAi;
