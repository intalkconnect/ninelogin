import React, { useEffect, useState } from 'react';
import '../Login.css';
import logo from './assets/ninechat_logo_icons.png';
import { Link } from 'react-router-dom';

// ==== BASE DO BACKEND (mesma lógica do Login.jsx) ====
const RAW = (import.meta.env.VITE_APP_LOGIN_BACKEND_URL || '').trim();
const API_BASE = (RAW.startsWith('http') ? RAW : `https://${RAW}`).replace(/\/+$/, '');
const apiUrl = (p = '') => `${API_BASE}/${String(p).replace(/^\/+/, '')}`;

async function parseResponse(res) {
  const ct = (res.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json')) return res.json();
  const text = await res.text();
  try { return JSON.parse(text); } catch { return { _raw: text }; }
}

export default function SetPassword() {
  const [token, setToken] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('token');
    if (t) setToken(t);
  }, []);

  async function submit(e) {
    e.preventDefault();
    setErr('');
    if (pwd.length < 8) return setErr('Senha muito curta (mínimo 8 caracteres).');
    if (pwd !== confirm) return setErr('As senhas não coincidem.');

    setLoading(true);
    try {
      const res = await fetch(apiUrl('/api/set-password'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword: pwd })
      });
      const data = await parseResponse(res);
      if (!res.ok) {
        throw new Error(data?.message || 'Token inválido ou expirado');
      }
      setOk(true);
    } catch (e) {
      setErr(e?.message || 'Falha ao definir a senha.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="bg-pattern-1"></div>
      <div className="bg-pattern-2"></div>

      <div className="login-card">
        <img src={logo} alt="NineChat" className="login-logo" />

        <div className="login-header">
          <h2 className="login-title">Definir nova senha</h2>
          <p className="login-subtitle">Crie uma senha forte para sua conta</p>
        </div>

        <div className="login-form">
          {!token ? (
            <div className="error-message">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="error-icon">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 15a1 1 0 102 0 1 1 0 00-2 0zm1-9a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Token ausente. Abra o link recebido por e-mail.</span>
            </div>
          ) : ok ? (
            <div className="success-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
              </svg>
              <div>
                <b>Senha definida com sucesso!</b>
                <div className="helper-text">Você já pode fazer login com a nova senha.</div>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="input-group">
                <label htmlFor="pwd" className="input-label">Nova senha</label>
                <div className="input-wrapper">
                  <input
                    id="pwd"
                    type="password"
                    placeholder="Mínimo 8 caracteres"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    disabled={loading}
                    className="login-input"
                    minLength={8}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="confirm" className="input-label">Confirmar senha</label>
                <div className="input-wrapper">
                  <input
                    id="confirm"
                    type="password"
                    placeholder="Repita a nova senha"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    disabled={loading}
                    className="login-input"
                    minLength={8}
                    required
                  />
                </div>
                <div className="helper-text">Use letras, números e símbolos para maior segurança.</div>
              </div>

              {err && (
                <div className="error-message">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="error-icon">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 15a1 1 0 102 0 1 1 0 00-2 0zm1-9a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{err}</span>
                </div>
              )}

              <button type="submit" disabled={loading || !token} className={`login-button ${loading ? 'loading' : ''}`}>
                {loading ? (
                  <div className="loading-content">
                    <div className="spinner"></div>
                    <span>Salvando...</span>
                  </div>
                ) : ('Salvar nova senha')}
              </button>
            </form>
          )}
        </div>

        <div className="form-footer-links">
          <Link to="/" className="auth-link">← Voltar ao login</Link>
        </div>
      </div>
    </div>
  );
}
