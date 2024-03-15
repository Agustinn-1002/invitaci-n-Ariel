import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { useMediaQuery } from "react-responsive";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Confirmation() {

    let queryData = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        // cargar parallax img nieve de public fondoConfirmation
        <div className="">
            <ParallaxBanner
                className="h-96"
                layers={[
                    {
                        children: <Image
                            src="/fondoConfirmation.jpg"
                            alt="fondo Nieve copos circulos"
                            fill
                            objectFit="cover"
                            className="w-full h-full"
                        />,

                        speed: queryData ? 0 : -30,
                    },
                    {
                        children: (
                            <div className="relative flex items-center justify-center text-center py-20">
                                <Fade triggerOnce={true} duration={800} delay={200} direction='down'>
                                    <div className="flex flex-col justify-center items-center bg-black bg-opacity-30 py-5 px-1 rounded-3xl">
                                        <h2 className="my-3 text-white text-3xl sm:text-2xl">
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
                                    </div>
                                </Fade >
                            </div >
                        ),
                        speed: 0,
                    },
                ]}
            />
        </div >

    )
}