import Biography from "@/components/Biography";
import Fashion from "@/components/Fashion";
import Hero from "@/components/Hero";
import RedCarpert from "@/components/RedCarpert";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Trending />
      <RedCarpert />
      <Biography />
      {/* <Fashion /> */}
    </main>

  );
}
