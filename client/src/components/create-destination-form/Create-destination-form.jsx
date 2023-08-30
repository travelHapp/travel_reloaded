import React, { Component } from 'react';
import './Create-destination-form.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import fileIcon from '../../assets/images/File-icon.svg';

class CrearDestino extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         errors: [], // Aquí almacenaremos los errores
    //         name: '',
    //         location: '',
    //         image: null,
    //         description: '',
    //     };
    // }

    handleSubmit = async (event) => {
        event.preventDefault();

        // Obtén los datos del estado
        const { name, location, image, description } = this.state;

        // Crea un FormData para enviar los datos del formulario
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('image', image);
        formData.append('description', description);

        try {
            const response = await fetch('/happy_travel.store', {
                method: 'POST',
                body: formData,
                // Puedes configurar las cabeceras según tu API
            });

            if (!response.ok) {
                // Si la respuesta no es exitosa, maneja el error
                const responseData = await response.json(); // Puedes ajustar esto según el formato de respuesta de tu API
                if (responseData.errors) {
                    this.setState({ errors: responseData.errors });
                }
            } else {
                // El formulario se envió exitosamente
                // Puedes redirigir a otra página o tomar otras acciones
                console.log('Formulario enviado exitosamente');
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleImageChange = (event) => {
        this.setState({ image: event.target.files[0] });
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="form-container">
                <div>
                    <div>
                        <h2 className='Title'>Crear destino</h2>

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

                        <form onSubmit={this.handleSubmit} className="create-dest" encType="multipart/form-data" required>
                            {/* El manejo del token CSRF puede ser diferente en React */}
                            {/* Asegúrate de manejarlo según tu configuración */}
                            <input type="hidden" name="_token" value="tu_token_csrf_aquí" />

                            <div className="form_create col">
                                <div className="columna1 col-md-6">
                                    <div className="mb-4">
                                        <label htmlFor="validationTooltip01" className="form-label">Título</label>
                                        <input type="text" name="name" className="shadow-top rounded rounded-pill input" id="validationTooltip01" placeholder="Indica el nombre del destino" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="validationTooltip01" className="form-label">Ubicación</label>
                                        <input type="text" name="location" className="shadow-top rounded-pill input" id="validationTooltip01" placeholder="Indica el destino" />
                                    </div>

                                    <div className="add_file mb-5">
                                        <label htmlFor="validationTextarea" className="form-label">Imagen</label>
                                        <div className="input-group position-relative">
                                            <label className="input-group-text position-absolute input-label" htmlFor="fileInput">
                                                <input type="file" name="image" id="fileInput" className="d-none input" accept="image/*" />
                                                <img className="img_add" src={fileIcon} alt="Icono de carpeta" width="30" height="30" />
                                            </label>
                                        <input type="text" class="shadow-top rounded-pill inputimg" placeholder="Sube una imagen" readonly></input>
                                        </div>
                                        <div className="invalid-feedback">Ejemplo de retroalimentación de archivo no válido</div>
                                    </div>

                                </div>

                                <div className="columna2 col-md-6">
                                    <div className="mb-3 row">
                                        <label htmlFor="validationTextarea" className="form-label">¿Por qué quieres viajar allí?</label>
                                        <textarea className=" shadow-top p-4 rounded-4 custom-textarea" name="description" id="validationTextarea" placeholder="Cuéntanos por qué te gusta este destino"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1">
                                <button className="btn accept me-2 rounded-pill custom-accept" type="submit" >Aceptar</button>
                                <a href="/happy_travel.store" className="btn btn-danger rounded-pill">Cancelar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default CrearDestino;
