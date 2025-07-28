import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { staticTestimonials } from "@/data/static-data";

export function Testimonials() {
  const testimonials = staticTestimonials;
  const isLoading = false;

  if (isLoading) {
    return (
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-8">
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="h-20 bg-gray-200 rounded mb-6"></div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-24"></div>
                      <div className="h-3 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-gradient py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-block px-4 py-2 bg-success/10 rounded-full text-success font-medium text-sm mb-4">
            💬 Client Success Stories
          </div>
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">What Our Clients Say</h2>
          <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto stagger-1 leading-relaxed">
            Trusted by manufacturers and startups worldwide for delivering exceptional engineering solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className={`glass-card border-0 fade-in stagger-${(index % 3) + 1} group relative overflow-hidden`}>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-current transform hover:scale-125 transition-transform duration-200" />
                    ))}
                  </div>
                </div>
                <p className="text-secondary mb-8 text-lg leading-relaxed italic">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-16 h-16 btn-gradient rounded-2xl flex items-center justify-center text-white font-bold text-lg transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                    <span>{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div className="ml-6">
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-secondary font-medium">{testimonial.position}</div>
                    <div className="text-primary font-semibold">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
