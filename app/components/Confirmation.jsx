import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { ParallaxBanner } from "react-scroll-parallax";
import '../style/confirmation.css'

export default function Confirmation() {

    return (
        // cargar parallax img nieve de public fondoConfirmation
        <div className="">
            <ParallaxBanner
                className="h-100 sm:h-96"
                
                layers={[
                    {
                        children: <Image
                            src="/fondoConfirmation.jpg"
                            alt="fondo Nieve copos circulos"
                            fill
                            objectFit="cover"
                            className="w-full h-full"
                        />,
                        
                        speed:  -20,
                    },
                    {
                        children: (
                            <div className="h-full flex justify-center items-center text-center px-8 1md:px-0">
                                <Fade triggerOnce={true} duration={800} delay={200} direction='down'>
                                    <div className="flex flex-col justify-center items-center bg-black bg-opacity-15 1md:bg-opacity-35 py-5 px-1 rounded-3xl">
                                        <h2 className="my-3 text-white text-3xl sm:text-2xl">
                                            CONFIRMACIÓN DE ASISTENCIA
                                        </h2>
                                        <div className="flex flex-col px-8 leading-5 text-white sm:text-lg">
                                            <p className="mb-2">Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!</p>
                                            <p><span className="font-bold uppercase">Rogamos puntualidad.</span>  ¡Gracias!</p>
                                        </div>
                                        <div className="mt-8 flex flex-col sm:flex-row">
                                            <Link target='_blank' href='https://forms.gle/EuU95PHKgFCizuo4S' className='mb-3 sm:mb-0 sm:mr-5 rounded-3xl bg-white text-lg text-main px-5 py-2  hover:bg-transparent hover:outline-white hover:outline hover:outline-1 hover:text-white duration-200'>
                                                <button className="">CONFIRMAR ASISTENCIA</button>
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
