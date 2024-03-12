/* eslint-disable @next/next/no-img-element */
'use client'
import Image from "next/image";
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
              className="filter brightness-75"
            />,
            expanded: false,
            speed: -70,
          },
          {
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src="/tituloBaner.png" alt="titulo banner" width={432} height={135} />
              </div>
            ),
            speed: -45,
          },
        ]}
        className="h-screen"
      />
      <Time />
    </section>
  );
}
