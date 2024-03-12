'use client'
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
import { ParallaxBanner } from "react-scroll-parallax";
import Time from "./components/Time";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  let queryData = window.innerWidth
  console.log(queryData);

  return (
    <section>
      <ParallaxBanner
        layers={[
          {
            children: <Image
              src="/banerParallax.jpg"
              alt="Sahara Desert landscape"
              fill
              objectFit="cover"
              className="filter brightness-75 w-full h-full"
            />,
            expanded: false,
            speed: queryData <= 1024 ? 0 : -60,
          },
          {
            children: (
              <div>
                <Fade delay={100} triggerOnce={true} duration={1500} className="absolute inset-0 flex items-center justify-center">
                  <Zoom delay={100} triggerOnce={true} duration={1000}>
                    <Image src="/tituloBaner.png" alt="titulo banner" width={439} height={250} />
                  </Zoom>
                </Fade>

              </div>
            ),
            speed: -30,
          },
        ]}
        className="h-screen"
      />
      <Fade duration={1500} delay={100} className="text-white absolute bottom-20 w-full text-center text-xl ">
        <FontAwesomeIcon icon={faChevronDown} className='fa-bounce text-5xl data' />
      </Fade>
      <Time />

      <div className="h-screen">

      </div>
    </section>
  );
}
