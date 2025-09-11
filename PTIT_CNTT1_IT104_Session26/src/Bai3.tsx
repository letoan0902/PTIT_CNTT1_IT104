import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import StudentDetail from './components/StudentDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentDetail />} />
    </Routes>
  )
}

export default App