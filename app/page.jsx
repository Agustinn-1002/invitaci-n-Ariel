'use client'
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
import { ParallaxBanner } from "react-scroll-parallax";
import Time from "./components/Time";


export default function Home() {

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
            speed: -60,
          },
          {
            children: (
              <Fade delay={100} triggerOnce={true} duration={1500} className="absolute inset-0 flex items-center justify-center">
                <Zoom delay={100} triggerOnce={true} duration={1000}>
                  <Image src="/tituloBaner.png" alt="titulo banner" width={439} height={250} />
                </Zoom>
              </Fade>
            ),
            speed: -45,
          },
        ]}
        className="h-screen"
      />
      <Time />
      <div className="h-screen">

      </div>
    </section>
  );
}
