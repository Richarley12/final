import { servicioCanciones } from '../services/servicioCanciones.js'
//necesito usar el hook USESTATE para alamcenar la respuesta de forma global
import { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'


export function Music() {

    //CREANDO MI PRIMER USESTATE
    const [canciones, setCanciones] = useState(null)
    const [estamosCargando, setEstamosCargando] = useState(true)
    console.log (canciones)
    //USANDO MI PRIMER USEEFFECT
    useEffect(function () {
        servicioCanciones()
            .then(function (respuesta) {
                setCanciones(respuesta)
                setEstamosCargando(false)
            })

    }, [])

    if (estamosCargando) {
        return (
            <>
                <h1>Estamos cargando...</h1>
            </>
        )
    } else {
        return (

            <>
           
                <div className="row row-cols-1 row-cols-md-3 g-0 mt-5">
                
                {
                    canciones.tracks.map(function(cancion) {
                    return (
                        <>
                        <div className="col mt-3 bg-dark p-5">
                                        <div className="card h-100% w-100%">
                        <img src= {cancion.album.images[1].url} alt="" className="img-fluid"></img>
                        <h4 className="text-center fw-bold">
                            {cancion.name}
                        </h4>
                        <ReactAudioPlayer src={cancion.preview_url}
                        controls
                        className='center'
                        />
                       </div>
                         </div>
                        </>
                    )
                       
                    })
                }
                </div>
            </>
        )

    }
}