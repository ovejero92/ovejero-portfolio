import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/main.css";
import "../styles/index.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Ovejero - Full Stack Developer",
  description: "Portfolio profesional de Gustavo Ovejero. Desarrollador Full Stack especializado en React, Next.js, Django, Spring Boot y más.",
  keywords: "desarrollador, full stack, portfolio, react, next.js, django, spring boot",
  authors: [{ name: "Gustavo Ovejero" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* preconnect + font stylesheet for Allkin and Ramsina */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Allkin&family=Ramsina&display=swap"
          rel="stylesheet"
        />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://kit.fontawesome.com/76e20a326e.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
