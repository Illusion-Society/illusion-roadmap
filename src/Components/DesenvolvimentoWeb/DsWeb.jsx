import React from 'react'
import './dsweb.css'
import { Link } from 'react-router-dom';

const DsWeb = () => {
  return (
    <>
      <div className="roadmap-grid">
        <div className="step">
          <Link to="/web">Desenvolvimento Web</Link>
        </div>
      </div>
    </>
  )
};

export default DsWeb;