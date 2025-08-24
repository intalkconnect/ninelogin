import { useEffect, useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_APP_LOGIN_BACKEND_URL;

export default function SetPassword() {
  const [token, setToken] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirm, setConfirm] = useState('');
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState('');

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('token');
    if (t) setToken(t);
  }, []);

  async function submit(e){
    e.preventDefault();
    setErr('');
    if (pwd.length < 8) return setErr('Senha muito curta (mínimo 8 caracteres)');
    if (pwd !== confirm) return setErr('As senhas não coincidem');

    try{
      const res = await fetch(`${BACKEND_URL}/api/set-password`, {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ token, newPassword: pwd })
      });
      if (!res.ok){
        const data = await res.json().catch(()=>({}));
        throw new Error(data?.message || 'Token inválido ou expirado');
      }
      setOk(true);
    }catch(e){
      setErr(e.message);
    }
  }

  if (!token) {
    return (
      <div style={{maxWidth:560,margin:'40px auto',fontFamily:'system-ui'}}>
        <h2>Definir senha</h2>
        <p>Token ausente. Abra o link recebido por e-mail.</p>
        <p style={{marginTop:16}}><a href="/">Voltar ao login</a></p>
      </div>
    );
  }

  return (
    <div style={{maxWidth:560,margin:'40px auto',fontFamily:'system-ui'}}>
      <h2>Definir senha</h2>
      {ok ? (
        <>
          <p>Senha definida com sucesso! Você já pode entrar.</p>
          <p style={{marginTop:16}}><a href="/">Ir para o login</a></p>
        </>
      ) : (
        <form onSubmit={submit}>
          <input
            type="password"
            placeholder="Nova senha (mín. 8)"
            value={pwd}
            onChange={e=>setPwd(e.target.value)}
            style={{width:'100%',padding:10,marginBottom:10}}
            required
          />
          <input
            type="password"
            placeholder="Confirmar nova senha"
            value={confirm}
            onChange={e=>setConfirm(e.target.value)}
            style={{width:'100%',padding:10,marginBottom:10}}
            required
          />
          <button type="submit" disabled={!token}>Salvar</button>
          {err && <p style={{color:'crimson'}}>{err}</p>}
        </form>
      )}
      <p style={{marginTop:16}}><a href="/">Voltar ao login</a></p>
    </div>
  );
}
