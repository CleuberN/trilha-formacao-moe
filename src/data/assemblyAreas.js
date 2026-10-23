export const assemblyAreas = [
  {
    id: "organograma",
    icon: "🧭",
    title: "Organograma da Montagem",
    summary: "Entenda as funções, responsabilidades e os canais de apoio da montagem.",
    status: "Parcialmente validado",
    intro: "Conteúdo transcrito da apostila Jornada de Aprendizagem CAMIS. É uma referência de estudo, não substitui o organograma oficial vigente. Confirme nomes, cargos, turnos e relações hierárquicas antes de divulgar ou usar para decisões operacionais.",
    topics: [
      { title: "Estrutura de liderança", body: "A apostila cita Jorge Silva (Diretor de Operações), Geraldo Rodrigues (Gerente da Montagem), Alessandro T. Shiota (Gerente da Industrialização) e Robert (Supervisor de Manufatura/Montagem). A versão organizada da apostila informa que os líderes da Montagem respondem a Robert. Validar essa estrutura com a versão oficial atual." },
      { title: "Áreas e siglas", body: "Siglas transcritas na apostila: MDC — Montagem de Diferencial Célula; MOD — Montagem Diferencial; MDX — Montagem de Diferencial e Caixa; MOE — Montagem de Eixos; MOP — Montagem de Planetário. Os significados devem ser conferidos com a nomenclatura oficial da unidade." },
      { title: "Liderança por turno", body: "A apostila informa: 1º turno — Bruno (MOE e MDX), Anderson (MOP) e Renato (MOD); 3º turno — Clécio (MDC, MOD, MOE e MOP). As responsabilidades descritas incluem gestão de pessoas, escalas e treinamentos. Confirmar a escala vigente." },
      { title: "Qualidade e segurança", body: "O material cita Edinaldo Luz e os inspetores Jasiel Claro (diurno) e João Vitor (noturno) na Qualidade da Montagem. Também lista a equipe SESMT/HSE: Sandro Araújo, Carina Moreira, Ricardo Santos, Vanderlei Souza e Nara Szczygiel. Como o repositório é público, confirme autorização antes de publicar nomes de colaboradores; se necessário, substitua-os por cargos." }
    ]
  },
  {
    id: "lean",
    icon: "♻️",
    title: "Lean Manufacturing",
    summary: "Identifique desperdícios e oportunidades de melhoria contínua.",
    status: "Conteúdo introdutório",
    intro: "A apostila CAMIS descreve Lean Manufacturing como uma abordagem para melhorar o fluxo de trabalho e reduzir desperdícios, mantendo o foco no valor para o cliente. O objetivo prático é aumentar segurança, qualidade e eficiência por meio da observação do processo e de melhorias aprovadas.",
    topics: [
      { title: "Os oito desperdícios", body: "1. Defeitos — falhas que exigem correção, retrabalho ou descarte. 2. Espera — tempo parado aguardando material, informação, equipamento ou liberação. 3. Transporte — movimentação desnecessária de materiais. 4. Estoque — excesso de materiais ou produtos. 5. Movimentação — deslocamentos desnecessários das pessoas. 6. Processamento excessivo — atividades além do necessário. 7. Superprodução — produzir antes da necessidade ou acima da demanda. 8. Talentos não utilizados — deixar de aproveitar habilidades, ideias e conhecimentos dos colaboradores." },
      { title: "Como observar desperdícios", body: "Observe o trabalho sem comprometer a segurança ou interromper a operação. Registre o que acontece, onde ocorre e qual impacto tem em segurança, qualidade, prazo ou esforço. Não altere parâmetros nem instruções de trabalho por conta própria." },
      { title: "Melhoria contínua e padronização", body: "Compartilhe oportunidades com a liderança, participe da análise de causa e acompanhe as ações autorizadas. Quando uma melhoria for aprovada, atualize o padrão pelos canais oficiais e treine as pessoas envolvidas." }
    ]
  },
  {
    id: "programas",
    icon: "🌱",
    title: "Programas e Meio Ambiente",
    summary: "Conheça os programas de organização, prevenção e acompanhamento ambiental citados na apostila.",
    status: "Parcialmente validado",
    intro: "Esta área reúne conceitos anotados na apostila CAMIS. A aplicação prática deve seguir os procedimentos internos vigentes. Siglas, sistemas e indicadores específicos precisam ser confirmados com as áreas responsáveis.",
    topics: [
      { title: "5S", body: "Seiri — Utilização: separar o necessário do desnecessário. Seiton — Organização: manter cada item identificado e no local definido. Seiso — Limpeza: manter o ambiente e os equipamentos limpos e observar anomalias. Seiketsu — Padronização: estabelecer padrões para sustentar os três primeiros S. Shitsuke — Disciplina: manter os padrões de forma contínua." },
      { title: "MPT e MPF", body: "MPT significa Manutenção Preventiva Total: observar condições de máquinas e equipamentos, como ruídos, vazamentos e falhas, e comunicar anomalias. MPF significa Manutenção Preventiva Ferramental: cuidar das ferramentas utilizadas no processo, conforme padrão local. A apostila cita exemplos como soquete, chaves, chave do cubo, martelete, alavanca do cubo e alicate." },
      { title: "ARO e LPT", body: "ARO — Análise de Risco Operacional: a fonte descreve a análise das etapas do processo, riscos, medidas preventivas e EPIs necessários. LPT — Liberação do Posto de Trabalho: verificação do posto antes de iniciar, incluindo MPT/MPF e comunicação de anomalias. Use sempre os formulários e critérios oficiais da unidade." },
      { title: "Sistema de acompanhamento", body: "A apostila registra o nome Apriso FlexNet como sistema de acompanhamento/controle do processo. Confirme com a equipe responsável a grafia oficial, a versão e se o sistema continua em uso antes de acrescentar instruções de acesso." },
      { title: "Indicadores ambientais", body: "A apostila registra os indicadores: VOC (Compostos Orgânicos Voláteis), em gramas/SDLH; água potável, em m³ por colaborador; água industrial, em litros/SDLH; resíduos totais, como percentual de reciclagem; e GHG (gases de efeito estufa), em kg/SDLH. O significado de SDLH não foi confirmado e foi mantido como anotado. Não interprete nem calcule esses indicadores sem validar unidade, fórmula e fonte oficial." }
    ]
  },
  {
    id: "pre-eleicao",
    icon: "📊",
    title: "Pré-eleição",
    summary: "Organize os quadros de acompanhamento do turno e dos resultados.",
    status: "Nomenclatura pendente",
    intro: "O título “Pré-eleição” foi mantido provisoriamente conforme solicitado. A apostila CAMIS chama esta etapa de “Preleção”, descrita como uma reunião/rotina para orientar o turno e acompanhar resultados, desvios, segurança e qualidade. Confirme qual termo deve aparecer na versão final.",
    topics: [
      { title: "Quadro de líderes e escala", body: "O quadro de líderes permite visualizar equipes, líderes e turnos. A escala distribui pessoas de acordo com habilidades e treinamentos. Use a versão oficial e evite exibir dados pessoais além do necessário." },
      { title: "Quadro de ocorrências", body: "Registra problemas e ocorrências, suas causas e as ações definidas para resolvê-los. O registro deve ser objetivo, rastreável e atualizado conforme a rotina local." },
      { title: "Retrabalho e qualidade", body: "A apostila cita gráfico de gestão de retrabalho e acompanhamento diário, incluindo categorias de retrabalho, componentes danificados, problemas de montagem e problemas de fornecedores. Acompanhar recorrência e causas ajuda a orientar ações corretivas." },
      { title: "Produção diária e controle horário", body: "A fonte traz o exemplo: meta de 85 unidades e realizado de 68; atingimento de 80% e diferença de 17 unidades. Também cita carta de controle da produção hora a hora, comparando planejado e realizado para identificar desvios durante o turno." },
      { title: "Segurança, meio ambiente e 8D", body: "A preleção inclui pontos de atenção de Segurança e Meio Ambiente e o gerenciamento 8D. A apostila descreve o 8D como método estruturado para descrever o problema, investigar a causa raiz, definir ações corretivas e verificar os resultados." },
      { title: "Atingimento da meta não é OEE", body: "O exemplo 68/85 corresponde a aproximadamente 80% de atingimento da meta. Isso, isoladamente, não é OEE. A apostila descreve OEE como a combinação de disponibilidade, desempenho e qualidade. Não calcular OEE sem os dados e a fórmula definidos oficialmente." }
    ]
  },
  {
    id: "estrutura",
    icon: "🏭",
    title: "Estrutura da Montagem",
    summary: "Explore a sequência preliminar de estações e os pontos de controle do fluxo.",
    status: "Parcialmente validado",
    intro: "A apostila registra uma sequência de estações numeradas de 10 a 140, além de pintura e monovias. Outras anotações mencionam 18 postos de trabalho e 4 postos/estações, mas a relação entre esses números não está clara. Este mapa é didático e não deve ser usado como instrução operacional sem validação do layout e dos procedimentos vigentes.",
    topics: [
      { title: "Estações 10 a 30 — preparação e diferencial", body: "Estação 10: preparação da carcaça para instalação do diferencial. Estação 20: validação do diferencial e posicionamento na carcaça. Estação 30: fixação do diferencial na carcaça, posicionamento para paleteira e início da montagem, incluindo o intermediário. Confirmar sequência, equipamentos e critérios de aceitação no padrão oficial." },
      { title: "Estações 40 a 70 — freios, ABS e LOG", body: "Estação 40: posicionamento/fixação do freio esquerdo (LE). Estação 50: instalação do ABS no lado esquerdo e fixação do LOG; a anotação também cita submontagem do ABS e LPT. Estação 60: posicionamento/fixação do freio direito (LD). Estação 70: instalação do ABS no lado direito e fixação do LOG, incluindo submontagem do ABS e LPT. A sigla LOG e seus critérios devem ser confirmados." },
      { title: "Estações 80 a 110 — cubos e semieixos", body: "Estação 80: montagem do cubo do lado direito com travas. Estação 90: montagem do cubo do lado esquerdo com travas. Estação 100: inspeção visual de 100% das travas e características de segurança no lado direito, montagem/fixação do semieixo e regulagem do freio. Estação 110: operações correspondentes no lado esquerdo. Não usar esta descrição como sequência de montagem sem consultar a instrução de trabalho específica do eixo." },
      { title: "Estações 120 e 130 — teste, óleo e pintura", body: "Estação 120: teste de estanqueidade. Estação 130: abastecimento de óleo e envio pela Monovia 1 para a pintura. O material indica inspeção visual de 100% no posto de pintura, uso de LPT/ARO e registro de temperatura e viscosidade. Tipos de óleo, quantidades, parâmetros e critérios de teste não estão definidos nesta página e devem vir do manual/instrução aplicável." },
      { title: "Monovia 2 e estação 140 — inspeção final", body: "A Monovia 2 recebe o eixo após a pintura, permite retoques e posicionamento na embalagem PLE adequada. Estação 140: inspeção final com checklist, inspeção visual de 100%, conferência do produto e dos requisitos do cliente; a anotação cita no mínimo quatro fotos. Confirmar o checklist, os registros exigidos e os critérios de embalagem vigentes." },
      { title: "Conceitos de apoio", body: "A apostila cita Apriso FlexNet para acompanhamento/controle do processo, ARO para análise de riscos, LPT para liberação do posto, MPT para Manutenção Preventiva Total e MPF para Manutenção Preventiva Ferramental. As definições e rotinas completas devem ser consultadas nos documentos oficiais." }
    ]
  },
  {
    id: "modelos",
    icon: "⚙️",
    title: "Modelos de Eixos",
    summary: "Organize modelos, variantes e manuais com rastreabilidade documental.",
    status: "Pendente de confirmação técnica",
    intro: "A trilha de estudo destaca IVECO MS-23 e DAF MD como referências visuais. A apostila CAMIS informa que a folha com os modelos de eixos produzidos pela MOE será acrescentada posteriormente. Portanto, esta área ainda não é um catálogo técnico validado.",
    topics: [
      { title: "IVECO MS-23", body: "Modelo citado na trilha e associado a uma imagem de referência. Antes de incluir especificações, confirme o código completo do eixo, variante, aplicação, número de peça e manual correspondente." },
      { title: "DAF MD", body: "Modelo citado na trilha e associado a uma imagem de referência. A designação MD, isoladamente, não comprova a variante nem a compatibilidade com um manual. Confirmar código completo e documentação aplicável." },
      { title: "Como cadastrar um modelo", body: "Para cada eixo, registrar fabricante, designação completa, variante, aplicação/veículo, identificação ou número de série quando autorizado, número de peça, manual aplicável, edição/revisão e páginas de referência. Manter separados os procedimentos de modelos diferentes." },
      { title: "Limite de uso", body: "Não copiar folgas, torques, lubrificantes, quantidades de óleo, ajustes ou procedimentos de um manual de eixo para outro sem confirmação explícita de aplicabilidade. As imagens e animações didáticas não substituem desenhos, manuais e instruções de trabalho oficiais." }
    ]
  }
];
