import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Register from './components/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  )
}

export default App