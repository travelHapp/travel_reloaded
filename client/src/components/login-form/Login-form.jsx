// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';

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
    <div>
      <h3>Iniciar Sesión</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default LoginForm;
