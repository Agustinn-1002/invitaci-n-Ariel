import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Confirmation() {
    return (
        // cargar parallax img nieve de public fondoConfirmation
        <div className="flex flex-col items-center justify-center bg-main text-center py-20">
            <Fade triggerOnce={true} duration={800} delay={200} direction='down'>
                <h2 className="my-3  text-white text-3xl sm:text-2xl">
                    CONFIRMACIÓN DE ASISTENCIA
                </h2>
                <div className="flex flex-col px-8 leading-5 text-white sm:text-lg">
                    <p>Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!</p>
                    <p>Rogamos puntualidad. ¡Gracias!</p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row">
                    <Link target='_blank' href='#' className='mb-3 sm:mb-0 sm:mr-5 rounded-3xl bg-white text-lg text-main px-5 py-2  hover:bg-transparent hover:outline-white hover:outline hover:outline-1 hover:text-white duration-200'>
                        <button className="">CONFIRMAR ASISTENCIA</button>
                    </Link>
                    <Link
                        target='_blank'
                        className='mt-3 sm:mt-0 sm:ml-5 rounded-3xl outline outline-1 outline-white  text-lg text-white px-5 py-2  hover:bg-white hover:text-main duration-200'
                        href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MGc4dThnNXRzNGxlaGZsMmxkNXVoYmxjbG8gYWd1cGFzdGVuQG0&amp;tmsrc=agupasten%40gmail.com">
                        <button className=" ">
                            AGENDAR EVENTO
                        </button>
                    </Link>
                </div>
            </Fade>
        </div>
    )
}