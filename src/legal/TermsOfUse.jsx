import React from "react";
import LegalLayout from "./LegalLayout";
import { FileText } from "lucide-react";
import styles from "../styles/Legal.module.css";

const ISSUER = "NineChat (Daniel Rodrigo Oliveira do Nascimento, MEI – CNPJ 18.260.296/0001-45)";
const CONTACT_EMAIL = "legal@ninechat.com.br";
const LAST_UPDATED = "17/09/2025";

const toc = [
  { id: "def", label: "Definições" },
  { id: "obj", label: "Objeto do Serviço" },
  { id: "vig", label: "Vigência e Renovação" },
  { id: "precos", label: "Preços e Pagamento" },
  { id: "suporte", label: "Suporte e Serviços" },
  { id: "obr-contratado", label: "Obrigações do Contratado" },
  { id: "obr-contratante", label: "Obrigações do Contratante" },
  { id: "rescisao", label: "Rescisão e Não Renovação" },
  { id: "ip", label: "Propriedade Intelectual e Licença" },
  { id: "tecnico", label: "Condições Técnicas e Manutenção" },
  { id: "limitacao", label: "Limitação de Responsabilidade" },
  { id: "sla", label: "SLA (Resumo)" },
  { id: "aup", label: "Política de Uso Aceitável (Resumo)" },
  { id: "foro", label: "Lei Aplicável e Foro" },
  { id: "contato", label: "Contato" },
];

export default function TermsOfUse() {
  return (
    <LegalLayout
      icon={<FileText size={18} />}
      title="Termos de Uso"
      subtitle={ISSUER}
      updatedAt={LAST_UPDATED}
      toc={toc}
    >
      <article className={styles.article}>
        <h2 id="def">Definições</h2>
        <ul>
          <li><strong>Canais:</strong> WhatsApp, Telegram, Facebook Messenger, Instagram Direct e outros que venham a ser suportados.</li>
          <li><strong>Número/Identificador de Canal:</strong> cada identificador (ex.: número WABA, conta Telegram, Página do Facebook, conta Instagram) provisionado e ativo em nome do cliente.</li>
          <li><strong>Sessão de 24 horas:</strong> janela contínua de 24h, por contato e por canal, contada desde o evento que originar a conversa; mensagens dentro da janela pertencem à mesma sessão, e, após 24h de inatividade, nova mensagem abre nova sessão (no WhatsApp, acompanha a janela da Meta).</li>
          <li><strong>Painel/Relatórios:</strong> interface que exibe métricas, disponibilidade, incidentes e bilhetagem.</li>
        </ul>

        <h2 id="obj">Objeto do Serviço</h2>
        <p>
          O NineChat integra, centraliza e opera comunicações nos Canais, incluindo painel, APIs, suporte e integrações acordadas por escrito. O software é licenciado, sem cessão de código-fonte ou transferência de titularidade.
        </p>

        <h2 id="vig">Vigência e Renovação</h2>
        <p>
          Vigência inicial de <strong>6 (seis) meses</strong>, com <strong>renovações automáticas de 6 (seis) meses</strong>, salvo notificação de não renovação com antecedência mínima de <strong>45 (quarenta e cinco) dias</strong>.
        </p>

        <h2 id="precos">Preços e Pagamento</h2>
        <ul>
          <li><strong>Assinatura por Número:</strong> R$ 1.000,00 por Número/mês ativo.</li>
          <li><strong>Uso variável (Sessão):</strong> R$ 0,24 por sessão de 24h efetivamente registrada.</li>
          <li><strong>Regras de contagem:</strong> por contato e por canal; múltiplos canais geram sessões distintas; após 24h sem mensagens, nova sessão; templates de início de conversa (WhatsApp) contam sessão; logs imutáveis do NineChat prevalecem para auditoria.</li>
          <li><strong>Apuração e relatórios:</strong> relatórios mensais com números ativos, total de sessões por canal e consolidação de valores; contestação em até 10 dias corridos.</li>
          <li><strong>Faturamento:</strong> mensal, por nota fiscal; vencimento conforme proposta; meio de pagamento acordado.</li>
          <li><strong>Atraso:</strong> mora 1% a.m., multa 2% e correção (IGPM/INPC), com possibilidade de suspensão/limitação após 10 dias de inadimplência, mediante aviso.</li>
          <li><strong>Encargos de terceiros:</strong> tarifas dos Canais (Meta/WhatsApp, Telegram, Instagram/Facebook) são repassadas; mudanças de regras/preços dos Canais podem refletir-se nos valores, com aviso prévio de 15 dias.</li>
        </ul>

        <h2 id="suporte">Suporte e Serviços</h2>
        <ul>
          <li><strong>Atendimento:</strong> dias úteis, 09h–18h (horário de Brasília); classificação e prazos de primeira resposta conforme severidade.</li>
          <li><strong>Customizações/integrações específicas:</strong> orçadas à parte.</li>
        </ul>

        <h2 id="obr-contratado">Obrigações do Contratado</h2>
        <ul>
          <li>Disponibilizar o serviço conforme estes Termos, observando o SLA.</li>
          <li>Atender obrigações de segurança e privacidade (LGPD), manter confidencialidade e registros mínimos para auditoria por 12 meses.</li>
        </ul>

        <h2 id="obr-contratante">Obrigações do Contratante</h2>
        <ul>
          <li>Observar a Política de Uso Aceitável e as políticas dos Canais.</li>
          <li>Responder pelo conteúdo, bases de contato, templates e fluxos; indicar ponto focal para incidentes de dados e manter-se adimplente.</li>
        </ul>

        <h2 id="rescisao">Rescisão e Não Renovação</h2>
        <ul>
          <li><strong>Não renovação:</strong> aviso com 45 dias de antecedência ao término do período em curso.</li>
          <li><strong>Rescisão antecipada pelo cliente (sem justa causa):</strong> devidos os valores proporcionais remanescentes das mensalidades fixas por Número até o fim do período em curso, pro rata die, além dos variáveis e encargos de terceiros incorridos até o desligamento.</li>
          <li><strong>Rescisão por infração:</strong> imediata, se a violação material não for sanada em 10 dias após notificação.</li>
          <li><strong>Efeitos:</strong> encerramento de acessos e procedimentos de devolução/eliminação de dados (LGPD); sobrevivem confidencialidade, valores devidos e limitações de responsabilidade.</li>
        </ul>

        <h2 id="ip">Propriedade Intelectual e Licença</h2>
        <p>
          O NineChat, marcas e documentação são de titularidade do contratado. Concede-se licença <em>não exclusiva, intransferível e revogável</em> de uso durante a vigência, vedadas engenharia reversa, sublocação e uso fora do escopo.
        </p>

        <h2 id="tecnico">Condições Técnicas e Manutenção</h2>
        <ul>
          <li>Manutenções programadas preferencialmente em janelas de baixo impacto, com aviso de 24h.</li>
          <li>Backups lógicos conforme melhores práticas; recuperação condicionada à viabilidade técnica.</li>
          <li>Integrações com APIs de terceiros sujeitas às respectivas políticas e disponibilidade.</li>
        </ul>

        <h2 id="limitacao">Limitação de Responsabilidade</h2>
        <p>
          Sem responsabilidade por conteúdo das mensagens, indisponibilidades de Canais/terceiros, falhas de infraestrutura do cliente, danos indiretos/lucros cessantes. Limite agregado por danos diretos: total pago nos <strong>3 (três) meses</strong> anteriores ao evento. Nada exclui responsabilidade por dolo.
        </p>

        <h2 id="sla">SLA (Resumo)</h2>
        <ul>
          <li><strong>Disponibilidade alvo mensal:</strong> 95% (mês civil). Indisponibilidade de Canais/terceiros não compõe indisponibilidade do NineChat.</li>
          <li><strong>Prazos de primeira resposta (dias úteis 09h–18h):</strong> Crítico 4h; Alto 12h; Médio 24h; Baixo 48h.</li>
          <li><strong>Créditos de serviço (sobre mensalidade fixa por Número do mês subsequente, não cumulativos):</strong> 93–94,99%: 5%; 90–92,99%: 10%; &lt;90%: 15% (mediante solicitação em até 10 dias corridos e observadas exclusões).</li>
        </ul>

        <h2 id="aup">Política de Uso Aceitável (Resumo)</h2>
        <ul>
          <li>Proibidos: SPAM, conteúdo ilícito, violação de direitos, coleta/tratamento sem base legal, burlar políticas dos Canais, exploração/engenharia reversa.</li>
          <li>Bases/Opt-in: manter prova de consentimento/base legal e garantir opt-out; responsabilidade por templates/mensagens proativas.</li>
          <li>Medidas: advertência, suspensão ou rescisão; abuso pode ser reportado ao ponto focal do cliente.</li>
        </ul>

        <h2 id="foro">Lei Aplicável e Foro</h2>
        <p>Aplica-se a legislação brasileira. Fica eleito o foro da Comarca de Niterói/RJ.</p>

        <h2 id="contato">Contato</h2>
        <p>Dúvidas: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
      </article>
    </LegalLayout>
  );
}
