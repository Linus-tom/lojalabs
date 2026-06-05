import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LojaLabs — Soluções de IA para o seu negócio",
  description:
    "Automatize processos, crie agentes inteligentes e escale com tecnologia que trabalha por você. Powered by AgLabs.",
  keywords: ["IA", "automação", "agentes", "inteligência artificial", "AgLabs", "LojaLabs"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "LojaLabs — Soluções de IA",
    description: "Automatize processos e escale com IA. Powered by AgLabs.",
    url: "https://lojalabs.com.br",
    siteName: "LojaLabs",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${syne.variable} font-[family-name:var(--font-inter)] antialiased`}>
        {children}
      </body>
    </html>
  );
}
