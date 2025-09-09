import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App