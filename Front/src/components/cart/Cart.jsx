import React, { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import './cart.css';

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    if (cartItems.length === 0) {
        return <div className="empty-cart">El carrito está vacío</div>;
    }

    return (
        <div className="cart-container">
            <h2>Carrito</h2>
            <ul className="cart-items">
                {cartItems.map((item, index) => (
                    <li key={index} className="cart-item">
                        <img src={item.imagen} alt={item.nombre} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h5>{item.nombre}</h5>
                            <p>Precio: Q{item.precio}</p>
                            <p>{item.descripcion}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <h4>Total: Q{cartItems.reduce((acc, item) => acc + item.precio, 0).toFixed(2)}</h4>
            </div>
        </div>
    );
};

export default Cart;
