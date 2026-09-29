import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h2>Trilha de Desenvolvimento MOE</h2>

        <p>
          Aprenda, pratique e evolua na montagem de eixos
        </p>
      </header>

      <section className="eixos">
  <div className="eixo-card">
    <img
      src="https://via.placeholder.com/400x250"
      alt="Eixo IVECO"
    />
    <h3>IVECO</h3>
    <button>Iniciar Treinamento</button>
  </div>

  <div className="eixo-card">
    <img
      src="https://via.placeholder.com/400x250"
      alt="Eixo DAF"
    />
    <h3>DAF</h3>
    <button>Iniciar Treinamento</button>
  </div>
</section>

      <section className="progresso">
        <h2>Meu Progresso</h2>

        <div className="barra">
          <div className="preenchimento"></div>
        </div>

        <p>0% concluído</p>
      </section>

      <section className="modulos">
        <div className="card">🏭 Conhecendo a MOE</div>
        <div className="card">⚙️ Componentes do Eixo</div>
        <div className="card">🔧 Ferramentas</div>
        <div className="card">📋 Processo de Montagem</div>
        <div className="card">✔️ Qualidade</div>
        <div className="card">🦺 Segurança</div>
        <div className="card">📚 Biblioteca Técnica</div>
        <div className="card">❓ Quiz MOE</div>
      </section>
    </div>
  );
}

export default App;