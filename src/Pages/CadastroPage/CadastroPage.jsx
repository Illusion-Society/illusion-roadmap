// CadastroPage.jsx
import React from 'react';
import './cadastropage.css';

const CadastroPage = ({ show, onClose }) => {
  const [senha, setSenha] = React.useState('');
  const [confirmarSenha, setConfirmarSenha] = React.useState('');

  const handleSubmit = (e) => {
    if (senha !== confirmarSenha) {
      e.preventDefault();
      alert('As senhas não coincidem!');
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.id === 'cadastroPopup') {
        onClose();
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  if (!show) return null;

  return (
    <div id="cadastroPopup" className="cadastro-popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Cadastre-se</h2>

        <div className="social-buttons">
          <button type="button" className="google-btn">
            <img src="public/imgs/icons8-google.svg" alt="Google logo" />
            Cadastre-se com o Google
          </button>
          <button type="button" className="github-btn">
            <img src="public/imgs/icons8-github.svg" alt="Github logo" />
            Cadastre-se com o GitHub
          </button>
        </div>

        <div className="divider">ou</div>

        <form className="login-form" onSubmit={handleSubmit} action="/cadastrar" method="post">
          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input type="text" id="nome" name="nome" placeholder="Digite seu nome completo" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="seu@email.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="password"
              placeholder="Crie uma senha segura"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmar-senha">Confirmar senha</label>
            <input
              type="password"
              id="confirmar-senha"
              name="confirm_password"
              placeholder="Repita sua senha"
              required
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">Criar conta</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroPage;
