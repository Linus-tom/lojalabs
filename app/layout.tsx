import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://lojalabs.com.br"),
  title: "LojaLabs — Soluções de IA para o seu negócio",
  alternates: { canonical: "/" },
  description:
    "Automatize processos, crie agentes inteligentes e escale com tecnologia que trabalha por você. Powered by AG LABS.",
  keywords: ["IA", "automação", "agentes", "inteligência artificial", "AG LABS", "LojaLabs"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "LojaLabs — Soluções de IA",
    description: "Automatize processos e escale com IA. Powered by AG LABS.",
    url: "https://lojalabs.com.br",
    siteName: "LojaLabs",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const PRODUCTS = [
  { name: "Templates React (VibeKit)", url: "https://templates.aglabs.ia.br/" },
  { name: "Cortes Virais", url: "https://cortes-virais.pages.dev/" },
  { name: "Pack Canva", url: "https://pack-canva.pages.dev/" },
  { name: "Achadinhos", url: "https://afiliados-aeq.pages.dev/amz/" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aglabs.ia.br/#organization",
      name: "AG LABS Intelligence",
      alternateName: "AG LABS",
      url: "https://aglabs.ia.br/",
      logo: "https://lojalabs.com.br/logo-aglabs.png",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61573483665476",
        "https://www.instagram.com/ag_labs/",
        "https://x.com/aglabsrv",
        "https://www.linkedin.com/company/ag-labs",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lojalabs.com.br/#website",
      url: "https://lojalabs.com.br/",
      name: "LojaLabs",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://aglabs.ia.br/#organization" },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://lojalabs.com.br/#webpage",
      url: "https://lojalabs.com.br/",
      name: "LojaLabs — Soluções de IA para o seu negócio",
      isPartOf: { "@id": "https://lojalabs.com.br/#website" },
      about: { "@id": "https://aglabs.ia.br/#organization" },
      inLanguage: "pt-BR",
      mainEntity: {
        "@type": "ItemList",
        itemListElement: PRODUCTS.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: p.name,
          url: p.url,
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${syne.variable} font-[family-name:var(--font-inter)] antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
