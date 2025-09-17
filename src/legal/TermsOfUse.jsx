import React from "react";
import LegalLayout from "./LegalLayout";
import { FileText } from "lucide-react";
import styles from "../styles/Legal.module.css";

const ISSUER = "NineChat";
const CONTACT_EMAIL = "legal@ninechat.com.br";
const LAST_UPDATED = "17/09/2025";
const JURISDICTION = "leis da República Federativa do Brasil";
const VENUE = "Comarca de São Paulo/SP";

const toc = [
  { id: "sec-aceite", label: "Aceitação e Elegibilidade" },
  { id: "sec-conta", label: "Conta e Credenciais" },
  { id: "sec-uso", label: "Uso Permitido e Restrições" },
  { id: "sec-planos", label: "Planos e Cancelamento" },
  { id: "sec-ip", label: "Propriedade Intelectual" },
  { id: "sec-confid", label: "Confidencialidade" },
  { id: "sec-priv", label: "Privacidade e LGPD" },
  { id: "sec-terceiros", label: "Serviços de Terceiros" },
  { id: "sec-garantias", label: "Garantias e SLA" },
  { id: "sec-limite", label: "Limitação de Responsabilidade" },
  { id: "sec-inden", label: "Indenização" },
  { id: "sec-susp", label: "Suspensão e Encerramento" },
  { id: "sec-changes", label: "Alterações" },
  { id: "sec-lei", label: "Lei Aplicável e Foro" },
  { id: "sec-contato", label: "Contato" },
];

export default function TermsOfUse() {
  return (
    <LegalLayout
      icon={<FileText size={18} />}
      title="Termos de Uso"
      subtitle={`${ISSUER}`}
      updatedAt={LAST_UPDATED}
      toc={toc}
    >
      <article className={styles.article}>
        <h2 id="sec-aceite">Aceitação e Elegibilidade</h2>
        <p>Ao usar a plataforma <strong>{ISSUER}</strong>, você concorda com estes Termos e declara possuir autoridade e capacidade legal.</p>

        <h2 id="sec-conta">Conta e Credenciais</h2>
        <ul>
          <li>Você é responsável por suas credenciais e por atividades realizadas na conta.</li>
          <li>Notifique incidentes de segurança ou acessos não autorizados imediatamente.</li>
        </ul>

        <h2 id="sec-uso">Uso Permitido e Restrições</h2>
        <ul>
          <li>É vedado uso ilícito, spam, violação de direitos, engenharia reversa ou contorno de segurança.</li>
          <li>Respeite limites técnicos, políticas de uso e termos das integrações habilitadas.</li>
        </ul>

        <h2 id="sec-planos">Planos, Cobrança e Cancelamento</h2>
        <p>Condições comerciais, ciclos e reembolsos seguem contrato/proposta firmados com o Cliente.</p>

        <h2 id="sec-ip">Conteúdos e Propriedade Intelectual</h2>
        <p>{ISSUER} e licenciantes detêm direitos sobre a plataforma, marcas e materiais. Você mantém direitos sobre seus conteúdos, concedendo licença necessária para a prestação do serviço.</p>

        <h2 id="sec-confid">Confidencialidade</h2>
        <p>As partes manterão confidenciais informações não públicas obtidas em razão do uso do serviço.</p>

        <h2 id="sec-priv">Privacidade e LGPD</h2>
        <p>O tratamento de dados pessoais é regido pela nossa <a href="/legal/privacy">Política de Privacidade</a>.</p>

        <h2 id="sec-terceiros">Serviços de Terceiros</h2>
        <p>Integrações externas estão sujeitas aos termos e políticas de seus respectivos provedores.</p>

        <h2 id="sec-garantias">Garantias, Isenções e SLA</h2>
        <p>O serviço é fornecido “no estado em que se encontra”. Salvo previsão contratual, não garantimos disponibilidade ininterrupta, ausência de erros ou adequação a fins específicos.</p>

        <h2 id="sec-limite">Limitação de Responsabilidade</h2>
        <p>Na extensão permitida por lei, não nos responsabilizamos por danos indiretos; a responsabilidade total restringe-se aos valores pagos nos 12 meses anteriores ao evento.</p>

        <h2 id="sec-inden">Indenização</h2>
        <p>Você indenizará {ISSUER} por reclamações de terceiros decorrentes de uso indevido do serviço ou violação destes Termos.</p>

        <h2 id="sec-susp">Suspensão e Encerramento</h2>
        <p>Podemos suspender/encerrar acesso em caso de violação, risco à segurança ou exigência legal, com aviso quando aplicável.</p>

        <h2 id="sec-changes">Alterações</h2>
        <p>Podemos atualizar estes Termos e comunicaremos mudanças relevantes. A data no topo indica a versão vigente.</p>

        <h2 id="sec-lei">Lei Aplicável e Foro</h2>
        <p>Regidos pelas <strong>{JURISDICTION}</strong>. Foro eleito: <strong>{VENUE}</strong>.</p>

        <h2 id="sec-contato">Contato</h2>
        <p>Dúvidas? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
      </article>
    </LegalLayout>
  );
}
