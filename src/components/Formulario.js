import React, { useState } from 'react'

export const Formulario = ({ setBusquedaletra }) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, setError] = useState( false );

    const{ artista, cancion } = busqueda;

    const handleInputChange = ({ target }) => {
        setBusqueda({
            ...busqueda,
            [ target.name ]: target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        if ( artista === '' || cancion === '' ) {
            setError( true );
            return;
        }
        setError( false );
        setBusquedaletra( busqueda );
    }

    return (
        <div className="bg-info">
            <div className="container">
                    {
                        ( error ) && <p className="alert alert-danger text-center p-4">Todos los campos son obligatorios...</p>
                    }
                <div className="row">
                    <form
                        onSubmit={ handleSubmit }
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Buscador Letra Canciones
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Nombre Artista"
                                            onChange={ handleInputChange }
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Cancion</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Nombre Cancion"
                                            onChange={ handleInputChange }
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    )
}
