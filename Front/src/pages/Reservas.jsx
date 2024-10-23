import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/header/Header'; // Importa el Header
import Footer from '../components/footer/Footer'; /// Asegúrate de que la ruta sea correcta
import './reservas.css'; // Si tienes un archivo CSS para esta página

const Reservas = () => {
    // Estado para el mapa de mesas
    const [sucursal, setSucursal] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [mesas, setMesas] = useState([]);
    const [sucursales, setSucursales] = useState(['Centro', 'Norte', 'Sur']); // Ejemplo de sucursales

    const handleBuscarMesas = async () => {
        try {
            const response = await axios.get('/api/mesas', {
                params: { fecha, hora, sucursal }
            });
            setMesas(response.data);
        } catch (error) {
            console.error('Error al obtener las mesas:', error);
        }
    };

    useEffect(() => {
        if (fecha && hora && sucursal) {
            handleBuscarMesas();
        }
    }, [fecha, hora, sucursal]);

    return (
        <div>
            <Header /> {/* Agrega el Header al inicio */}
            
            <main>
                <div className="reservas-container">
                    <div className="mapa-mesas">
                        <div className="formulario-busqueda">
                            <select className="filter-btn select-sucursal" value={sucursal} onChange={(e) => setSucursal(e.target.value)}>
                                <option value="">Seleccione Sucursal</option>
                                {sucursales.map((suc, index) => (
                                    <option key={index} value={suc}>{suc}</option>
                                ))}
                            </select>

                            <input
                                type="date"
                                className="filter-btn" // Añadido
                                value={fecha}
                                onChange={(e) => setFecha(e.target.value)}
                            />

                            <input
                                type="time"
                                className="filter-btn" // Añadido
                                value={hora}
                                onChange={(e) => setHora(e.target.value)}
                            />

                            <button className="filter-btn" onClick={handleBuscarMesas}>Buscar Mesas</button>
                        </div>

                        <div className="mapa">
                            {mesas.length > 0 ? (
                                mesas.map((mesa) => (
                                    <div
                                        key={mesa.id}
                                        className={`mesa ${mesa.estado === 'ocupada' ? 'mesa-ocupada' : 'mesa-libre'}`}
                                    >
                                        {`Mesa ${mesa.numero}`}
                                    </div>
                                ))
                            ) : (
                                <p>No hay mesas para mostrar.</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            
            <Footer /> {/* Agrega el Footer al final */}
        </div>
    );
};

export default Reservas;