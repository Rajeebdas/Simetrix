import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Services } from "@/components/sections/services";
import { CTA } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Engineering Services</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
              Comprehensive simulation and design solutions for modern engineering challenges
            </p>
            <Link href="/contact">
              <Button className="bg-primary text-white px-8 py-3 hover:bg-blue-700">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Services />

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              A streamlined approach to deliver exceptional engineering solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
              <p className="text-secondary">Understanding your technical challenges and project goals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Simulation</h3>
              <p className="text-secondary">Advanced CAD modeling and FEA analysis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-secondary">Iterative refinement for optimal performance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery & Support</h3>
              <p className="text-secondary">Complete documentation and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
