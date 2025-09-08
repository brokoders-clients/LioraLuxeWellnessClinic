"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Top bar with dark green background - full width */}
      <div className="flex items-center justify-between py-3 text-sm text-black/70 bg-green-400/60 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">
                123 Wellness Ave, City, State 12345
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="font-medium">Mon-Fri: 9AM-7PM | Sat: 9AM-5PM</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4 bg-white">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-green-800 hover:text-green-600 transition-colors"
            >
              Serenity Wellness
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/gallery"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-700 transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex bg-green-700 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-md transition-colors">
              Book Consultation
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-green-800 hover:text-green-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-green-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-700 transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="w-full bg-green-700 hover:bg-green-600 text-white font-medium py-3 rounded-md transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Consultation
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
