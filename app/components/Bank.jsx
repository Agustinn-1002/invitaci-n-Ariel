import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Bank() {

    const [input, setInput] = useState(false)

    return (
        <div className="">

            <div className={`${input ? 'opacity-1 z-40' : 'opacity-0 -z-40'} fixed h-screen w-full top-0 flex justify-center items-center duration-300`}>
                <div className={`bg-opacity-95 absolute h-screen  w-full  bg-main`} onClick={() => setInput(false)}>
                </div>
                <div className="mx-5 md:mx-0 absolute flex flex-col bg-white text-paragraph text-center p-10 rounded-xl text-xl">
                    <button onClick={() => setInput(false)} className='absolute top-2 right-3 text-3xl'>x</button>
                    <h2 className="my-2 uppercase text-2xl text-main">Datos Bancarios</h2>
                    <p><span className="font-bold">CBU:</span> 1234567891011121314</p>
                    <p><span className="font-bold">Alias:</span> Name.123</p>
                    <br />
                    <p>En el concepto de la transferencia,</p>
                    <p>colocar en Varios:</p>
                    <p>Regalo Pilar. ¡Gracias!</p>
                </div>
            </div>

            <Fade cascade direction="up" delay={200} triggerOnce={true} duration={1000} >
                <div className="flex flex-col justify-items-center items-center text-center mx-auto py-12 bg-black bg-opacity-80">
                    <div className="mb-8">
                        <FontAwesomeIcon icon={faGift} className="text-6xl sm:text-7xl text-white" />
                    </div>
                    <div className="flex flex-col px-8 leading-7 text-white sm:text-lg">
                        <p>El mejor regalo es que vengas,</p>
                        <p>pero si deseás regalarme algo, ¡me podés ayudar con mi viaje!</p>
                    </div>

                    <button onClick={() => setInput(true)} className=' text-center mt-6 rounded-3xl bg-main text-lg text-white px-6 py-2 hover:bg-transparent hover:outline-main hover:outline hover:outline-1 hover:text-main duration-200'>VER DATOS</button>

                </div>
            </Fade>


        </div>
    )
}