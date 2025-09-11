import { Route, Routes } from 'react-router-dom'
import './App.css'
import Students from './components/Students'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Students />} />
    </Routes>
  )
}

export default App