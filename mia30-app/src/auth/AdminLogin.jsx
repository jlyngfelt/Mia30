import {useState} from 'react';

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

  return (
    <div>

      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ange lösenord"
      />
      <button onClick={handleLogin}>
        Logga in
      </button>
    </div>
  )
}