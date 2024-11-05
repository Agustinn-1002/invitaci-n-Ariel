import { Fade } from "react-awesome-reveal";

export default function Thanks() {
    return (
        <Fade delay={0} triggerOnce={true} duration={1000} >
            <div className="flex flex-col justify-center items-center text-center py-14 bg-main">
                <div className="flex flex-col px-8 leading-7 text-white text-lg sm:text-xl">
                    <p>¡Te espero el 30 para una noche magica!</p>
                </div>
            </div>
        </Fade>
    )
}