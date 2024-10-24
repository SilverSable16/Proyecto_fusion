import React, { useRef } from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'; // Importa Link
import { useCart } from '../cart/CartContext'; // Importa el contexto del carrito
import logo from '../../assets/images/logo2.png';

const navLinks = [
    {
        label: 'MENÚ',
        url: '/menu-pack'
    },
    {
        label: 'RESERVAS',
        url: '/reservas'
    },
    {
        label: 'SUCURSALES',
        url: '/sucursales'
    },
    {
        label: 'AYUDA',
        url: '/Ayuda'
    },
];

const Header = () => {
    const menuRef = useRef();
    const { cartItems } = useCart(); // Obtiene los artículos del carrito
    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    return (
        <header className="header">
            <Container>
                <div className="navigation">
                    <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/"> {/* Envolver la imagen en un componente Link */}
                            <img
                                src={logo}
                                alt="Federico Fazbear Logo"
                                style={{ width: '100px', height: 'auto', marginRight: '10px' }}
                            />
                        </Link>
                        <h2>
                            <span></span> Federico Fazbear´s
                        </h2>
                    </div>
                    <div className="nav__menu" ref={menuRef}>
                        <div className="nav__list__wrapper d-flex align-items-center gap-5">
                            <ul className="nav__list">
                                {navLinks.map((item, index) => (
                                    <li className="nav__item" key={index}>
                                        <a href={item.url} onClick={menuToggle}>{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="menu_right d-flex align-items-center">
                                <div className="custom__search">
                                    <input type="text" placeholder="Search..." />
                                    <span><i className="ri-search-line"></i></span>
                                </div>
                                <div className="cart__icon" style={{ marginLeft: '15px' }}>
                                    <Link to="/cart">
                                        <i className="ri-shopping-cart-line" style={{ fontSize: '1.5rem' }}></i>
                                        <span className="cart-count">{cartItems.length}</span> {/* Muestra la cantidad de artículos */}
                                    </Link>
                                </div>
                                <div className="login__icon" style={{ marginLeft: '15px' }}>
                                    <Link to="/login">
                                        <i className="ri-user-line" style={{ fontSize: '1.5rem' }}></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mobile_menu">
                        <span><i className="ri-menu-line" onClick={menuToggle}></i></span>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
