import React, { useState } from 'react'
import TradingDisciplineApp from './TradingDisciplineApp'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (user === 'admin' && password === 'tradingfocus') {
      setIsLoggedIn(true)
    } else {
      alert('Identifiant ou mot de passe incorrect')
    }
  }

  if (isLoggedIn) return <TradingDisciplineApp />

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h2>Connexion sécurisée</h2>
      <input placeholder="Identifiant" value={user} onChange={e => setUser(e.target.value)} /><br />
      <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  )
}