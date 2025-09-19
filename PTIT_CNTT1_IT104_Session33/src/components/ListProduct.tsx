import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { Product } from '../interfaces/listProducts.interface'
import type { RootState } from '../stores/store'

export default function ListProduct() {
  const products = useSelector((state: RootState) => state.listProducts)
  const dispatch = useDispatch()
  const [quantities, setQuantities] = useState<{[key: number]: number}>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities(prev => ({ ...prev, [id]: quantity }))
  }

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      }
    })
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <div className="products-container">
      <div className="products-header">
        <h2>List Products</h2>
      </div>
      <div className="products-content">
        {products.map((product: Product) => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.detail}</p>
              <div className="product-controls">
                <input
                  type="number"
                  value={quantities[product.id] || 1}
                  onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value) || 1)}
                  min="1"
                  className="quantity-input"
                />
                <span className="price">{product.price} USD</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showSuccess && (
        <div className="success-message">
          Add to cart successfully
        </div>
      )}
    </div>
  )
}
