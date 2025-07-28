import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Zap, Settings, BarChart3, RotateCcw, FileText } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8 text-white" />,
      title: "Finite Element Analysis",
      description: "Structural, thermal, and vibration analysis using ANSYS for precise engineering validation and optimization.",
      features: ["Structural Analysis", "Thermal Simulation", "Vibration Testing"]
    },
    {
      icon: <Settings className="w-8 h-8 text-white" />,
      title: "CAD Design & 3D Modeling",
      description: "Professional 3D modeling and design using CATIA and Siemens NX for precision engineering solutions.",
      features: ["CATIA & Siemens NX", "Parametric Design", "Technical Documentation"]
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Weight & Cost Optimization",
      description: "Reduce mass and manufacturing costs while maintaining structural integrity and performance standards.",
      features: ["Material Optimization", "Topology Studies", "Cost Analysis"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Weld & Fatigue Life Assessment",
      description: "Comprehensive durability testing and life prediction for welded structures and critical components.",
      features: ["Fatigue Analysis", "Weld Assessment", "Life Prediction"]
    },
    {
      icon: <RotateCcw className="w-8 h-8 text-white" />,
      title: "Reverse Engineering",
      description: "Convert physical parts into precise CAD data for analysis, modification, and manufacturing optimization.",
      features: ["3D Scanning", "CAD Reconstruction", "Design Optimization"]
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Design Documentation",
      description: "Comprehensive technical reports, DFMEA, BOM, and professional documentation for engineering validation.",
      features: ["DFMEA Reports", "Technical BOM", "Validation Reports"]
    }
  ];

  return (
    <section className="section-gradient py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            🚀 Premium Engineering Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Our Engineering Services</h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto stagger-1 leading-relaxed">
            Advanced simulation and design solutions that transform your engineering challenges into market-ready products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} className={`service-card border-0 overflow-hidden fade-in stagger-${(index % 4) + 1} relative group`}>
              <CardContent className="p-8 relative z-10">
                <div className="w-20 h-20 btn-gradient rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-secondary mb-8 leading-relaxed">{service.description}</p>
                <ul className="text-sm text-secondary space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center transform hover:translate-x-2 transition-transform duration-300">
                      <div className="w-5 h-5 btn-gradient rounded-full flex items-center justify-center mr-3 shadow-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
