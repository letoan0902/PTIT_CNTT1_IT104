import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
function App() {

  return (
    (
      <Routes>
      <Route path="/bai1" element={<Home />} />
      <Route path="/bai1/contact" element={<Contact />} />
      <Route path="/bai1/about" element={<About />} />
    </Routes>
    )
  )
}

export default App
