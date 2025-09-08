import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Heart, Shield, Clock, Star } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Director & Aesthetic Physician",
      image: "/images/doctor-1.png",
      credentials: ["MD", "Board Certified", "15+ Years Experience"],
      specialties: ["Aesthetic Medicine", "Anti-Aging", "Laser Treatments"],
    },
    {
      name: "Dr. Michael Chen",
      role: "Wellness & Weight Management Specialist",
      image: "/professional-male-doctor-in-medical-attire.jpg",
      credentials: ["MD", "Nutrition Specialist", "10+ Years Experience"],
      specialties: ["Weight Management", "Metabolic Health", "Body Contouring"],
    },
    {
      name: "Lisa Rodriguez",
      role: "Senior Aesthetician & Wellness Coach",
      image: "/professional-female-aesthetician-in-spa-uniform.jpg",
      credentials: ["Licensed Aesthetician", "Certified Wellness Coach"],
      specialties: ["Skincare", "Facials", "Wellness Therapy"],
    },
    {
      name: "James Wilson",
      role: "Hair Restoration Specialist",
      image: "/professional-male-hair-specialist-in-clinic-settin.jpg",
      credentials: ["Certified Trichologist", "PRP Specialist"],
      specialties: ["Hair Restoration", "PRP Therapy", "Hair Transplant"],
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Compassionate Care",
      description: "We treat every client with empathy, understanding, and genuine care for their wellbeing.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety & Excellence",
      description: "We maintain the highest standards of safety and quality in all our treatments and procedures.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Personalized Approach",
      description: "Every treatment plan is customized to meet your unique needs, goals, and lifestyle.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Continuous Innovation",
      description: "We stay at the forefront of wellness technology and treatment methodologies.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">About Serenity Wellness</h1>
              <p className="text-xl text-muted-foreground mb-8">
                For over 15 years, we've been dedicated to helping thousands of clients achieve their wellness and
                aesthetic goals through innovative treatments and compassionate care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Book Consultation</Button>
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Serenity Wellness Center"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-muted-foreground">
              We believe that everyone deserves to feel confident and beautiful in their own skin. Our mission is to
              provide world-class wellness and aesthetic treatments in a safe, comfortable, and nurturing environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 text-center">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower individuals on their wellness journey by providing innovative, safe, and effective
                  treatments that enhance both inner confidence and outer beauty.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="pt-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading wellness destination, recognized for our commitment to excellence, innovation, and
                  the transformative results we deliver to our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape the exceptional experience we provide to every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-background rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our highly qualified professionals are dedicated to providing you with the best possible care and results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {member.credentials.map((credential, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Specialties:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-lg opacity-90">Numbers that speak to our commitment and success</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Treatment Options</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-lg opacity-90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Wellness Journey?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have transformed their lives with our expert care and innovative
            treatments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Clock className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
