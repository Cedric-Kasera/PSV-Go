import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";
import Routesearch from "@/components/Routesearch";

export default function Home() {
  return (
    <div className="py-4 space-y-4">
      <HeroBanner />
      <Routesearch />
      <Services />
    </div>
  );
}
