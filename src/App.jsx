import { useEffect, useMemo, useState } from "react";
import "./App.css";
import GlassCard from "./GlassCard.jsx";

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
  ]},
  { id: "estrutura-moe", icon: "🏗️", title: "Estrutura da MOE e ARO/LPT", level: "Fundamental", summary: "Entenda os postos, o acompanhamento da produção e as verificações antes do trabalho.", lessons: [
    { title: "Estrutura da MOE", body: "As folhas de referência anotam que a MOE é formada por 18 postos de trabalho e 4 estações. A relação exata entre postos e estações precisa ser confirmada com a liderança. As anotações citam o sistema “Amino Flexnet” (grafia a confirmar), usado para acompanhar a sequência de produção e a qualidade em tempo real e comparar o planejado com o realizado." },
    { title: "ARO — Análise de Risco Operacional", body: "Segundo as folhas, a ARO descreve as etapas da operação, os riscos envolvidos, as medidas preventivas e os EPIs necessários. Antes de iniciar a atividade, consulte a análise correspondente ao posto e siga as medidas de segurança nela estabelecidas. Se a ARO não estiver disponível ou houver dúvida, pare e procure a liderança." },
    { title: "LPT — Liberação do Posto de Trabalho", body: "As folhas orientam a inspecionar MPT e MPF antes de começar, marcar OK e assinar a liberação, e comunicar imediatamente à liderança qualquer anomalia. As siglas MPT e MPF não estão expandidas nas anotações e precisam ser confirmadas; não presumir seus significados." },
    { title: "Registros e desvios", body: "Compare a execução com o planejado, mantenha os registros exigidos e comunique desvios. O acompanhamento em sistema não substitui as verificações físicas, a instrução de trabalho aprovada, a ARO ou a LPT." }
  ]},
  { id: "estacoes-moe", icon: "🔩", title: "Estações e postos de montagem", level: "Intermediário", summary: "Consulte as atividades anotadas por estação e os postos complementares.", lessons: [
    { title: "Estações 10 a 30", body: "Estação 10: preparação e montagem da carcaça para fixação do diferencial. Estação 20: validar o diferencial e posicioná-lo na carcaça. Estação 30: fixar o diferencial à carcaça, posicionar para palletaria e iniciar a montagem/montar o intermediário — trecho a confirmar na folha original." },
    { title: "Estações 40 a 70", body: "Estação 40: posicionar e fixar o freio esquerdo (LE). Estação 50: instalar ABS e fixar um componente anotado como “fog” no lado esquerdo; a palavra e a atividade precisam de confirmação. Estação 60: posicionar e fixar o freio direito (LD). Estação 70: instalar ABS e fixar o componente anotado como “fog” no lado direito; confirmar o termo na instrução oficial." },
    { title: "Estações 80 a 100", body: "Estações 80 e 90: montagem do cubo com “travões” de montagem, respectivamente no lado direito e esquerdo, respeitando as características de segurança anotadas. Estação 100: verificação visual das características de segurança, montagem/fixação do semieixo e ajuste/regulagem do freio. Confirmar a terminologia e a sequência no roteiro oficial." },
    { title: "Estações 110 a 140", body: "Estação 110: a folha fornecida não descreve a atividade; não preencher por suposição. Estação 120: teste de estanqueidade. Estação 130: abastecimento de óleo e “Memória 1”; há também uma anotação sobre engraxar o eixo para pintura, cuja sequência precisa ser confirmada. Estação 140: checklist final, inspeção visual de 100%, mínimo de quatro fotos para liberação e atendimento aos requisitos do pedido do cliente." },
    { title: "Pintura, Memória 2 e postos complementares", body: "Pintura: posto sem número anotado por não ter computador; inspeção visual de 100%, validação, LPT e ARO. Há notas sobre temperatura e viscosidade, sem detalhes suficientes para criar critérios. Memória 2: recebe o eixo da pintura, faz retoques e posiciona em embalagem adequada; a sigla/termo da embalagem deve ser confirmado. Submontagem do eixo intermediário: prensa 2605, máquina Poka-Yoke/controle de erro 2606 e teste de folga. Também aparecem posto de montagem de garfo, submontagem do diferencial e oficina para retrabalhos, ajustes e correções gerais." }
  ]},
  { id: "gestao-diaria", icon: "📊", title: "Quadros de gestão e produção", level: "Intermediário", summary: "Estude os quadros de equipe, ocorrências, produção, retrabalho e resolução de problemas.", lessons: [
    { title: "Quadros de pessoas e distribuição", body: "Quadro de pessoas: organização da equipe, quem trabalha, turno e função/operação. Quadro de escala/atribuição: distribuir as pessoas aos postos considerando competências e treinamentos, identificando disponibilidade e melhor alocação. Confirmar os nomes oficiais dos quadros com a liderança." },
    { title: "Ocorrências e retrabalho", body: "Quadro de ocorrências: registrar situações/problemas e acompanhar o tratamento. A anotação parece mencionar quantidade, oficina, causa e solução; o primeiro campo e a estrutura precisam de validação. Gráfico de gestão de retrabalho: identificar o que precisa de correção/ajuste e por que não atingiu o esperado, buscando fazer certo na primeira vez. O quadro diário de retrabalho cita categorias como engrenamento, componente danificado, montagem e fornecedores; confirmar a leitura." },
    { title: "Produção diária e controle por hora", body: "O quadro de produção diária compara meta e produção realizada e ajuda a analisar diferenças. O gráfico de controle horário compara a meta planejada por período com a quantidade realizada, identifica desvios e apoia a ação da liderança. As metas oficiais devem vir do quadro vigente da fábrica." },
    { title: "OEE — exemplo anotado", body: "A folha chama OEE de “Índice de Eficiência Global” e apresenta o exemplo: realizado 68, meta 85; 68 ÷ 85 = 0,8 × 100 = 80%, anotado como OEE 80%. Preserve este exemplo como registro da folha, mas confirme com a equipe de processo/qualidade a fórmula e o significado antes de tratá-lo como cálculo oficial de OEE." },
    { title: "Segurança, ambiente e 8D", body: "O quadro de segurança/ambiente acompanha a segurança das pessoas, os riscos e os aspectos ambientais da operação. O quadro 8D é descrito nas folhas como abordagem estruturada para investigar problemas de produção, buscar causas e definir solução. O exemplo anotado trata de componente incorreto enviado ao cliente, falha de funcionalidade, reclamação e retorno do eixo para investigação. As folhas não listam as oito etapas oficiais do método 8D." }
  ]},
  { id: "lean-moe", icon: "♻️", title: "Lean Manufacturing — 8 desperdícios", level: "Fundamental", summary: "Reconheça os oito desperdícios descritos nas folhas de formação.", lessons: [
    { title: "Defeitos e espera", body: "Defeitos: problemas que podem gerar correção ou retrabalho. Espera: tempo perdido aguardando material, informação, equipamento ou liberação. Os exemplos são didáticos; registre e trate cada ocorrência conforme o processo local." },
    { title: "Transporte e estoque", body: "Transporte: deslocamento desnecessário de materiais de um lado para outro. Estoque: excesso de materiais ou produtos, que ocupa espaço e mantém recursos financeiros imobilizados." },
    { title: "Movimentação e processamento excessivo", body: "Movimentação: deslocamentos desnecessários das pessoas durante o trabalho. Processamento excessivo: realizar operações além do necessário para atender ao requisito. Observe o fluxo real antes de sugerir mudanças." },
    { title: "Superprodução e talentos não utilizados", body: "Superprodução: produzir além da demanda definida. Talentos/conhecimentos não utilizados: deixar de aproveitar adequadamente as competências das pessoas. As folhas citam esses itens entre os oito desperdícios." },
    { title: "Aplicação no posto", body: "Observe a atividade, descreva o desperdício sem culpar pessoas, registre um exemplo concreto e converse com a liderança sobre uma melhoria segura. Não altere sequência, parâmetros, ferramentas ou controles aprovados por conta própria." }
  ]},
  { id: "organograma", icon: "🧭", title: "Organograma da Montagem", level: "Consulta", summary: "Consulte a estrutura organizacional e os responsáveis por área e turno.", lessons: [
    { title: "Direção e gerência", body: "Jorge Silva — Diretor de Operações.\nGeraldo Rodrigues — Gerente da Montagem.\nAlessandro T. Shiota — Gerente da Industrialização.\nRobert — Supervisor de Manufatura / Montagem.\n\nConforme a apostila CAMIMNS, páginas 1–2. A grafia e a estrutura visual do organograma existente foram preservadas; valide com a liderança antes de uso oficial." },
    { title: "Coordenadores e engenheiros", body: "Samuel Tigre — MOE (Montagem de Eixos).\nKleiton Santos — MOP e Oficina.\nAlex Cardas — MOD e MDC.\nSamuel Guerra — MDX.\n\nResponsabilidade do grupo: apoio técnico às linhas e à oficina, com foco em segurança, qualidade, produção e resolução de problemas de montagem." },
    { title: "Líderes por turno", body: "Bruno — 1º turno, MOE e MDX.\nAnderson — 1º turno, MOP.\nRenato — 1º turno, MDC e MOD.\nClécio — 3º turno, MDC, MOD, MOE e MOP.\n\nOs líderes garantem segurança, qualidade e produtividade, cumprimento de prazos e metas, orientação e acompanhamento da equipe, resolução de problemas, cumprimento dos procedimentos e padrões, desenvolvimento dos colaboradores e comunicação clara e respeitosa." },
    { title: "Qualidade da Montagem", body: "Edinaldo Luz — apoio técnico, suporte aos inspetores e resposta a auditorias gerais; responde diretamente a Robert.\nJasiel Claro — inspetor da Montagem, diurno; responde a Robert.\nJoão Vitor — inspetor da Montagem, noturno.\n\nA Qualidade investiga problemas comunicados pela montagem, verifica peças não conformes, acompanha refugo, retrabalho e reclamações e, quando necessário, aciona fornecedores. Alert com T refere-se a reclamação de cliente; AlertI com I refere-se a reclamação interna." },
    { title: "Segurança — SESMT / HSE", body: "Equipe informada na apostila: Sandro Araújo, Carina Moreira, Ricardo Santos, Vanderlei Souza e Nara Szczygiel. A equipe atende a fábrica em geral e não está distribuída individualmente por linha.\n\nSESMT: Serviços Especializados em Segurança e em Medicina do Trabalho.\nHSE: Health, Safety and Environment — Saúde, Segurança e Meio Ambiente." },
    { title: "Siglas das linhas", body: "MDC — Montagem de Diferencial Célula.\nMOD — Montagem Diferencial.\nMDX — Montagem de Diferencial e Caixa.\nMOE — Montagem de Eixos.\nMOP — Montagem de Planetário.\n\nAs descrições e siglas seguem a apostila, página 3." }
  ]}
  ,
  { id: "etapa1-siglas", icon: "🏷️", title: "Etapa 1 — Siglas das linhas", level: "Consulta", summary: "Consulte o significado das siglas organizacionais e de segurança.", lessons: [
    { title: "Siglas de montagem", body: "MDC — Montagem de Diferencial Célula.\nMOD — Montagem Diferencial.\nMDX — Montagem de Diferencial e Caixa.\nMOE — Montagem de Eixos.\nMOP — Montagem de Planetário." },
    { title: "SESMT e HSE", body: "SESMT — Serviços Especializados em Segurança e em Medicina do Trabalho.\nHSE — Health, Safety and Environment — Saúde, Segurança e Meio Ambiente." }
  ]},
  { id: "etapa3-programas", icon: "🌱", title: "Etapa 3 — Programas e meio ambiente", level: "Fundamental", summary: "Housekeeping, 5S, Boa Ideia, campanha solidária, contenção e indicadores.", lessons: [
    { title: "Housekeeping", body: "Organização, limpeza e conservação do local de trabalho. Mantém cada coisa no lugar, ajuda a preservar o ambiente e facilita a identificação de condições fora do padrão." },
    { title: "5S — cinco práticas", body: "Seiri — Utilização: separar o necessário do desnecessário.\nSeiton — Organização: definir lugar para cada item e facilitar sua localização.\nSeiso — Limpeza: manter local e equipamentos limpos, observando anormalidades.\nSeiketsu — Padronização: criar e manter padrões visuais e rotinas.\nShitsuke — Disciplina: transformar padrões em hábito e cumprir os combinados." },
    { title: "Programa Boa Ideia", body: "Programa de melhoria que incentiva colaboradores a sugerirem mudanças para tornar o trabalho mais seguro, eficiente, organizado ou com melhor qualidade. As ideias podem ser avaliadas, aprovadas, implementadas e acompanhadas; conforme as regras do programa, podem gerar pontos ou premiações." },
    { title: "Campanha Maria Maia / Maria Aparecida", body: "Campanha solidária realizada há 25 anos, voltada ao apoio à Casa Maria Maia, instituição que atende crianças com deficiência e crianças em situação de abandono. A participação é voluntária, com contribuição mensal definida por cada pessoa; os recursos ajudam a instituição com itens necessários, como fraldas. A referência a Maria Aparecida está ligada à história que motivou a campanha." },
    { title: "Objetivo de meio ambiente", body: "Assegurar que todos os colaboradores compreendam seu papel nas iniciativas de Saúde, Segurança e Meio Ambiente e participem ativamente da prevenção." },
    { title: "Aplicação do kit de contenção", body: "Kit mínimo registrado na apostila: 12 mantas de contenção e 3 cordões de contenção. As mantas ajudam a absorver ou conter pequenos derramamentos; os cordões são usados para delimitar/conter a propagação do líquido. Seguir sempre o procedimento e as orientações de segurança da fábrica para a ocorrência específica." },
    { title: "Indicadores ambientais", body: "VOC — Compostos Orgânicos Voláteis: gramas/SDLH.\nÁgua potável: m³ por colaborador.\nÁgua industrial: litros/SDLH.\nResíduos totais: % de reciclagem.\nGHG — Gases de Efeito Estufa: kg/SDLH.\n\nReferência de produção usada nos indicadores: quantidade de eixos produzidos. A sigla SDLH foi mantida conforme registrada na apostila, sem expandi-la por suposição." },
    { title: "MPT — Manutenção Preventiva Total", body: "Verificação preventiva de máquinas e equipamentos: ruídos, vazamentos, falhas, níveis de óleo e outras condições que precisem de atenção." },
    { title: "MPF — Manutenção Preventiva Ferramental", body: "Manutenção preventiva das ferramentas utilizadas no processo, como soquete, chave, chave do cubo, martelete, alavanca do cubo e alicate. O objetivo é manter as ferramentas em condição adequada e identificar danos ou desgaste." },
    { title: "FIFI — Find It, Fix It (Encontre e Corrija)", body: "Usado para registrar situações observadas no trabalho, tanto positivas quanto negativas, que mereçam atenção ou melhoria. Pode envolver quase acidentes (Near Hit), condições ou comportamentos de risco, oportunidades de melhoria e assuntos de segurança, saúde, meio ambiente e outras situações relevantes. A ideia é identificar a situação e encaminhá-la para correção ou acompanhamento. Resumo: encontrar uma situação, registrar com clareza e contribuir para que seja corrigida ou melhorada." },
    { title: "PAI — Programa de Adequação das Instalações", body: "Busca adequar instalações que apresentem riscos ou condições inadequadas relacionadas à Segurança, Saúde ou Meio Ambiente. A identificação ajuda a priorizar melhorias e reduzir exposição a riscos. A avaliação e a execução devem seguir os responsáveis e procedimentos internos da fábrica. Resumo: identificar e promover adequações para tornar as instalações mais seguras e apropriadas para as pessoas e para o meio ambiente." }
  ]},
  { id: "etapa4-prelecao", icon: "🗂️", title: "Etapa 4 — Preleção", level: "Fundamental", summary: "Estude os nove quadros, os indicadores e o uso das informações do turno.", lessons: [
    { title: "Para que serve a preleção", body: "A preleção reúne informações para orientar a equipe sobre pessoas, produção, segurança, qualidade e ações do dia. Os quadros ajudam a enxergar a situação atual e agir durante o turno." },
    { title: "1. Quadro de Pessoas", body: "Ajuda a visualizar como a equipe está organizada, quem está trabalhando, em qual turno cada pessoa atua e qual função ou operação realiza. Facilita entender a distribuição das pessoas e a cobertura das atividades." },
    { title: "2. Escala", body: "Mostra a distribuição das pessoas conforme habilidades, treinamentos e necessidades das operações." },
    { title: "3. Quadro de ocorrências", body: "Registra problemas identificados, causas conhecidas, ações tomadas e acompanhamentos necessários." },
    { title: "4. Gráfico de gestão de retrabalho", body: "Permite acompanhar o retrabalho, perceber tendências e investigar causas para reduzir repetição de falhas." },
    { title: "5. Produção diária", body: "Compara meta e resultado real. Exemplo da apostila: meta de 85 eixos e produção de 68; foram feitos 17 a menos e o atingimento da meta foi de 80%." },
    { title: "6. Carta de controle da produção hora a hora", body: "Compara produção planejada e realizada ao longo do turno, permitindo perceber desvios e agir antes do fim do expediente." },
    { title: "7. Segurança e Meio Ambiente", body: "Reforça orientações, riscos, ocorrências, cuidados ambientais e ações preventivas." },
    { title: "8. Acompanhamento diário de retrabalho", body: "Acompanha diariamente as ocorrências de retrabalho, os motivos e as ações para evitar reincidência." },
    { title: "9. Gerenciamento 8D", body: "Método estruturado de solução de problemas: definir o problema, conter o efeito, investigar a causa raiz, aplicar ações corretivas e verificar a eficácia. Exemplo da apostila: componente montado incorretamente e enviado ao cliente." },
    { title: "OEE — Eficiência Global do Equipamento", body: "OEE vem de Overall Equipment Effectiveness. Considera três fatores: Disponibilidade × Desempenho × Qualidade. É uma medida da eficiência do equipamento/processo. Não confundir com o simples atingimento da meta de produção." },
    { title: "Exemplo de atingimento da meta", body: "Meta: 85 eixos. Realizado: 68 eixos. Cálculo de atingimento: 68 ÷ 85 × 100 = 80%. Diferença: 17 eixos para a meta. A apostila alerta que este cálculo é atingimento da meta, não o OEE completo." }
  ]},
  { id: "etapa5-postos", icon: "🧰", title: "Etapa 5 — Postos específicos", level: "Intermediário", summary: "Submontagem, montagem de garfo e diferencial, BAREX e oficina.", lessons: [
    { title: "Submontagem do eixo intermediário", body: "Utiliza a prensa 2605; há Poka-Yoke associado à máquina 2606; verifica a folga. Possui ARO e LPT próprios." },
    { title: "Montagem do garfo", body: "Posto separado da submontagem do eixo intermediário." },
    { title: "Montagem do diferencial", body: "Posto específico para montar os diferenciais; não é a mesma atividade da montagem do intermediário. Possui ARO e LPT próprios." },
    { title: "Posto BAREX — dois postos de trabalho", body: "Destinado à preparação de eixos para Mercedes-Benz e Agrale, conforme os requisitos de cada cliente. O conjunto recebe diferencial, carcaça e semieixo acoplado. Nesse posto não são montados freio nem cubo; o semieixo é acoplado, não instalado como na montagem convencional. Conforme o requisito do cliente, pode acompanhar um kit separado com arruelas e demais acessórios necessários para fixar o semieixo. Alguns clientes não recebem o kit porque utilizam acessórios de outro fornecedor. O BAREX possui ARO e LPT." },
    { title: "Observações BAREX — sequência de montagem", body: "Conferir na tela o Part Number, a sequência, os componentes, as operações e os Poka-Yokes solicitados." },
    { title: "Observações BAREX — sistema Apriso", body: "Seguir a sequência indicada, sem pular ou antecipar operações; confirmar a conclusão de cada etapa antes de prosseguir." },
    { title: "Observações BAREX — validação dos componentes", body: "Conferir se o componente corresponde ao Part Number solicitado e verificar quantidade, modelo e aplicação." },
    { title: "Observações BAREX — Poka-Yokes", body: "Verificar os Poka-Yokes previstos e confirmar a validação no sistema. Nunca ignorar nem contornar um Poka-Yoke para liberar a operação." },
    { title: "Oficina", body: "Realiza retrabalhos, ajustes e correções gerais." }
  ]},
  { id: "anexo-modelos-eixos", icon: "📑", title: "Anexo — Modelos de eixos MOE", level: "Consulta", summary: "Área reservada para preencher os modelos/códigos e suas aplicações.", lessons: [
    { title: "Relação de modelos/códigos", body: "A apostila reserva este anexo para acrescentar posteriormente a relação dos modelos de eixos produzidos na MOE. A tabela tem as colunas “Modelo / código do eixo” e “Aplicação / observações”. As linhas estão vazias no documento original, portanto os modelos não são preenchidos por suposição." },
    { title: "Nota sobre o material", body: "O material foi organizado com base nas anotações e correções reunidas. Termos internos e siglas foram mantidos conforme informados." }
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
    <main className="app glassPageBackground">
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
            <div className="resource-list">{modules.find(m => m.id === "biblioteca").lessons.map((l, i) => <GlassCard as="article" className="resource-card" key={l.title}><span className="resource-number">0{i + 1}</span><div><h3>{l.title}</h3><p>{l.body}</p><span className="resource-tag">Conteúdo de orientação</span></div></GlassCard>)}</div>
          </> : <>
            {currentModule.id === "estrutura-moe" ? <Etapa5EstruturaReference /> : currentModule.id === "estacoes-moe" ? <EstacoesPostosReference /> : <>
<div className="lesson-breadcrumb"><button onClick={() => setView("home")}>Início</button><span>/</span><span>{currentModule.title}</span></div>
            <div className="lesson-title-row"><div><span className="eyebrow">{currentModule.level.toUpperCase()} · {currentModule.lessons.length} AULAS</span><h1>{currentModule.title}</h1><p className="lead">{currentModule.summary}</p></div><span className="large-module-icon">{currentModule.icon}</span></div>
            {currentModule.id === "moe" && <div className="axis-context"><strong>Treinamento selecionado: {axes[axis].title}</strong><p>{axes[axis].note}</p></div>}
            {currentModule.id === "organograma" && <OrganogramaVisual />}
            {currentModule.id === "etapa5-postos" && <Etapa5StationList />}
            <div className="lesson-content-grid">
              <GlassCard as="div" className="lesson-reader"><div className="lesson-meta"><span>AULA {String(activeLesson + 1).padStart(2, "0")}</span><span>{completed.includes(currentModule.id + ":" + activeLesson) ? "✓ Concluída" : "Em andamento"}</span></div><h2>{currentLesson.title}</h2><p>{currentLesson.body}</p>
                <div className="learning-tip"><span>💡</span><div><strong>Prática recomendada</strong><p>Consulte a instrução de trabalho vigente e tire dúvidas com a liderança antes de executar uma operação real.</p></div></div>
                <div className="lesson-actions"><button className={completed.includes(currentModule.id + ":" + activeLesson) ? "secondary-btn" : "primary-btn"} onClick={() => toggleComplete(currentModule.id + ":" + activeLesson)}>{completed.includes(currentModule.id + ":" + activeLesson) ? "Desmarcar conclusão" : "Marcar aula como concluída"}</button><div className="lesson-pagination"><button disabled={activeLesson === 0} onClick={() => setActiveLesson(v => v - 1)}>← Anterior</button><button disabled={activeLesson === currentModule.lessons.length - 1} onClick={() => setActiveLesson(v => v + 1)}>Próxima →</button></div></div>
              </GlassCard>
              <aside className="lesson-outline"><h3>Nesta aula</h3>{currentModule.lessons.map((l, i) => <button key={l.title} onClick={() => setActiveLesson(i)} className={i === activeLesson ? "outline-item active" : "outline-item"}><span>{completed.includes(currentModule.id + ":" + i) ? "✓" : String(i + 1).padStart(2, "0")}</span>{l.title}</button>)}<div className="outline-note"><strong>Material de apoio</strong><p>Use os manuais e procedimentos aprovados para confirmar dados específicos do modelo.</p><button onClick={() => setView("library")}>Abrir biblioteca →</button></div></aside>
            </div>
            {currentModule.id === "quiz" && <GlassCard as="div" className="quiz-note"><strong>Revisão rápida</strong><p>As respostas esperadas estão explicadas em cada pergunta. A versão avaliativa com pontuação será uma próxima melhoria.</p></GlassCard>}
</>}
          </>}
        </div>
      </section>}

      <footer className="footer"><strong>Biblioteca MOE</strong><span>Material didático de apoio. Procedimentos oficiais e instruções vigentes têm prioridade.</span><button onClick={() => setView("home")}>Voltar ao início ↑</button></footer>
    </main>
  );
}


function EstacoesPostosReference() {
  const stations = [
    ["Estação 10", "Preparação e montagem da carcaça para fixação do diferencial."],
    ["Estação 20", "Validar o diferencial e posicioná-lo na carcaça."],
    ["Estação 30", "Fixar o diferencial à carcaça, posicionar para paleteira e iniciar a montagem/montar o intermediário. Confirmar a sequência na folha original."],
    ["Estação 40", "Posicionar e fixar o freio esquerdo (LE)."],
    ["Estação 50", "Instalar o ABS e fixar o componente anotado como “fog” no lado esquerdo. Confirmar o termo na instrução oficial."],
    ["Estação 60", "Posicionar e fixar o freio direito (LD)."],
    ["Estação 70", "Instalar o ABS e fixar o componente anotado como “fog” no lado direito. Confirmar o termo na instrução oficial."],
    ["Estação 80", "Montar o cubo e as travas de montagem no lado direito (LD)."],
    ["Estação 90", "Montar o cubo e as travas de montagem no lado esquerdo (LE)."],
    ["Estação 100", "Verificação visual das características de segurança, montagem/fixação do semieixo e ajuste/regulagem do freio. Confirmar a sequência no roteiro oficial."],
    ["Estação 110", "A folha fornecida não descreve a atividade desta estação."],
    ["Estação 120", "Teste de estanqueidade."],
    ["Estação 130", "Abastecimento de óleo e “Memória 1”. Há também uma anotação sobre engraxar o eixo para pintura; confirmar a sequência."],
    ["Estação 140", "Checklist final, inspeção visual de 100%, mínimo de quatro fotos para liberação e atendimento aos requisitos do pedido do cliente."],
  ];
  return (
    <article className="etapa5-reference estacoes-postos-reference">
      <h1>ESTAÇÕES E POSTOS DE MONTAGEM</h1>
      <p className="etapa5-subtitle">Consulte as atividades registradas por estação e os postos complementares da linha.</p>
      <section className="etapa5-siglas">
        <h2>Siglas importantes</h2>
        <p>ARO = Análise de Risco Operacional. LPT = Liberação do Posto de Trabalho.</p>
      </section>
      <section className="etapa5-stations-reference">
        <h2>Estações da linha</h2>
        <div>{stations.map(([name, description]) => <p key={name}><strong>{name}</strong> — {description}</p>)}</div>
      </section>
      <section className="etapa5-stations-reference estacoes-extra">
        <h2>Postos complementares</h2>
        <p><strong>Pintura</strong> — posto sem número anotado por não ter computador; inspeção visual de 100%, validação, LPT e ARO. As notas sobre temperatura e viscosidade não detalham critérios.</p>
        <p><strong>Memória 2</strong> — recebe o eixo da pintura, realiza retoques e posiciona em embalagem adequada; confirmar a sigla/termo da embalagem.</p>
        <p><strong>Submontagem do eixo intermediário</strong> — prensa 2605, máquina/controle Poka-Yoke 2606 e teste de folga.</p>
        <p><strong>Montagem do garfo</strong> — posto complementar citado nas anotações.</p>
        <p><strong>Submontagem do diferencial</strong> — posto complementar citado nas anotações.</p>
        <p><strong>Oficina</strong> — retrabalhos, ajustes e correções gerais.</p>
      </section>
    </article>
  );
}

function Etapa5EstruturaReference() {
  const stations = [
    ["Estação 10", "Preparação da carcaça para instalação do diferencial."],
    ["Estação 20", "Validação do diferencial e posicionamento na carcaça."],
    ["Estação 30", "Fixação do diferencial na carcaça, posicionamento para paleteira, início da montagem e montagem do intermediário conforme a sequência registrada."],
    ["Estação 40", "Posicionamento e fixação do freio do lado esquerdo (LE)."],
    ["Estação 50", "Instalação do ABS e fixação do LOG no lado esquerdo (LE). Inclui submontagem do ABS e possível LPT."],
    ["Estação 60", "Posicionamento e fixação do freio do lado direito (LD)."],
    ["Estação 70", "Instalação do ABS e fixação do LOG no lado direito (LD). Inclui submontagem do ABS e possível LPT."],
    ["Estação 80", "Montagem do cubo e das travas no lado direito (LD)."],
    ["Estação 90", "Montagem do cubo e das travas no lado esquerdo (LE)."],
  ];
  return (
    <article className="etapa5-reference">
      <h1>ETAPA 5 · ESTRUTURA DA MOE</h1>
      <p className="etapa5-subtitle">A linha é acompanhada pelo Apriso FlexNet, conforme a sequência de produção.</p>
      <section className="etapa5-siglas">
        <h2>Siglas importantes</h2>
        <p>ARO = Análise de Risco Operacional. LPT = Liberação do Posto de Trabalho.</p>
      </section>
      <section className="etapa5-stations-reference">
        <h2>Estações da linha</h2>
        <div>{stations.map(([name, description]) => <p key={name}><strong>{name}</strong> — {description}</p>)}</div>
      </section>
    </article>
  );
}

function Etapa5StationList() {
  const stations = [
    ["Estação 10", "Preparação da carcaça para instalação do diferencial."],
    ["Estação 20", "Validação do diferencial e posicionamento na carcaça."],
    ["Estação 30", "Fixação do diferencial na carcaça, posicionamento para paleteira, início da montagem e montagem do intermediário conforme a sequência registrada."],
    ["Estação 40", "Posicionamento e fixação do freio do lado esquerdo (LE)."],
    ["Estação 50", "Instalação do ABS e fixação do LOG no lado esquerdo (LE). Inclui submontagem do ABS e possível LPT."],
    ["Estação 60", "Posicionamento e fixação do freio do lado direito (LD)."],
    ["Estação 70", "Instalação do ABS e fixação do LOG no lado direito (LD). Inclui submontagem do ABS e possível LPT."],
    ["Estação 80", "Montagem do cubo e das travas no lado direito (LD)."],
    ["Estação 90", "Montagem do cubo e das travas no lado esquerdo (LE)."],
  ];
  return (
    <section className="stage5-stations" aria-label="Estações da linha">
      <h2>Estações da linha</h2>
      <div className="stage5-station-list">
        {stations.map(([name, detail]) => <p key={name}><strong>{name}</strong> — {detail}</p>)}
      </div>
      <aside className="stage5-additional">
        <h3>Postos específicos e controles complementares</h3>
        <p><strong>Submontagem do eixo intermediário</strong> — prensa 2605, controle Poka-Yoke na máquina 2606 e verificação de folga; possui ARO e LPT próprios.</p>
        <p><strong>Montagem do garfo e do diferencial</strong> — postos separados, cada um com seus requisitos e controles de ARO/LPT.</p>
        <p><strong>BAREX</strong> — conferir no Apriso o Part Number, a sequência, os componentes, as operações e os Poka-Yokes. Não ignorar nem contornar controles de erro.</p>
        <p><strong>Oficina</strong> — retrabalhos, ajustes e correções gerais.</p>
      </aside>
    </section>
  );
}

function OrganogramaVisual() {
  const leaders = [
    { name: "Bruno", role: "1º turno — MOE e MDX" },
    { name: "Anderson", role: "1º turno — MOP" },
    { name: "Renato", role: "1º turno — MDC e MOD" },
    { name: "Clécio", role: "3º turno — MDC, MOD, MOE e MOP" },
  ];
  return (
    <section className="org-chart reference-org org-chart-force-colors" aria-label="Organograma da montagem">
      <header className="reference-org-heading">
        <h2>ETAPA 1 — ORGANOGRAMA DA MONTAGEM</h2>
        <p>Caixas e ligações hierárquicas, com nomes apresentados um abaixo do outro.</p>
      </header>
      <div className="reference-org-canvas">
        <div className="reference-org-box director"><strong>Jorge Silva</strong><span>Diretor de Operações</span></div>
        <div className="reference-org-branch"><span /></div>
        <div className="reference-org-managers">
          <div className="reference-org-box manager-green"><strong>Geraldo Rodrigues</strong><span>Gerente da Montagem</span></div>
          <div className="reference-org-box manager-purple"><strong>Alessandro T. Shiota</strong><span>Gerente da Industrialização</span></div>
        </div>
        <div className="reference-org-stem"><span /></div>
        <div className="reference-org-box supervisor"><strong>Robert</strong><span>Supervisor de Manufatura / Montagem</span></div>
        <div className="reference-org-team-line" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="reference-org-coordinators">
          <div className="reference-org-box coord-purple"><strong>Samuel Tigre</strong><span>Coordenador/engenheiro — MOE</span></div>
          <div className="reference-org-box coord-purple"><strong>Kleiton Santos</strong><span>Coordenador/engenheiro — MOP e Oficina</span></div>
          <div className="reference-org-box coord-purple"><strong>Alex Cardas</strong><span>Coordenador/engenheiro — MOD e MDC</span></div>
          <div className="reference-org-box coord-purple"><strong>Samuel Guerra</strong><span>Coordenador/engenheiro — MDX</span></div>
        </div>
        <div className="reference-org-downline"><span /></div>
        <section className="reference-org-panel leaders-panel">
          <h3>LÍDERES POR TURNO</h3>
          {leaders.map(person => <p key={person.name}><span>{person.role.split(" — ")[0]}</span> — {person.role.split(" — ")[1]}</p>)}
        </section>
        <div className="reference-org-downline"><span /></div>
        <section className="reference-org-panel quality-panel">
          <h3>QUALIDADE DA MONTAGEM</h3>
          <p>Responde diretamente a Robert</p>
          <p>Edinaldo Luz</p>
          <p>Jasiel Claro (diurno)</p>
          <p>João Vitor (noturno)</p>
        </section>
        <div className="reference-org-downline"><span /></div>
        <section className="reference-org-panel safety-panel">
          <h3>SEGURANÇA — SESMT / HSE</h3>
          <p>Sandro Araújo • Carina Moreira</p>
          <p>Ricardo Santos • Vanderlei Souza</p>
          <p>Nara Szczygiel</p>
        </section>
      </div>
      <p className="reference-org-note">Organograma didático conforme a referência visual fornecida. Confirme grafia e atribuições com a liderança antes do uso como documento oficial.</p>
    </section>
  );
}

export default App;
