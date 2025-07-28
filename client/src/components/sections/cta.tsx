import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTA() {
  return (
    <section className="hero-gradient text-white py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="fade-in">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white/90 font-medium mb-8">
            🚀 Ready to Start Your Project?
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Ready to Transform Your 
            <span className="gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"> Engineering Challenges?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 stagger-1 leading-relaxed max-w-4xl mx-auto">
            Get a free consultation and discover how simulation-driven design can accelerate your product development and reduce costs by up to 40%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center stagger-2">
            <Link href="/contact" className="inline-block">
              <Button className="btn-gradient text-white px-12 py-6 rounded-2xl font-bold text-xl border-0 shadow-2xl w-full sm:w-auto">
                Get Free Consultation
              </Button>
            </Link>
            <Link href="/case-studies" className="inline-block">
              <Button variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary shadow-xl w-full sm:w-auto">
                View Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
