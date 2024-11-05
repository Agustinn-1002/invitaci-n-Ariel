import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import '../style/dresscode.css'

export default function Ig() {
    return (
        <Fade cascade direction="up" delay={600} triggerOnce={true} duration={1000} >
            <div className="flex flex-col justify-center items-center text-center my-24">
                <div className="mb-8">
                    <Image src={'/dresscode.svg'} width={90} height={90} className="dressIcon" />
                </div>
                <h2 className="my-3 font-light text-tittle text-3xl sm:text-3xl">
                    DRESS CODE
                </h2>
                <div className="flex flex-col px-8 leading-7 text-paragraph sm:text-xl">
                    <p>Ropa cómoda para bailar 😉</p>
                </div>
            </div>
        </Fade>
    )
}