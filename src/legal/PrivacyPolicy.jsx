import React from "react";
import LegalLayout from "./LegalLayout";
import { Shield } from "lucide-react";
import styles from "../styles/Legal.module.css";

/** personalize conforme sua organização */
const ISSUER = "NineChat";
const CONTACT_EMAIL = "privacidade@ninechat.com.br";
const LAST_UPDATED = "17/09/2025";

const toc = [
  { id: "escopo", label: "Escopo e Papéis (LGPD)" },
  { id: "categorias", label: "Categorias de Dados e Natureza" },
  { id: "fontes", label: "Fontes de Coleta" },
  { id: "finalidades", label: "Finalidades do Tratamento" },
  { id: "bases", label: "Bases Legais" },
  { id: "compart", label: "Compartilhamento e Suboperadores" },
  { id: "transfer", label: "Transferências Internacionais" },
  { id: "seguranca", label: "Segurança da Informação" },
  { id: "direitos", label: "Direitos dos Titulares" },
  { id: "auditoria", label: "Auditoria e Conformidade" },
  { id: "retencao", label: "Retenção e Eliminação" },
  { id: "menores", label: "Crianças e Adolescentes" },
  { id: "contato", label: "Contato do Encarregado (DPO)" },
  { id: "mudancas", label: "Mudanças nesta Política" },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      icon={<Shield size={18} />}
      title="Política de Privacidade"
      subtitle={ISSUER}
      updatedAt={LAST_UPDATED}
      toc={toc}
    >
      <article className={styles.article}>
        <h2 id="escopo">Escopo e Papéis (LGPD)</h2>
        <p>
          Esta Política descreve o tratamento de dados pessoais no uso da plataforma {ISSUER}. Em geral, <strong>o Cliente atua como Controlador</strong> dos dados processados por meio da plataforma, e <strong>o {ISSUER} atua como Operador</strong>, tratando dados pessoais conforme instruções documentadas do Controlador e para execução das funcionalidades.
        </p>

        <h2 id="categorias">Categorias de Dados e Natureza</h2>
        <p>Natureza do tratamento: envio/recebimento de mensagens, roteamento, registro de logs, armazenamento temporário, relatórios e suporte.</p>
        <ul>
          <li><strong>Identificação de usuários finais:</strong> nome, identificadores dos Canais (telefone/handle).</li>
          <li><strong>Conteúdo de mensagens:</strong> quando aplicável e conforme o uso pelo Cliente.</li>
          <li><strong>Metadados operacionais:</strong> datas/horas, status, indicadores de entrega e atendimento.</li>
          <li><strong>Operadores do Cliente:</strong> dados cadastrais e de uso necessários à operação (acessos, permissões, logs).</li>
        </ul>

        <h2 id="fontes">Fontes de Coleta</h2>
        <ul>
          <li>Informações fornecidas por usuários/administradores do Cliente.</li>
          <li>Registros gerados pelo uso do sistema (telemetria e logs).</li>
          <li>Integrações autorizadas com Canais e provedores (APIs de terceiros).</li>
        </ul>

        <h2 id="finalidades">Finalidades do Tratamento</h2>
        <ul>
          <li>Prover e operar funcionalidades contratadas pelo Cliente.</li>
          <li>Autenticar, manter sessão, autorizar e personalizar a experiência de uso.</li>
          <li>Garantir segurança, prevenir abusos e cumprir requisitos legais.</li>
          <li>Monitorar desempenho/estabilidade, depurar falhas e evoluir o produto.</li>
          <li>Atender solicitações de suporte e comunicações operacionais.</li>
        </ul>

        <h2 id="bases">Bases Legais</h2>
        <p>
          O tratamento poderá se basear em execução de contrato, legítimo interesse (p. ex., segurança e melhoria de serviço), cumprimento de obrigação legal/regulatória e, quando exigido, consentimento. Quando atuarmos como Operador, a definição da base legal cabe ao Controlador.
        </p>

        <h2 id="compart">Compartilhamento e Suboperadores</h2>
        <p>
          Podemos envolver provedores de infraestrutura, e-mail, monitoramento e integrações com Canais para viabilizar o serviço, exigindo salvaguardas de segurança e privacidade compatíveis. Quando atuarmos como Operador, o Controlador autoriza o uso de suboperadores necessários ao funcionamento.
        </p>

        <h2 id="transfer">Transferências Internacionais</h2>
        <p>
          Dados podem ser processados fora do Brasil (ex.: nuvem e Canais), com salvaguardas adequadas segundo a LGPD e diretrizes da ANPD.
        </p>

        <h2 id="seguranca">Segurança da Informação</h2>
        <ul>
          <li>Criptografia em trânsito, controle de acesso por perfil e segregação de ambientes.</li>
          <li>Registros de auditoria, backups lógicos e princípio do mínimo privilégio.</li>
          <li>Equipe sob compromissos de confidencialidade e boas práticas de segurança.</li>
        </ul>

        <h2 id="direitos">Direitos dos Titulares</h2>
        <p>
          O {ISSUER} auxiliará o Controlador, quando solicitado, no atendimento de requisições de titulares (acesso, correção, eliminação, portabilidade, oposição), na medida técnica possível e dentro de prazos razoáveis. Validação de identidade e base legal é de responsabilidade do Controlador.
        </p>

        <h2 id="auditoria">Auditoria e Conformidade</h2>
        <p>
          O Controlador pode realizar auditorias relacionadas ao tratamento no escopo da plataforma, com aviso prévio razoável, em horário comercial, sem acesso a segredos de negócio e sem causar interrupção indevida, observando-se limites de periodicidade e proporcionalidade.
        </p>

        <h2 id="retencao">Retenção e Eliminação</h2>
        <ul>
          <li>Ao término da relação, o Controlador pode solicitar devolução de dados em formato interoperável ou eliminação segura.</li>
          <li>Logs de auditoria podem ser retidos por prazos legais/legítimos; dados anonimizados podem ser mantidos para fins estatísticos.</li>
        </ul>

        <h2 id="menores">Crianças e Adolescentes</h2>
        <p>
          O tratamento envolvendo menores requer bases legais específicas e maior transparência. A coleta adequada é de responsabilidade do Controlador.
        </p>

        <h2 id="contato">Contato do Encarregado (DPO)</h2>
        <p>
          Dúvidas, solicitações ou incidentes de privacidade: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2 id="mudancas">Mudanças nesta Política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade. Alterações relevantes serão comunicadas e vigorarão a partir da data indicada no topo.
        </p>
      </article>
    </LegalLayout>
  );
}
