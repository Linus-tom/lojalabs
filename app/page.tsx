import { CommerceHero } from "@/components/ui/loja-labs-hero";
import { ProductLogoCloud } from "@/components/ui/product-logo-cloud";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CommerceHero />
      {/* Fora do container do hero: a faixa de logos precisa da largura
          total da página para as linhas atravessarem de ponta a ponta. */}
      <ProductLogoCloud />
    </main>
  );
}
