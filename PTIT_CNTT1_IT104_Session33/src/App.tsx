import './App.css'
import ListProduct from './components/ListProduct'
import Cart from './components/Cart'

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Shopping Cart</h1>
      <div className="main-content">
        <div className="left-section">
          <ListProduct />
        </div>
        <div className="right-section">
          <Cart />
        </div>
      </div>
    </div>
  )
}

export default App
