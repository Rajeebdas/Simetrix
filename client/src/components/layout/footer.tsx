import { Link } from "wouter";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="text-4xl font-bold gradient-text mb-4">Simetric</div>
            <div className="text-lg text-purple-200 mb-6">Engineering insight through simulation</div>
            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Advanced engineering design and simulation consultancy delivering safer, lighter, and more cost-effective solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-purple-200">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/services" className="hover:text-purple-200 transition-colors hover:translate-x-1 transform duration-300 inline-block">Finite Element Analysis</Link></li>
              <li><Link href="/services" className="hover:text-purple-200 transition-colors hover:translate-x-1 transform duration-300 inline-block">CAD Design & Modeling</Link></li>
              <li><Link href="/services" className="hover:text-purple-200 transition-colors hover:translate-x-1 transform duration-300 inline-block">Weight Optimization</Link></li>
              <li><Link href="/services" className="hover:text-purple-200 transition-colors hover:translate-x-1 transform duration-300 inline-block">Fatigue Assessment</Link></li>
              <li><Link href="/services" className="hover:text-purple-200 transition-colors hover:translate-x-1 transform duration-300 inline-block">Reverse Engineering</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-blue-200">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="hover:text-blue-200 transition-colors">contact@simetrix.com</div>
              <div className="hover:text-blue-200 transition-colors">+91 76350 28136</div>
              <div className="text-blue-100">India (Global Delivery)</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-lg">&copy; 2024 Simetric. All rights reserved.</p>
          <p className="text-purple-200 font-semibold text-xl mt-2">Design. Simulate. Optimize.</p>
        </div>
      </div>
    </footer>
  );
}
