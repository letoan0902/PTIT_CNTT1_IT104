import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <nav style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem 2rem',
      borderBottom: '1px solid #dee2e6',
      marginBottom: '2rem'
    }}>
      <div style={{
        display: 'flex',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: isActive('/') ? '#dc3545' : 'transparent',
            color: isActive('/') ? 'white' : '#333',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
        >
          Home
        </Link>
        
        <Link
          to="/product"
          style={{
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: isActive('/product') ? '#dc3545' : 'transparent',
            color: isActive('/product') ? 'white' : '#333',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
        >
          Product
        </Link>
        
        <Link
          to="/detail"
          style={{
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: isActive('/detail') ? '#dc3545' : 'transparent',
            color: isActive('/detail') ? 'white' : '#333',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
        >
          Detail
        </Link>
      </div>
    </nav>
  )
}
