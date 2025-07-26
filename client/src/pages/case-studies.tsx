import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CTA } from "@/components/sections/cta";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Clock } from "lucide-react";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudies() {
  const { data: caseStudies, isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Case Studies</h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Real projects, measurable results. See how our engineering solutions transformed client challenges into success stories.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-xl"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2 w-20"></div>
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-20 bg-gray-200 rounded mb-6"></div>
                    <div className="flex justify-between">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-4 bg-gray-200 rounded w-16"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies?.map((study) => (
                <Card key={study.id} className="bg-white hover:shadow-xl transition-shadow duration-300 group">
                  {study.imageUrl && (
                    <img 
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <CardContent className="p-6">
                    <Badge variant="secondary" className="mb-3 text-accent bg-blue-50">
                      {study.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Challenge:</h4>
                        <p className="text-sm text-secondary">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Solution:</h4>
                        <p className="text-sm text-secondary">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Results:</h4>
                        <p className="text-sm text-success font-medium">{study.results}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-secondary">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {study.client}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.timeline}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
