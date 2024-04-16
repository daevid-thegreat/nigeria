import Hero from "@/components/Hero";
import About from "@/components/About";
import Population from "@/components/Population";

export default function Home() {
  return (
    <main className="font-ojuju overflow-y-auto">
        <Hero/>
        <About/>
        <Population/>
    </main>
  );
}
