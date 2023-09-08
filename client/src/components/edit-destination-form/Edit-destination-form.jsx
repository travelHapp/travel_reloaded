import React, { useState, useEffect } from 'react';
import '../create-destination-form/Create-destination-form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import folderImg from '../../assets/images/File-icon.svg';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';

function EditarDestino() {
  const { id } = useParams();
  const [errors, setErrors] = useState([]);
  const [formDataState, setFormDataState] = useState({
    name: '',
    location: '',
    image: null, // Cambiamos a null para cargar la imagen existente si es necesario
    description: '',
  });
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const authToken = localStorage.getItem('token');
        const headers = {
          Authorization: `Bearer ${authToken}`,
        };
  
        // Haces la solicitud GET con el encabezado de autorización
        const response = await axios.get(`http://localhost:8000/api/${id}`, { headers });
  
        const travel = response.data;
        
        // Actualizas el estado del formulario con los datos de la carta
        setFormDataState({
          name: travel.name,
          location: travel.location,
          description: travel.description,
          image: null, // Puedes cargar la imagen existente aquí si es necesario
        });
      } catch (error) {
        console.error('Error fetching travel details:', error);
      }
    };
  
    fetchDetails();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, location, image, description } = formDataState;

    const formData = new FormData();
    formData.append('name', name);
    formData.append('location', location);
    formData.append('image', image); // Incluimos la imagen en la solicitud para la edición
    formData.append('description', description);

    try {
      // Realizamos una solicitud para editar la carta con el ID
      const response = await axios.put(`http://localhost:8000/api/${id}`, formData, {
     
      });

      if (response.status === 200) {
        console.log('Solicitud PUT enviada');
        console.log('Respuesta del servidor:', response);
        setRedirectToDashboard(true);
      }
    } catch (error) {
      console.error('Error:', error);
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

  if (redirectToDashboard) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-container p-4 rounded-4">
      <div>
        <div>
          <h2 className="Title">Editar destino</h2>

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
                    value={formDataState.name}
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
                    value={formDataState.location}
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
                        src={folderImg}
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
                    className="shadow-top p-4 rounded-4 custom-textarea"
                    name="description"
                    id="description"
                    placeholder="Cuéntanos por qué te gusta este destino"
                    required
                    value={formDataState.description}
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

export default EditarDestino;
