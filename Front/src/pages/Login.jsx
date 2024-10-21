import React, { useState } from 'react';
import './login.css'; // Asegúrate de crear un archivo CSS para estilos personalizados

const Login = () => {
    const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro
    const [username, setUsername] = useState(''); // Estado para el nombre o email
    const [password, setPassword] = useState(''); // Estado para la contraseña
    const [name, setName] = useState(''); // Estado para el nombre de registro
    const [error, setError] = useState('');
    const [token, setToken] = useState(null);

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        const endpoint = isLogin ? 'login' : 'register'; // Usar login o registro según el estado
        const body = isLogin
            ? { username, password }
            : { name, username, password }; // Enviar el nombre solo si es registro

        const response = await fetch(`https://federico-fazbear.onrender.com/api/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (response.ok) {
            setToken(data.token); // Guardar el token si el login o registro es exitoso
            localStorage.setItem('token', data.token); // Guardar el token en localStorage
        } else {
            setError(data.error);
        }
    };

    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem('token'); // Eliminar token al cerrar sesión
    };

    return (
        <div className="login__container">
            <div className="form__wrapper">
                <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form__group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                placeholder="Ingresa tu nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    )}
                    <div className="form__group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Ingresa tu correo"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form__group">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button type="submit" className="btn__primary">
                        {isLogin ? 'Iniciar Sesión' : 'Registrar'}
                    </button>
                </form>
                <p className="toggle__text">
                    {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Crear Cuenta' : 'Iniciar Sesión'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
