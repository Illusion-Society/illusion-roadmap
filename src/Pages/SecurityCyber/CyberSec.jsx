import React from 'react';
import { Link } from 'react-router-dom';
import './cyberSec.css'; // Certifique-se de que esse CSS existe
import NavBar from '../../Components/NavBar/NavBar';

const CyberSec = () => {
    const steps = [
        { label: 'Red+ Team', path: '/cyberseguranca/redteam' },
        { label: 'Blue+ Team', path: '/cyberseguranca/blueteam' },
        { label: 'Yellow+ Team', path: '/cyberseguranca/yellow' },
    ];

    return (
        <>
            <NavBar />
            <div className="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Conteúdos de Cibersegurança</p>
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

export default CyberSec;
