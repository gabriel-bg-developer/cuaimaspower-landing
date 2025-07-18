import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Fuente principal más elegante y profesional para emprendedoras
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CuaimasPower - Empodera tu Negocio Digital",
  description: "Programa exclusivo para mujeres emprendedoras visionarias. Marketing digital, desarrollo web y mentorías personalizadas.",
};

// Layout raíz de la aplicación
// Este layout envuelve toda la aplicación y define la estructura HTML básica
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
