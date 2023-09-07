import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login-form.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email: email,
        password: password,
      });
      console.log(response.data.msg);

      
      localStorage.setItem('token', response.data.token);

      
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Credenciales incorrectas');
    }
  };

  return (
    <main className="signup-form">
      <div className="form-registration">
        <div className="form-body">
          <h3 className='form-title'>Acceso de Usuario</h3>
          <div className="red-line"></div>
          {error && <div className="error-message">{error}</div>} {/* Muestra el mensaje de error */}
          <form onSubmit={handleSubmit}>
            <div>
              <label className='form-label'>Email:</label>
              <input
                className='form-input'
                type="email"
                name="email"
                value={email}
                placeholder='Escribe tu Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='form-label'>Contraseña:</label>
              <input
                className='form-input'
                type="password"
                name="password"
                value={password}
                placeholder='Escribe tu Contraseña'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="accept-button">Aceptar</button>
              <a href="/" className="cancel-button">Cancelar</a>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginForm;
