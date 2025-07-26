import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="hero-gradient text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Engineering <span className="text-sky-200">Insight</span> Through Simulation
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Empowering global clients to create safer, lighter, and more cost-effective products through advanced FEA, CAD modeling, and simulation-driven design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Advanced engineering simulation and CAD modeling workspace" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
