import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Serenity Wellness</h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Your trusted partner in aesthetic treatments, wellness therapies, and personal transformation.
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Aesthetic Treatments
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Weight Loss Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Hair Restoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Wellness Therapies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  IV Drip Therapy
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Before & After
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@serenitywellness.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>
                  123 Wellness Avenue
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p className="flex items-center justify-center gap-2">
            © 2024 Serenity Wellness Center. Made with <Heart className="h-4 w-4 text-accent" /> for your wellness
            journey.
          </p>
        </div>
      </div>
    </footer>
  )
}
