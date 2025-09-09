import React from 'react'
import { Link } from 'react-router-dom'

export default function CustomLink() {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h2 style={{
        marginBottom: '1rem',
        color: '#333'
      }}>
        CustomLink Component
      </h2>
      <Link
        to="/home-page"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#3b82f6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
          fontWeight: '500',
          transition: 'background-color 0.2s ease'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#2563eb'
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#3b82f6'
        }}
      >
        Go to Home Page
      </Link>
    </div>
  )
}
