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
                <h2 className="my-3 font-light text-tittle text-3xl sm:text-3xl">
                    DRESS CODE
                </h2>
                <div className="flex flex-col px-8 leading-7 text-paragraph sm:text-xl">
                    <p>Formal elegante</p>
                </div>
            </div>
        </Fade>
    )
}