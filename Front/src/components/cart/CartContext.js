import React, { createContext, useState, useContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const updateCart = (items) => {
        setCartItems(items);
        localStorage.setItem('cartItems', JSON.stringify(items));
    };

    const addToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.idAlimento === item.idAlimento);
        if (existingItem) {
            existingItem.quantity += item.quantity;
            updateCart([...cartItems]);
        } else {
            const newItem = { ...item, quantity: item.quantity };
            updateCart([...cartItems, newItem]);
        }
        console.log("Item added to cart:", item);
    };

    const removeFromCart = (itemId, quantityToRemove) => {
        const updatedCart = cartItems.map((item) => {
            if (item.idAlimento === itemId) {
                item.quantity -= quantityToRemove;
                return item;
            }
            return item;
        }).filter(item => item.quantity > 0); // Filtra los productos con cantidad mayor a cero
        updateCart(updatedCart);
        console.log("Item removed from cart:", itemId);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
