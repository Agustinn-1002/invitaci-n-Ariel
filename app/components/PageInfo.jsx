import { faChampagneGlasses } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function PageInfo() {
    return (
        <Fade cascade direction="up" delay={600} triggerOnce={true} duration={1000} >
            <div className="flex flex-col justify-center items-center text-center mt-28">
                <div className="mb-8">
                    <FontAwesomeIcon icon={faChampagneGlasses} className="fa-beat text-7xl sm:text-8xl" style={{ color: "#fca5a5", }} />
                </div>
                <h2 className="my-3 font-medium text-gray-700 text-3xl sm:text-4xl">
                    Fiesta
                </h2>
                <div className="flex flex-col px-8 leading-7 text-gray-600 sm:text-lg">
                    <p>¡Te espero el Sábado 25 de noviembre de 21:00 a 05:00 hs para festejar este gran momento de mi vida!</p>
                    <p>Salón Campo Norte, Ruta E53, Córdoba.</p>
                    <p>Clickeá en el botón de abajo y encontrá las indicaciones para llegar, ¡nos vemos!😉</p>
                </div>
                <Link target='_blank' href={'https://maps.app.goo.gl/nEno1iCiY9uFithR8'}>
                    <button className="mt-8 bg-slate-400 text-xl font-semibold text-gray-100 px-5 py-3 rounded-xl hover:bg-white hover:outline-slate-400 hover:outline hover:outline-1 hover:text-slate-400 duration-100">COMO LLEGAR</button>
                </Link>
            </div>
        </Fade>
    )
}

