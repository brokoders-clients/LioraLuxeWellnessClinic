"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-serif text-gray-800 hover:text-rose-600 transition-colors"
            >
              Liora Luxe
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium tracking-wider text-sm uppercase relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium tracking-wider text-sm uppercase relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium tracking-wider text-sm uppercase relative group"
            >
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-rose-500 transition-colors font-medium tracking-wider text-sm uppercase relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right side - Book Consultation Button (Desktop Only) & Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Desktop Only - Book Consultation Button */}
            <Button
              asChild
              size="sm"
              className="hidden lg:flex bg-rose-400 hover:bg-rose-500 text-white px-5 md:px-7 py-4 md:py-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm items-center"
            >
              <Link href="/contact">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Consultation</span>
              </Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-800 hover:text-rose-500 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
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
          <nav className="lg:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-colors font-medium py-3 px-4 rounded-lg tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-colors font-medium py-3 px-4 rounded-lg tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/faq"
                className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-colors font-medium py-3 px-4 rounded-lg tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-colors font-medium py-3 px-4 rounded-lg tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Book Consultation Button */}
              <div className="pt-3 mt-2 border-t border-gray-200">
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-rose-400 hover:bg-rose-500 text-white px-6 py-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/contact">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Book Consultation</span>
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
