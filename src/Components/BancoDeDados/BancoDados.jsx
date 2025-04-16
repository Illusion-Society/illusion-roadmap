import React from 'react'
import './bancodados.css'
import { Link } from 'react-router-dom'


const BancoDados = () => {
    return (
        <>
            <div className='roadmap-grid'>
                <div className="step">
                    <Link to="/database">Banco de Dados</Link>
                </div>
            </div>
        </>
    )
}

export default BancoDados