import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Time() {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("10/03/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="">
      <div className="h-40 sm:h-52 flex flex-col items-center justify-center bg-main">
        {partyTime ? (
          <Fade direction="up" delay={300} triggerOnce={true} duration={800}>
            <h1 className="text-gray-50 text-2xl sm:text-3xl font-medium mb-3 uppercase">Llegó el Gran día!</h1>
            <h2 className="text-gray-50 text-1xl sm:text-2xl font-light mb-3">Te Espero para esta Gran Noche</h2>
          </Fade>
        ) : (
          <Fade direction="up" delay={300} triggerOnce={true} duration={800} >
        <Fade direction="up" delay={300} triggerOnce={true} duration={800}>
          <h2 className="text-gray-50 text-2xl sm:text-3xl font-light mb-3">Falta:</h2>
        </Fade>
            <div className="flex sm:flex-row items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-gray-50 p-9 w-16 h-16 sm:w-28 sm:h-28 rounded-full">
                <span className="text-2xl sm:text-4xl text-gray-800">{days}</span>
                <span className="text-main text-lg sm:text-xl font-semibold ">Dias</span>
              </div>

              <span className="mx-1 sm:mx-3 text-gray-50 text-2xl sm:text-3xl font-semibold">:</span>

              <div className="flex flex-col items-center justify-center bg-gray-50 p-9 w-16 h-16 sm:w-28 sm:h-28 rounded-full">
                <span className="text-2xl sm:text-4xl text-gray-800">{hours}</span>
                <span className="text-main text-lg sm:text-xl font-semibold">Hs.</span>
              </div>

              <span className="mx-1 sm:mx-3 text-gray-50 text-2xl sm:text-3xl font-semibold">:</span>

              <div className="flex flex-col items-center justify-center bg-gray-50 p-9 w-16 h-16 sm:w-28 sm:h-28 rounded-full">
                <span className="text-2xl sm:text-4xl text-gray-800">{minutes}</span>
                <span className="text-main text-lg sm:text-xl font-semibold">Min.</span>
              </div>

              <span className="mx-1 sm:mx-3 text-gray-50 text-2xl sm:text-3xl font-semibold">:</span>

              <div className="flex flex-col items-center justify-center bg-gray-50 p-9 w-16 h-16 sm:w-28 sm:h-28 rounded-full">
                <span className="text-2xl sm:text-4xl text-gray-800">{seconds}</span>
                <span className="text-main text-lg sm:text-xl font-semibold">Seg.</span>
              </div>
            </div>
          </Fade>
        )}
      </div>
    </section>
  )
}

