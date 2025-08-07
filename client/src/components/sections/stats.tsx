export function Stats() {
  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "150+", label: "Satisfied Clients" },
    { value: "30%", label: "Avg Cost Reduction" },
    { value: "40%", label: "Faster Time to Market" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`fade-in stagger-${(index % 4) + 1} transform hover:scale-110 transition-all duration-300`}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
