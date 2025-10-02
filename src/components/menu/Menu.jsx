import { useState } from 'react'
import './Menu.css'

export const Menu = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { id: 'start', label: 'Start'},
    { id: 'information', label: 'Information'},
    { id: 'anmalan', label: 'Anmälan' },
    { id: 'admin', label: 'Admin' }
  ]

  const handleMenuClick = (pageId) => {
    onPageChange(pageId)
    setIsMenuOpen(false) 
  }

  return (
    <nav className="menu">
      {/* Mobil hamburger-knapp */}
      <button 
        className="menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>

      {/* Mobil meny */}
      <div className={`menu-mobile ${isMenuOpen ? 'open' : ''}`}>
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`menu-item-mobile ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => handleMenuClick(item.id)}
          >
            <span className="menu-label">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Overlay för att stänga menyn */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  )
}