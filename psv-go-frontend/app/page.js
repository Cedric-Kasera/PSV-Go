import React from "react";
import HeroBanner from "@/components/HeroBanner";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="py-4 space-y-4">
      <HeroBanner />
      <Services />
    </div>
  );
}
