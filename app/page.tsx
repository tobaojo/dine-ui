import { Gathering } from "./components/Gathering/Gathering";
import { Hero } from "./components/Hero";
import { Hightlights } from "./components/highlights/Hightlights";
import Footer from "./components/ui/Footer";
import { Features } from "./Features";

export default function Home() {
  return (
    <main className="mobile-stack">
      <Hero />
      <Features />
      <Hightlights />
      <Gathering />
      <Footer />
    </main>
  );
}
