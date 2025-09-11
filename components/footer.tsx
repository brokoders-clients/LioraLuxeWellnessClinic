import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-stone-50 to-rose-50 text-stone-800 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-stone-800">
              Liora Luxe
            </h3>
            <p className="text-stone-600 mb-4 leading-relaxed">
              Your trusted partner in aesthetic treatments, wellness therapies,
              and personal transformation.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:text-rose-500 cursor-pointer transition-colors text-stone-600" />
              <Instagram className="h-5 w-5 hover:text-rose-500 cursor-pointer transition-colors text-stone-600" />
              <Twitter className="h-5 w-5 hover:text-rose-500 cursor-pointer transition-colors text-stone-600" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-stone-800">
              Services
            </h4>
            <ul className="space-y-2 text-stone-600">
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Aesthetic Treatments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Weight Loss Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Hair Restoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Wellness Therapies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  IV Drip Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-stone-800">
              Quick Links
            </h4>
            <ul className="space-y-2 text-stone-600">
              <li>
                <a
                  href="#about"
                  className="hover:text-rose-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-rose-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Before & After
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-semibold mb-4 text-stone-800">
              Contact Info
            </h4>
            <div className="space-y-3 text-stone-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-rose-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-rose-400" />
                <span>info@Liora Luxe.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-rose-400" />
                <span>
                  123 Wellness Avenue
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-300 mt-8 pt-8 text-center text-stone-600">
          <p className="flex items-center justify-center gap-2">
            © 2024 Liora Luxe Center. Made with{" "}
            <Heart className="h-4 w-4 text-rose-500" /> for your wellness
            journey.
          </p>
        </div>
      </div>
    </footer>
  );
}
