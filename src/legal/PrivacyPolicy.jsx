import React from "react";
import { Shield } from "lucide-react";

const ISSUER = "NineChat";
const CONTACT_EMAIL = "privacidade@ninechat.com.br";
const DPO_NAME = "Encarregado de Dados";
const LAST_UPDATED = "17/09/2024";

export default function PrivacyPolicy() {
  return (
    <div style={{ maxWidth: 880, margin: "48px auto", padding: "0 20px", lineHeight: 1.6 }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: 700 }}>Política de Privacidade</h1>
        <div style={{ color: "#6b7280" }}>
          Última atualização: {LAST_UPDATED}
        </div>
      </header>

      <p><strong>{ISSUER}</strong> valoriza sua privacidade. Esta política explica como coletamos, usamos,
        armazenamos e compartilhamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).</p>

      <h2>1. Controlador</h2>
      <p>Controlador: <strong>{ISSUER}</strong>.<br />
         Contato do Encarregado (DPO): <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> ({DPO_NAME}).</p>

      <h2>2. Dados que Coletamos</h2>
      <ul>
        <li><strong>Cadastro:</strong> nome, e-mail corporativo, empresa, função.</li>
        <li><strong>Autenticação:</strong> hash de senha, tokens e metadados de sessão.</li>
        <li><strong>Uso do sistema:</strong> logs técnicos (IP, user-agent, carimbo de data/hora), preferências e configurações.</li>
        <li><strong>Atendimento/Canais:</strong> conteúdos trocados via integrações que você habilitar (ex.: WhatsApp, Telegram), conforme configurado pelo Cliente.</li>
        <li><strong>Cookies e similares:</strong> cookies essenciais de sessão/segurança e, quando aplicável, cookies de preferência.</li>
      </ul>

      <h2>3. Bases Legais</h2>
      <p>Tratamos dados com base em: <em>execução de contrato</em>, <em>legítimo interesse</em> (p.ex. segurança e melhoria do serviço),
        <em>cumprimento de obrigação legal</em> e, quando exigido, <em>consentimento</em>.</p>

      <h2>4. Finalidades</h2>
      <ul>
        <li>Prover acesso à plataforma e funcionalidades contratadas.</li>
        <li>Segurança, prevenção a fraudes, auditoria e integridade de contas.</li>
        <li>Suporte técnico, comunicação operacional e melhorias de produto.</li>
        <li>Cumprimento de obrigações legais/regulatórias.</li>
      </ul>

      <h2>5. Compartilhamento</h2>
      <p>Poderemos compartilhar dados com provedores de infraestrutura (hospedagem, e-mail, monitoramento),
        processamento de pagamentos (quando aplicável), integrações habilitadas por você (APIs de terceiros) e autoridades competentes quando requerido por lei.
        Exigimos compromissos contratuais adequados de privacidade e segurança.</p>

      <h2>6. Transferências Internacionais</h2>
      <p>Dados podem ser processados fora do Brasil por fornecedores que atendem a padrões de segurança equivalentes
        e com salvaguardas contratuais adequadas.</p>

      <h2>7. Retenção</h2>
      <p>Conservamos dados pelo período necessário às finalidades descritas ou conforme prazos legais.
        Após esse período, eliminamos ou anonimizamos os dados de forma segura.</p>

      <h2>8. Direitos do Titular</h2>
      <p>Você pode requisitar: confirmação de tratamento, acesso, correção, anonimização, portabilidade,
        informação sobre compartilhamentos, revogação de consentimento e eliminação, quando aplicável.
        Para exercer seus direitos, escreva para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

      <h2>9. Cookies</h2>
      <p>Utilizamos cookies <strong>estritamente necessários</strong> para login e segurança (ex.: manutenção de sessão).
        Você pode gerenciá-los via configurações do navegador, ciente de que certos recursos podem não funcionar sem esses cookies.</p>

      <h2>10. Segurança</h2>
      <p>Aplicamos medidas técnicas e administrativas de proteção (criptografia em trânsito, controle de acesso, monitoramento).
        Nenhum sistema é 100% infalível; mantenha credenciais seguras e reporte incidentes ao DPO.</p>

      <h2>11. Menores de Idade</h2>
      <p>O serviço não é destinado a menores. Se identificarmos tratamento indevido, adotaremos medidas para excluir os dados.</p>

      <h2>12. Mudanças nesta Política</h2>
      <p>Poderemos atualizar esta política. Alterações relevantes serão comunicadas pelos canais oficiais e entrarão em vigor na data de publicação atualizada acima.</p>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 24, padding: 12, border: "1px solid #e5e7eb", borderRadius: 12 }}>
        <Shield size={18} aria-hidden />
        <small>Este documento é informativo e não constitui aconselhamento jurídico.</small>
      </div>
    </div>
  );
}
