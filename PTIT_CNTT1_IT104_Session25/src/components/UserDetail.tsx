import React from 'react'
import { useParams, Link } from 'react-router-dom'

interface User {
  id: number
  name: string
  email: string
  address: string
}

export default function UserDetail() {
  const { id } = useParams<{ id: string }>()
  
  // Mock data - trong thực tế sẽ fetch từ API
  const users: User[] = [
    { id: 1, name: 'Nguyễn Văn A', email: 'nva@gmail.com', address: 'Hà Nội' },
    { id: 2, name: 'Nguyễn Văn B', email: 'nvb@gmail.com', address: 'Hà Nam' },
    { id: 3, name: 'Nguyễn Văn C', email: 'nvc@gmail.com', address: 'Ninh Bình' }
  ]

  const user = users.find(u => u.id === parseInt(id || '0'))

  if (!user) {
    return <div>User not found</div>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Thông tin chi tiết</h2>
      <div style={{
        border: '1px solid #ccc',
        padding: '15px',
        width: '200px',
        backgroundColor: 'white'
      }}>
        <div>Id: {user.id}</div>
        <div>UserName: {user.name}</div>
        <div>Email: {user.email}</div>
        <div>Address: {user.address}</div>
        <Link to="/">
          <button style={{
            marginTop: '10px',
            padding: '5px 10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            cursor: 'pointer'
          }}>
            Xem chi tiết
          </button>
        </Link>
      </div>
    </div>
  )
}
