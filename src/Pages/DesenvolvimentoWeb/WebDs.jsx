import React from 'react';
import { Link } from 'react-router-dom';
import './dsWeb.css'; // Certifique-se de que esse CSS existe
import NavBar from '../../Components/NavBar/NavBar';

const WebDs = () => {
    const steps = [
        { label: 'Front-End', path: '/web/frontend' },
        { label: 'Back-End', path: '/web/backend' },
        { label: 'Desenvolvimento Mobile para Web', path: '/web/mobileparaweb' },
        { label: 'Desenvolvimento de APIs', path: '/web/apis' },
        { label: 'UI/UX Design para Web', path: '/web/designparaweb' },
        { label: 'Automação de Infraestrutura', path: '/web/automacao-e-infraestrutura' },
        { label: 'SEO', path: '/web/seo' },
    ];

    return (
        <>
            <NavBar />
            <div class="main-title">
                <h1>Illusion Roadmaps</h1>
                <p>Conteúdos de Desenvolvimento Web</p>
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

export default WebDs;
