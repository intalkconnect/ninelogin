import React from "react";
import { Shield, FileText, ArrowUp } from "lucide-react";
import styles from "./styles/Legal.module.css";

export default function LegalLayout({
  icon = <FileText size={18} />,
  title,
  subtitle,
  updatedAt,
  toc = [],      // [{ id:'sec-intro', label:'Introdução' }, ...]
  children,
}) {
  const onBackToTop = () => {
    const sc = document.querySelector(`.${styles.contentScroll}`);
    if (sc) sc.scrollTo({ top: 0, behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
        <div className={styles.hIcon}>{icon || <Shield size={18} />}</div>
        <div className={styles.hText}>
          <h1 className={styles.hTitle}>{title}</h1>
          <div className={styles.hSub}>
            {subtitle}
            {updatedAt && <span className={styles.hDot}>&middot;</span>}
            {updatedAt && <span>Atualizado em {updatedAt}</span>}
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        <aside className={styles.toc}>
          <div className={styles.tocInner}>
            <div className={styles.tocTitle}>Neste documento</div>
            <nav className={styles.tocList} aria-label="Índice">
              {toc.map((item) => (
                <a key={item.id} className={styles.tocLink} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <section className={styles.panel}>
          <div className={styles.contentScroll}>
            {children}
          </div>
        </section>
      </div>

      <button
        type="button"
        className={styles.fab}
        onClick={onBackToTop}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
