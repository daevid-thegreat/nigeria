import Hero from "@/components/Hero";
import About from "@/components/About";
import Population from "@/components/Population";
import Facts from "@/components/Facts";

export default function Home() {
  return (
    <main className="font-ojuju overflow-y-auto">
        <Hero/>
        <About/>
        <Population/>
        <Facts/>
    </main>
  );
}
