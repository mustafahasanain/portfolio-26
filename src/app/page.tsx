import { Navbar } from "@/components";
import { Hero, Services, Showcase } from "@/sections";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Showcase />
      <Services />
    </main>
  );
}
