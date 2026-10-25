import { useEffect, useMemo, useState } from "react";
import "./App.css";
import AreasView from "./components/AreasView";

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

// Conteúdo transcrito das folhas de mentoria: manter observações de leitura incerta para validação.
modules.push(
  {
    id: "folhas-estrutura",
    icon: "🏗️",
    title: "Estrutura da MOE e Estações",
    level: "Conteúdo da mentoria",
    summary: "Estrutura da linha, controles comuns, sequência das estações e postos complementares transcritos das folhas.",
    lessons: [
      { title: "Visão geral da MOE", body: "Conforme as folhas, a MOE é formada por 18 postos de trabalho e 4 postos/estações; a relação exata entre esses números precisa ser confirmada. A folha cita o programa “Amino Flexnet” (grafia a confirmar), que auxilia na sequência e na qualidade do processo. O sistema monitora e controla etapas em tempo real e compara o planejado com o executado." },
      { title: "ARO e LPT — controles de todos os postos", body: "As folhas indicam que todos os postos e estações contêm ARO e LPT. ARO significa Análise de Risco Operacional e contempla descrição das etapas, riscos, medidas de prevenção e EPIs obrigatórios. LPT significa Liberação do Posto de Trabalho: inspecionar MPT e MPF antes de iniciar, dar OK e assinar; se houver anomalia, comunicar imediatamente a liderança. MPT e MPF foram mantidas conforme a folha e seus significados precisam ser confirmados." },
      { title: "Estações 10, 20 e 30", body: "Estação 10: preparação da montagem da carcaça para fixação do diferencial. Estação 20: validação do diferencial e posicionamento na carcaça. Estação 30: fixação do diferencial na carcaça, posicionamento para a palletaria, início da montagem e montagem do intermediário. A descrição da estação 30 contém trecho parcialmente incerto na transcrição." },
      { title: "Estações 40, 50, 60 e 70", body: "Estação 40: fixação e posicionamento do freio esquerdo (LE). Estação 50: instalação do ABS e fixação do componente do lado esquerdo; a palavra manuscrita após “fixação do” está incerta (“fog”/“freio” na leitura). Estação 60: posicionamento e fixação do freio direito (LD). Estação 70: instalação do ABS e fixação do componente do lado direito; a palavra manuscrita está incerta. A folha menciona submontagem do ABS nas estações 50 e 70." },
      { title: "Estações 80, 90 e 100", body: "Estação 80: montagem do cubo com as travas do conjunto, observando as características de segurança, lado direito. Estação 90: mesma descrição para o lado esquerdo. Estação 100: conferência visual das travas e das características de segurança; montagem e fixação do semieixo; regulagem e ajuste do freio." },
      { title: "Estações 120, 130 e 140", body: "Estação 120: teste de estanqueidade para verificar vazamentos. Estação 130: abastecimento de óleo e termo transcrito como “memorial” (a confirmar); observação manuscrita: “memorial 1: engraxar o eixo para a pintura”. Estação 140: inspeção final com checklist; inspeção visual de 100% dos componentes, no mínimo 4 fotos para liberação e conferência dos requisitos do pedido do cliente. A transcrição não apresenta descrição para a estação 110; não completar por suposição." },
      { title: "Postos complementares", body: "Posto de pintura: sem estação numerada por não haver computador no processo; inspeção 100% visual, com validação, LPT e ARO. A folha parece mencionar temperatura e viscosidade, mas a frase completa precisa ser confirmada. Posto transcrito como “Memória 2”: recebe o eixo da pintura, realiza retoques e posiciona em embalagem adequada; o termo de embalagem aparece como “PIG” na leitura provável. Submontagem do eixo intermediário: prensa 2605, Poka-Yoke/controle de erro associado à máquina 2606 e teste de folga. Há também posto de montagem do garfo e submontagem do diferencial, ambos mencionados separadamente. A oficina recebe retrabalho, ajustes e correções gerais. Os postos fora das estações também seguem validação por ARO e LPT." }
    ]
  },
  {
    id: "folhas-preeleicao",
    icon: "📊",
    title: "Pré-eleição",
    level: "Conteúdo da mentoria",
    summary: "Ferramentas de acompanhamento da operação, produção, retrabalho, segurança e gerenciamento 8D.",
    lessons: [
      { title: "Quadro e escala", body: "O quadro ajuda a visualizar quem está trabalhando, em qual turno e qual função ou operação realiza. Na escala, o líder considera as habilidades e o treinamento de cada pessoa e distribui a equipe entre postos/estações; permite identificar disponibilidade e local de atuação." },
      { title: "Quadro de ocorrências", body: "Serve para registrar problemas e situações identificadas na área e acompanhar seu tratamento. Os campos anotados são quantidade, oficina, causa e solução; a primeira palavra dos campos precisa ser confirmada na folha original." },
      { title: "Gráfico de gestão de retrabalho", body: "Mostra quando algo precisa ser corrigido, ajustado ou novamente trabalhado porque não ficou conforme o esperado. As dicas das folhas: fazer o processo corretamente na primeira vez; acompanhar a quantidade, entender por que e onde aconteceu e identificar o que está sendo feito para evitar recorrência." },
      { title: "Produção diária e OEE", body: "Acompanhar quanto a área deveria produzir e quanto realmente produziu: meta, produção realizada, comparação e análise dos desvios. A folha cita OEE — Índice de Eficiência Global — e traz o exemplo realizado 68, meta 85: 68 ÷ 85 = 0,8 × 100 = 80%; resultado anotado: OEE 80%. O exemplo foi preservado como transcrito." },
      { title: "Carta de controle hora a hora", body: "A carta reúne meta prevista para cada período, produção realizada, comparação, identificação de desvios e ação da liderança. Ajuda a acompanhar o turno e agir diante de diferenças entre o planejado e o realizado." },
      { title: "Segurança e meio ambiente", body: "As folhas descrevem o acompanhamento da segurança das pessoas, identificação de riscos e aspectos ambientais da operação. O item de meio ambiente acompanha os aspectos ambientais relacionados à operação." },
      { title: "Acompanhamento diário de retrabalho", body: "Acompanhar diariamente a quantidade e a evolução dos retrabalhos da linha. A transcrição contém os termos “engrenamento, componente danificado, montagem, fornecedores”, mas a leitura desse trecho é parcial e precisa ser confirmada." },
      { title: "Gerenciamento 8D — Produção", body: "O 8D é descrito nas folhas como uma forma estruturada de tratar um problema da produção, investigar a causa e definir ações. Seleciona-se uma equipe para acompanhar o caso, com prazo e ação. Exemplo anotado: um componente errado foi entregue ao cliente, não atingiu a funcionalidade esperada, houve reclamação e o eixo retorna para verificação e análise. Anotação final: “8D — qualidade, refugo e ação corretiva”." }
    ]
  },
  {
    id: "folhas-organograma",
    icon: "👥",
    title: "Organograma da Montagem",
    level: "Conteúdo da mentoria",
    summary: "Estrutura de liderança, responsáveis técnicos e funções de qualidade conforme as folhas.",
    lessons: [
      { title: "Estrutura de liderança", body: "Transcrição provável da folha: Jorge Silveira — Diretor de Operações; Gerardo Rodrigues — Gerente da Montagem; Alessandro T. Shiota — Gerente de Industrialização; Roberto — Supervisor de manufatura/montagem. A grafia de alguns nomes e a relação exata dos cargos precisam ser confirmadas antes de uso oficial." },
      { title: "Lideranças por turno", body: "Anotações das folhas: Bruno — MOE e MDX, manhã/1º turno; Anderson — MOP, manhã/1º turno; Renato — MOD/MDC, manhã/1º turno; Clécio — MDC, MOD, MOE e MOP, noite/3º turno. As siglas e associações devem ser conferidas na folha original." },
      { title: "Condutores, engenheiros e responsáveis por área", body: "A anotação indica que depois do supervisor vêm condutores e engenheiros. Relações anotadas: MOE — Samuel Gigna (grafia incerta); MOP — Kleiton Santos; MOD e MDC — Alex Cardoso; MDX — Samuel Guerra; Oficina — Kleiton Santos. A folha descreve esses responsáveis como atuantes na parte técnica da linha, segurança, qualidade e produção, ajudando a resolver dificuldades do dia a dia. A frase anotada é próxima de: “Todo problema técnico da linha é [do] engenheiro”." },
      { title: "Qualidade e inspeção", body: "Depois dos líderes vêm analista/inspetor. Analista de qualidade e operador de qualidade atuam como inspetores, com responsabilidade pelo controle de refugo, retrabalho e reclamações. As folhas citam alerta de reclamação do cliente e alerta de reclamação interna. Os nomes “Josiel Claro e João” aparecem no final, mas a relação com os cargos não está clara." }
    ]
  },
  {
    id: "folhas-lean",
    icon: "♻️",
    title: "Lean Manufacturing",
    level: "Conteúdo da mentoria",
    summary: "Os oito desperdícios conforme descritos nas folhas de formação.",
    lessons: [
      { title: "Defeito", body: "Produzir defeito pode gerar mais trabalho de retrabalho. A orientação anotada é fazer certo da primeira vez para evitar defeitos." },
      { title: "Espera", body: "Tempo perdido esperando o processo." },
      { title: "Transporte", body: "Movimentações desnecessárias de um lado para outro, causando perda de tempo." },
      { title: "Estoque", body: "Excesso de produto e material, que representa dinheiro parado e ocupa espaço." },
      { title: "Movimentação", body: "Movimentos desnecessários executados pelas pessoas, como andar de um lado para outro." },
      { title: "Processamento excessivo", body: "Operações ou exigências de qualidade maiores do que o necessário; fazer coisas que não precisam ser feitas." },
      { title: "Superprodução", body: "Produzir em excesso, sem respeitar uma demanda definida." },
      { title: "Desperdício de habilidade/conhecimento", body: "Subutilização das pessoas: não colocar as pessoas certas nas tarefas certas e não aproveitar as habilidades e os talentos disponíveis." }
    ]
  }
);

const quizQuestions = [
  {
    id: "torque",
    question: "Antes de aplicar o torque de montagem, o que você deve fazer?",
    options: [
      "Usar o valor lembrado de um eixo parecido.",
      "Consultar a instrução aprovada para o modelo e a variante.",
      "Escolher um valor aproximado e continuar."
    ],
    correct: 1,
    feedback: "O torque é específico da aplicação. Confirme modelo, variante e instrução vigente antes de executar."
  },
  {
    id: "inspection",
    question: "A inspeção visual substitui todas as medições e testes obrigatórios?",
    options: [
      "Sim, se a peça parecer em boas condições.",
      "Somente quando o operador tem experiência.",
      "Não. Cada controle obrigatório deve seguir o procedimento aplicável."
    ],
    correct: 2,
    feedback: "A inspeção visual não substitui medições nem testes exigidos pelo procedimento."
  },
  {
    id: "manuals",
    question: "Você pode aplicar um procedimento de eixo 18X em um eixo 17X sem validar a aplicação?",
    options: [
      "Não. É necessário confirmar modelo, variante e documentação aplicável.",
      "Sim, porque os dois são diferenciais.",
      "Sim, desde que as peças pareçam semelhantes."
    ],
    correct: 0,
    feedback: "Mantenha procedimentos e manuais separados até confirmar formalmente a aplicação correta."
  }
];

const axes = {
  iveco: { title: "IVECO MS-23", subtitle: "Trilha de aprendizagem — identificação e montagem", image: "/images/iveco-ms23.jpeg", note: "A aplicação dos manuais disponíveis ao MS-23 ainda precisa ser confirmada. Não utilize parâmetros de outros modelos sem validação." },
  daf: { title: "DAF MD", subtitle: "Trilha de aprendizagem — identificação e montagem", image: "/images/daf-md.jpeg", note: "Confirme a identificação completa e a variante do eixo DAF MD antes de associar procedimentos ou especificações de um manual." }
};

function App() {
  const [view, setView] = useState("home");
  const [selectedAreaId, setSelectedAreaId] = useState("organograma");
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
        <nav><button className={view === "home" ? "nav-active" : ""} onClick={() => setView("home")}>Início</button><button className={view === "areas" ? "nav-active" : ""} onClick={() => setView("areas")}>6 áreas</button><button onClick={() => setView("library")}>Biblioteca</button></nav>
      </header>

      {view === "home" && <>
        <section className="hero">
          <span className="eyebrow">TRILHA DE FORMAÇÃO</span>
          <h1>Aprenda. Pratique. Evolua.</h1>
          <p>Conhecimento organizado para apoiar o aprendizado na montagem de eixos.</p>
          <div className="hero-tags"><span>📘 Aulas didáticas</span><span>⚙️ Conteúdo técnico</span><span>📈 Progresso individual</span></div>
        </section>

        <section className="section-block assembly-library-preview">
          <div className="section-heading"><div><span className="eyebrow">BIBLIOTECA DA MONTAGEM</span><h2>Seis áreas de conhecimento</h2></div><button className="primary-btn" onClick={() => setView("areas")}>Explorar as áreas →</button></div>
          <p className="areas-preview-copy">Organograma, Lean Manufacturing, Programas, Pré-eleição, Estrutura da Montagem e Modelos de Eixos, reunidos em um só lugar.</p>
          <div className="areas-mini-grid">
            <button onClick={() => { setSelectedAreaId("organograma"); setView("areas"); }}><span>🧭</span><strong>Organograma da Montagem</strong></button>
            <button onClick={() => { setSelectedAreaId("lean"); setView("areas"); }}><span>♻️</span><strong>Lean Manufacturing</strong></button>
            <button onClick={() => { setSelectedAreaId("programas"); setView("areas"); }}><span>🌱</span><strong>Programas e Meio Ambiente</strong></button>
            <button onClick={() => { setSelectedAreaId("pre-eleicao"); setView("areas"); }}><span>📊</span><strong>Pré-eleição</strong></button>
            <button onClick={() => { setSelectedAreaId("estrutura"); setView("areas"); }}><span>🏭</span><strong>Estrutura da Montagem</strong></button>
            <button onClick={() => { setSelectedAreaId("modelos"); setView("areas"); }}><span>⚙️</span><strong>Modelos de Eixos</strong></button>
          </div>
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

      {view === "areas" && <AreasView initialAreaId={selectedAreaId} onBackHome={() => setView("home")} />}

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
            {currentModule.id === "quiz" && <section className="interactive-quiz" aria-labelledby="quiz-heading">
              <div className="quiz-header"><div><span className="eyebrow">AVALIAÇÃO DE CONHECIMENTO</span><h2 id="quiz-heading">Quiz MOE</h2><p>Responda às perguntas com base nos conceitos apresentados na trilha.</p></div><span className="quiz-score">{Object.keys(quizAnswers).length}/{quizQuestions.length} respondidas</span></div>
              {quizQuestions.map((item, index) => {
                const selected = quizAnswers[item.id];
                const answered = selected !== undefined;
                return <article className="quiz-question" key={item.id}>
                  <div className="quiz-question-title"><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.question}</h3></div>
                  <div className="quiz-options">{item.options.map((option, optionIndex) => {
                    const isSelected = selected === optionIndex;
                    const isCorrect = answered && optionIndex === item.correct;
                    return <button key={option} type="button" disabled={answered} className={`quiz-option${isSelected ? " chosen" : ""}${isCorrect ? " correct" : ""}${isSelected && optionIndex !== item.correct ? " incorrect" : ""}`} onClick={() => setQuizAnswers(previous => ({ ...previous, [item.id]: optionIndex }))}><span className="quiz-option-letter">{String.fromCharCode(65 + optionIndex)}</span><span>{option}</span>{isCorrect && <strong aria-label="Resposta correta">✓</strong>}</button>;
                  })}</div>
                  {answered && <p className={selected === item.correct ? "quiz-feedback positive" : "quiz-feedback"}><strong>{selected === item.correct ? "Resposta correta." : "Vamos revisar."}</strong> {item.feedback}</p>}
                </article>;
              })}
              {Object.keys(quizAnswers).length === quizQuestions.length && <div className="quiz-result" role="status"><span className="eyebrow">RESULTADO</span><strong>{quizQuestions.filter(item => quizAnswers[item.id] === item.correct).length} de {quizQuestions.length} respostas corretas</strong><p>{quizQuestions.every(item => quizAnswers[item.id] === item.correct) ? "Muito bem! Você acertou todas as perguntas." : "Revise os comentários e tente novamente para reforçar os conceitos."}</p><button className="primary-btn" type="button" onClick={() => setQuizAnswers({})}>Refazer quiz</button></div>}
            </section>}
            <div className={`lesson-content-grid${currentModule.id === "quiz" ? " quiz-legacy-hidden" : ""}`}>
              <div className="lesson-reader"><div className="lesson-meta"><span>AULA {String(activeLesson + 1).padStart(2, "0")}</span><span>{completed.includes(currentModule.id + ":" + activeLesson) ? "✓ Concluída" : "Em andamento"}</span></div><h2>{currentLesson.title}</h2><p>{currentLesson.body}</p>
                <div className="learning-tip"><span>💡</span><div><strong>Prática recomendada</strong><p>Consulte a instrução de trabalho vigente e tire dúvidas com a liderança antes de executar uma operação real.</p></div></div>
                <div className="lesson-actions"><button className={completed.includes(currentModule.id + ":" + activeLesson) ? "secondary-btn" : "primary-btn"} onClick={() => toggleComplete(currentModule.id + ":" + activeLesson)}>{completed.includes(currentModule.id + ":" + activeLesson) ? "Desmarcar conclusão" : "Marcar aula como concluída"}</button><div className="lesson-pagination"><button disabled={activeLesson === 0} onClick={() => setActiveLesson(v => v - 1)}>← Anterior</button><button disabled={activeLesson === currentModule.lessons.length - 1} onClick={() => setActiveLesson(v => v + 1)}>Próxima →</button></div></div>
              </div>
              <aside className="lesson-outline"><h3>Nesta aula</h3>{currentModule.lessons.map((l, i) => <button key={l.title} onClick={() => setActiveLesson(i)} className={i === activeLesson ? "outline-item active" : "outline-item"}><span>{completed.includes(currentModule.id + ":" + i) ? "✓" : String(i + 1).padStart(2, "0")}</span>{l.title}</button>)}<div className="outline-note"><strong>Material de apoio</strong><p>Use os manuais e procedimentos aprovados para confirmar dados específicos do modelo.</p><button onClick={() => setView("library")}>Abrir biblioteca →</button></div></aside>
            </div>
            
          </>}
        </div>
      </section>}

      <footer className="footer"><strong>Biblioteca MOE</strong><span>Material didático de apoio. Procedimentos oficiais e instruções vigentes têm prioridade.</span><button onClick={() => setView("home")}>Voltar ao início ↑</button></footer>
    </main>
  );
}

export default App;
