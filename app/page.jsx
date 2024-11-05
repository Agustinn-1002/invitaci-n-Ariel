'use client'
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
import { ParallaxBanner } from "react-scroll-parallax";
import Time from "./components/Time";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from 'react-responsive'
import PageInfo from "./components/PageInfo";
import Galeria from "./components/Galeria";
import Confirmation from "./components/Confirmation";
import Ig from "./components/Ig";
import Bank from "./components/Bank";
import Thanks from "./components/Thanks";

export default function Home() {
  let queryData = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <section>
      <ParallaxBanner
        layers={[
          {
            children: <Image
              src="/SolePortada.png"
              alt="Sahara Desert landscape"
              fill
              objectFit="cover"
              className="filter brightness-75 w-full h-full"
            />,
            expanded: false,
            speed: queryData ? 0 : -60,
          }

        ]}
        className="h-screen"
      />
      <Fade delay={100} triggerOnce={true} duration={1500} className="absolute inset-0 flex items-center justify-center">
        <Zoom delay={100} triggerOnce={true} duration={1000}>
          <Image src="/tituloBaner.png" alt="titulo banner" className="px-10 sm:px-0" width={430} height={250} />
        </Zoom>
      </Fade>
      <Fade duration={1500} delay={100} className="text-white absolute bottom-20 w-full text-center text-xl ">
        <FontAwesomeIcon icon={faChevronDown} className='fa-bounce text-5xl data' />
      </Fade>
      <Time />
      <PageInfo />
      <Galeria />
      <Confirmation />
      <Ig />
      <Thanks />
    </section>
  );
}
