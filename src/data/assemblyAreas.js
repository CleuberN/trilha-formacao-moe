export const assemblyAreas = [
  {
    id: "organograma",
    icon: "🧭",
    title: "Organograma da Montagem",
    summary: "Entenda a estrutura de responsabilidades e os canais de apoio da montagem.",
    status: "Estrutura inicial",
    intro: "Esta área reunirá o organograma da montagem, funções, responsabilidades e relações de apoio. Os nomes, cargos e vínculos precisam ser conferidos com a versão oficial antes da publicação definitiva.",
    topics: [
      { title: "Estrutura organizacional", body: "A apostila de estudo cita Jorge Silva (Diretor de Operações), Geraldo Rodrigues (Gerente da Montagem), Alessandro T. Shiota (Gerente da Industrialização) e Robert (Supervisor de Manufatura/Montagem). As relações hierárquicas que não estiverem explicitadas devem ser confirmadas com a versão oficial vigente." },
      { title: "Funções e responsabilidades", body: "A fonte associa Samuel Tigre à MOE/Montagem de Eixos; Kleiton Santos à MOP/Oficina; Alex Cardas à MOD/MDC; e Samuel Guerra à MDX/Montagem de Diferencial e Caixa. Os nomes e vínculos estão reproduzidos como material de estudo e precisam de conferência antes de uso oficial." },
      { title: "Canais de apoio", body: "A apostila também menciona Edinaldo Luz e os inspetores Jasiel Claro (diurno) e João Vitor (noturno) na Qualidade da Montagem, além da equipe SESMT/HSE da fábrica. Confirmar a estrutura atual e evitar tratar esta transcrição como organograma oficial." }
    ]
  },
  {
    id: "lean",
    icon: "♻️",
    title: "Lean Manufacturing",
    summary: "Conheça os princípios de melhoria contínua e identificação de desperdícios.",
    status: "Conteúdo introdutório",
    intro: "Conforme a apostila Jornada de Aprendizagem CAMIS, Lean Manufacturing busca melhorar o fluxo e reduzir desperdícios, mantendo o foco no valor para o cliente. O objetivo prático descrito é observar o processo e propor melhorias para segurança, qualidade e eficiência.",
    topics: [
      { title: "Os oito desperdícios", body: "A apostila lista: defeitos, espera, transporte, estoque, movimentação, processamento excessivo, superprodução e talentos não utilizados. Observe exemplos no processo e registre oportunidades de melhoria conforme a rotina local." },
      { title: "Melhoria contínua", body: "Registrar problemas observados, buscar a causa com a equipe e acompanhar as ações aprovadas." },
      { title: "Padronização", body: "Manter o trabalho organizado conforme o padrão vigente e sinalizar oportunidades de melhoria sem alterar instruções por conta própria." }
    ]
  },
  {
    id: "programas",
    icon: "🧩",
    title: "Programas",
    summary: "Centralize os programas, ferramentas e rotinas utilizados na montagem.",
    status: "A validar com as fontes",
    intro: "A apostila de referência para a etapa Programas e Meio Ambiente descreve os 5S e práticas de manutenção preventiva. Ela também menciona Apriso FlexNet para acompanhamento e controle do processo. A grafia e a disponibilidade dos sistemas devem ser confirmadas localmente.",
    topics: [
      { title: "Catálogo de programas", body: "Apriso FlexNet é descrito no material como sistema de acompanhamento/controle do processo, com comparação entre o planejado e o executado em tempo real. Confirmar nome oficial, versão e utilização atual na unidade." },
      { title: "Rotinas de uso", body: "5S: Seiri (utilização), Seiton (organização), Seiso (limpeza), Seiketsu (padronização) e Shitsuke (disciplina). Descrever a aplicação conforme o padrão local vigente." },
      { title: "Suporte e dúvidas", body: "A apostila define MPT como Manutenção Preventiva Total e MPF como Manutenção Preventiva Ferramental. O material também relaciona ARO (Análise de Risco Operacional) e LPT (Liberação do Posto de Trabalho) aos controles antes de iniciar o trabalho. Confirmar os procedimentos locais." }
    ]
  },
  {
    id: "pre-eleicao",
    icon: "📊",
    title: "Pré-eleição",
    summary: "Organize os apontamentos e indicadores mencionados no material de referência.",
    status: "Transcrição preliminar",
    intro: "O título “Pré-eleição” foi mantido conforme solicitado. Na apostila Jornada de Aprendizagem CAMIS, a etapa equivalente aparece como “Preleção”. O conteúdo da fonte reúne informações do turno para orientar equipes e acompanhar resultados, desvios, segurança e qualidade. Confirmar a nomenclatura usada localmente.",
    topics: [
      { title: "Quadro de efetivo e habilidades", body: "Consolidar a alocação de pessoas e habilidades conforme o quadro oficial, sem publicar dados pessoais desnecessários." },
      { title: "Ocorrências, retrabalho e First Time Right", body: "A fonte menciona quadro de ocorrências, gráfico de gestão de retrabalho e acompanhamento diário de retrabalho, incluindo componentes danificados, montagem e problemas de fornecedores. A expressão First Time Right consta em apontamentos anteriores e precisa de definição e padrão de cálculo da equipe." },
      { title: "Plano versus realizado e acompanhamento horário", body: "A apostila registra um exemplo de meta 85 e realizado 68: atingimento de 80% e diferença de 17 unidades. Também cita carta de controle da produção hora a hora. A própria fonte alerta que atingimento da meta não é, por si só, OEE." },
      { title: "Segurança, meio ambiente e 8D", body: "Reunir os registros aplicáveis e as orientações aprovadas para análise e resolução de problemas." }
    ]
  },
  {
    id: "estrutura",
    icon: "🏭",
    title: "Estrutura da Montagem",
    summary: "Mapeie postos, estações e etapas do fluxo de montagem.",
    status: "Mapa preliminar",
    intro: "A transcrição menciona 18 postos de trabalho e 4 postos/estações, mas indica que a relação exata precisa ser confirmada. A apostila contém uma sequência numerada de estações 10 a 140 e operações de pintura/monovia. Use-a como registro de estudo, não como instrução oficial de trabalho.",
    topics: [
      { title: "Postos e estações", body: "A fonte menciona 18 postos de trabalho e 4 postos/estações, com ressalva explícita de que a relação exata deve ser confirmada. Validar quantidades e nomenclaturas com o layout vigente." },
      { title: "Operações citadas", body: "Sequência transcrita: Est. 10 preparação da carcaça; 20 validação/posicionamento do diferencial; 30 fixação do diferencial e montagem do intermediário; 40 freio esquerdo; 50 ABS esquerdo; 60 freio direito; 70 ABS direito; 80 cubo direito; 90 cubo esquerdo; 100 semieixo/freio direito; 110 semieixo/freio esquerdo; 120 teste de estanqueidade; 130 abastecimento de óleo e envio à pintura; 140 inspeção final. Confirmar tudo na instrução vigente antes de usar operacionalmente." },
      { title: "Subconjuntos e retrabalho", body: "A apostila cita posto de pintura com inspeção visual e registros de temperatura/viscosidade; Monovia 2 para retoques e posicionamento na embalagem PLE; e inspeção final com checklist e registros fotográficos. Outras anotações citam posto de memória, subconjunto de eixo intermediário, montagem de garfo e retrabalho em oficina; validar a nomenclatura e a posição no fluxo." }
    ]
  },
  {
    id: "modelos",
    icon: "⚙️",
    title: "Modelos de Eixos",
    summary: "Consulte os modelos estudados e controle a aplicabilidade dos manuais.",
    status: "Modelos de referência",
    intro: "Os modelos de estudo destacados são IVECO MS-23 e DAF MD. A associação de qualquer manual, valor de ajuste ou procedimento deve ser confirmada pela identificação completa e variante do eixo.",
    topics: [
      { title: "IVECO MS-23", body: "Modelo de referência da trilha. A documentação disponível não confirma, por si só, que todos os manuais catalogados se aplicam ao MS-23." },
      { title: "DAF MD", body: "Modelo de referência da trilha. Confirmar identificação completa, variante e manual correspondente antes de usar especificações." },
      { title: "Rastreabilidade documental", body: "Registrar fabricante, modelo, variante, edição/revisão e página de cada fonte. Manuais de modelos diferentes devem permanecer separados até a aplicação ser confirmada." }
    ]
  }
];
