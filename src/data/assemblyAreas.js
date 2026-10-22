export const assemblyAreas = [
  {
    id: "organograma",
    icon: "🧭",
    title: "Organograma da Montagem",
    summary: "Entenda a estrutura de responsabilidades e os canais de apoio da montagem.",
    status: "Estrutura inicial",
    intro: "Esta área reunirá o organograma da montagem, funções, responsabilidades e relações de apoio. Os nomes, cargos e vínculos precisam ser conferidos com a versão oficial antes da publicação definitiva.",
    topics: [
      { title: "Estrutura organizacional", body: "Consultar aqui o organograma oficial vigente da área de Montagem." },
      { title: "Funções e responsabilidades", body: "Organizar as atribuições por função sem presumir responsabilidades que não estejam descritas na fonte oficial." },
      { title: "Canais de apoio", body: "Registrar os contatos e os caminhos de escalonamento somente depois da validação pela liderança." }
    ]
  },
  {
    id: "lean",
    icon: "♻️",
    title: "Lean Manufacturing",
    summary: "Conheça os princípios de melhoria contínua e identificação de desperdícios.",
    status: "Conteúdo introdutório",
    intro: "Área de apoio para os conceitos Lean citados no material de estudo. A aplicação prática deve respeitar os padrões e as prioridades definidos pela equipe.",
    topics: [
      { title: "Os oito desperdícios", body: "Superprodução, espera, transporte, processamento desnecessário, estoque, movimentação, defeitos e desperdício do potencial das pessoas." },
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
    intro: "O inventário disponível ainda não permite confirmar uma lista completa de programas ou sistemas. Esta área fica preparada para incluir os nomes oficiais, sua finalidade e os responsáveis.",
    topics: [
      { title: "Catálogo de programas", body: "Adicionar nome oficial, finalidade, acesso autorizado e área responsável após conferência." },
      { title: "Rotinas de uso", body: "Documentar as rotinas aprovadas e os registros necessários, sem incluir credenciais ou dados restritos." },
      { title: "Suporte e dúvidas", body: "Incluir o canal de suporte oficial quando essa informação estiver confirmada." }
    ]
  },
  {
    id: "pre-eleicao",
    icon: "📊",
    title: "Pré-eleição",
    summary: "Organize os apontamentos e indicadores mencionados no material de referência.",
    status: "Transcrição preliminar",
    intro: "O termo “Pré-eleição” foi mantido conforme definido para a biblioteca. Os apontamentos disponíveis mencionam quadro de efetivo, distribuição de habilidades, ocorrências/retrabalho, first-time-right, plano versus realizado, acompanhamento horário, segurança/meio ambiente e 8D. Confirmar a nomenclatura e o uso local antes de tratar este conteúdo como padrão oficial.",
    topics: [
      { title: "Quadro de efetivo e habilidades", body: "Consolidar a alocação de pessoas e habilidades conforme o quadro oficial, sem publicar dados pessoais desnecessários." },
      { title: "Ocorrências, retrabalho e First Time Right", body: "Organizar os registros de ocorrências e retrabalho e o indicador de aprovação na primeira passagem conforme a definição usada pela equipe." },
      { title: "Plano versus realizado e acompanhamento horário", body: "Apresentar o acompanhamento de produção com a fórmula e as metas definidas pela área. Não tratar automaticamente a razão 68/85 citada nas anotações como OEE oficial." },
      { title: "Segurança, meio ambiente e 8D", body: "Reunir os registros aplicáveis e as orientações aprovadas para análise e resolução de problemas." }
    ]
  },
  {
    id: "estrutura",
    icon: "🏭",
    title: "Estrutura da Montagem",
    summary: "Mapeie postos, estações e etapas do fluxo de montagem.",
    status: "Mapa preliminar",
    intro: "As anotações mencionam 18 postos de trabalho e 4 estações, mas a relação entre essas contagens ainda precisa ser confirmada. A lista abaixo é uma referência preliminar, não uma sequência oficial de produção.",
    topics: [
      { title: "Postos e estações", body: "Validar a quantidade, a identificação e a relação entre postos e estações com o layout vigente." },
      { title: "Operações citadas", body: "As anotações citam operações relacionadas à carcaça do diferencial, freio/ABS, cubos/travas, semieixos, teste de vazamento, abastecimento de óleo e inspeção final." },
      { title: "Subconjuntos e retrabalho", body: "Também são citados pintura, posto de memória, subconjunto de eixo intermediário, montagem de garfo e retrabalho em oficina. Confirmar nomes e posições no fluxo oficial." }
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
