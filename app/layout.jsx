import { Providers } from './providers';
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sole - 4.0",
  description: "¡Te espero el Sábado 30 de noviembre a las 21:00 hs para festejar mi cambio de década! Salón La Olivietta, Dorrego, M5515 Maipú, Mendoza. IMPORTANTE: Porfa, no te olvides de traer tu heladerita con lo que vayas a tomar. Clickeá en el botón de abajo y encontrá las indicaciones para llegar, ¡No faltes!",

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
