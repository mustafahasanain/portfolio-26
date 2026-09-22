import { Navbar } from "@/components";
import { Commitment, Contact, Footer, Hero, Services, Showcase, TechStack } from "@/sections";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
      <TechStack />
      <Commitment />
      <Contact />
      <Footer />
    </main>
  );
}
