import React, { useContext } from 'react';
import { CartContext } from '../cart/CartContext';
import './product-card.css';

const ProductCard = (props) => {
    const { nombre, imagen, precio, descripcion } = props.item;
    const { addToCart } = useContext(CartContext); // Usa el contexto del carrito

    return (
        <div className="single__product">
            <div className="product__img">
                <img src={imagen} alt={nombre} className="w-100" />
            </div>
            <div className="product__content">
                <div className="rating text-center">
                    <span><i className="ri-star-s-line"></i></span>
                    <span><i className="ri-star-s-line"></i></span>
                    <span><i className="ri-star-s-line"></i></span>
                    <span><i className="ri-star-s-line"></i></span>
                    <span><i className="ri-star-s-line"></i></span>
                </div>
                <h6>{nombre}</h6>
                <div className="d-flex align-items-center justify-content-between">
                    <span className="price d-flex align-items-center">Precio: Q<span>{precio}</span></span>
                    <span className="shopping__icon">
                        <i className="ri-shopping-cart-2-line" onClick={() => addToCart(props.item)}></i>
                    </span>
                </div>
                <p>{descripcion}</p>
            </div>
        </div>
    );
};

export default ProductCard;
