import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Industries } from "@/components/sections/industries";
import { CTA } from "@/components/sections/cta";
import evBatteryImage from "@assets/vecteezy_electric-cars-with-pack-of-battery-cells-module-on-platform_22190916.jpg";

export default function IndustriesPage() {
  const industryDetails = [
    {
      title: "Commercial Vehicles",
      description: "Comprehensive engineering solutions for commercial vehicle manufacturers, focusing on chassis design, structural optimization, and safety compliance.",
      applications: [
        "Truck chassis and frames",
        "Heavy-duty vehicle components",
        "Transportation systems",
        "Load-bearing structures"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Industrial Machinery",
      description: "Advanced simulation and design services for industrial equipment manufacturers, ensuring reliability and performance under demanding conditions.",
      applications: [
        "Heavy manufacturing equipment",
        "Automation systems",
        "Processing machinery",
        "Material handling systems"
      ],
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Trailer & Suspension Systems",
      description: "Specialized expertise in trailer engineering, axle systems, and suspension components for optimal performance and durability.",
      applications: [
        "Trailer axle systems",
        "Suspension components",
        "Load distribution systems",
        "Structural reinforcement"
      ],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Electric Vehicle & Battery Systems",
      description: "Cutting-edge solutions for the evolving EV industry, including battery housing design and electric vehicle chassis optimization.",
      applications: [
        "Battery housing design",
        "EV chassis optimization",
        "Thermal management systems",
        "Safety compliance"
      ],
      image: evBatteryImage
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Industries We Serve</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Delivering specialized engineering solutions across diverse industrial sectors with precision and expertise
            </p>
          </div>
        </div>
      </section>

      <Industries />

      {/* Detailed Industry Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industryDetails.map((industry, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{industry.title}</h2>
                  <p className="text-lg text-secondary mb-8 leading-relaxed">
                    {industry.description}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Applications:</h3>
                    <ul className="space-y-2">
                      {industry.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-secondary">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img 
                    src={industry.image}
                    alt={industry.title}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
