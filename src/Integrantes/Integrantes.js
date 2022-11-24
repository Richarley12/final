export function Integrantes() {

    let integrantes=[
        {
            nombre:"Joaquin Galan",
            rol:"Vocalista",
            edad:"66",
            fotografia:"https://firebasestorage.googleapis.com/v0/b/react-9d9ed.appspot.com/o/Joaqu%C3%ADn%20Gal%C3%A1n.jpg?alt=media&token=449f299d-0487-4adb-bdcc-29004e887acf",
            
        },
        {nombre:"Lucia Galan",
        rol:"Vocalista",
        edad:"60",
        fotografia:"https://firebasestorage.googleapis.com/v0/b/react-9d9ed.appspot.com/o/Luc%C3%ADa%20Gal%C3%A1n.jpg?alt=media&token=fab547cd-39ce-49b9-acfc-6f43877efebf",
        }
    ]

    return(
    
        <div className="row row-cols-1 row-cols-md-2 g-0 mt-5">
                {
                    integrantes.map(function (integrante) {
                        return(
                            <>
                            <div className="col mt-3 bg-dark p-5">
                                <div className="card h-100">
                                    <img src={integrante.fotografia} alt="foto" className="img-fluid w-100 h-100"/>
                                    <h4 className="text-center fw-bold"> {integrante.nombre}</h4>
                                    <br/>
                                    <h5 className="text-center fw-bold"> Edad: {integrante.edad}</h5>
                                    <h5 className="text-center fw-bold"> {integrante.rol}</h5>
                                </div>
                            </div>
                            </>
                        )
                    })
                }


        </div>
        

    )
}