import { useState, useEffect } from 'react'
import { supabase } from '../../data/data.jsx'
import './AdminPanel.css'

export const AdminPanel = () => {
  const [anmalningar, setAnmalningar] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAnmalningar()
  }, [])

  const fetchAnmalningar = async () => {
    try {
      const { data, error } = await supabase
        .from('anmalningar')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (error) throw error
      setAnmalningar(data)
    } catch (error) {
      console.error('Fel vid hämtning:', error)
      alert('Kunde inte hämta anmälningar')
    } finally {
      setLoading(false)
    }
  }

  const deleteAnmalan = async (id) => {
    if (!window.confirm('Är du säker på att du vill ta bort denna anmälan?')) {
      return
    }

    try {
      const { error } = await supabase
        .from('anmalningar')
        .delete()
        .eq('id', id)
      
      if (error) throw error
      
      // Ta bort från lokala state också
      setAnmalningar(anmalningar.filter(a => a.id !== id))
      alert('Anmälan borttagen!')
    } catch (error) {
      console.error('Fel vid borttagning:', error)
      alert('Kunde inte ta bort anmälan')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn')
    window.location.reload()
  }

  if (loading) {
    return <div>Laddar anmälningar...</div>
  }

  return (
    <div className="admin-container">
  <div className="admin-header">
    <button className="logout-btn" onClick={handleLogout}>Logga ut</button>
    <h1>🎉 Anmälningar ({anmalningar.length} st)</h1>
  </div>

  {anmalningar.length === 0 ? (
    <p>Inga anmälningar än!</p>
  ) : (
    <table className="admin-table">
      <thead>
        <tr className="table-header">
          <th>Namn</th>
          <th>Information</th>
          <th>Antal</th>
          <th>Anmäld</th>
        </tr>
      </thead>
      <tbody>
        {anmalningar.map((anmalan) => (
          <tr key={anmalan.id}>
            <td>{anmalan.name}</td>
            <td class="info">{anmalan.information || '-'}</td>
            <td>{anmalan.number_of_persons}</td>
            <td>{new Date(anmalan.created_at).toLocaleDateString('sv-SE')}</td>
            
              <button 
                className="delete-btn"
                onClick={() => deleteAnmalan(anmalan.id)}
              >
                Ta bort
              </button>
            
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
)}