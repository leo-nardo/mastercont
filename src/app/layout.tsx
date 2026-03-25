import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MASTERCONT - Contadores Associados | Contabilidade de Alto Padrão",
  description:
    "Escritório contábil de alto padrão especializado em gestão fiscal, planejamento tributário e consultoria empresarial. Transformamos a contabilidade da sua empresa em vantagem competitiva.",
  keywords:
    "contabilidade, planejamento tributário, gestão fiscal, consultoria empresarial, contadores, MASTERCONT",
  openGraph: {
    title: "MASTERCONT - Contadores Associados",
    description:
      "Contabilidade de Alto Padrão. Transformamos números em estratégia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} antialiased`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
