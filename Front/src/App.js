import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css';
import Home from './pages/Home';
import Login from './pages/Login';
import MenuPack from './pages/MenuPack';
import Reservas from './pages/Reservas';
import Sucursales from './pages/Sucursales';
import Ayuda from './pages/Ayuda';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/menu-pack" element={<MenuPack />} />
                <Route path="/reservas" element={<Reservas />} />
                <Route path="/sucursales" element={<Sucursales />} />
                <Route path="/Ayuda" element={<Ayuda />} />

            </Routes>
        </Router>
    );
}

export default App;
