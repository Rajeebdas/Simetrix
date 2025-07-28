import { Link } from "wouter";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-2">Simetric</div>
            <div className="text-sm text-gray-400 mb-4">
              Engineering insight through simulation
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced engineering design and simulation consultancy delivering
              safer, lighter, and more cost-effective solutions worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Finite Element Analysis
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  CAD Design & Modeling
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Weight Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Fatigue Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Reverse Engineering
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors"
                >
                  Commercial Vehicles
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors"
                >
                  Industrial Machinery
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors"
                >
                  Trailers & Suspension
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors"
                >
                  EV & Battery Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-white transition-colors"
                >
                  Aerospace
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>1damit41@gmail.com</div>
              <div>+91 8797740665</div>
              <div>India (Global Delivery)</div>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 Simetric. All rights reserved. | Design. Simulate.
            Optimize.
          </p>
        </div>
      </div>
    </footer>
  );
}
