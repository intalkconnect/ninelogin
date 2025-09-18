import React from "react";
import LegalLayout from "./LegalLayout";
import { Shield } from "lucide-react";
import styles from "../styles/Legal.module.css";

const ISSUER = "NineChat (Daniel Rodrigo Oliveira do Nascimento, MEI – CNPJ 18.260.296/0001-45)";
const CONTACT_EMAIL = "privacidade@ninechat.com.br";
const LAST_UPDATED = "17/09/2025";

const toc = [
  { id: "escopo", label: "Escopo e Papéis (LGPD)" },
  { id: "categorias", label: "Categorias e Natureza do Tratamento" },
  { id: "bases", label: "Bases Legais e Transparência" },
  { id: "seguranca", label: "Segurança da Informação" },
  { id: "incidentes", label: "Incidentes e Notificação" },
  { id: "direitos", label: "Direitos dos Titulares" },
  { id: "subops", label: "Suboperadores e Compartilhamento" },
  { id: "transfer", label: "Transferências Internacionais" },
  { id: "auditoria", label: "Auditoria e Conformidade" },
  { id: "retencao", label: "Retenção, Devolução e Eliminação" },
  { id: "menores", label: "Crianças e Adolescentes" },
  { id: "conf", label: "Confidencialidade e ROPA" },
  { id: "resp", label: "Responsabilidade no Tratamento" },
  { id: "contato", label: "Contato do Encarregado" },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      icon={<Shield size={18} />}
      title="Política de Privacidade (LGPD)"
      subtitle={ISSUER}
      updatedAt={LAST_UPDATED}
      toc={toc}
    >
      <article className={styles.article}>
        <h2 id="escopo">Escopo e Papéis (LGPD)</h2>
        <p>
          Esta política descreve o tratamento de dados pessoais no uso do NineChat. <strong>O cliente atua como Controlador</strong> dos dados processados por meio da plataforma; <strong>o NineChat atua como Operador</strong>, seguindo instruções documentadas do Controlador para executar o contrato.
        </p>

        <h2 id="categorias">Categorias e Natureza do Tratamento</h2>
        <p>
          Natureza: envio/recebimento de mensagens, roteamento, registros de logs, armazenamento temporário, relatórios e suporte.
        </p>
        <ul>
          <li><strong>Identificação de usuários finais:</strong> nome, identificadores dos Canais, telefone/handle.</li>
          <li><strong>Conteúdo das mensagens:</strong> quando aplicável e conforme o uso do cliente.</li>
          <li><strong>Metadados:</strong> datas/horas, status, indicadores operacionais.</li>
          <li><strong>Operadores do cliente:</strong> dados cadastrais e de uso necessários à operação.</li>
        </ul>

        <h2 id="bases">Bases Legais e Transparência</h2>
        <p>
          Compete ao Controlador definir e registrar a base legal (consentimento, execução de contrato, legítimo interesse, etc.) e cumprir os deveres de transparência e direitos dos titulares perante a LGPD.
        </p>

        <h2 id="seguranca">Segurança da Informação</h2>
        <ul>
          <li>Criptografia em trânsito, autenticação e controle de acesso por perfil, segregação de ambientes, registros de auditoria e backup lógico.</li>
          <li>Acesso por equipes em regime de mínimo privilégio e sob confidencialidade; treinamentos periódicos.</li>
        </ul>

        <h2 id="incidentes">Incidentes e Notificação</h2>
        <p>
          Em caso de incidente com risco ou dano relevante a titulares, o Operador comunicará o Controlador em até <strong>48 horas</strong> contadas da ciência, informando descrição, dados/titulares afetados, medidas adotadas e orientações. Caberá ao Controlador avaliar comunicação à ANPD e aos titulares.
        </p>

        <h2 id="direitos">Direitos dos Titulares</h2>
        <p>
          O Operador auxiliará o Controlador, quando solicitado, no atendimento de requisições (acesso, correção, eliminação, portabilidade, oposição), na medida técnica possível e dentro de prazos razoáveis. A validação da identidade e base legal é de responsabilidade do Controlador.
        </p>

        <h2 id="subops">Suboperadores e Compartilhamento</h2>
        <p>
          Podemos envolver suboperadores (ex.: nuvem, interfaces com Canais) que mantenham nível compatível de segurança e privacidade. Mediante solicitação, fornecemos lista atualizada. Permanecemos responsáveis, perante o Controlador, pelos atos de suboperadores no escopo deste contrato.
        </p>

        <h2 id="transfer">Transferências Internacionais</h2>
        <p>
          Pode haver transferência internacional de dados para execução do serviço (infraestruturas em nuvem/Canais), com salvaguardas adequadas conforme a LGPD e diretrizes da ANPD.
        </p>

        <h2 id="auditoria">Auditoria e Conformidade</h2>
        <p>
          O Controlador pode auditar processos relacionados a este Acordo mediante aviso prévio de 10 dias úteis, em horário comercial, sem acesso a segredos de negócio e sem interromper indevidamente o serviço; limitado a 1 auditoria/ano, salvo incidente relevante. Evidências podem incluir políticas, registros de acesso, relatórios de vulnerabilidade e inventário de suboperadores.
        </p>

        <h2 id="retencao">Retenção, Devolução e Eliminação</h2>
        <ul>
          <li>Ao término do contrato, o Controlador pode optar por devolução dos dados em formato interoperável ou por eliminação segura.</li>
          <li>Logs de auditoria podem ser retidos por prazo legal/legítimo. Dados anonimizados podem ser mantidos para fins estatísticos.</li>
        </ul>

        <h2 id="menores">Crianças e Adolescentes</h2>
        <p>
          O tratamento envolvendo menores requer bases legais específicas e maior transparência. A coleta adequada é responsabilidade do Controlador.
        </p>

        <h2 id="conf">Confidencialidade e ROPA</h2>
        <p>
          Mantemos registro das operações de tratamento relevantes (ROPA) e obrigações de confidencialidade, inclusive por NDA, conforme aplicável.
        </p>

        <h2 id="resp">Responsabilidade no Tratamento</h2>
        <p>
          Cada parte responde nos limites contratuais por descumprimento de obrigações LGPD; o Operador não se responsabiliza por instruções ilegais do Controlador.
        </p>

        <h2 id="contato">Contato do Encarregado</h2>
        <p>
          Encarregado/DPO: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </article>
    </LegalLayout>
  );
}
