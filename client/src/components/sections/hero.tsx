import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage from "@assets/hero-engineering.svg";

export function Hero() {
  return (
    <section className="hero-gradient text-white py-24 md:py-40 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="slide-in-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-4">
                ✨ Advanced Engineering Solutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Engineering <span className="gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Insight</span> Through Simulation
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed stagger-1 font-light">
              Empowering global clients to create safer, lighter, and more cost-effective products through advanced FEA, CAD modeling, and simulation-driven design.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 stagger-2">
              <Link href="/case-studies" className="inline-block">
                <Button className="btn-gradient text-white px-10 py-5 rounded-2xl font-semibold text-lg border-0 shadow-2xl w-full sm:w-auto">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services" className="inline-block">
                <Button variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white hover:text-primary shadow-xl w-full sm:w-auto">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative slide-in-right">
            <div className="relative">
              {/* Floating background elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
              
              <div className="animate-float glass-card p-2 rounded-3xl">
                <img 
                  src={heroImage} 
                  alt="Advanced engineering simulation and CAD modeling workspace" 
                  className="rounded-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
