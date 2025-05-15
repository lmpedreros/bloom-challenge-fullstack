import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from 'next/image';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desafío Dev - Bloom Reuse",
  description: "Preguntas frecuentes para vendedores por marca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="p-4 border-b">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href={"/"} className="flex items-center">
              <h1 className="text-xl font-bold">Bloom Reuse</h1>
            </Link>
            <Image 
              src="/images/Logo-Bloom.png" 
              alt="Logo" 
              width={100} 
              height={40} 
              className="h-10 w-auto" 
            />
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}