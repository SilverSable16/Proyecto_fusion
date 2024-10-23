import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/header/Header'; // Importa el Header
import Footer from '../components/footer/Footer'; // Importa el Footer
import ProductCard from '../components/product-card/ProductCard';
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../assets/fake-data/products';
import './menu-pack.css';

const MenuPack = () => {
    const [filter, setFilter] = useState('RICE-MENU');
    const [products, setProducts] = useState(riceMenuProducts);

    useEffect(() => {
        switch (filter) {
            case 'RICE-MENU':
                setProducts(riceMenuProducts);
                break;
            case 'FAST-FOOD':
                setProducts(fastFoodProducts);
                break;
            case 'PIZZA':
                setProducts(pizzaProducts);
                break;
            case 'DESSERT':
                setProducts(dessertProducts);
                break;
            case 'COFFEE':
                setProducts(coffeeProducts);
                break;
            default:
                setProducts(riceMenuProducts);
                break;
        }
    }, [filter]);

    return (
        <>
            <Header /> {/* Header al inicio */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-4">
                            <h3 className="menu__title">Nuestras Cartas</h3>
                        </Col>
                        <Col lg="12" className="text-center mb-5">
                            <button className={`filter-btn ${filter === 'FAST-FOOD' ? 'active__btn' : ''}`} onClick={() => setFilter('FAST-FOOD')}>Fast Food</button>
                            <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active__btn' : ''}`} onClick={() => setFilter('RICE-MENU')}>Rice Food</button>
                            <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`} onClick={() => setFilter('PIZZA')}>Pizza</button>
                            <button className={`filter-btn ${filter === 'DESSERT' ? 'active__btn' : ''}`} onClick={() => setFilter('DESSERT')}>Dessert</button>
                            <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`} onClick={() => setFilter('COFFEE')}>Coffee</button>
                        </Col>
                        {
                            products.map(item => (
                                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </section>
            <Footer /> {/* Footer al final */}
        </>
    );
}

export default MenuPack;
