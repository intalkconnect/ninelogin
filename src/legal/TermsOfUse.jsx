import React from "react";
import LegalLayout from "./LegalLayout";
import { FileText } from "lucide-react";
import styles from "../styles/Legal.module.css";

/** personalize conforme sua marca/contatos */
const ISSUER = "NineChat";
const CONTACT_EMAIL = "abuso@ninechat.com.br";
const LAST_UPDATED = "17/09/2025";

const toc = [
  { id: "intro", label: "Introdução e Escopo" },
  { id: "conta", label: "Conta, Acesso e Credenciais" },
  { id: "uso-aceitavel", label: "Uso Aceitável (AUP)" },
  { id: "canais", label: "Canais e Serviços de Terceiros" },
  { id: "conteudo", label: "Conteúdo do Usuário e Moderação" },
  { id: "apis", label: "APIs, Automação e Limites Técnicos" },
  { id: "compliance", label: "Conformidade e Reporte de Abusos" },
  { id: "atualizacoes", label: "Atualizações desta Política" },
  { id: "contato", label: "Contato" },
];

export default function TermsOfUse() {
  return (
    <LegalLayout
      icon={<FileText size={18} />}
      title="Política de Uso da Plataforma"
      subtitle={ISSUER}
      updatedAt={LAST_UPDATED}
      toc={toc}
    >
      <article className={styles.article}>
        <section id="intro">
          <p>
            Esta Política define regras de conduta e uso aceitável da plataforma <strong>{ISSUER}</strong>. Ao utilizar o serviço, você concorda em seguir estas diretrizes para proteger usuários, canais integrados e o ecossistema.
          </p>
        </section>

        <h2 id="conta">Conta, Acesso e Credenciais</h2>
        <ul>
          <li>Proteja suas credenciais; não compartilhe senhas ou chaves de API.</li>
          <li>Mantenha informações cadastrais corretas e atualizadas.</li>
          <li>Notifique-nos imediatamente sobre acessos não autorizados ou incidentes de segurança.</li>
        </ul>

        <h2 id="uso-aceitavel">Uso Aceitável (AUP)</h2>
        <p>São proibidas, entre outras, as seguintes condutas:</p>
        <ul>
          <li>Envio de spam, conteúdo ilícito, assédio, discriminação, violação de direitos autorais ou de privacidade.</li>
          <li>Coleta/uso de dados pessoais sem base legal e transparência.</li>
          <li>Contornar políticas dos Canais (ex.: uso de números não autorizados; automações que violem termos).</li>
          <li>Tentativas de exploração ou engenharia reversa da plataforma.</li>
        </ul>
        <p>
          O uso deve observar bases de contato válidas e mecanismos de opt-out quando aplicáveis. Você é responsável por templates e mensagens proativas exigidas pelos Canais.
        </p>

        <h2 id="canais">Canais e Serviços de Terceiros</h2>
        <p>
          A plataforma integra Canais externos (ex.: WhatsApp, Telegram, Instagram, Facebook). O uso desses Canais está sujeito também aos termos e políticas dos respectivos provedores. Violações às regras dos Canais podem levar a bloqueios ou sanções impostas pelos próprios provedores.
        </p>

        <h2 id="conteudo">Conteúdo do Usuário e Moderação</h2>
        <ul>
          <li>Você é responsável pelos conteúdos e fluxos enviados por meio da plataforma.</li>
          <li>Podemos investigar e adotar medidas de moderação em casos de abuso, risco de segurança ou ordem legal.</li>
          <li>Denúncias de abuso podem ser encaminhadas ao nosso canal de contato.</li>
        </ul>

        <h2 id="apis">APIs, Automação e Limites Técnicos</h2>
        <ul>
          <li>Respeite a documentação, limites e quotas técnicas para estabilidade do serviço.</li>
          <li>Não tente interferir em mecanismos de segurança, medição ou autenticação.</li>
          <li>Automação deve obedecer às regras dos Canais e às leis aplicáveis (incluindo proteção de dados).</li>
        </ul>

        <h2 id="compliance">Conformidade e Reporte de Abusos</h2>
        <ul>
          <li>Mantenha conformidade com leis anticorrupção, proteção de dados e demais normas aplicáveis.</li>
          <li>Reporte incidentes ou abusos para o nosso contato abaixo, descrevendo contexto e evidências.</li>
        </ul>

        <h2 id="atualizacoes">Atualizações desta Política</h2>
        <p>
          Podemos atualizar esta Política para refletir mudanças legais, técnicas ou de produto. Alterações relevantes serão comunicadas pelos canais oficiais e vigorarão a partir da data informada no topo.
        </p>

        <h2 id="contato">Contato</h2>
        <p>
          Dúvidas ou denúncias? Escreva para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </LegalLayout>
  );
}
