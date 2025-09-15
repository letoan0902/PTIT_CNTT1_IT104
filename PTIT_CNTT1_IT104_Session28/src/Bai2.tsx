import { Route, Routes } from 'react-router-dom'
import './App.css'
import Student from './components/Student'


function App() {
  return (
    <Routes>
      <Route path="/bai2" element={<Student />} />
    </Routes>
  )
}

export default App
