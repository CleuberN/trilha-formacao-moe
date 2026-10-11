import { useEffect, useMemo, useState } from "react";
import "./App.css";

const modules = [
  { id: "moe", icon: "🏭", title: "Conhecendo a MOE", level: "Básico", summary: "Entenda o objetivo da trilha e o fluxo geral de trabalho.", lessons: [
    { title: "Objetivo da biblioteca", body: "A Biblioteca MOE organiza conteúdos de aprendizagem para apoiar operadores, montadores, líderes e novos colaboradores. Use-a como apoio ao treinamento e siga sempre os procedimentos oficiais da empresa." },
    { title: "Fluxo de produção", body: "O fluxo didático previsto na trilha é: recebimento, inspeção, preparação, montagem, torque, qualidade, testes e expedição. A sequência real deve ser confirmada na instrução de trabalho vigente da sua linha." },
    { title: "Como estudar", body: "Avance por uma aula de cada vez, consulte a fonte indicada e marque a aula como concluída depois de estudar. Em caso de dúvida, confirme com a liderança ou com o responsável técnico." }
  ]},
  { id: "componentes", icon: "⚙️", title: "Componentes do Eixo", level: "Básico", summary: "Conheça os nomes e as funções gerais dos componentes.", lessons: [
    { title: "Visão geral", body: "Um conjunto de eixo pode reunir carcaça, diferencial, coroa, pinhão, engrenagens internas, rolamentos, retentores e semieixos. A composição varia conforme o projeto e a versão do eixo." },
    { title: "Coroa e pinhão", body: "Em conjuntos que utilizam engrenamento hipoide, o pinhão recebe o movimento do eixo de transmissão e aciona a coroa. Relação, ajustes e procedimentos são específicos do modelo." },
    { title: "Diferencial e semieixos", body: "O diferencial distribui o movimento às saídas do conjunto, permitindo a diferença de rotação entre as rodas em curvas. Os semieixos transmitem torque às rodas conforme a arquitetura do veículo." },
    { title: "Identificação correta", body: "Antes de aplicar qualquer informação técnica, confira a identificação gravada ou etiquetada no conjunto, a variante, o número de série e o manual correspondente. Não identifique o modelo apenas pela aparência." }
  ]},
  { id: "ferramentas", icon: "🔧", title: "Ferramentas", level: "Básico", summary: "Reconheça instrumentos e cuidados de utilização.", lessons: [
    { title: "Torquímetro", body: "O torquímetro é utilizado para aplicar um torque especificado. Confira faixa, unidade, condição de calibração e instrução aplicável antes do uso. O valor correto deve vir do documento técnico da variante." },
    { title: "Instrumentos de medição", body: "Relógios comparadores e outros instrumentos devem ser usados conforme o método definido no procedimento. Registre as leituras exigidas e não substitua critérios de aprovação por estimativas visuais." },
    { title: "Ferramentas especiais", body: "Utilize somente ferramentas adequadas ao serviço, identificadas e em condições seguras. Não improvise dispositivos para prensagem, içamento ou ajuste." }
  ]},
  { id: "processo", icon: "📋", title: "Processo de Montagem", level: "Intermediário", summary: "Estude preparação, sequência, registros e verificações.", lessons: [
    { title: "Preparação", body: "Confirme a ordem de produção, identificação do eixo, revisão da instrução, disponibilidade das peças e condição das ferramentas. Mantenha a área limpa e organizada." },
    { title: "Sequência de montagem", body: "A sequência de montagem deve ser a definida na instrução de trabalho aprovada para o modelo e a variante. Esta aula apresenta o conceito geral e não substitui o procedimento oficial." },
    { title: "Ajustes e aperto", body: "Torque, folga, pré-carga, calços, sequência de aperto e lubrificante são parâmetros específicos. Consulte a documentação correta; não use valores de outro modelo como referência." },
    { title: "Registro da operação", body: "Registre os controles solicitados no processo, identifique desvios e interrompa a atividade quando faltar informação, ferramenta ou condição segura." }
  ]},
  { id: "qualidade", icon: "✔️", title: "Qualidade", level: "Intermediário", summary: "Aprenda a observar, registrar e encaminhar não conformidades.", lessons: [
    { title: "Inspeção visual", body: "Observe limpeza, danos aparentes, identificação das peças e condições definidas no checklist vigente. A inspeção visual não substitui medições ou testes obrigatórios." },
    { title: "Pontos de controle", body: "O estudo de caso MOE menciona verificações como inspeção visual, validação, teste de vazamento, abastecimento de óleo e inspeção final. A aplicação exata deve ser confirmada no roteiro aprovado da linha." },
    { title: "Não conformidade", body: "Quando encontrar uma condição fora do critério, identifique e segregue conforme o procedimento local, registre a ocorrência e comunique a liderança ou Qualidade. Não libere a peça por conta própria." }
  ]},
  { id: "seguranca", icon: "🦺", title: "Segurança", level: "Obrigatório", summary: "Reforce práticas seguras antes e durante a atividade.", lessons: [
    { title: "EPIs e riscos", body: "Utilize os EPIs definidos para a atividade e siga a análise de risco e os procedimentos locais. Se houver condição insegura, pare e solicite orientação." },
    { title: "Movimentação de peças", body: "Utilize dispositivos de movimentação aprovados, respeite a capacidade indicada e mantenha pessoas fora da zona de risco. Não permaneça sob cargas suspensas." },
    { title: "Prensas e equipamentos", body: "Somente opere equipamentos para os quais tenha autorização e treinamento. Mantenha proteções e dispositivos de segurança em funcionamento e nunca neutralize intertravamentos." }
  ]},
  { id: "biblioteca", icon: "📚", title: "Biblioteca Técnica", level: "Consulta", summary: "Localize a documentação e confirme o escopo de cada manual.", lessons: [
    { title: "Manual de eixos de diferencial simples — 2011", body: "Documento identificado como manual de manutenção de eixos de diferencial simples, edição novembro de 2011. A capa lista modelos como MS-145/147, MS-155, MS-160, MS-165, MS-168, MS-185, MS-186, RS-120, U-180 e U-185. A lista não confirma aplicação ao IVECO MS-23." },
    { title: "Manual de eixos tandem — 2011", body: "Manual Meritor de eixos tandem/tridem. A aplicação ao DAF MD específico precisa ser confirmada pela identificação completa e pela documentação do fabricante; não presumir compatibilidade apenas pela sigla." },
    { title: "Manual 18X e manual 17X", body: "Há documentos separados para diferenciais 18X e 17X. Não misture procedimentos entre modelos. Confirme revisão, modelo e aplicação antes de utilizar qualquer ajuste ou especificação." },
    { title: "Regra de rastreabilidade", body: "Toda aula técnica deve registrar título do documento, fabricante, modelo aplicável, edição/revisão e página. Se a fonte não confirmar um dado, deixe-o como pendente de validação." }
  ]},
  { id: "quiz", icon: "❓", title: "Quiz MOE", level: "Revisão", summary: "Confira os conceitos básicos estudados na trilha.", lessons: [
    { title: "Pergunta 1", body: "Antes de aplicar um torque de montagem, qual é a melhor atitude? Consulte a instrução aprovada para o modelo e a variante." },
    { title: "Pergunta 2", body: "Uma inspeção visual substitui todas as medições especificadas? Não. Cada controle obrigatório deve ser realizado conforme o procedimento." },
    { title: "Pergunta 3", body: "É seguro usar um procedimento de eixo 18X em um eixo 17X sem validação? Não. Os documentos e procedimentos devem ser mantidos separados até confirmar a aplicação." }
  ]}
];

const axes = {
  iveco: { title: "IVECO MS-23", subtitle: "Trilha de aprendizagem — identificação e montagem", image: "/images/iveco-ms23.jpeg", note: "A aplicação dos manuais disponíveis ao MS-23 ainda precisa ser confirmada. Não utilize parâmetros de outros modelos sem validação." },
  daf: { title: "DAF MD", subtitle: "Trilha de aprendizagem — identificação e montagem", image: "/images/daf-md.jpeg", note: "Confirme a identificação completa e a variante do eixo DAF MD antes de associar procedimentos ou especificações de um manual." }
};

function App() {
  const [view, setView] = useState("home");
  const [axis, setAxis] = useState("iveco");
  const [activeModule, setActiveModule] = useState("moe");
  const [activeLesson, setActiveLesson] = useState(0);
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem("moe-completed-lessons") || "[]"); }
    catch { return []; }
  });
  const [query, setQuery] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});

  useEffect(() => {
    try { localStorage.setItem("moe-completed-lessons", JSON.stringify(completed)); } catch {}
  }, [completed]);

  const allLessons = useMemo(() => modules.flatMap(m => m.lessons.map((l, i) => ({ key: m.id + ":" + i, module: m.id, title: l.title }))), []);
  const percent = allLessons.length ? Math.round(completed.length / allLessons.length * 100) : 0;
  const currentModule = modules.find(m => m.id === activeModule) || modules[0];
  const currentLesson = currentModule.lessons[activeLesson] || currentModule.lessons[0];
  const filteredModules = modules.filter(m => (m.title + " " + m.summary + " " + m.lessons.map(l => l.title + " " + l.body).join(" ")).toLowerCase().includes(query.toLowerCase()));

  function openModule(id) {
    setActiveModule(id);
    setActiveLesson(0);
    setView("lesson");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function toggleComplete(key) {
    setCompleted(old => old.includes(key) ? old.filter(item => item !== key) : [...old, key]);
  }
  function startAxis(id) {
    setAxis(id);
    openModule("moe");
  }

  return (
    <main className="app">
      <header className="topbar">
        <button className="brand" onClick={() => setView("home")} aria-label="Voltar ao início">MOE<span>Biblioteca de Formação</span></button>
        <nav><button className={view === "home" ? "nav-active" : ""} onClick={() => setView("home")}>Início</button><button onClick={() => setView("library")}>Biblioteca</button></nav>
      </header>

      {view === "home" && <>
        <section className="hero">
          <span className="eyebrow">TRILHA DE FORMAÇÃO</span>
          <h1>Aprenda. Pratique. Evolua.</h1>
          <p>Conhecimento organizado para apoiar o aprendizado na montagem de eixos.</p>
          <div className="hero-tags"><span>📘 Aulas didáticas</span><span>⚙️ Conteúdo técnico</span><span>📈 Progresso individual</span></div>
        </section>

        <section className="section-block">
          <div className="section-heading"><div><span className="eyebrow">ESCOLHA SEU TREINAMENTO</span><h2>Trilhas por eixo</h2></div><p>Confirme sempre a identificação do conjunto e a documentação aplicável.</p></div>
          <div className="axis-grid">
            {Object.entries(axes).map(([id, item]) => <article className="axis-card" key={id}>
              <div className="axis-image"><img src={item.image} alt={"Imagem de referência: " + item.title} onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.parentElement.classList.add("image-missing"); }} /><span className="image-label">EIXO / CONJUNTO</span></div>
              <div className="axis-copy"><span className="status-pill">TRILHA DE ESTUDO</span><h3>{item.title}</h3><p>{item.subtitle}</p><button className="primary-btn" onClick={() => startAxis(id)}>Iniciar treinamento <span>→</span></button></div>
            </article>)}
          </div>
        </section>

        <section className="progress-panel">
          <div className="progress-copy"><span className="eyebrow">SEU APRENDIZADO</span><h2>Meu progresso</h2><p>{completed.length} de {allLessons.length} aulas marcadas como concluídas</p></div>
          <div className="progress-value">{percent}%</div>
          <div className="progress-track"><div style={{ width: percent + "%" }} /></div>
        </section>

        <section className="section-block">
          <div className="section-heading"><div><span className="eyebrow">CONTEÚDO ORGANIZADO</span><h2>Módulos de formação</h2></div><span className="module-count">{modules.length} módulos</span></div>
          <div className="module-grid">{modules.map((m, i) => <button className="module-card" key={m.id} onClick={() => openModule(m.id)}><span className="module-icon">{m.icon}</span><span className="module-number">MÓDULO {String(i + 1).padStart(2, "0")}</span><strong>{m.title}</strong><small>{m.summary}</small><span className="module-link">Abrir módulo <b>↗</b></span></button>)}</div>
        </section>
      </>}

      {(view === "lesson" || view === "library") && <section className="learning-layout">
        <aside className="learning-sidebar">
          <button className="back-link" onClick={() => setView("home")}>← Voltar ao início</button>
          <span className="eyebrow">TRILHA DE FORMAÇÃO</span>
          <h2>Conteúdos MOE</h2>
          <label className="search-box"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar aula ou tema..." /></label>
          <div className="side-modules">{filteredModules.map(m => <button key={m.id} className={(view === "library" ? m.id === "biblioteca" : m.id === activeModule) ? "side-module selected" : "side-module"} onClick={() => { setActiveModule(m.id); setActiveLesson(0); setView(m.id === "biblioteca" ? "library" : "lesson"); }}><span>{m.icon}</span><span>{m.title}</span><small>{m.lessons.length}</small></button>)}</div>
          <div className="sidebar-progress"><div><span>Progresso geral</span><strong>{percent}%</strong></div><div className="progress-track"><div style={{ width: percent + "%" }} /></div></div>
        </aside>
        <div className="lesson-main">
          {view === "library" ? <>
            <span className="eyebrow">CONSULTA E RASTREABILIDADE</span><h1>Biblioteca Técnica</h1><p className="lead">Consulte os materiais disponíveis e confirme a aplicação antes de utilizar qualquer especificação.</p>
            <div className="source-alert"><strong>Importante</strong><p>Os manuais abaixo têm escopos diferentes. A presença de um documento na biblioteca não comprova que ele se aplica ao IVECO MS-23 ou à variante DAF MD em treinamento.</p></div>
            <div className="resource-list">{modules.find(m => m.id === "biblioteca").lessons.map((l, i) => <article className="resource-card" key={l.title}><span className="resource-number">0{i + 1}</span><div><h3>{l.title}</h3><p>{l.body}</p><span className="resource-tag">Conteúdo de orientação</span></div></article>)}</div>
          </> : <>
            <div className="lesson-breadcrumb"><button onClick={() => setView("home")}>Início</button><span>/</span><span>{currentModule.title}</span></div>
            <div className="lesson-title-row"><div><span className="eyebrow">{currentModule.level.toUpperCase()} · {currentModule.lessons.length} AULAS</span><h1>{currentModule.title}</h1><p className="lead">{currentModule.summary}</p></div><span className="large-module-icon">{currentModule.icon}</span></div>
            {currentModule.id === "moe" && <div className="axis-context"><strong>Treinamento selecionado: {axes[axis].title}</strong><p>{axes[axis].note}</p></div>}
            <div className="lesson-content-grid">
              <div className="lesson-reader"><div className="lesson-meta"><span>AULA {String(activeLesson + 1).padStart(2, "0")}</span><span>{completed.includes(currentModule.id + ":" + activeLesson) ? "✓ Concluída" : "Em andamento"}</span></div><h2>{currentLesson.title}</h2><p>{currentLesson.body}</p>
                <div className="learning-tip"><span>💡</span><div><strong>Prática recomendada</strong><p>Consulte a instrução de trabalho vigente e tire dúvidas com a liderança antes de executar uma operação real.</p></div></div>
                <div className="lesson-actions"><button className={completed.includes(currentModule.id + ":" + activeLesson) ? "secondary-btn" : "primary-btn"} onClick={() => toggleComplete(currentModule.id + ":" + activeLesson)}>{completed.includes(currentModule.id + ":" + activeLesson) ? "Desmarcar conclusão" : "Marcar aula como concluída"}</button><div className="lesson-pagination"><button disabled={activeLesson === 0} onClick={() => setActiveLesson(v => v - 1)}>← Anterior</button><button disabled={activeLesson === currentModule.lessons.length - 1} onClick={() => setActiveLesson(v => v + 1)}>Próxima →</button></div></div>
              </div>
              <aside className="lesson-outline"><h3>Nesta aula</h3>{currentModule.lessons.map((l, i) => <button key={l.title} onClick={() => setActiveLesson(i)} className={i === activeLesson ? "outline-item active" : "outline-item"}><span>{completed.includes(currentModule.id + ":" + i) ? "✓" : String(i + 1).padStart(2, "0")}</span>{l.title}</button>)}<div className="outline-note"><strong>Material de apoio</strong><p>Use os manuais e procedimentos aprovados para confirmar dados específicos do modelo.</p><button onClick={() => setView("library")}>Abrir biblioteca →</button></div></aside>
            </div>
            {currentModule.id === "quiz" && <div className="quiz-note"><strong>Revisão rápida</strong><p>As respostas esperadas estão explicadas em cada pergunta. A versão avaliativa com pontuação será uma próxima melhoria.</p></div>}
          </>}
        </div>
      </section>}

      <footer className="footer"><strong>Biblioteca MOE</strong><span>Material didático de apoio. Procedimentos oficiais e instruções vigentes têm prioridade.</span><button onClick={() => setView("home")}>Voltar ao início ↑</button></footer>
    </main>
  );
}

export default App;
