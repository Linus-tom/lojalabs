"use client";

import { ArrowUpRight, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Templates React",
    image:
      "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/link%20na%20bio/vibekit-2.png",
    href: "https://templates.aglabs.ia.br/",
  },
  {
    title: "Cortes Virais",
    image:
      "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/link%20na%20bio/cortes%20virais.png",
    href: "https://cortes-virais.pages.dev/",
  },
  {
    title: "Pack Canva",
    image:
      "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/link%20na%20bio/canvaa.png",
    href: "https://pack-canva.pages.dev/",
  },
  {
    title: "Achadinhos",
    image:
      "https://udcsokdtdqqdnoqozbxh.supabase.co/storage/v1/object/public/heros-lp/link%20na%20bio/achadinho.png",
    href: "https://afiliados-aeq.pages.dev/amz/",
  },
];

const navigation = [
  { name: "Início", href: "/" },
  { name: "Blog", href: "https://aglabs.ia.br/blog", external: true },
  { name: "Websites", href: "https://lp.aglabs.ia.br/", external: true },
  { name: "Agentes IA", href: "https://rag.aglabs.api.br/", external: true },
];

export function CommerceHero() {
  return (
    <div className="w-full relative container px-2 mx-auto max-w-7xl min-h-screen">
      {/* ─── Hero card ─── */}
      <div
        className="mt-6 rounded-2xl relative overflow-hidden"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/1200x/b3/be/3a/b3be3a3d7253c5e0d796574cae5a3391.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay sobre o bg do card hero */}
        <div className="absolute inset-0 bg-black/75 z-0" />
        {/* ─── Header ─── */}
        <header className="flex items-center relative z-10">
          {/* Left: logo + nav */}
          <div className="w-full md:w-2/3 lg:w-1/2 bg-background/95 backdrop-blur-sm p-4 rounded-br-2xl flex items-center gap-2">
            <a href="/" className="flex-shrink-0 mr-2">
              <img
                src="/logo-aglabs.png"
                alt="AgLabs"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>

            <nav className="hidden lg:flex items-center justify-between w-full">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="link"
                  className="cursor-pointer relative group hover:text-primary transition-colors font-medium text-foreground/80"
                  asChild
                >
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.name}
                  </a>
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer text-foreground/80 hover:text-foreground hover:bg-transparent transition-colors"
              >
                <Search className="w-5 h-5" />
              </Button>
            </nav>

            {/* Mobile hamburger */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden ml-auto">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-md border-r border-border/50"
              >
                <SheetHeader className="p-6 text-left border-b border-border/50">
                  <SheetTitle className="flex items-center justify-between">
                    <a href="/">
                      <img
                        src="/logo-aglabs.png"
                        alt="AgLabs"
                        className="h-7 w-auto brightness-0 invert"
                      />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-6 space-y-1">
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      variant="ghost"
                      className="justify-start px-2 h-12 text-base font-medium hover:bg-accent/20 hover:text-primary transition-colors"
                      asChild
                    >
                      <a
                        href={item.href}
                        {...(item.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {item.name}
                      </a>
                    </Button>
                  ))}
                </nav>
                <Separator className="mx-6" />
                <div className="p-6 flex flex-col gap-4">
                  <Button
                    variant="outline"
                    className="justify-start gap-2 h-12 hover:bg-accent/20 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Buscar
                  </Button>
                </div>
                <Separator className="mx-6" />
                <div className="p-6">
                  <Button
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                    asChild
                  >
                    <a
                      href="https://aglabs.ia.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ir para AgLabs
                      <ArrowUpRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Right: CTA button */}
          <div className="hidden md:flex w-1/2 justify-end items-center pr-4 gap-4 ml-auto">
            <Button
              variant="secondary"
              className="cursor-pointer bg-primary/10 border border-primary/30 p-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <a
                href="https://aglabs.ia.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="pl-4 py-2 text-sm font-medium text-foreground">
                  Ir para AgLabs
                </span>
                <div className="rounded-full flex items-center justify-center m-auto bg-primary w-10 h-10 ml-2 group-hover:scale-110 transition-transform duration-300">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </a>
            </Button>
          </div>
        </header>

        {/* ─── Hero text ─── */}
        <motion.section
          className="w-full px-4 py-24 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.15]"
              style={{ fontFamily: "var(--font-syne), sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                Produtos digitais
              </span>
              <br />
              <span className="text-foreground">que geram resultado.</span>
            </motion.h1>
            <motion.p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Templates, ferramentas de IA e recursos premium criados pela
              AgLabs para acelerar seu negócio ou projeto criativo.
            </motion.p>
          </div>
        </motion.section>
      </div>

      {/* ─── Product cards ─── */}
      <div
        id="produtos"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mt-12 pb-16"
      >
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            className="group relative bg-muted/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] w-full overflow-hidden transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            {/* bg image — sem overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              style={{ backgroundImage: `url(${category.image})` }}
            />

            <a
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
            >
              {/* arrow button bottom-right — sem borda */}
              <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-black/80 backdrop-blur-sm rounded-tl-xl flex items-center justify-center z-10">
                <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
