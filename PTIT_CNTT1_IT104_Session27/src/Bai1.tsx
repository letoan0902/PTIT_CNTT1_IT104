import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductDetail from './components/ProductDetail'
function App() {

  return (
    (
      <Routes>
      <Route path="/bai1" element={<ProductDetail />} />
    </Routes>
    )
  )
}

export default App
