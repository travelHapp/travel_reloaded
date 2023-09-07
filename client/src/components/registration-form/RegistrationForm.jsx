import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [isNameRequired, setIsNameRequired] = useState(false);
    const [isEmailRequired, setIsEmailRequired] = useState(false);
    const [isPasswordRequired, setIsPasswordRequired] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', formData, {
                headers: {
                    'Content-Type': 'application/json', // Agrega esta línea
                },
            }
            );
            console.log(response.data); // Handle success response
        } 
        catch (error) {
            console.error(error); // Handle error response
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <main className="signup-form">
            <div className="container">
                <div>
                    <div>
                        <div className="form-registration">
                         
                            <div className="form-body">
                            <h3 className="form-title">Registro de usuario</h3>
                            <div class="red-line"></div>


                                <form onSubmit={handleSubmit}>
                                    <div className="form-name">
                                        <label htmlFor="name" className="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            placeholder="Nombre"
                                            id="name"
                                            className="form-input"
                                            name="name"
                                            required
                                            autoFocus
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onBlur={() => setIsNameRequired(formData.name.trim() === '')}
                                        />
                                         {isNameRequired && <div className="error-message">Nombre requerido</div>}


                                    </div>
                                    <div className="form-email">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            id="email"
                                            className="form-input"
                                            name="email"
                                            required
                                            autoFocus
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onBlur={() => setIsEmailRequired(formData.email.trim() === '')}
                                        />
                                          {isEmailRequired && <div className="error-message">Email requerido</div>}
                                    </div>
                                    <div className="form-password">
                                        <label htmlFor="password" className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            placeholder="Contraseña"
                                            id="password"
                                            className="form-input"
                                            name="password"
                                            required
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            onBlur={() => setIsPasswordRequired(formData.password.trim() === '')}
                                        />
                                          {isPasswordRequired && <div className="error-message">Contraseña requerida</div>}
                                    </div>
                                    <div className="form-buttons">
                                        <button type="submit" className="accept-button">Aceptar</button>
                                        <a href="/" className="cancel-button">Cancelar</a>
                                    </div>
                                    <div className="login-acces"><p className='form-question'>¿Ya tienes una cuenta? Accede</p><a className="acces" href="/login">Aquí</a></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Registration;
