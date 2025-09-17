import React from "react";
import { FileText } from "lucide-react";

const ISSUER = "NineChat";
const CONTACT_EMAIL = "legal@ninechat.com.br";
const LAST_UPDATED = "17/09/2025";
const JURISDICTION = "leis da República Federativa do Brasil";
const VENUE = "Comarca de São Paulo/SP";

export default function TermsOfUse() {
  return (
    <div style={{ maxWidth: 880, margin: "48px auto", padding: "0 20px", lineHeight: 1.6 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>Termos de Uso</h1>
        <div style={{ color: "#6b7280" }}>
          Última atualização: {LAST_UPDATED}
        </div>
      </header>

      <p>Estes Termos regulam o uso da plataforma <strong>{ISSUER}</strong>.
        Ao acessar ou utilizar o serviço, você concorda integralmente com este documento.</p>

      <h2>1. Aceitação e Elegibilidade</h2>
      <p>Você declara ter autoridade para aceitar estes Termos em nome próprio ou da organização que representa,
        e possuir capacidade legal nos termos da legislação aplicável.</p>

      <h2>2. Conta e Credenciais</h2>
      <ul>
        <li>Você é responsável por manter a confidencialidade das credenciais e por todas as atividades sob sua conta.</li>
        <li>Informe imediatamente incidentes de segurança, acesso não autorizado ou perda de credenciais.</li>
      </ul>

      <h2>3. Uso Permitido e Restrições</h2>
      <ul>
        <li>Não utilizar o serviço para atividades ilícitas, envio de spam, violação de direitos de terceiros ou engenharia reversa.</li>
        <li>Não contornar mecanismos de segurança, limites técnicos ou políticas de uso aceitável.</li>
        <li>Respeitar limites de rate-limit e APIs de terceiros integradas.</li>
      </ul>

      <h2>4. Planos, Cobrança e Cancelamento</h2>
      <p>Quando aplicável, cobranças seguem a proposta/contrato comercial. Ciclos, tributos e políticas de reembolso
        são definidos nos instrumentos firmados com o Cliente. Cancelamentos encerram o acesso ao término do ciclo vigente,
        salvo disposição em contrário.</p>

      <h2>5. Conteúdos e Propriedade Intelectual</h2>
      <p>{ISSUER} e seus licenciantes detêm direitos sobre a plataforma, marcas e materiais. Você mantém direitos sobre
        seus próprios conteúdos, concedendo ao {ISSUER} licença necessária para operar o serviço conforme contratado.</p>

      <h2>6. Confidencialidade</h2>
      <p>As partes comprometem-se a manter confidenciais informações técnicas, comerciais e quaisquer dados não públicos
        obtidos em razão do uso do serviço.</p>

      <h2>7. Privacidade e Proteção de Dados</h2>
      <p>O tratamento de dados pessoais é regido pela <a href="/legal/privacy">Política de Privacidade</a>.
        Ao usar o serviço, você concorda com essa política.</p>

      <h2>8. Serviços de Terceiros</h2>
      <p>Integrações com serviços externos submetem-se também aos respectivos termos/políticas dos terceiros envolvidos.</p>

      <h2>9. Garantias, Isenções e SLA</h2>
      <p>O serviço é prestado “no estado em que se encontra”. Na extensão máxima permitida, {ISSUER} não garante
        disponibilidade ininterrupta, ausência de erros ou adequação a um propósito específico, salvo se previsto em contrato.</p>

      <h2>10. Limitação de Responsabilidade</h2>
      <p>Na extensão permitida por lei, {ISSUER} não será responsável por lucros cessantes, danos indiretos ou punitivos.
        A responsabilidade total por reclamações relacionadas ao serviço limita-se ao montante efetivamente pago nos 12 (doze) meses anteriores ao evento.</p>

      <h2>11. Indenização</h2>
      <p>Você concorda em indenizar e isentar {ISSUER} de responsabilidades por reclamações de terceiros decorrentes do uso indevido do serviço
        ou violação destes Termos.</p>

      <h2>12. Suspensão e Encerramento</h2>
      <p>Poderemos suspender ou encerrar o acesso em caso de violação destes Termos, riscos à segurança ou ordem judicial,
        mediante comunicação quando aplicável.</p>

      <h2>13. Alterações nos Termos</h2>
      <p>Poderemos atualizar estes Termos. Alterações relevantes serão comunicadas pelos canais oficiais e vigorarão a partir da data indicada acima.</p>

      <h2>14. Lei Aplicável e Foro</h2>
      <p>Estes Termos são regidos pelas <strong>{JURISDICTION}</strong>. Fica eleito o foro da <strong>{VENUE}</strong>, com renúncia a qualquer outro, por mais privilegiado que seja.</p>

      <h2>15. Contato</h2>
      <p>Dúvidas? Escreva para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 24, padding: 12, border: "1px solid #e5e7eb", borderRadius: 12 }}>
        <FileText size={18} aria-hidden />
        <small>Este documento é um modelo e pode exigir ajustes conforme seu contrato e operação.</small>
      </div>
    </div>
  );
}
