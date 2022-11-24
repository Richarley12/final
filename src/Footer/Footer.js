import { Link } from "react-router-dom";

export function Footer() {
   
   return (
    <>
   <div className="container-fluid my-5">
                <div className="row p-5 bg-dark text-white">
                    <div className="col-xs-12 col-md-6 col-lg-3">
                    <img src="https://firebasestorage.googleapis.com/v0/b/react-9d9ed.appspot.com/o/logov.png?alt=media&token=146a869e-4ec6-407b-9d05-ddf11822a08f" alt="" className="w-50 img-fluid" />
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-9d9ed.appspot.com/o/footer.jpeg?alt=media&token=62394903-5fec-4372-a188-2d68473f662f" alt="" className="w-50 img-fluid" />
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p className="h5 mb-3">Síguenos en</p>
                        <div className="mb-2">
                            <i class="bi bi-facebook"></i>
                            <Link className="text-secondary text-decoration-none mx-2" to={{ pathname: "https://www.facebook.com/ildivo" }}>facebook
                            </Link>
                        </div>
                        <div className="mb-2">
                            <i class="bi bi-whatsapp"></i>
                            <Link className="text-secondary text-decoration-none mx-2" to="#">whatsapp</Link>
                        </div>
                        <div className="mb-2">
                            <i class="bi bi-instagram"></i>
                            <Link className="text-secondary text-decoration-none mx-2" to="#">Instagram</Link>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6  col-lg-3">
                        <p className="h5 mb-3">Links</p>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to="#">Términos y condiciones</Link>
                        </div>
                        <div className="mb-2">
                            <Link className="text-secondary text-decoration-none" to="#">Políticas de privacidad</Link>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6  col-lg-3">
                        <p className="h5 mb-3">Music</p>
                        <div className="mb-2">
                            <i class="bi bi-music-note"></i>
                            <Link className="text-secondary text-decoration-none" to="#">Olvidame y pega la vuelta</Link>
                        </div>
                        <div className="mb-2">
                            <i class="bi bi-music-note"></i>
                            <Link className="text-secondary text-decoration-none" to="#">A esa</Link>
                        </div>
                        <div className="mb-2">
                            <i class="bi bi-music-note"></i>
                            <Link className="text-secondary text-decoration-none" to="#">Por ese hombre</Link>
                        </div>
                        <div className="mb-2">
                            <i class="bi bi-music-note"></i>
                            <Link className="text-secondary text-decoration-none" to="#">Dímelo delante de ella</Link>
                        </div>
                    </div>
                    <div className="col-xs-12 pt-5">
                        <p className="text-white text-center">copyright-Derechos Resrvados © 2022</p>

                    </div>


                </div>

            </div>

</>
)}
