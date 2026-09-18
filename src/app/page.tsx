import { Navbar } from "@/components";
import { Hero, Showcase } from "@/sections";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Showcase />
    </main>
  );
}
