import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Time() {
    const [partyTime, setPartyTime] = useState(false);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const target = new Date("05/01/2024 23:59:59");
    
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
        <main className="h-screen">
        <div className="h-52 flex flex-row items-center justify-center bg-red-300">
          {partyTime ? (
            <Fade direction="up" delay={300} triggerOnce={true} duration={800}>
              <h1>Llego el dia!</h1>
            </Fade>
          ) : (
            <Fade direction="up" delay={300} triggerOnce={true} duration={800} className="flex items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-gray-50 w-28 h-28 rounded-full">
                <span className="text-4xl text-gray-500">{days}</span>
                <span className="text-red-300 text-xl font-semibold ">Days</span>
              </div>

              <span className="mx-3 text-gray-50 text-3xl font-semibold">:</span>

              <div className="flex flex-col items-center justify-center bg-gray-50 w-28 h-28 rounded-full">
                <span className="text-4xl text-gray-500">{hours}</span>
                <span className="text-red-300 text-xl font-semibold">Hs</span>
              </div>

              <span className="mx-3 text-gray-50 text-3xl font-semibold">:</span>

              <div className="flex flex-col items-center justify-center bg-gray-50 w-28 h-28 rounded-full">
                <span className="text-4xl text-gray-500">{minutes}</span>
                <span className="text-red-300 text-xl font-semibold">Min</span>
              </div>

              <span className="mx-3 text-gray-50 text-3xl font-semibold">:</span>

              <div className="flex flex-col items-center justify-center bg-gray-50 w-28 h-28 rounded-full">
                <span className="text-4xl text-gray-500">{seconds}</span>
                <span className="text-red-300 text-xl font-semibold">Seg</span>
              </div>
            </Fade>
          )}
        </div>
      </main>
    )
}

