import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from './assets/ninechat_logo_icons.png'; // coloque o arquivo PNG na pasta "assets"

const BACKEND_URL = import.meta.env.VITE_APP_LOGIN_BACKEND_URL;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }

    const fetchCsrfToken = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/csrf-token`, {
          credentials: 'include'
        });
        const data = await res.json();
        setCsrfToken(data.token);
      } catch (err) {
        console.error('CSRF Error:', err);
        setError('Falha na configuração de segurança');
      }
    };
    fetchCsrfToken();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email e senha são obrigatórios');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${BACKEND_URL}/api/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': csrfToken
        },
        body: JSON.stringify({ email, password, rememberMe })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Falha no login');
      }

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }

      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        setError('URL de redirecionamento não recebida');
      }
    } catch (err) {
      setError(err.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) handleLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Substituí o texto pelo logo */}
        <img src={logo} alt="NineChat" className="login-logo" />

        <p>Acesse sua conta corporativa</p>

        <input
          type="email"
          placeholder="Email corporativo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            disabled={loading}
          />
          <label htmlFor="rememberMe">Lembrar-me</label>
        </div>

        {error && <div className="error-message">{error}</div>}

        <button onClick={handleLogin} disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </div>
    </div>
  );
}
