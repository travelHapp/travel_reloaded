// Desde LoginForm.spec.js
beforeEach(() => {
    cy.visit('C:\xampp\htdocs\travel_reloaded\client\src\components\login-form\Login-form.jsx'); // Reemplaza con la URL correcta
  });
  



// loginForm.spec.js

// Prueba de la funcionalidad del formulario de inicio de sesión
describe('LoginForm', () => {
    // Antes de cada prueba, visita la página con el componente LoginForm
    beforeEach(() => {
      cy.visit('login-form\Login-form.jsx'); // Reemplaza con la URL correcta
    });
  
    it('debería mostrar un mensaje de error al enviar credenciales incorrectas', () => {
      // Simula una solicitud HTTP falsa para credenciales incorrectas
      cy.intercept('POST', 'http://127.0.0.1:8000/api/login', {
        statusCode: 401,
        body: { error: 'Credenciales incorrectas' },
      }).as('loginRequest');
  
      // Completa el formulario con credenciales incorrectas
      cy.get('input[type="email"]').type('correo@example.com');
      cy.get('input[type="password"]').type('contraseñaincorrecta');
      cy.get('form').submit();
  
      // Espera a que la solicitud se complete y verifica el mensaje de error
      cy.wait('@loginRequest');
      cy.get('.error-message').should('contain', 'Credenciales incorrectas');
    });
  
    it('debería redirigir al usuario a la página principal después del inicio de sesión exitoso', () => {
      // Simula una solicitud HTTP exitosa para el inicio de sesión
      cy.intercept('POST', 'http://127.0.0.1:8000/api/login', {
        statusCode: 200,
        body: { token: 'token-de-prueba' },
      }).as('loginRequest');
  
      // Completa el formulario con credenciales correctas
      cy.get('input[type="email"]').type('correo@example.com');
      cy.get('input[type="password"]').type('contraseñacorrecta');
      cy.get('form').submit();
  
      // Espera a que la solicitud se complete y verifica la redirección
      cy.wait('@loginRequest');
      cy.url().should('eq', 'http://localhost:3000/'); // Reemplaza con la URL correcta
    });
  });
  