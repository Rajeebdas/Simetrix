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
      image: "https://www.vecteezy.com/photo/22190916-electric-cars-with-pack-of-battery-cells-module-on-platform-in-a-row"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto stagger-1">
            Delivering specialized engineering solutions across diverse industrial sectors with precision and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className={`text-center group fade-in stagger-${(index % 4) + 1} transform hover:translateY(-4px) transition-all duration-300`}>
              <img 
                src={industry.image}
                alt={industry.title}
                className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl" 
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-secondary">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
