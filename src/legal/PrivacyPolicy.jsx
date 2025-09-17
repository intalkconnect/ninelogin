import React from "react";
import LegalLayout from "./LegalLayout";
import { Shield } from "lucide-react";
import styles from "../styles/Legal.module.css";

const ISSUER = "NineChat";
const CONTACT_EMAIL = "privacidade@ninechat.com.br";
const DPO_NAME = "Encarregado de Dados";
const LAST_UPDATED = "17/09/2025";

const toc = [
  { id: "sec-intro", label: "Introdução" },
  { id: "sec-dados", label: "Dados que Coletamos" },
  { id: "sec-bases", label: "Bases Legais" },
  { id: "sec-finalidades", label: "Finalidades" },
  { id: "sec-compart", label: "Compartilhamento" },
  { id: "sec-transfer", label: "Transferências Internacionais" },
  { id: "sec-retencao", label: "Retenção" },
  { id: "sec-direitos", label: "Direitos do Titular" },
  { id: "sec-cookies", label: "Cookies" },
  { id: "sec-seguranca", label: "Segurança" },
  { id: "sec-menores", label: "Menores de Idade" },
  { id: "sec-mudancas", label: "Mudanças" },
  { id: "sec-contato", label: "Contato" },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      icon={<Shield size={18} />}
      title="Política de Privacidade"
      subtitle={`${ISSUER}`}
      updatedAt={LAST_UPDATED}
      toc={toc}
    >
      <article className={styles.article}>
        <section id="sec-intro">
          <p><strong>{ISSUER}</strong> valoriza sua privacidade. Esta política descreve como tratamos dados pessoais em conformidade com a LGPD (Lei nº 13.709/2018).</p>
          <p>Controlador: <strong>{ISSUER}</strong>. Encarregado (DPO): {DPO_NAME} — <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        </section>

        <h2 id="sec-dados">Dados que Coletamos</h2>
        <ul>
          <li><strong>Cadastro:</strong> nome, e-mail corporativo, empresa, função.</li>
          <li><strong>Autenticação:</strong> hash de senha, tokens e metadados de sessão.</li>
          <li><strong>Uso do sistema:</strong> IP, user-agent, horário, preferências e configurações.</li>
          <li><strong>Canais integrados:</strong> conteúdos trocados nas integrações habilitadas (ex.: WhatsApp, Telegram) conforme sua configuração.</li>
          <li><strong>Cookies essenciais:</strong> sessão e segurança; e, quando aplicável, cookies de preferência.</li>
        </ul>

        <h2 id="sec-bases">Bases Legais</h2>
        <p>Utilizamos: execução de contrato, legítimo interesse (segurança/qualidade), obrigação legal e, quando exigido, consentimento.</p>

        <h2 id="sec-finalidades">Finalidades</h2>
        <ul>
          <li>Prover acesso e funcionalidades contratadas.</li>
          <li>Segurança, prevenção a fraudes e auditoria.</li>
          <li>Suporte, comunicação operacional e melhoria de produto.</li>
          <li>Cumprimento de obrigações legais e regulatórias.</li>
        </ul>

        <h2 id="sec-compart">Compartilhamento</h2>
        <p>Com provedores de infraestrutura, e-mail, monitoramento, meios de pagamento (quando aplicável), integrações que você habilitar e autoridades competentes quando requerido. Exigimos salvaguardas contratuais.</p>

        <h2 id="sec-transfer">Transferências Internacionais</h2>
        <p>Podem ocorrer para fornecedores que atendem a padrões adequados, com cláusulas contratuais de proteção.</p>

        <h2 id="sec-retencao">Retenção</h2>
        <p>Guardamos dados pelo tempo necessário às finalidades ou conforme prazos legais; depois, eliminamos ou anonimizamos.</p>

        <h2 id="sec-direitos">Direitos do Titular</h2>
        <p>Confirmação, acesso, correção, anonimização, portabilidade, informação de compartilhamentos, revogação de consentimento e eliminação, quando cabível. Solicite via <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>

        <h2 id="sec-cookies">Cookies</h2>
        <p>Usamos cookies <strong>estritamente necessários</strong> para login e segurança. Gerencie no navegador (alguns recursos podem não funcionar sem eles).</p>

        <h2 id="sec-seguranca">Segurança</h2>
        <p>Criptografia em trânsito, controles de acesso e monitoramento. Mantenha suas credenciais seguras e reporte incidentes ao DPO.</p>

        <h2 id="sec-menores">Menores de Idade</h2>
        <p>O serviço não é destinado a menores. Se identificarmos tratamento indevido, adotaremos medidas para exclusão.</p>

        <h2 id="sec-mudancas">Mudanças</h2>
        <p>Podemos atualizar esta política e comunicaremos alterações relevantes. A data no topo indica a versão vigente.</p>

        <h2 id="sec-contato">Contato</h2>
        <p>Dúvidas sobre privacidade? Escreva para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </article>
    </LegalLayout>
  );
}
