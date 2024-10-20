import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header/Header';
import HeroSlider from '../components/hero-slider/HeroSlider';
import PopularMenu from '../components/popular-menu/PopularMenu';
import ChooseUs from '../components/choose-us/ChooseUs';
import MenuPack from '../components/menu-pack/MenuPack';
import Testimonial from '../components/testimonials/Testimonials';
import Dowload from '../components/dowload-section/Dowload';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <HeroSlider />
            
            {/* Enlace al mapa de mesas */}
            <div className="link-mapa-mesas">
                <Link to="/mapa-mesas">
                    <button>Ir al Mapa de Mesas</button>
                </Link>
            </div>
            
            <PopularMenu />
            <ChooseUs />
            <MenuPack />
            <Testimonial />
            <Dowload />
            <Footer />
        </Fragment>
    );
};

export default Home;
