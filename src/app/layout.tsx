import type { Metadata } from "next";
import { Geist } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "MASTERCONT - Contadores Associados em Palmas TO | Contabilidade de Alto Padrão",
  description:
    "Escritório de contabilidade em Palmas - Tocantins. Especialistas em planejamento tributário, gestão fiscal, abertura de empresas e consultoria empresarial. Atendimento personalizado para empresas que buscam crescimento sólido na região.",
  keywords:
    "contador em Palmas, contabilidade Palmas Tocantins, escritório contábil Palmas TO, planejamento tributário Palmas, abertura de empresa Palmas, gestão fiscal Tocantins, contador especialista Palmas, MASTERCONT, contadores associados Palmas",
  openGraph: {
    title: "MASTERCONT - Escritório de Contabilidade em Palmas TO",
    description:
      "Contabilidade de alto padrão em Palmas - Tocantins. Planejamento tributário, gestão fiscal e consultoria empresarial para o seu negócio crescer.",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.mastercont.com.br" },
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
