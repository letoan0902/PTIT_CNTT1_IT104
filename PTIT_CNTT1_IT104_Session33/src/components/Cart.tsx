import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../stores/store';
import type { CartItem } from '../interfaces/listProducts.interface';

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart) as CartItem[];
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities(prev => ({ ...prev, [id]: quantity }));
  };

  const handleUpdate = (item: CartItem) => {
    const quantity = quantities[item.id] || item.quantity;
    dispatch({
      type: 'UPDATE_CART_ITEM',
      payload: { id: item.id, quantity: quantity }
    });
  };

  const handleDelete = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id }
    });
  };

  const totalPrice = cart.reduce((sum: number, item: CartItem) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart</h2>
      </div>
      <div className="cart-content">
        <table className="cart-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price} USD</td>
                <td>
                  <input
                    type="number"
                    value={quantities[item.id] || item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                    min="1"
                  />
                </td>
                <td>
                  <button 
                    className="update-btn"
                    onClick={() => handleUpdate(item)}
                  >
                    Update
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary">
          <p>There are {cart.length} items in your shopping cart.</p>
          <p className="total-price">{totalPrice} USD</p>
        </div>
      </div>
    </div>
  );
}
