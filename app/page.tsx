import Hero from "@/components/Hero";
import About from "@/components/About";
import Population from "@/components/Population";
import Facts from "@/components/Facts";
import Navigate from "@/components/Navigate";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-ojuju overflow-y-auto">
        <Hero/>
        <About/>
        <Population/>
        <Facts/>
        <Navigate/>
        <Gallery/>
        <Footer/>
    </main>
  );
}
