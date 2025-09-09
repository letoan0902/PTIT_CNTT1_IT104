import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import CustomLink from './components/CustomLink'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomLink />} />
      <Route path="/home-page" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App