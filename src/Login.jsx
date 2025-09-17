import React, { useEffect, useState } from 'react';
import { Eye, EyeOff, Mail, Shield } from 'lucide-react';
import './styles/Login.css';
import bkg from './assets/bkg.png';
import logo from './assets/ninechat_logo_icons.png';

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

  const [booting, setBooting] = useState(true); // checando sessão antes de exibir o form
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [serverError, setServerError] = useState('');

  // Redireciona usando a URL enviada pelo servidor e preserva ?redirect= local
  const doRedirect = (serverUrl) => {
    let target = serverUrl || '/'; // fallback seguro (seu portal não tem /login)

    try {
      const u = new URL(target, window.location.href); // aceita absoluto ou relativo
      const next = new URLSearchParams(window.location.search).get('redirect');
      if (next) u.searchParams.set('redirect', next);
      window.location.replace(u.toString()); // evita voltar para /login
    } catch {
      window.location.replace('/'); // último fallback
    }
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) { setEmail(savedEmail); setRememberMe(true); }

    (async () => {
      // 1) Checa se já está autenticado (modo "silencioso")
      try {
        const who = await fetch(apiUrl('/api/whoami?soft=1'), { credentials: 'include' });
        if (who.ok) {
          const data = await parseResponse(who);
          if (data?.authenticated) {
            return doRedirect(data?.redirectUrl);
          }
          // se não autenticado, segue para obter CSRF
        }
      } catch {
        // ignora e segue fluxo para obter CSRF
      }

      // 2) Não autenticado → busca CSRF e exibe o form
      try {
        const res = await fetch(apiUrl('/api/csrf-token'), { credentials: 'include' });
        const data = await parseResponse(res);
        if (!res.ok || !data?.token) throw new Error('CSRF inválido');
        setCsrfToken(data.token);
      } catch (err) {
        console.error('CSRF Error:', err);
        setServerError('Falha na configuração de segurança');
      } finally {
        setBooting(false);
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
        const msg =
          (data && (data.message || data.error)) ||
          (typeof data?._raw === 'string' ? data._raw : 'Falha no login');
        throw new Error(msg);
      }

      if (rememberMe) localStorage.setItem('rememberedEmail', email);
      else localStorage.removeItem('rememberedEmail');

      // Redireciona pós-login (preserva ?redirect= se existir)
      doRedirect(data?.redirectUrl);
    } catch (err) {
      setServerError(err?.message || 'Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  // Splash enquanto verifica sessão/CSRF
  if (booting) {
    return (
      <div className="lp-splash">
        <span className="lp-spinner" /> Carregando...
      </div>
    );
  }

  return (
    <div className="lp-shell">
      {/* Lado esquerdo - branding */}
      <div className="lp-brand" style={{ "--brand-bg": `url(${bkg})` }}>
        <div className="lp-brand-inner lp-center" />
      </div>

      <div className="lp-form-side">
        <div className="lp-form-wrap">
          <div className="lp-form-content">
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
              <div className="lp-footrow">
                <a href="/legal/privacy" className="lp-link-plain" target="_blank" rel="noopener noreferrer">Política de Privacidade</a>
                <a href="/legal/terms" className="lp-link-plain" target="_blank" rel="noopener noreferrer">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


