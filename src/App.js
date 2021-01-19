import React, { useEffect, useState } from 'react'
import { Cancion } from './components/Cancion';
import { Formulario } from './components/Formulario'
import { Info } from './components/Info';

export const App = () => {

    const [busquedaletra, setBusquedaletra] = useState({});
    const [letra, setLetra] = useState('');
    const [info, setInfo] = useState({})

    useEffect(() => {
        if ( Object.keys( busquedaletra).length === 0 ) return;

        const consultaAPILetra = async () => {
            const { artista, cancion } = busquedaletra;

            const fetch1 = fetch( `https://api.lyrics.ovh/v1/${ artista }/${ cancion }` );
            const fetch2 = fetch( `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${ artista }` );

            const promises  = await Promise.all( [fetch1, fetch2]);
            // const [a, b]  = await Promise.all( [fetch1, fetch2]);
            // const bb = await Promise.all( [b.json()] );
            const [ dataLetra, informacion] = await Promise.all( promises.map( r => r.json() ));

            setInfo( informacion.artists[0] );
            setLetra( dataLetra.lyrics );
        }
        consultaAPILetra();
    }, [ busquedaletra ])


    return (
        <div>
            <Formulario
                setBusquedaletra={ setBusquedaletra }
            />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Info info={ info }/>
                    </div>
                    <div className="col-md-6">
                        <Cancion letra={ letra }/>
                    </div>
                </div>

            </div>
        </div>
    )
}
