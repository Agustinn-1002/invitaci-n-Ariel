import { Providers } from './providers';
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Pilar - Invitación Mis 15",
  description: "¡Te espero el Sábado 11 de Mayo de 21:00 hs para festejar este gran momento de mi vida! Palatium Salón Novus, Circuito turistico Challao. (A 500 metros de la rotonda del Santuario del Challao) Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia! Rogamos puntualidad. ¡Gracias por acompañarme en este momento tan importante!",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
