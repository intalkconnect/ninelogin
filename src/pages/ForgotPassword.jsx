import React, { useState } from 'react';
import '../styles/Login.css';
import logo from '../assets/ninechat_logo_icons.png';
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

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!email) return;
    setErr('');
    setLoading(true);
    try {
      const res = await fetch(apiUrl('/api/forgot-password'), {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      // backend responde 200 sempre (neutro); tratamos qualquer 2xx como ok
      if (!res.ok) {
        const data = await parseResponse(res);
        throw new Error(data?.message || `Falha (${res.status})`);
      }
      setSent(true);
    } catch (e) {
      setErr(e?.message || 'Erro ao enviar o link. Tente novamente.');
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
          <h2 className="login-title">Recuperar acesso</h2>
          <p className="login-subtitle">Informe seu e-mail corporativo para receber o link</p>
        </div>

        <div className="login-form">
          {sent ? (
            <div className="success-message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
              </svg>
              <div>
                <b>Se existir uma conta para <span className="mono">{email}</span></b>, enviamos um link para redefinir a senha.
                <div className="helper-text">O link expira em alguns minutos.</div>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div className="input-group">
                <label htmlFor="email" className="input-label">Email corporativo</label>
                <div className="input-wrapper">
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    className="login-input"
                    required
                  />
                  <div className="input-icon">
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206A8.959 8.959 0 0112 19" />
                    </svg>
                  </div>
                </div>
                <div className="helper-text">Você receberá um e-mail com o passo a passo.</div>
              </div>

              {err && (
                <div className="error-message">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20" className="error-icon">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 15a1 1 0 102 0 1 1 0 00-2 0zm1-9a1 1 0 00-1 1v4a1 1 0 102 0V7a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span>{err}</span>
                </div>
              )}

              <button type="submit" disabled={loading || !email} className={`login-button ${loading ? 'loading' : ''}`}>
                {loading ? (
                  <div className="loading-content">
                    <div className="spinner"></div>
                    <span>Enviando...</span>
                  </div>
                ) : ('Enviar link')}
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
