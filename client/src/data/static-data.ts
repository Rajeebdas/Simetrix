// Static data for testimonials and case studies - no database needed

export const staticTestimonials = [
  {
    id: "1",
    name: "R.K. Sharma",
    position: "Engineering Director",
    company: "MechTech Industries",
    content: "Simetric's FEA analysis helped us reduce our product weight by 25% while maintaining structural integrity. Their expertise in simulation-driven design is exceptional.",
    rating: 5,
    featured: true,
    createdAt: new Date('2024-01-15')
  },
  {
    id: "2", 
    name: "D Mukesh KUmar",
    position: "Lead Design Engineer",
    company: "AutoCorp Manufacturing",
    content: "The CAD modeling and optimization work delivered by Simetric exceeded our expectations. They helped us achieve significant cost savings in our manufacturing process.",
    rating: 5,
    featured: true,
    createdAt: new Date('2024-02-20')
  },
  {
    id: "3",
    name: "Er Prince Reddy",
    position: "Project Manager", 
    company: "Heavy Machinery Co",
    content: "Professional, timely, and results-driven. Simetric's reverse engineering services helped us modernize our legacy equipment design efficiently.",
    rating: 5,
    featured: true,
    createdAt: new Date('2024-03-10')
  }
];

export const staticCaseStudies = [
  {
    id: "1",
    title: "Commercial Vehicle Frame Optimization",
    slug: "commercial-vehicle-frame-optimization",
    category: "Weight Optimization",
    client: "TruckLine Manufacturing",
    challenge: "Reduce frame weight by 20% while maintaining load capacity and safety standards for heavy-duty commercial vehicles.",
    solution: "Applied topology optimization and advanced FEA analysis using ANSYS to identify material removal opportunities. Redesigned critical joints and implemented high-strength steel in key stress areas.",
    results: "Achieved 22% weight reduction, maintained 100% load capacity, passed all safety certifications, and reduced manufacturing costs by 15%.",
    timeline: "8 weeks",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: true,
    createdAt: new Date('2024-01-01')
  },
  {
    id: "2", 
    title: "EV Battery Housing Design",
    slug: "ev-battery-housing-design",
    category: "EV Systems",
    client: "ElectricDrive Innovations",
    challenge: "Design lightweight, crash-resistant battery housing for electric vehicle platform with thermal management requirements.",
    solution: "Created advanced CAD model in CATIA with integrated cooling channels. Performed comprehensive crash simulation and thermal analysis to optimize design.",
    results: "30% lighter than previous design, improved thermal efficiency by 25%, passed all crash safety tests, and reduced assembly time by 40%.",
    timeline: "12 weeks",
    imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: true,
    createdAt: new Date('2024-02-01')
  },
  {
    id: "3",
    title: "Industrial Machinery Fatigue Analysis", 
    slug: "industrial-machinery-fatigue-analysis",
    category: "Fatigue Analysis",
    client: "HeavyTech Industries",
    challenge: "Assess fatigue life of critical welded joints in heavy industrial machinery operating under cyclic loading conditions.",
    solution: "Conducted detailed weld fatigue analysis using advanced FEA techniques. Performed life prediction studies and recommended design modifications for extended service life.",
    results: "Extended equipment life by 50%, reduced maintenance costs by 35%, eliminated unexpected failures, and improved operational efficiency.",
    timeline: "6 weeks", 
    imageUrl: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    featured: true,
    createdAt: new Date('2024-03-01')
  }
];