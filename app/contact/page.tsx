import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Emergency: +1 (555) 123-4568"],
      action: "Call Now",
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      details: ["info@serenitywellness.com", "appointments@serenitywellness.com"],
      action: "Send Email",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      details: ["123 Wellness Avenue", "City, State 12345"],
      action: "Get Directions",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 7:00 PM", "Sat: 9:00 AM - 5:00 PM", "Sun: Closed"],
      action: "View Schedule",
    },
  ]

  const services = [
    "Aesthetic & Cosmetic Treatments",
    "Weight Loss & Body Contouring",
    "Hair Restoration",
    "Wellness Therapies",
    "General Consultation",
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to begin your wellness journey? Get in touch with our expert team to schedule your consultation or ask
            any questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Consultation
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're here to help you every step of the way. Reach out through any of these convenient methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your wellness goals and
                schedule your consultation.
              </p>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Service of Interest</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your wellness goals and any questions you have..."
                        rows={5}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="consent" className="rounded" />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground">
                        I consent to being contacted about my wellness consultation
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Location Info */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Visit Our Center</h3>
              <p className="text-muted-foreground mb-8">
                Located in the heart of the city, our beautiful wellness center is easily accessible with ample parking
                available.
              </p>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-lg h-64 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">123 Wellness Avenue, City, State 12345</p>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Location Details</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-muted-foreground">
                          123 Wellness Avenue
                          <br />
                          City, State 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Parking</p>
                        <p className="text-muted-foreground">
                          Free parking available
                          <br />
                          Valet service on weekends
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Public Transport</p>
                        <p className="text-muted-foreground">
                          Metro Station: 2 blocks away
                          <br />
                          Bus Stop: Right outside
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-6 bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and booking process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">How do I book an appointment?</h4>
                  <p className="text-muted-foreground text-sm">
                    You can book online, call us, or visit our center. We recommend booking 1-2 weeks in advance for
                    popular treatments.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Is consultation really free?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes! Your initial consultation is completely free with no obligation. We'll assess your needs and
                    create a personalized plan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">What should I expect on my first visit?</h4>
                  <p className="text-muted-foreground text-sm">
                    A comprehensive consultation, facility tour, and personalized treatment recommendations based on
                    your goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Do you offer payment plans?</h4>
                  <p className="text-muted-foreground text-sm">
                    Yes, we offer flexible payment options and financing plans to make your wellness journey affordable.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            For urgent matters or after-hours support, our emergency line is available 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: (555) 123-4568
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Live Chat Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
