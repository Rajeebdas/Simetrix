import evBatteryImage from "@assets/Electrical-vehical.jpg";

export function Industries() {
  const industries = [
    {
      title: "Industrial Machinery",
      description: "Heavy equipment, manufacturing systems, and industrial automation components",
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Commercial Vehicles",
      description: "Truck chassis, commercial vehicle frames, and heavy-duty transportation systems",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "Trailers & Suspension",
      description: "Axle systems, suspension components, and trailer structural engineering",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
    },
    {
      title: "EV & Battery Systems",
      description: "Battery housings, EV chassis, and electric vehicle component design",
      image: evBatteryImage
    }
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(99,102,241,0.1)_1px,transparent_0)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-4">
            🏭 Industry Expertise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Industries We Serve</h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto stagger-1 leading-relaxed">
            Delivering specialized engineering solutions across diverse industrial sectors with precision and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className={`text-center group fade-in stagger-${(index % 4) + 1} relative`}>
              <div className="relative overflow-hidden rounded-3xl mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-sm font-medium">Specialized Solutions</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">{industry.title}</h3>
              <p className="text-secondary leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
