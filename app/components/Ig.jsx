import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Ig() {
    return (
        <Fade cascade direction="up" delay={600} triggerOnce={true} duration={1000} >
            <div className="flex flex-col justify-center items-center text-center my-24">
                <div className="mb-8">

                    <FontAwesomeIcon icon={faInstagram} className="fa-beat text-6xl sm:text-7xl text-main" />
                </div>
                <h2 className="my-3 font-light text-tittle text-3xl sm:text-4xl">
                    @Pilar
                </h2>
                <div className="flex flex-col px-8 leading-7 text-paragraph sm:text-lg">
                    <p>¡Preparate para esta gran fiesta!</p>
                    <p>Seguime en mi cuenta de Instagram y etiquetame en tus fotos y videos.</p>
                </div>
                <Link target='' href={'/'}>
                    <button className='mt-6 rounded-3xl bg-second text-lg text-white px-6 py-2 hover:bg-transparent hover:outline-second hover:outline hover:outline-1 hover:text-second duration-200'>VER INSTAGRAM</button>
                </Link>
            </div>
        </Fade>
    )
}