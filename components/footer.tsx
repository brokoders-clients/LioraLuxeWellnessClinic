import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-stone-50 to-rose-50 text-stone-800 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-stone-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-serif font-bold mb-6 text-stone-800 tracking-tight">
              Liora Luxe
            </h3>
            <p className="text-stone-600 mb-8 leading-relaxed text-base max-w-sm">
              Your trusted partner in aesthetic treatments, wellness therapies,
              and personal transformation.
            </p>
            <Link
              href="https://www.instagram.com/lioraluxewellnessclinic"
              className="inline-flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105 group"
            >
              <Instagram className="h-6 w-6 text-stone-600 group-hover:text-rose-500 transition-colors duration-300" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-serif font-semibold mb-8 text-stone-800 text-lg tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4 text-stone-600">
              <li>
                <Link
                  href="/"
                  className="hover:text-rose-500 transition-all duration-300 hover:translate-x-1 inline-block text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-rose-500 transition-all duration-300 hover:translate-x-1 inline-block text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-rose-500 transition-all duration-300 hover:translate-x-1 inline-block text-base"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-rose-500 transition-all duration-300 hover:translate-x-1 inline-block text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2">
            <h4 className="font-serif font-semibold mb-8 text-stone-800 text-lg tracking-wide">
              Contact Info
            </h4>
            <div className="space-y-6 text-stone-600">
              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-rose-500" />
                </div>
                <span className="text-base">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-rose-500" />
                </div>
                <span className="text-base">info@Liora Luxe.com</span>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-10 h-10 bg-rose-100 rounded-full group-hover:bg-rose-200 transition-colors duration-300 mt-1">
                  <MapPin className="h-5 w-5 text-rose-500" />
                </div>
                <span className="text-base leading-relaxed">
                  D19, Basement, Defence Colony
                  <br />
                  New Delhi, Delhi - 110024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-16 pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
          <div className="text-center text-stone-600">
            <p className="flex items-center justify-center gap-2 text-base">
              © 2025 Liora Luxe Center. Made with{" "}
              <Heart className="h-5 w-5 text-rose-500 animate-pulse" /> for your
              wellness journey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
