import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const BASE_URL = "https://www.mastercont.com.br";

export const metadata: Metadata = {
  title:
    "Mastercont – Contabilidade Consultiva em Palmas TO | CRC/TO 000860/O",
  description:
    "Escritório de contabilidade consultiva em Palmas — Tocantins. Planejamento tributário, recuperação tributária, BPO financeiro e consultoria empresarial. Transformamos números em decisões estratégicas. CRC/TO 000860/O.",
  keywords:
    "contador em Palmas, contabilidade Palmas Tocantins, recuperação tributária Palmas, planejamento tributário Palmas TO, abertura de empresa Palmas, departamento pessoal Tocantins, BPO financeiro Palmas, Mastercont, CRC/TO 000860",
  openGraph: {
    title: "Mastercont – Contabilidade Consultiva em Palmas TO",
    description:
      "Contabilidade consultiva que transforma números em decisões estratégicas. Planejamento tributário, recuperação tributária e gestão empresarial em Palmas — TO.",
    type: "website",
    locale: "pt_BR",
    url: BASE_URL,
    siteName: "Mastercont",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Mastercont – Contabilidade Consultiva em Palmas TO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mastercont – Contabilidade Consultiva em Palmas TO",
    description:
      "Contabilidade consultiva que transforma números em decisões estratégicas. Planejamento tributário, recuperação tributária e gestão empresarial em Palmas — TO.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${instrumentSerif.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
