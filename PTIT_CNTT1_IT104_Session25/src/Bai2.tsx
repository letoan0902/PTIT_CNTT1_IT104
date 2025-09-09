import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'


function App() {
  return (
    <Routes>
      <Route path="/bai2" element={<Contact />} />
      <Route path="/bai2/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
