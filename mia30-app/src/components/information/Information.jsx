import './Information.css';

export const Information = () => {
  return (
    <div className="information-container">
      <h1>🎊 Information om festen 🎊</h1>
      
      <div className="info-section">
        <h2>📍 Plats och tid</h2>
        <div className="info-box">
          <p><strong>Datum:</strong> [Sätt in datum]</p>
          <p><strong>Tid:</strong> [Sätt in tid]</p>
          <p><strong>Plats:</strong> [Sätt in adress]</p>
          <p><strong>Dresscode:</strong> [Sätt in dresscode]</p>
        </div>
      </div>

      <div className="info-section">
        <h2>🍰 Mat och dryck</h2>
        <div className="info-box">
          <p>Vi kommer att servera:</p>
          <ul>
            <li>[Beskrivning av mat]</li>
            <li>[Beskrivning av drycker]</li>
            <li>Tårta för födelsedagsbarnet! 🎂</li>
          </ul>
        </div>
      </div>

      <div className="info-section">
        <h2>🎁 Presenter</h2>
        <div className="info-box">
          <p>[Information om presenter - önskelista, bidrag, etc.]</p>
        </div>
      </div>

      <div className="info-section">
        <h2>📞 Kontakt</h2>
        <div className="info-box">
          <p>Har du frågor? Kontakta:</p>
          <p><strong>Arrangör:</strong> [Namn]</p>
          <p><strong>Telefon:</strong> [Telefonnummer]</p>
          <p><strong>Email:</strong> [Email]</p>
        </div>
      </div>

      <div className="info-section">
        <h2>⚠️ Viktigt att veta</h2>
        <div className="info-box">
          <ul>
            <li>OSA senast [datum] via anmälningsformuläret</li>
            <li>[Annan viktig information]</li>
            <li>[Allergier/specialkost information]</li>
          </ul>
        </div>
      </div>
    </div>
  );
};