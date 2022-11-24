import './Home.css'
import '../Footer/Footer.js'
import { Footer } from '../Footer/Footer.js'
export function Home() {
    
    return(
        <>
        <img src='https://firebasestorage.googleapis.com/v0/b/react-9d9ed.appspot.com/o/37i9dQZF1DZ06evO4wO0FH-large.jpg?alt=media&token=11985236-6651-44c2-82bf-f460a64de8dd' alt="banner" className="w-100 img-fluid"/>
        
        <section >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>PIMPINELA</h1>
                        <p>Lucia y Joaquín Galán nacieron en Buenos Aires, de padre y madre españoles. Desde muy pequeños supieron que la música los acompañaría toda la vida. En junio de 1981, con el padrinazgo artístico de Luis Aguilé, comenzó Pimpinela, nombre de una flor del caribe que simboliza la protección y el éxito.</p>

                        <hr></hr>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src='https://firebasestorage.googleapis.com/v0/b/react-9d9ed.appspot.com/o/descarga.jpeg?alt=media&token=904d3c36-e044-4975-aad9-34eb6d443012' alt='live' className="img-fluid w-100"></img>
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                        <p>
                        Con una trayectoria artística de más de 40 años este dúo argentino ha editado veinticuatro discos por los que han recibido 100 discos entre oro, platino y diamante convirtiéndose en uno de los dúos más importantes de Latinoamérica y el mundo. Según diversas fuentes, se estima que el dúo ha vendido más de 30 millones de discos en todo el mundo y han participado en los más lujosos escenarios como el Madison Square Garden, en el cual solamente el cantante argentino Sandro, Palito Ortega, Los Fabulosos Cadillacs, La Mosca Tsé-Tsé, el guitarrista Pappo (invitado por B.B. King) y ellos han actuado con esta nacionalidad. Sus temas cuentan con versiones en inglés, italiano y portugués.
                        </p>
                    </div>
                </div>
            </div>
            
        </section>

    <Footer/>
        </>
    )

}