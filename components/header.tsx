"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Main navigation */}
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-serif text-gray-800 hover:text-gray-600 transition-colors"
            >
              Amoy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium tracking-wider text-sm uppercase"
            >
              Services
            </Link>
            <Link
              href="/careers"
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium tracking-wider text-sm uppercase"
            >
              Careers
            </Link>
            <Link
              href="/shop"
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium tracking-wider text-sm uppercase"
            >
              Shop
            </Link>
            <Link
              href="/social"
              className="text-gray-600 hover:text-gray-800 transition-colors font-medium tracking-wider text-sm uppercase"
            >
              Social
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-800 transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 transition-colors hidden md:block">
              <ShoppingBag className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
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
          <nav className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <Link
                href="/services"
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/shop"
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/social"
                className="text-gray-600 hover:text-gray-800 transition-colors font-medium py-2 tracking-wider text-sm uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                Social
              </Link>

              {/* Mobile icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <button className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  <span className="text-sm">Search</span>
                </button>
                <button className="text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  <span className="text-sm">Cart</span>
                </button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
