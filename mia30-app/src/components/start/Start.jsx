import './Start.css';

export const Start = () => {
  return (
    <div className="start-container">
      <h1>🎉 Välkommen till Mias 30-årsfest! 🎉</h1>
      
      <div className="welcome-content">
        <p>
          Det är dags att fira! Mia fyller 30 år och vi ska ha en fantastisk fest tillsammans.
        </p>
        
        <div className="highlight-box">
          <h2>📅 Viktiga datum</h2>
          <p><strong>Datum:</strong> [Sätt in datum här]</p>
          <p><strong>Tid:</strong> [Sätt in tid här]</p>
          <p><strong>Plats:</strong> [Sätt in plats här]</p>
        </div>

        <div className="next-steps">
          <h3>Vad du behöver göra:</h3>
          <ol>
            <li>Läs informationen under "Information"</li>
            <li>Anmäl dig under "Anmälan"</li>
            <li>Se fram emot en fantastisk fest! 🥳</li>
          </ol>
        </div>
      </div>
    </div>
  );
};