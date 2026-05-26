import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Contact";
import { FloatingContactDock } from "@/components/FloatingContactDock";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navigation />
      <div className="w-full">
        <Hero />
        <About />
        <Experience />
        <Skills />
      </div>
      <Footer />
      <FloatingContactDock />
    </main>
  );
}
