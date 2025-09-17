import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Mail, Shield } from 'lucide-react';
import './styles/Login.css';
import bkg from './assets/bkg.png';

/* =========== BASE DO BACKEND =========== */
const RAW_BACKEND = (import.meta.env?.VITE_APP_LOGIN_BACKEND_URL || '').trim();
const API_BASE = (RAW_BACKEND.startsWith('http') ? RAW_BACKEND : `https://${RAW_BACKEND}`)
  .replace(/\/+$/, '');
const apiUrl = (p = '') => `${API_BASE}/${String(p).replace(/^\/+/, '')}`;

async function parseResponse(res) {
  const ct = (res.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json')) return res.json();
  const text = await res.text();
  try { return JSON.parse(text); } catch { return { _raw: text }; }
}

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) { setEmail(savedEmail); setRememberMe(true); }

    (async () => {
      try {
        const res = await fetch(apiUrl('/api/csrf-token'), { credentials: 'include' });
        const data = await parseResponse(res);
        if (!res.ok || !data?.token) throw new Error('CSRF inválido');
        setCsrfToken(data.token);
      } catch (err) {
        console.error('CSRF Error:', err);
        setServerError('Falha na configuração de segurança');
      }
    })();
  }, []);

  const validate = () => {
    const next = { email: '', password: '' };
    if (!email) next.email = 'Email é obrigatório';
    else if (!/\S+@\S+\.\S+/.test(email)) next.email = 'Email inválido';
    if (!password) next.password = 'Senha é obrigatória';
    else if (password.length < 6) next.password = 'Senha deve ter pelo menos 6 caracteres';
    setErrors(next);
    return !next.email && !next.password;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    if (!validate()) return;

    setIsLoading(true);
    setServerError('');

    try {
      const res = await fetch(apiUrl('/api/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CSRF-Token': csrfToken || '',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await parseResponse(res);
      if (!res.ok) {
        const msg = (data && (data.message || data.error)) || (typeof data?._raw === 'string' ? data._raw : 'Falha no login');
        throw new Error(msg);
      }

      if (rememberMe) localStorage.setItem('rememberedEmail', email);
      else localStorage.removeItem('rememberedEmail');

      if (data?.redirectUrl) window.location.href = data.redirectUrl;
      else setServerError('URL de redirecionamento não recebida');
    } catch (err) {
      setServerError(err?.message || 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="lp-shell">
      {/* Lado esquerdo - branding (fundo #003e6a + logo + PNG transparente) */}
      <div className="lp-brand">
        <div className="lp-brand-inner lp-center">
          <img src="/logo-front.png" alt="NineChat" className="lp-brand-logo" />
          {/* 🔽 imagem agora vem do JSX (coloque /public/bkg-portal.png) */}
          <img
            src={bkg}
            alt="Ilustração do portal com canais omnichannel"
            className="lp-figure-img"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* Lado direito - formulário */}
      <div className="lp-form-side">
        <div className="lp-form-wrap">
          <div className="lp-form-head">
            <div className="lp-form-logo-mobile">
              <img src="/logo-front.png" alt="NineChat" />
            </div>
            <h2>Acesse sua conta</h2>
            <p>Entre com suas credenciais corporativas</p>
          </div>

          <form className="lp-card" onSubmit={handleSubmit} noValidate>
            <div className="lp-field">
              <label htmlFor="email">Endereço de email</label>
              <div className={`lp-input-wrap ${errors.email ? 'has-error' : ''}`}>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(s => ({ ...s, email: '' })); }}
                  placeholder="usuario@empresa.com"
                  disabled={isLoading}
                />
                <span className="lp-input-icon"><Mail size={20} aria-hidden /></span>
              </div>
              {errors.email && <p className="lp-error">{errors.email}</p>}
            </div>

            <div className="lp-field">
              <label htmlFor="password">Senha</label>
              <div className={`lp-input-wrap ${errors.password ? 'has-error' : ''}`}>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors(s => ({ ...s, password: '' })); }}
                  placeholder="Digite sua senha"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="lp-eye"
                  onClick={() => setShowPassword(v => !v)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="lp-error">{errors.password}</p>}
            </div>

            <div className="lp-row">
              <label className="lp-check">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                />
                <span>Manter conectado</span>
              </label>

              <button type="button" className="lp-link" disabled={isLoading}>
                Esqueceu a senha?
              </button>
            </div>

            {serverError && <div className="lp-alert">{serverError}</div>}

            <button type="submit" disabled={isLoading} className="lp-btn">
              {isLoading ? (<><span className="lp-spinner" /> Autenticando...</>) : 'Entrar'}
            </button>

            <div className="lp-sec">
              <Shield size={16} aria-hidden /> <span>Conexão protegida por SSL/TLS</span>
            </div>
          </form>

          <div className="lp-footlinks">
            <p>Não possui acesso? <a href="#" className="lp-link-plain">Solicitar credenciais</a></p>
            <div className="lp-footrow">
              <a href="#" className="lp-link-plain">Política de Privacidade</a>
              <a href="#" className="lp-link-plain">Termos de Uso</a>
              <a href="#" className="lp-link-plain">Suporte</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


