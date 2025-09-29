import { useState } from 'react';
import './AdminLogin.css';

export const AdminLogin = () => {
  const [password, setPassword] = useState('')
  const correctPassword = 'Juliaisawesome'

  const handleLogin = () => {
    if (password === correctPassword) {
      localStorage.setItem('adminLoggedIn', 'true')
      window.location.reload() 
    } else {
      alert('Fel lösenord!')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="admin-login-container">
      <h1>🔐 Admin-inloggning</h1>
      <div className="login-form">
        <label htmlFor="password">Lösenord:</label>
        <input 
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ange lösenord"
          className="password-input"
        />
        <button onClick={handleLogin} className="login-button">
          Logga in
        </button>
      </div>
      <p className="admin-info">
        Endast administratörer kan komma åt denna sida.
      </p>
    </div>
  )
}