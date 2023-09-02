// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Login-form.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email: email,
        password: password,
      });

      // Almacenar el token en el almacenamiento local o en las cookies
      localStorage.setItem('token', response.data.token);

      // Redirigir o realizar otras acciones después del inicio de sesión
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <main className="signup-form">
    <div className="form-registration">
    <div class="form-body">
      <h3 className='form-title'>Acceso de Usuario</h3>
      <div class="red-line"></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='form-label'>Email:</label>
          <input
          className='form-input'
            type="email"
            value={email}
            placeholder='Escribe tu Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className='form-label'>Contraseña:</label>
          <input
           className='form-input'
            type="password"
            value={password}
            placeholder='Escribe tu Contraseña'
            onChange={(e) => setPassword(e.target.value)}
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
