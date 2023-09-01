import React, { Component } from 'react';
import './Create-destination-form.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import fileIcon from '../../assets/images/File-icon.svg';

class CrearDestino extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: [], 
            name: '',
            location: '',
            image: null,
            description: '',
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { name, location, image, description } = this.state;

        
        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('image', image);
        formData.append('description', description);

        try {
            const response = await fetch('/happy_travel.store', {
                method: 'POST',
                body: formData,
               
            });

            if (!response.ok) {
                
                const responseData = await response.json(); 
                if (responseData.errors) {
                    this.setState({ errors: responseData.errors });
                }
            } else {
                
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
            <div className="form-container p-4 rounded-4">
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
                            
                            <input type="hidden" name="_token" value="tu_token_csrf_aquí" />

                            <div className="form_create col">
                                <div className="columna1 col-md-6">
                                    <div className="mb-4">
                                        <label htmlFor="validationTooltip01" className="form-label">Título</label>
                                        <input type="text" name="name" className="shadow-top rounded rounded-pill input" id="validationTooltip01" placeholder="Indica el nombre del destino" required/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="validationTooltip01" className="form-label">Ubicación</label>
                                        <input type="text" name="location" className="shadow-top rounded-pill input" id="validationTooltip01" placeholder="Indica el destino" required/>
                                    </div>

                                    <div className="add_file mb-5">
                                        <label htmlFor="validationTextarea" className="form-label">Imagen</label>
                                        <div className="input-group position-relative">
                                            <label className="input-group-text position-absolute input-label" htmlFor="fileInput">
                                                <input type="file" name="image" id="fileInput" className="d-none input" accept="image/*" required/>
                                                <img className="img_add" src={fileIcon} alt="Icono de carpeta" width="30" height="30" />
                                            </label>
                                        <input type="text" class="shadow-top rounded-pill inputimg" placeholder="Sube una imagen" readonly required></input>
                                        </div>
                                        <div className="invalid-feedback">Ejemplo de retroalimentación de archivo no válido</div>
                                    </div>

                                </div>

                                <div className="columna2 col-md-6">
                                    <div className="mb-3 row">
                                        <label htmlFor="validationTextarea" className="form-label">¿Por qué quieres viajar allí?</label>
                                        <textarea className=" shadow-top p-4 rounded-4 custom-textarea" name="description" id="validationTextarea" placeholder="Cuéntanos por qué te gusta este destino" required ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-1">
                                <button className="btn accept me-2 rounded-pill custom-accept" type="submit" >Aceptar</button>
                                <a href="/" className="btn rounded-pill custom-cancel">Cancelar</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default CrearDestino;
