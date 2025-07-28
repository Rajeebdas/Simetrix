import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";


export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Testimonials />

      <Footer />
    </div>
  );
}
