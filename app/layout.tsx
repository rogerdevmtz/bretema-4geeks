import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Brétema · Estancias en Galicia", template: "%s · Brétema" },
  description: "Demo académica de alojamientos en Galicia.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="es">
    <body>
      {children}
      <footer className="border-t border-line px-5 py-8 text-center text-sm text-ink/75">Brétema · Proyecto académico para 4Geeks · Alojamientos ficticios</footer>
    </body>
  </html>
);
export default RootLayout;
