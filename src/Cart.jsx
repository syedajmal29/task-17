import React, { useContext } from 'react';
import { CartContext } from './Cartcontext';

const Cart = () => {
    const { cart, updateQuantity, removeItem, totalQuantity, totalAmount } = useContext(CartContext);

    const handleQuantityChange = (id, quantity) => {
        if (quantity > 0) {
            updateQuantity(id, quantity);
        }
    };

    const handleRemove = (id) => {
        removeItem(id);
    };

    return (
        <div className="row">
              <div className="col col-lg-3">
        <div className='d-flex'>
              
        <div className="cart-container d-flex flex-wrap" >
        
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} style={{ width: '150px' }} />
                    <div className="item-details">
                        <h4>{item.title}</h4>
                        <p><strong>Description:</strong> {item.description}</p>
                        <p><strong>Category:</strong> {item.category}</p>
                        <p><strong>Rating:</strong> {item.rating.rate} ({item.rating.count} reviews)</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                        <div>
                            <label><strong>Quantity:</strong></label>
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                min="1"
                            />
                        </div>
                        <button className='btn btn-primary' onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
                 </div>
                 </div>
            <div className="cart-summary m-5">
                <h3>Cart Summary</h3>
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>
            </div>
        </div>
    );
};

export default Cart;