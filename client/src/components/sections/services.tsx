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
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Engineering Services</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto stagger-1">
            Advanced simulation and design solutions that transform your engineering challenges into market-ready products
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`service-card bg-white hover:shadow-xl transition-all duration-300 fade-in stagger-${(index % 4) + 1}`}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-secondary mb-6">{service.description}</p>
                <ul className="text-sm text-secondary space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center transform hover:translate-x-1 transition-transform duration-200">
                      <div className="w-4 h-4 bg-success rounded-full flex items-center justify-center mr-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
