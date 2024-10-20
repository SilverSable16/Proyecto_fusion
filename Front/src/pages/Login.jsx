import React, { useState } from 'react';
import './login.css'; // Asegúrate de crear un archivo CSS para estilos personalizados

const Login = () => {
    const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro

    return (
        <div className="login__container">
            <div className="form__wrapper">
                <h2>{isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}</h2>
                <form>
                    {!isLogin && (
                        <div className="form__group">
                            <label>Nombre</label>
                            <input type="text" placeholder="Ingresa tu nombre" required />
                        </div>
                    )}
                    <div className="form__group">
                        <label>Email</label>
                        <input type="email" placeholder="Ingresa tu correo" required />
                    </div>
                    <div className="form__group">
                        <label>Contraseña</label>
                        <input type="password" placeholder="Ingresa tu contraseña" required />
                    </div>
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
