import React, { useState } from 'react';
import FormularioConsulta from '../components/mapa-mesas/FormularioConsulta';
import MapaMesas from '../components/mapa-mesas/MapaMesas';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const MapaMesasPage = () => {
    const [mesas, setMesas] = useState([]);

    const consultarMesas = async (fecha, hora, idSucursal) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/mesas`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fecha, hora, id_sucursal: idSucursal })
            });
            const data = await response.json();
            setMesas(data);
        } catch (error) {
            console.error('Error al consultar las mesas:', error);
        }
    };

    return (
        <div>
            <Header />
            <div className="mapa-de-mesas-section">
                <h2>Consulta la Disponibilidad de Mesas</h2>
                <FormularioConsulta onConsultar={consultarMesas} />
                <MapaMesas mesas={mesas} />
            </div>
            <Footer />
        </div>
    );
};

export default MapaMesasPage;
