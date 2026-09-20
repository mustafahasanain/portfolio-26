import { Navbar } from "@/components";
import { Commitment, Contact, Hero, Services, Showcase, TechStack } from "@/sections";

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
    </main>
  );
}
