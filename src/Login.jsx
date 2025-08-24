import React, { useState, useEffect } from 'react';
import './Login.css';
import logo from './assets/ninechat_logo_icons.png';
import { useNavigate } from 'react-router-dom';

/** ==== BASE DO BACKEND ====
 * Usa VITE_APP_LOGIN_BACKEND_URL do .env
 * Aceita valores com ou sem "https://"
 * Gera URL absoluta SEM barra final
 */
const RAW_BACKEND = (import.meta.env.VITE_APP_LOGIN_BACKEND_URL || '').trim();
const API_BASE = (RAW_BACKEND.startsWith('http') ? RAW_BACKEND : `https://${RAW_BACKEND}`)
  .replace(/\/+$/, '');

function apiUrl(path = '') {
  const p = String(path).replace(/^\/+/, '');
  return `${API_BASE}/${p}`;
}

/** helper para parse seguro da resposta */
async function parseResponse(res) {
  const ct = (res.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json')) return res.json();
  const text = await res.text();
  try { return JSON.parse(text); } catch { return { _raw: text }; }
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }

    (async () => {
      try {
        const res = await fetch(apiUrl('/api/csrf-token'), {
          credentials: 'include',
        });
        const data = await parseResponse(res);
        if (!res.ok || !data?.token) throw new Error('CSRF inválido');
        setCsrfToken(data.token);
      } catch (err) {
        console.error('CSRF Error:', err);
        setError('Falha na configuração de segurança');
      }
    })();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Email e senha são obrigatórios');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch(apiUrl('/api/login'), {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': csrfToken || '',
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await parseResponse(res);

      if (!res.ok) {
        const msg =
          (data && (data.message || data.error)) ||
          (typeof data?._raw === 'string' ? data._raw : 'Falha no login');
        throw new Error(msg);
      }

      if (rememberMe) localStorage.setItem('rememberedEmail', email);
      else localStorage.removeItem('rememberedEmail');

      if (data?.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        setError('URL de redirecionamento não recebida');
      }
    } catch (err) {
      setError(err?.message || 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !loading) handleLogin();
  };

  return (
    <div className="login-container">
      <div className="bg-pattern-1"></div>
      <div className="bg-pattern-2"></div>

      <div className="login-card">
        <img src={logo} alt="NineChat" className="login-logo" />

        <div className="login-header">
          <h2 className="login-title">Bem-vindo(a) ao NineChat</h2>
          <p className="login-subtitle">Acesse sua conta</p>
        </div>

        <div className="login-form">
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                placeholder="seu@empresa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                className="login-input"
              />
              <div className="input-icon">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password" className="input-label">Senha</label>
            <div className="input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
                className="login-input password-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="remember-row">
            <div className="remember-me">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loading}
                className="remember-checkbox"
              />
              <label htmlFor="rememberMe" className="checkbox-label">Lembrar-me</label>
            </div>
            <button
              type="button"
              className="forgot-password"
              onClick={() => navigate('/auth/forgot-password')}
              disabled={loading}
            >
              Esqueceu a senha?
            </button>
          </div>

          {error && (
            <div className="error-message">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="error-icon">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className={`login-button ${loading ? 'loading' : ''}`}
          >
            {loading ? (
              <div className="loading-content">
                <div className="spinner"></div>
                <span>Entrando...</span>
              </div>
            ) : (
              'Entrar'
            )}
          </button>
        </div>

        <div className="login-footer">
          <p className="footer-text">Protegido por criptografia de ponta a ponta</p>
          <div className="security-indicator">
            <span className="lock-icon">🔒</span>
            <span className="security-text">Conexão segura</span>
          </div>
        </div>
      </div>
    </div>
  );
}

