import { useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_APP_LOGIN_BACKEND_URL;

export default function ForgotPassword(){
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState('');

async function submit(e){
  e.preventDefault();
  setErr('');
  try{
    const res = await fetch(`${BACKEND_URL}/api/forgot-password`, {
      method:'POST',
      credentials:'include', // ok enviar ou não; com CORS + credenciais funciona
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ email })
    });

    // Sucesso se for 2xx (inclui 204) — alguns proxies respondem 204
    if (res.ok) {
      setSent(true);
      return;
    }

    // Tentativa de extrair erro (se houver)
    const data = await res.json().catch(() => null);
    throw new Error(data?.message || `Falha (${res.status})`);
  }catch(e){
    setErr(e.message || 'Erro ao enviar o link. Tente novamente.');
  }
}


  return (
    <div style={{maxWidth:520,margin:'40px auto',fontFamily:'system-ui'}}>
      <h2>Esqueci minha senha</h2>
      {sent ? (
        <p>Se existir uma conta para <b>{email}</b>, enviaremos um link.</p>
      ) : (
        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="seu@empresa.com"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            style={{width:'100%',padding:10,marginBottom:10}}
            required
          />
          <button type="submit">Enviar link</button>
          {err && <p style={{color:'crimson'}}>{err}</p>}
        </form>
      )}
    </div>
  );
}
