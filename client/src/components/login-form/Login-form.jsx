import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que estás utilizando React Router para la navegación

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes realizar la lógica de inicio de sesión, por ejemplo, hacer una solicitud a la API
        // y manejar los errores y respuestas como lo necesites.
    };

    return (
        <main className="login-form">
            <link href={process.env.PUBLIC_URL + '/css/auth.blade.css'} rel="stylesheet" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card-login">
                            <h3 className="card-header text-center">Iniciar sesión</h3>
                            {errors.length > 0 && (
                                <div className="alert alert-danger mt-2">
                                    <strong>Lo lamento algo fue mal...</strong> <br />
                                    <ul>
                                        {errors.map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="card-body">
                                <form onSubmit={handleSubmit} className="login">
                                    <div className="form-group mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            className="form-auth"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            autoFocus
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            placeholder="Contraseña"
                                            id="password"
                                            className="form-auth"
                                            name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="container-btn">
                                        <button type="submit" className="btn btn-primary">Aceptar</button>
                                        <Link to="/happy_travel/index" className="btn btn-secondary">Cancelar</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default LoginForm;
