import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageMeta } from "@/components/layout/page-meta";
import { CheckCircle, Target, Eye } from "lucide-react";
import aboutImage from "@assets/About1.mp4";

export default function About() {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      title: "Practical Solutions",
      description: "We focus on manufacturable design solutions that work in the real world."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision Engineering",
      description: "Advanced simulation and analysis ensure accuracy in every project."
    },
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Transparent Process",
      description: "Clear communication and professional reports throughout every phase."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageMeta 
        title="About Us"
        description="Learn about Simetrix's engineering expertise in FEA analysis, CAD modeling, and simulation-driven design. Discover our mission to create safer, lighter, and more cost-effective products."
        keywords="about simetrix, engineering company, FEA experts, CAD modeling specialists, simulation engineering team"
        canonical="https://simetrix.com/about"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Simetrix</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Engineering insight through simulation-driven design excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                  Simetrix is an engineering design and simulation consultancy specializing in advanced Finite Element Analysis (FEA) and CAD modeling. We empower global clients to create safer, lighter, and more cost-effective products by blending engineering expertise with simulation-driven design.
                </p>
                <p>
                  At Simetrix, we focus on structural & thermal analysis, CAD design & optimization, welded structures, trailer & tractor (Chassis, Suspension, Axle, Landing, Leg, etc) and industrial components along with professional design documentation and validation reports.
                </p>
                <p>
                  With a passion for precision and innovation, we help manufacturers and startups worldwide reduce prototyping costs, shorten development cycles, and bring better products to market — faster.
                </p>
              </div>
            </div>
            <div>
              <video 
                src={aboutImage}
                alt="Professional engineering team collaborating"
                className="rounded-xl shadow-lg w-full h-auto"
                controls
                muted
                autoPlay
                loop
                playsInline
                preload="auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-secondary leading-relaxed">
                To unlock the true potential of engineering designs by combining advanced simulation, creative problem-solving, and data-driven insights — making products safer, leaner, and market-ready.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-secondary leading-relaxed">
                To be the catalyst that redefines how industries worldwide design, validate, and optimize products — making simulation an everyday driver of innovation and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              The principles that guide our engineering excellence and client relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Simetrix?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Practical, Manufacturable Solutions</h3>
              <p className="text-sm text-secondary">Optimized for real-world manufacturing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Faster Design Cycles</h3>
              <p className="text-sm text-secondary">Reduced cost & lead time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Transparent Communication</h3>
              <p className="text-sm text-secondary">Professional reports & regular updates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Delivery from India</h3>
              <p className="text-sm text-secondary">Cost-effective with international quality</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
