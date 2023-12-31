import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login-form.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email.trim()) {
    setIsEmailEmpty(true);
  } else {
    setIsEmailEmpty(false);
  }

  if (!password.trim()) {
    setIsPasswordEmpty(true);
  } else {
    setIsPasswordEmpty(false);
  }

  if (!email.trim() || !password.trim()) {
    return;
  }


    try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email: email,
            password: password,
        });

        const { token, user_id } = response.data; // Extrae el token y el userId

        // Almacena el token y el userId en el almacenamiento local
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user_id);

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
                value={email}
                placeholder='Escribe tu Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {isEmailEmpty && <div className="error-message">Email requerido</div>}
            </div>
            <div>
              <label className='form-label'>Contraseña:</label>
              <input
                className='form-input'
                type="password"
                value={password}
                placeholder='Escribe tu Contraseña'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isPasswordEmpty && <div className="error-message">Contraseña requerida</div>}
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
