import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import GlassCard from "./GlassCard.jsx";

const modules = [
  { id: "etapa1-organograma", stage:"ETAPA 1", icon:"🧭", title:"Organograma da Montagem", level:"Consulta", summary:"Estrutura, equipes, funções, responsabilidades e siglas das linhas.", lessons:[
    {title:"Direção e gerência",body:"Jorge Silva — Diretor de Operações. Direção das operações.\nGeraldo Rodrigues — Gerente da Montagem. Gestão da área de Montagem.\nAlessandro T. Shiota — Gerente da Industrialização. Gestão da área de Industrialização.\nRobert — Supervisor de Manufatura / Montagem. Supervisiona a área de Manufatura/Montagem e acompanha a organização do trabalho."},
    {title:"Coordenadores e engenheiros",body:"Samuel Tigre — MOE. Atuação técnica na Montagem de Eixos.\nKleiton Santos — MOP / Oficina. Atuação técnica em Montagem de Planetário e Oficina.\nAlex Cardas — MOD / MDC. Atuação técnica em Montagem Diferencial e Montagem de Diferencial Célula.\nSamuel Guerra — MDX. Atuação técnica em Montagem de Diferencial e Caixa.\nResponsabilidade do grupo: apoio técnico às linhas e à oficina, com foco em segurança, qualidade, produção e resolução de problemas de montagem."},
    {title:"Líderes por turno",body:"Bruno — 1º turno, MOE e MDX. Liderança das equipes de MOE e MDX no 1º turno.\nAnderson — 1º turno, MOP. Liderança da equipe de MOP no 1º turno.\nRenato — 1º turno, MOD e MDC. Liderança das equipes de MOD e MDC no 1º turno.\nClécio — 3º turno, MDC, MOD, MOE e MOP. Liderança das equipes indicadas no 3º turno."},
    {title:"Função e responsabilidades dos líderes",body:"Os líderes são responsáveis por garantir que a equipe realize suas atividades com segurança, qualidade e produtividade, cumprindo os prazos estabelecidos e as metas de produção, em alinhamento com os gestores. Utilizam programas de suporte técnico e de gestão de pessoas, atuando com responsabilidade, ética e comprometimento. Orientam e acompanham a equipe, auxiliam na resolução de problemas e asseguram que as atividades sejam realizadas corretamente, respeitando os procedimentos de segurança, os padrões de qualidade e a carteira de produção. Também incentivam o desenvolvimento dos colaboradores e mantêm comunicação clara, respeitosa e eficiente, contribuindo para um ambiente agradável e para os resultados da equipe."},
    {title:"Qualidade da Montagem",body:"Edinaldo Luz — apoio técnico e auditorias. Atuação técnica, apoio aos inspetores e suporte à resposta de auditorias gerais; responde a Robert.\nJasiel Claro — inspetor da Montagem, diurno. Inspeção da montagem no período diurno; responde a Robert.\nJoão Vitor — inspetor da Montagem, noturno. Inspeção da montagem no período noturno.\nAtuação da Qualidade: investiga problemas comunicados pela montagem, verifica peças não conformes, acompanha refugo, retrabalho e reclamações e, quando necessário, aciona fornecedores. Alert com T refere-se a reclamação de cliente; AlertI com I refere-se a reclamação interna."},
    {title:"Segurança — SESMT / HSE",body:"Equipe: Sandro Araújo, Carina Moreira, Ricardo Santos, Vanderlei Souza e Nara Szczygiel. A equipe atende a fábrica em geral; não está distribuída individualmente por linha.\nSESMT — Serviços Especializados em Segurança e em Medicina do Trabalho.\nHSE — Health, Safety and Environment — Saúde, Segurança e Meio Ambiente."},
    {title:"Siglas das linhas",body:"MDC — Montagem de Diferencial Célula.\nMOD — Montagem Diferencial.\nMDX — Montagem de Diferencial e Caixa.\nMOE — Montagem de Eixos.\nMOP — Montagem de Planetário."}
  ]},
  { id:"etapa2-lean",stage:"ETAPA 2",icon:"♻️",title:"Lean Manufacturing",level:"Fundamental",summary:"Os oito desperdícios e o objetivo prático no posto de trabalho.",lessons:[
    {title:"Lean Manufacturing",body:"Lean Manufacturing é uma forma de organizar o trabalho para entregar valor ao cliente, reduzir desperdícios e melhorar continuamente os processos."},
    {title:"1. Defeito",body:"Peças ou produtos fora do padrão, que exigem correção, retrabalho ou descarte."},
    {title:"2. Espera",body:"Tempo parado aguardando peça, ferramenta, informação, equipamento ou liberação."},
    {title:"3. Transporte",body:"Movimentação desnecessária de materiais ou produtos entre locais."},
    {title:"4. Estoque",body:"Materiais em excesso ou parados além do necessário."},
    {title:"5. Movimentação",body:"Movimentos desnecessários do colaborador, como procurar ferramentas ou se deslocar sem necessidade."},
    {title:"6. Processamento excessivo",body:"Etapas, controles ou esforços que não agregam valor ao produto."},
    {title:"7. Superprodução",body:"Produzir antes da necessidade ou em quantidade maior que a demanda."},
    {title:"8. Desperdício de habilidades/conhecimento",body:"Não aproveitar ideias, experiência e capacidade das pessoas."},
    {title:"Objetivo prático",body:"Observar o processo, identificar o que não agrega valor, propor melhorias e manter um ambiente seguro, organizado e eficiente."}
  ]},
  {id:"etapa3-programas",stage:"ETAPA 3",icon:"🌱",title:"Programas e Meio Ambiente",level:"Fundamental",summary:"Housekeeping, 5S, Boa Ideia, campanha solidária, contenção, indicadores, MPT, MPF, FIFI e PAI.",lessons:[
    {title:"Housekeeping",body:"Organização, limpeza e conservação do local de trabalho. Mantém cada coisa no lugar, ajuda a preservar o ambiente e facilita a identificação de condições fora do padrão."},
    {title:"5S — cinco práticas para manter o ambiente organizado",body:"Seiri — Utilização: Separar o necessário do desnecessário.\nSeiton — Organização: Definir lugar para cada item e facilitar sua localização.\nSeiso — Limpeza: Manter o local e os equipamentos limpos, observando anormalidades.\nSeiketsu — Padronização: Criar e manter padrões visuais e rotinas.\nShitsuke — Disciplina: Transformar os padrões em hábito e cumprir os combinados."},
    {title:"Boa Ideia",body:"Programa de melhoria que incentiva os colaboradores a sugerirem mudanças para tornar o trabalho mais seguro, eficiente, organizado ou com melhor qualidade. As ideias podem ser avaliadas, aprovadas, implementadas e acompanhadas; conforme as regras do programa, podem gerar pontos ou premiações."},
    {title:"Campanha Maria Maia / Maria Aparecida",body:"Campanha solidária realizada há 25 anos, voltada ao apoio à Casa Maria Maia, instituição que atende crianças com deficiência e crianças em situação de abandono. A participação dos colaboradores é voluntária, com contribuição mensal definida por cada pessoa; os recursos ajudam a instituição com itens necessários, como fraldas. A referência a Maria Aparecida está ligada à história que motivou a campanha."},
    {title:"Objetivo de Meio Ambiente",body:"Assegurar que todos os colaboradores compreendam seu papel nas iniciativas de Saúde, Segurança e Meio Ambiente e participem ativamente da prevenção."},
    {title:"Aplicação do kit de contenção",body:"Kit mínimo: 12 mantas de contenção e 3 cordões de contenção. As mantas ajudam a absorver ou conter pequenos derramamentos; os cordões são usados para delimitar/conter a propagação do líquido. Seguir sempre o procedimento e as orientações de segurança da fábrica para a ocorrência específica."},
    {title:"Indicadores ambientais",body:"VOC — Compostos Orgânicos Voláteis: Gramas/SDLH.\nÁgua potável: m³ por colaborador.\nÁgua industrial: Litros/SDLH.\nResíduos totais: % de reciclagem.\nGHG — Gases de Efeito Estufa: kg/SDLH.\nReferência de produção utilizada nos indicadores: quantidade de eixos produzidos. A sigla SDLH foi mantida como registrada nas anotações."},
    {title:"MPT — Manutenção Preventiva Total",body:"Verificação preventiva de máquinas e equipamentos: ruídos, vazamentos, falhas, níveis de óleo e outras condições que precisem de atenção."},
    {title:"MPF — Manutenção Preventiva Ferramental",body:"Manutenção preventiva das ferramentas utilizadas no processo, como soquete, chave, chave do cubo, martelete, alavanca do cubo e alicate. O objetivo é manter as ferramentas em condição adequada e identificar danos ou desgaste."},
    {title:"FIFI — Find It, Fix It (Encontre e Corrija)",body:"O FIFI é usado para registrar situações observadas no trabalho, tanto positivas quanto negativas, que mereçam atenção ou melhoria. Pode envolver quase acidentes (Near Hit), condições ou comportamentos de risco, oportunidades de melhoria e assuntos de segurança, saúde, meio ambiente e outras situações relevantes. A ideia é identificar a situação e encaminhá-la para correção ou acompanhamento, de acordo com o processo da empresa.\nResumo FIFI: Encontrar uma situação, registrar com clareza e contribuir para que ela seja corrigida ou melhorada."},
    {title:"PAI — Programa de Adequação das Instalações",body:"O PAI busca adequar instalações que apresentem riscos ou condições inadequadas relacionadas à Segurança, Saúde ou Meio Ambiente. A identificação dessas condições ajuda a priorizar melhorias no local de trabalho e a reduzir a exposição a riscos. A avaliação e a execução devem seguir os responsáveis e procedimentos internos da fábrica.\nResumo PAI: Identificar e promover adequações nas instalações para torná-las mais seguras e apropriadas para as pessoas e para o meio ambiente."}
  ]},
  {id:"etapa4-prelecao",stage:"ETAPA 4",icon:"🗂️",title:"Preleção",level:"Fundamental",summary:"Os nove quadros observados, OEE e exemplo de atingimento de meta.",lessons:[
    {title:"Para que serve a preleção",body:"A preleção reúne informações para orientar a equipe sobre pessoas, produção, segurança, qualidade e ações do dia. Os quadros ajudam a enxergar a situação atual e agir durante o turno."},
    {title:"1. Quadro de Pessoas",body:"Ajuda a visualizar como a equipe está organizada, quem está trabalhando, em qual turno cada pessoa atua e qual função ou operação realiza. Facilita entender a distribuição das pessoas e a cobertura das atividades."},
    {title:"2. Escala",body:"Mostra a distribuição das pessoas conforme habilidades, treinamentos e necessidades das operações."},
    {title:"3. Quadro de ocorrências",body:"Registra problemas identificados, causas conhecidas, ações tomadas e acompanhamentos necessários."},
    {title:"4. Gráfico de gestão de retrabalho",body:"Permite acompanhar o retrabalho, perceber tendências e investigar causas para reduzir repetição de falhas."},
    {title:"5. Produção diária",body:"Compara meta e resultado real. Exemplo: meta de 85 eixos e produção de 68; foram feitos 17 a menos e o atingimento da meta foi de 80%."},
    {title:"6. Carta de controle da produção hora a hora",body:"Compara produção planejada e realizada ao longo do turno, permitindo perceber desvios e agir antes do fim do expediente."},
    {title:"7. Segurança e Meio Ambiente",body:"Reforça orientações, riscos, ocorrências, cuidados ambientais e ações preventivas."},
    {title:"8. Acompanhamento diário de retrabalho",body:"Acompanha diariamente as ocorrências de retrabalho, os motivos e as ações para evitar reincidência."},
    {title:"9. Gerenciamento 8D",body:"Método estruturado de solução de problemas: definir o problema, conter o efeito, investigar a causa raiz, aplicar ações corretivas e verificar a eficácia. Exemplo: componente montado incorretamente e enviado ao cliente."},
    {title:"OEE — Eficiência Global do Equipamento",body:"OEE vem de Overall Equipment Effectiveness. Considera três fatores: Disponibilidade × Desempenho × Qualidade. É uma medida da eficiência do equipamento/processo. Não confundir com o simples atingimento da meta de produção."},
    {title:"Exemplo de atingimento da meta",body:"Meta: 85 eixos. Realizado: 68 eixos. Cálculo: 68 ÷ 85 × 100 = 80%. Diferença: 17 eixos para a meta. Este cálculo é atingimento da meta, não o OEE completo."}
  ]},
  {id:"etapa5-estrutura",stage:"ETAPA 5",icon:"🏗️",title:"Estrutura e estações da MOE",level:"Intermediário",summary:"Apriso FlexNet, ARO, LPT, estações de 10 a 140, pintura e monovias.",lessons:[
    {title:"Sistema e siglas",body:"A linha é acompanhada pelo Apriso FlexNet, conforme a sequência de produção.\nARO = Análise de Risco Operacional.\nLPT = Liberação do Posto de Trabalho."},
    {title:"Estações 10 a 30",body:"Estação 10 — Preparação da carcaça para instalação do diferencial.\nEstação 20 — Validação do diferencial e posicionamento na carcaça.\nEstação 30 — Fixação do diferencial na carcaça, posicionamento para paleteira, início da montagem e montagem do intermediário conforme a sequência registrada."},
    {title:"Estações 40 a 70",body:"Estação 40 — Posicionamento e fixação do freio do lado esquerdo (LE).\nEstação 50 — Instalação do ABS e fixação do LOG no lado esquerdo (LE). Inclui submontagem do ABS e possui LPT.\nEstação 60 — Posicionamento e fixação do freio do lado direito (LD).\nEstação 70 — Instalação do ABS e fixação do LOG no lado direito (LD). Inclui submontagem do ABS e possui LPT.\nO termo LOG foi mantido conforme registrado na apostila."},
    {title:"Estações 80 a 110",body:"Estação 80 — Montagem do cubo e das travas no lado direito (LD).\nEstação 90 — Montagem do cubo e das travas no lado esquerdo (LE).\nEstação 100 — Lado direito (LD): conferência visual de 100% das travas e características de segurança; montagem/fixação do semieixo e regulagem do freio.\nEstação 110 — Lado esquerdo (LE): conferência visual de 100% das travas e características de segurança; montagem/fixação do semieixo e regulagem do freio."},
    {title:"Estações 120 a 140",body:"Estação 120 — Estanqueidade.\nEstação 130 — Abastecimento de óleo e encaminhamento pela Monovia 1, que eleva o eixo para a pintura.\nPosto de pintura — Não possui estação numerada/computador de processo. Inspeção 100% visual, com LPT e ARO; registro de temperatura e viscosidade.\nMonovia 2 — Recebe o eixo da pintura, realiza retoques e posiciona o produto na embalagem PLE adequada.\nEstação 140 — Inspeção final com checklist: conferir componentes, especificações do cliente e produto antes da liberação; inspeção visual de 100% e registro fotográfico conforme as anotações."}
  ]},
  {id:"etapa5-postos",stage:"ETAPA 5",icon:"🧰",title:"Postos específicos",level:"Intermediário",summary:"Submontagem, montagem do garfo e diferencial, BAREX e oficina.",lessons:[
    {title:"Submontagem do eixo intermediário",body:"Utiliza a prensa 2605; há Poka-Yoke associado à máquina 2606; verifica a folga. Possui ARO e LPT próprios."},
    {title:"Montagem do garfo",body:"Posto separado da submontagem do eixo intermediário."},
    {title:"Montagem do diferencial",body:"Posto específico para montar os diferenciais; não é a mesma atividade da montagem do intermediário. Possui ARO e LPT próprios."},
    {title:"Posto BAREX — dois postos de trabalho",body:"Destinado à preparação de eixos para Mercedes-Benz e Agrale, conforme os requisitos de cada cliente. O conjunto recebe diferencial, carcaça e semieixo acoplado. Nesse posto não são montados freio nem cubo; o semieixo é acoplado, não instalado como na montagem convencional. Conforme o requisito do cliente, pode acompanhar um kit separado com arruelas e demais acessórios necessários para fixar o semieixo. Alguns clientes não recebem o kit porque utilizam acessórios de outro fornecedor. O BAREX possui ARO e LPT."},
    {title:"1. Sequência de montagem",body:"Conferir na tela o Part Number, a sequência, os componentes, as operações e os Poka-Yokes solicitados."},
    {title:"2. Sistema Apriso",body:"Seguir a sequência indicada, sem pular ou antecipar operações; confirmar a conclusão de cada etapa antes de prosseguir."},
    {title:"3. Validação dos componentes",body:"Conferir se o componente corresponde ao Part Number solicitado e verificar quantidade, modelo e aplicação."},
    {title:"4. Poka-Yokes",body:"Verificar os Poka-Yokes previstos e confirmar a validação no sistema. Nunca ignorar nem contornar um Poka-Yoke para liberar a operação."},
    {title:"Oficina",body:"Realiza retrabalhos, ajustes e correções gerais."}
  ]},
  {id:"anexo-modelos-eixos",stage:"ANEXO",icon:"📑",title:"Modelos de eixos MOE",level:"Consulta",summary:"Folha reservada para relacionar modelos/códigos e aplicações.",lessons:[
    {title:"Relação de modelos/códigos",body:"A apostila reserva este anexo para acrescentar posteriormente a relação dos modelos de eixos produzidos na MOE. A tabela tem as colunas Modelo / código do eixo e Aplicação / observações. As linhas estão vazias no documento original; os modelos não são preenchidos por suposição."},
    {title:"Nota sobre o material",body:"Este material foi organizado com base nas anotações e correções reunidas. Termos internos e siglas foram mantidos conforme informados."}
  ]},
  {id:"componentes",icon:"⚙️",title:"Componentes do Eixo",level:"Básico",summary:"Conteúdo complementar para estudar os componentes gerais dos eixos.",lessons:[
    {title:"Visão geral",body:"Um conjunto de eixo pode reunir carcaça, diferencial, coroa, pinhão, engrenagens internas, rolamentos, retentores e semieixos. A composição varia conforme o projeto e a versão do eixo."},
    {title:"Coroa e pinhão",body:"Em conjuntos que utilizam engrenamento hipoide, o pinhão recebe o movimento do eixo de transmissão e aciona a coroa. Relação, ajustes e procedimentos são específicos do modelo."},
    {title:"Diferencial e semieixos",body:"O diferencial distribui o movimento às saídas do conjunto, permitindo a diferença de rotação entre as rodas em curvas. Os semieixos transmitem torque às rodas conforme a arquitetura do veículo."},
    {title:"Identificação correta",body:"Antes de aplicar qualquer informação técnica, confira a identificação gravada ou etiquetada no conjunto, a variante, o número de série e o manual correspondente. Não identifique o modelo apenas pela aparência."}
  ]},
  {id:"ferramentas",icon:"🔧",title:"Ferramentas",level:"Básico",summary:"Conteúdo complementar sobre ferramentas e instrumentos.",lessons:[
    {title:"Torquímetro",body:"O torquímetro é utilizado para aplicar um torque especificado. Confira faixa, unidade, condição de calibração e instrução aplicável antes do uso. O valor correto deve vir do documento técnico da variante."},
    {title:"Instrumentos de medição",body:"Relógios comparadores e outros instrumentos devem ser usados conforme o método definido no procedimento. Registre as leituras exigidas e não substitua critérios de aprovação por estimativas visuais."},
    {title:"Ferramentas especiais",body:"Utilize somente ferramentas adequadas ao serviço, identificadas e em condições seguras. Não improvise dispositivos para prensagem, içamento ou ajuste."}
  ]},
  {id:"processo",icon:"📋",title:"Processo de Montagem",level:"Intermediário",summary:"Conteúdo complementar para estudar preparação, execução e registros.",lessons:[
    {title:"Preparação",body:"Confirme a ordem de produção, identificação do eixo, revisão da instrução, disponibilidade das peças e condição das ferramentas. Mantenha a área limpa e organizada."},
    {title:"Sequência de montagem",body:"A sequência de montagem deve ser a definida na instrução de trabalho aprovada para o modelo e a variante. Esta aula apresenta o conceito geral e não substitui o procedimento oficial."},
    {title:"Ajustes e aperto",body:"Torque, folga, pré-carga, calços, sequência de aperto e lubrificante são parâmetros específicos. Consulte a documentação correta; não use valores de outro modelo como referência."},
    {title:"Registro da operação",body:"Registre os controles solicitados no processo, identifique desvios e interrompa a atividade quando faltar informação, ferramenta ou condição segura."}
  ]},
  {id:"qualidade",icon:"✔️",title:"Qualidade",level:"Intermediário",summary:"Conteúdo complementar sobre inspeção e não conformidades.",lessons:[
    {title:"Inspeção visual",body:"Observe limpeza, danos aparentes, identificação das peças e condições definidas no checklist vigente. A inspeção visual não substitui medições ou testes obrigatórios."},
    {title:"Pontos de controle",body:"O estudo de caso MOE menciona verificações como inspeção visual, validação, teste de vazamento, abastecimento de óleo e inspeção final. A aplicação exata deve ser confirmada no roteiro aprovado da linha."},
    {title:"Não conformidade",body:"Quando encontrar uma condição fora do critério, identifique e segregue conforme o procedimento local, registre a ocorrência e comunique a liderança ou Qualidade. Não libere a peça por conta própria."}
  ]},
  {id:"seguranca",icon:"🦺",title:"Segurança",level:"Obrigatório",summary:"Conteúdo complementar para estudo de segurança.",lessons:[
    {title:"EPIs e riscos",body:"Utilize os EPIs definidos para a atividade e siga a análise de risco e os procedimentos locais. Se houver condição insegura, pare e solicite orientação."},
    {title:"Movimentação de peças",body:"Utilize dispositivos de movimentação aprovados, respeite a capacidade indicada e mantenha pessoas fora da zona de risco. Não permaneça sob cargas suspensas."},
    {title:"Prensas e equipamentos",body:"Somente opere equipamentos para os quais tenha autorização e treinamento. Mantenha proteções e dispositivos de segurança em funcionamento e nunca neutralize intertravamentos."}
  ]},
  {id:"biblioteca",icon:"📚",title:"Biblioteca Técnica",level:"Consulta",summary:"Consulte a documentação disponível e confirme seu escopo.",lessons:[
    {title:"Manual de eixos de diferencial simples — 2011",body:"Documento identificado como manual de manutenção de eixos de diferencial simples, edição novembro de 2011. A capa lista modelos como MS-145/147, MS-155, MS-160, MS-165, MS-168, MS-185, MS-186, RS-120, U-180 e U-185. A lista não confirma aplicação ao IVECO MS-23."},
    {title:"Manual de eixos tandem — 2011",body:"Manual Meritor de eixos tandem/tridem. A aplicação ao DAF MD específico precisa ser confirmada pela identificação completa e pela documentação do fabricante; não presumir compatibilidade apenas pela sigla."},
    {title:"Manual 18X e manual 17X",body:"Há documentos separados para diferenciais 18X e 17X. Não misture procedimentos entre modelos. Confirme revisão, modelo e aplicação antes de utilizar qualquer ajuste ou especificação."},
    {title:"Regra de rastreabilidade",body:"Toda aula técnica deve registrar título do documento, fabricante, modelo aplicável, edição/revisão e página. Se a fonte não confirmar um dado, deixe-o como pendente de validação."}
  ]},
  {id:"quiz",icon:"❓",title:"Quiz MOE",level:"Revisão",summary:"Revisão complementar de conceitos.",lessons:[
    {title:"Pergunta 1",body:"Antes de aplicar um torque de montagem, qual é a melhor atitude? Consulte a instrução aprovada para o modelo e a variante."},
    {title:"Pergunta 2",body:"Uma inspeção visual substitui todas as medições especificadas? Não. Cada controle obrigatório deve ser realizado conforme o procedimento."},
    {title:"Pergunta 3",body:"É seguro usar um procedimento de eixo 18X em um eixo 17X sem validação? Não. Os documentos e procedimentos devem ser mantidos separados até confirmar a aplicação."}
  ]},
  {id:"organograma",icon:"🧭",title:"Organograma da Montagem",level:"Consulta",summary:"Acesso ao quadro visual do organograma.",lessons:[
    {title:"Organograma da Montagem",body:"Consulte o quadro visual e as responsabilidades descritas na Etapa 1."}
  ]},
  {id:"estrutura-moe",icon:"🏗️",title:"Estrutura da MOE e ARO/LPT",level:"Consulta",summary:"Conteúdo de apoio relacionado às estações e às liberações.",lessons:[
    {title:"Estrutura da MOE",body:"Consulte a Etapa 5 — Estrutura e estações da MOE."}
  ]},
  {id:"estacoes-moe",icon:"🔩",title:"Estações e postos de montagem",level:"Consulta",summary:"Atalho para estações e postos da MOE.",lessons:[
    {title:"Estações da linha",body:"Consulte a Etapa 5 — Estrutura e estações da MOE e a Etapa 5 — Postos específicos."}
  ]},
  {id:"gestao-diaria",icon:"📊",title:"Quadros de gestão e produção",level:"Consulta",summary:"Atalho para a preleção e os quadros de gestão.",lessons:[
    {title:"Quadros de gestão",body:"Consulte a Etapa 4 — Preleção."}
  ]},
  {id:"lean-moe",icon:"♻️",title:"Lean Manufacturing — 8 desperdícios",level:"Consulta",summary:"Atalho para os oito desperdícios da Etapa 2.",lessons:[
    {title:"Os oito desperdícios",body:"Consulte a Etapa 2 — Lean Manufacturing."}
  ]}
];


const inspectionParts = [
  { id:"carcaca", name:"Carcaça do eixo", category:"Estrutura", description:"Estrutura que aloja e protege os componentes internos do conjunto.", checks:["Verificar trincas, deformações e danos visíveis.","Conferir superfícies de união e alojamentos conforme documentação aplicável."], caution:"Não aprovar o conjunto apenas por inspeção visual; seguir o plano de controle e a instrução de trabalho da variante identificada." },
  { id:"coroa", name:"Coroa", category:"Transmissão", description:"Engrenagem do conjunto final que trabalha engrenada com o pinhão para transmitir e reduzir a rotação.", checks:["Observar dentes quanto a lascas, riscos ou desgaste anormal.","Confirmar montagem, contato e folga conforme especificação oficial do eixo."], caution:"Não utilizar valores genéricos de folga ou torque. Consultar a documentação correta do conjunto." },
  { id:"pinhao", name:"Pinhão", category:"Transmissão", description:"Engrenagem acionadora do conjunto final, engrenada com a coroa.", checks:["Inspecionar dentes e superfícies de contato.","Conferir rolamentos, ajuste e pré-carga conforme procedimento aprovado."], caution:"Ajustes incorretos podem causar ruído, aquecimento e desgaste prematuro." },
  { id:"diferencial", name:"Conjunto diferencial", category:"Distribuição de torque", description:"Permite que as rodas motrizes girem a velocidades diferentes durante curvas, distribuindo torque às saídas.", checks:["Verificar engrenagens, eixos, arruelas e alojamentos conforme instrução.","Confirmar montagem e livre movimentação pelo método especificado."], caution:"A sequência de montagem e os critérios de aceitação variam conforme o modelo." },
  { id:"semeixos", name:"Semieixos", category:"Transmissão", description:"Transferem torque do diferencial para as rodas motrizes.", checks:["Inspecionar estrias, superfícies e sinais de torção ou desgaste.","Confirmar identificação, assentamento e fixação conforme procedimento."], caution:"Não misturar componentes de variantes diferentes sem confirmação técnica." },
  { id:"rolamentos", name:"Rolamentos", category:"Apoio e ajuste", description:"Apoiam e guiam eixos e engrenagens, reduzindo atrito e mantendo o posicionamento previsto.", checks:["Verificar pistas e roletes quanto a marcas, corrosão ou danos.","Confirmar lubrificação, assentamento e ajuste conforme documentação."], caution:"Não reutilizar nem substituir componentes fora dos critérios definidos pelo fabricante." }
];

const axes = {
  iveco: { title: "IVECO MS-23", subtitle: "Trilha de aprendizagem — identificação e montagem", image: "/images/iveco-ms23.jpeg", note: "A aplicação dos manuais disponíveis ao MS-23 ainda precisa ser confirmada. Não utilize parâmetros de outros modelos sem validação." },
  daf: { title: "DAF MD", subtitle: "Trilha de aprendizagem — identificação e montagem", image: "/images/daf-md.jpeg", note: "Confirme a identificação completa e a variante do eixo DAF MD antes de associar procedimentos ou especificações de um manual." }
};

function App() {
  const [view, setView] = useState("home");
  const [axis, setAxis] = useState("iveco");
  const [activeModule, setActiveModule] = useState("etapa1-organograma");
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
  const filteredModules = modules.filter(m => (m.title + " " + (m.stage || "") + " " + m.summary + " " + m.lessons.map(l => l.title + " " + l.body).join(" ")).toLowerCase().includes(query.toLowerCase()));

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
        <nav><button className={view === "home" ? "nav-active" : ""} onClick={() => setView("home")}>Início</button><button onClick={() => setView("library")}>Biblioteca</button><button className={view === "inspection" ? "nav-active" : ""} onClick={() => setView("inspection")}>Inspeção técnica</button><button className={view === "quiz" ? "nav-active" : ""} onClick={() => setView("quiz")}>Quiz MOE</button></nav>
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
          <div className="progress-track"><div style={{ width: percent + "%", "--progress-target": percent + "%" }} /></div>
        </section>

        <section className="section-block">
          <div className="section-heading"><div><span className="eyebrow">CONTEÚDO ORGANIZADO</span><h2>Módulos de formação</h2></div><span className="module-count">{modules.length} módulos</span></div>
          <div className="module-grid">{modules.map((m, i) => <React.Fragment key={m.id}>{(!m.stage || m.stage !== modules[i - 1]?.stage) && <div className="training-stage-heading"><span>{m.stage || "CONTEÚDOS COMPLEMENTARES"}</span><strong>{m.stage ? (m.id === "etapa1-organograma" ? "ORGANOGRAMA DA MONTAGEM" : m.title) : "Biblioteca e conteúdos de apoio"}</strong><small>{m.stage ? m.summary : "Materiais adicionais para consulta e revisão."}</small></div>}<button className="module-card" onClick={() => openModule(m.id)}><span className="module-icon">{m.icon}</span><span className="module-number">{m.stage || "CONSULTA"}</span><strong>{m.title}</strong><small>{m.summary}</small><span className="module-link">Abrir conteúdo <b>↗</b></span></button></React.Fragment>)}</div>
        </section>
      </>}

      {view === "inspection" && <InspectionPanel axis={axes[axis]} onBack={() => setView("home")} />}
      {view === "quiz" && <QuizMOE />}

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
              <GlassCard as="div" key={currentModule.id + ":" + activeLesson} className="lesson-reader"><div className="lesson-meta"><span>AULA {String(activeLesson + 1).padStart(2, "0")}</span><span>{completed.includes(currentModule.id + ":" + activeLesson) ? "✓ Concluída" : "Em andamento"}</span></div><h2>{currentLesson.title}</h2><p>{currentLesson.body}</p>
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



const moeQuizQuestions = [{"q":"Antes de aplicar um torque de montagem, o que deve ser feito?","opts":["Usar o valor de um eixo parecido","Consultar a instrução aprovada para o modelo e a variante","Escolher o valor pela experiência visual","Usar sempre o mesmo valor"],"correct":1,"why":"Torque é específico da aplicação. Confirme modelo, variante e revisão da documentação."},{"q":"A inspeção visual substitui todas as medições exigidas?","opts":["Sim, se a peça parecer boa","Somente em produção alta","Não; cada controle obrigatório deve ser realizado","Sim, quando o operador é experiente"],"correct":2,"why":"A inspeção visual não substitui medições, testes ou registros exigidos no procedimento."},{"q":"O que fazer ao encontrar uma condição fora do critério de aceitação?","opts":["Liberar se a falha for pequena","Corrigir sem registrar","Seguir o procedimento de não conformidade e comunicar a liderança/Qualidade","Continuar e avisar no fim do turno"],"correct":2,"why":"Siga o fluxo local de identificação, segregação, registro e comunicação. Não libere por conta própria."},{"q":"Qual é a função geral do diferencial?","opts":["Armazenar óleo","Permitir diferença de rotação entre as rodas motrizes e distribuir movimento","Substituir os semieixos","Medir o torque de aperto"],"correct":1,"why":"O diferencial permite que as rodas motrizes girem a velocidades diferentes, por exemplo em curvas."},{"q":"Pode-se usar o procedimento de um modelo de eixo em outro sem confirmar a aplicação?","opts":["Sim, se forem parecidos","Sim, quando a ferramenta é a mesma","Não; é necessário confirmar a identificação e a documentação aplicável","Sim, desde que o torque pareça adequado"],"correct":2,"why":"Modelos e variantes podem ter procedimentos e parâmetros diferentes. Não transfira especificações sem validação."}];
function QuizMOE() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState(() => Number(localStorage.getItem("moe-quiz-best") || 0));
  const score = moeQuizQuestions.reduce((total, q, i) => total + (answers[i] === q.correct ? 1 : 0), 0);
  const question = moeQuizQuestions[index];
  const choose = (option) => { if (answers[index] === undefined) setAnswers(old => ({...old, [index]: option})); };
  const finish = () => { const finalScore = moeQuizQuestions.reduce((total,q,i)=>total+(answers[i]===q.correct?1:0),0); setFinished(true); if(finalScore>best){setBest(finalScore);localStorage.setItem("moe-quiz-best",String(finalScore));} };
  const restart = () => { setIndex(0); setAnswers({}); setFinished(false); };
  return <section className="moe-quiz-page">
    <div className="moe-quiz-heading"><span className="eyebrow">MOE · APRENDIZAGEM ATIVA</span><h1>Quiz técnico</h1><p>Revise os fundamentos de segurança, montagem e qualidade. Responda às questões e veja a explicação de cada resposta.</p></div>
    <div className="moe-quiz-card glass-panel">
      {!finished ? <>
        <div className="moe-quiz-meta"><span>QUESTÃO {index+1} DE {moeQuizQuestions.length}</span><span>Melhor resultado: {best}/{moeQuizQuestions.length}</span></div>
        <div className="moe-quiz-progress"><span style={{width:((index+1)/moeQuizQuestions.length*100)+"%"}} /></div>
        <h2>{question.q}</h2>
        <div className="moe-quiz-options">{question.opts.map((opt,i)=>{const chosen=answers[index]===i;return <button key={opt} onClick={()=>choose(i)} className={"moe-quiz-option"+(chosen?" chosen":"")}><span>{String.fromCharCode(65+i)}</span>{opt}</button>})}</div>
        {answers[index]!==undefined && <div className="moe-quiz-feedback"><strong>{answers[index]===question.correct?"Resposta correta":"Vamos revisar"}</strong><p>{question.why}</p></div>}
        <div className="moe-quiz-actions"><span>{Object.keys(answers).length} de {moeQuizQuestions.length} respondidas</span>{index<moeQuizQuestions.length-1?<button className="primary-btn" disabled={answers[index]===undefined} onClick={()=>setIndex(index+1)}>Próxima questão →</button>:<button className="primary-btn" disabled={answers[index]===undefined} onClick={finish}>Ver resultado →</button>}</div>
      </>:<div className="moe-quiz-result"><div className="moe-quiz-trophy">{score===moeQuizQuestions.length?"✦":"✓"}</div><span className="eyebrow">RESULTADO DA REVISÃO</span><h2>{score} de {moeQuizQuestions.length} acertos</h2><p>{Math.round(score/moeQuizQuestions.length*100)}% de aproveitamento</p><div className="moe-quiz-progress"><span style={{width:(score/moeQuizQuestions.length*100)+"%"}} /></div><p>{score===moeQuizQuestions.length?"Excelente! Você acertou todas as questões.":"Revise as explicações e tente novamente para reforçar os conceitos."}</p><button className="primary-btn" onClick={restart}>Refazer quiz ↻</button></div>}
    </div>
    <p className="moe-quiz-note">Conteúdo de revisão geral. Para atividades reais, siga sempre os procedimentos e critérios oficiais aplicáveis ao eixo identificado.</p>
  </section>;
}

function InspectionPanel({ axis, onBack }) {
  const [selected, setSelected] = useState(inspectionParts[0].id);
  const [checked, setChecked] = useState({});
  const part = inspectionParts.find(item => item.id === selected) || inspectionParts[0];
  const checks = checked[selected] || [];
  return <section className="inspection-page">
    <div className="inspection-top"><button className="back-link" onClick={onBack}>← Voltar ao início</button><span className="eyebrow">MOE · INSPEÇÃO DIDÁTICA</span><h1>Inspeção técnica interativa</h1><p>Explore os componentes do eixo, consulte os pontos de verificação e marque os itens revisados durante o estudo.</p>
      <div className="inspection-axis"><span>CONJUNTO SELECIONADO</span><strong>{axis.title}</strong><small>A identificação exata da variante e o manual aplicável devem ser confirmados antes de executar serviços reais.</small></div>
    </div>
    <div className="inspection-dashboard">
      <aside className="inspection-parts glass-panel"><div className="inspection-panel-title"><span>01 / COMPONENTES</span><strong>{inspectionParts.length} itens</strong></div>
        {inspectionParts.map((item,index)=><button key={item.id} className={item.id===selected?"inspection-part selected":"inspection-part"} onClick={()=>setSelected(item.id)}><span className="inspection-part-number">{String(index+1).padStart(2,"0")}</span><span><strong>{item.name}</strong><small>{item.category}</small></span><b>↗</b></button>)}
      </aside>
      <section className="inspection-detail glass-panel">
        <div className="inspection-detail-head"><span className="inspection-badge">COMPONENTE SELECIONADO</span><span className="inspection-status"><i/> MODO DE ESTUDO</span></div>
        <div className="inspection-visual" aria-label="Diagrama didático esquemático do conjunto">
          <div className="inspection-orbit orbit-one"/><div className="inspection-orbit orbit-two"/>
          <div className={"inspection-part-visual visual-"+part.id}><span>{part.id==="carcaca"?"▱":part.id==="coroa"?"◉":part.id==="pinhao"?"⚙":part.id==="diferencial"?"✥":part.id==="semeixos"?"↔":"◎"}</span></div>
          <span className="visual-label label-top">{part.category}</span><span className="visual-label label-bottom">{part.name}</span>
        </div>
        <span className="eyebrow">FUNÇÃO DO COMPONENTE</span><h2>{part.name}</h2><p className="inspection-description">{part.description}</p>
        <div className="inspection-checklist"><div className="inspection-checklist-heading"><h3>Pontos de inspeção didática</h3><span>{checks.length}/{part.checks.length}</span></div>{part.checks.map((item,i)=><label key={item} className={checks.includes(i)?"inspection-check checked":"inspection-check"}><input type="checkbox" checked={checks.includes(i)} onChange={()=>setChecked(old=>({...old,[selected]:checks.includes(i)?checks.filter(n=>n!==i):[...checks,i]}))}/><span className="custom-check">{checks.includes(i)?"✓":""}</span><span>{item}</span></label>)}</div>
        <div className="inspection-warning"><strong>⚠ Atenção técnica</strong><p>{part.caution}</p></div>
        <div className="inspection-footer"><button className="secondary-btn" onClick={()=>{const i=inspectionParts.findIndex(x=>x.id===selected);setSelected(inspectionParts[(i+inspectionParts.length-1)%inspectionParts.length].id)}}>← Anterior</button><span>{inspectionParts.findIndex(x=>x.id===selected)+1} de {inspectionParts.length}</span><button className="primary-btn" onClick={()=>{const i=inspectionParts.findIndex(x=>x.id===selected);setSelected(inspectionParts[(i+1)%inspectionParts.length].id)}}>Próximo componente →</button></div>
      </section>
    </div>
    <p className="inspection-disclaimer">Material didático geral. Utilize sempre o desenho, a instrução de trabalho e os critérios de qualidade aprovados para o código e a variante do eixo em questão.</p>
  </section>;
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
