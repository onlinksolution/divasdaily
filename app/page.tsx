import Biography from "@/components/Biography";
import Hero from "@/components/Hero";
import RedCarpert from "@/components/RedCarpert";
import Photoshoots from "@/components/Photoshoots";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Photoshoots />
      <RedCarpert />
      <Biography />
    </main>

  );
}
