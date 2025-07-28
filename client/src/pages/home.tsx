import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageMeta } from "@/components/layout/page-meta";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageMeta 
        title="Home"
        description="Simetric provides advanced FEA analysis, CAD modeling, and simulation-driven design services. Helping global clients create safer, lighter, and more cost-effective products through engineering simulation."
        keywords="FEA analysis, CAD modeling, engineering simulation, finite element analysis, structural analysis, weight optimization, product design, engineering consultancy"
        canonical="https://simetric.com"
      />
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Industries />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
