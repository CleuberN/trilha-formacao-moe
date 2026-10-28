import { useState } from "react";
import GlassCard from "./GlassCard.jsx";
import "./glass-background.css";
import "./GlassDemo.css";

/** Para testar no Vite, renderize temporariamente <GlassDemo /> no App.jsx. */
export default function GlassDemo() {
  const [answer, setAnswer] = useState("");
  const options = [
    "Iniciar imediatamente pela experiência.",
    "Conferir a instrução de trabalho e os controles de segurança.",
    "Pular a verificação se a linha estiver atrasada."
  ];
  return (
    <main className="glassPageBackground glassDemoPage">
      <div className="glassDemoInner">
        <p className="glassDemoEyebrow">TRILHA DE FORMAÇÃO MOE</p>
        <h1>Glassmorphic Design</h1>
        <p className="glassDemoLead">Exemplo de painéis de aprendizagem e quiz usando transparência e desfoque.</p>
        <GlassCard className="glassDemoCard">
          <span className="glassDemoBadge">FOLHA DE FORMAÇÃO</span>
          <h2>Estação 10 — Preparação da carcaça</h2>
          <p>Confira a identificação do conjunto, a instrução vigente e as condições de segurança antes de iniciar a atividade.</p>
        </GlassCard>
        <GlassCard as="section" className="glassDemoCard glassDemoQuiz">
          <span className="glassDemoBadge">QUIZ INTERATIVO</span>
          <h2>Qual é a melhor ação antes de começar?</h2>
          <div className="glassDemoOptions">
            {options.map((option) => (
              <label className={answer === option ? "glassDemoOption selected" : "glassDemoOption"} key={option}>
                <input type="radio" name="glass-demo-answer" value={option} checked={answer === option} onChange={() => setAnswer(option)} />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {answer && <p className={answer.startsWith("Conferir") ? "glassDemoFeedback correct" : "glassDemoFeedback"}>
            {answer.startsWith("Conferir") ? "Correto. A instrução vigente e os controles de segurança devem ser verificados antes da atividade." : "Revise a resposta: siga os procedimentos aprovados antes de iniciar."}
          </p>}
        </GlassCard>
      </div>
    </main>
  );
}
