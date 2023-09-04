import React, { useState } from 'react';
import './Create-destination-form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fileIcon from '../../assets/images/File-icon.svg';
import axios from 'axios';

function CrearDestino() {
  const [errors, setErrors] = useState([]);
  const [formDataState, setFormDataState] = useState({
    name: '',
    location: '',
    image: '',
    description: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, location, image, description } = formDataState;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('image', image);
    formData.append('description', description);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status === 200) {
        console.log('Destino enviado exitosamente');
        // Puedes redirigir al usuario a otra página aquí si es necesario
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error.response);
      if (error.response && error.response.data && error.response.data.errors) {
        setErrors(error.response.data.errors);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormDataState({
      ...formDataState,
      [name]: value,
    });
  };

  const handleImageChange = (event) => {
    setFormDataState({
      ...formDataState,
      image: event.target.files[0],
    });
  };

  return (
    <div className="form-container p-4 rounded-4">
      <div>
        <div>
          <h2 className="Title">Crear destino</h2>

          {errors.length > 0 && (
            <div className="alert alert-danger mt-2">
              <strong>Lo lamento, algo salió mal...</strong> <br />
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="create-dest"
            encType="multipart/form-data"
            required
          >
            <div className="form_create col">
              <div className="columna1 col-md-6">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">
                    Título
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="shadow-top rounded rounded-pill input"
                    id="name"
                    placeholder="Indica el nombre del destino"
                    required
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="location" className="form-label">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="shadow-top rounded-pill input"
                    id="location"
                    placeholder="Indica el destino"
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <div className="add_file mb-5">
                  <label htmlFor="image" className="form-label">
                    Imagen
                  </label>
                  <div className="input-group position-relative">
                    <label
                      className="input-group-text position-absolute input-label"
                      htmlFor="image"
                    >
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className="d-none input"
                        accept="image/*"
                        required
                        onChange={handleImageChange}
                      />
                      <img
                        className="img_add"
                        src={fileIcon}
                        alt="Icono de carpeta"
                        width="30"
                        height="30"
                      />
                    </label>
                    <input
                      type="text"
                      className="shadow-top rounded-pill inputimg"
                      placeholder="Sube una imagen"
                      readOnly
                      required
                    />
                  </div>
                  <div className="invalid-feedback">
                    Ejemplo de retroalimentación de archivo no válido
                  </div>
                </div>
              </div>

              <div className="columna2 col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="description" className="form-label">
                    ¿Por qué quieres viajar allí?
                  </label>
                  <textarea
                    className=" shadow-top p-4 rounded-4 custom-textarea"
                    name="description"
                    id="description"
                    placeholder="Cuéntanos por qué te gusta este destino"
                    required
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mb-1">
              <button
                className="btn accept me-2 rounded-pill custom-accept"
                type="submit"
              >
                Aceptar
              </button>
              <a href="/" className="btn rounded-pill custom-cancel">
                Cancelar
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CrearDestino;