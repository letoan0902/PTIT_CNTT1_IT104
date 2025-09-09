import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Product from './components/Product'
import Detail from './components/Detail'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App