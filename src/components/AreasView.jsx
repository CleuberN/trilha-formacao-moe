import { useState } from "react";
import { assemblyAreas } from "../data/assemblyAreas";

export default function AreasView({ onBackHome, initialAreaId = assemblyAreas[0].id }) {
  const [activeId, setActiveId] = useState(initialAreaId);
  const activeArea = assemblyAreas.find((area) => area.id === activeId) || assemblyAreas[0];

  return (
    <section className="areas-page">
      <button className="back-link" onClick={onBackHome}>← Voltar ao início</button>
      <div className="areas-hero">
        <span className="eyebrow">BIBLIOTECA DA MONTAGEM</span>
        <h1>Conhecimento organizado para o dia a dia</h1>
        <p>Explore as seis áreas de referência. Os conteúdos identificados como preliminares devem ser validados com a documentação e a liderança responsáveis.</p>
      </div>

      <div className="areas-grid" aria-label="Áreas da Biblioteca da Montagem">
        {assemblyAreas.map((area, index) => (
          <button
            key={area.id}
            className={activeId === area.id ? "area-card area-card-active" : "area-card"}
            onClick={() => setActiveId(area.id)}
            aria-pressed={activeId === area.id}
          >
            <span className="area-card-top"><span className="area-icon">{area.icon}</span><span className="area-index">0{index + 1}</span></span>
            <strong>{area.title}</strong>
            <span className="area-summary">{area.summary}</span>
            <span className="area-open">{activeId === area.id ? "Selecionada" : "Explorar área"} <span aria-hidden="true">→</span></span>
          </button>
        ))}
      </div>

      <article className="area-detail">
        <div className="area-detail-heading">
          <span className="area-icon">{activeArea.icon}</span>
          <div><span className="eyebrow">ÁREA SELECIONADA</span><h2>{activeArea.title}</h2><span className="area-status">{activeArea.status}</span></div>
        </div>
        <p className="area-intro">{activeArea.intro}</p>
        <div className="area-topic-list">
          {activeArea.topics.map((topic, index) => (
            <section className="area-topic" key={topic.title}>
              <span className="area-topic-number">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{topic.title}</h3><p>{topic.body}</p></div>
            </section>
          ))}
        </div>
        <div className="area-source-note"><strong>Controle de conteúdo</strong><p>Esta biblioteca é material didático de apoio. Confirme informações operacionais, responsabilidades, sequências e especificações nos documentos oficiais vigentes.</p></div>
      </article>
    </section>
  );
}
