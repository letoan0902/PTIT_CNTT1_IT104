import React from 'react'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '8rem',
          fontWeight: 'bold',
          color: '#374151',
          margin: '0',
          lineHeight: '1'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 'normal',
          color: '#374151',
          margin: '0',
          marginTop: '1rem'
        }}>
          Not Found
        </h2>
      </div>
    </div>
  )
}
