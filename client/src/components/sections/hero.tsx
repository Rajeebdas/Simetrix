import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/hero-engineering.svg";

export function Hero() {
  return (
    <section className="hero-gradient text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Engineering <span className="text-sky-200">Insight</span> Through Simulation
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed stagger-1">
              Empowering global clients to create safer, lighter, and more cost-effective products through advanced FEA, CAD modeling, and simulation-driven design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 stagger-2">
              <Link href="/contact" className="inline-block">
                <Button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/case-studies" className="inline-block">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative slide-in-right">
            <div className="animate-float">
              <img 
                src={heroImage} 
                alt="Advanced engineering simulation and CAD modeling workspace" 
                className="rounded-xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
