import React, { useRef } from 'react';
import './header.css';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'; // Importa Link
import logo from '../../assets/images/logo2.png';

const navLinks = [
    {
        label: 'Home',
        url: '#'
    },
    {
        label: 'About',
        url: '#'
    },
    {
        label: 'Reservas',
        url: '#'
    },
    {
        label: 'Recipe',
        url: '#'
    },
    {
        label: 'Contact',
        url: '#'
    },
];

const Header = () => {
    const menuRef = useRef();
    const menuToggle = () => menuRef.current.classList.toggle('active__menu');

    return (
        <header className="header">
            <Container>
                <div className="navigation">
                    <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/home"> {/* Envolver la imagen en un componente Link */}
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
                            <div className="menu_right">
                                <div className="custom__search">
                                    <input type="text" placeholder="Search..." />
                                    <span><i className="ri-search-line"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="cart__icon">
                            <i className="ri-shopping-cart-2-line"></i>
                            <span className="badge">2</span>
                        </span>
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
