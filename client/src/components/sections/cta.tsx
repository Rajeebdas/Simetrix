import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTA() {
  return (
    <section className="hero-gradient text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Engineering Challenges?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Get a free consultation and discover how simulation-driven design can accelerate your product development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Schedule Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
