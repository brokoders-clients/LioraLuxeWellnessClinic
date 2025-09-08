import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Aesthetic & Cosmetic Treatments",
      description: "Advanced skincare and cosmetic procedures for radiant, youthful skin",
      image: "/luxury-facial-treatment-room-with-modern-equipment.jpg",
      treatments: [
        { name: "Hydrafacial", duration: "60 min", price: "From $150", popular: true },
        { name: "Medi-Facials", duration: "45 min", price: "From $120" },
        { name: "Oxygen Facial", duration: "50 min", price: "From $130" },
        { name: "Chemical Peels", duration: "30 min", price: "From $100" },
        { name: "Laser Hair Reduction", duration: "30-90 min", price: "From $80" },
        { name: "Pigmentation Treatment", duration: "45 min", price: "From $200" },
        { name: "Tattoo Removal", duration: "30 min", price: "From $150" },
        { name: "Microneedling", duration: "60 min", price: "From $180" },
        { name: "PRP Facial", duration: "75 min", price: "From $250", popular: true },
        { name: "MNRF Treatment", duration: "60 min", price: "From $300" },
        { name: "Dermapen", duration: "45 min", price: "From $160" },
      ],
    },
    {
      title: "Weight Loss & Body Contouring",
      description: "Non-invasive body sculpting and comprehensive weight management solutions",
      image: "/modern-body-contouring-treatment-room-with-advance.jpg",
      treatments: [
        { name: "Diet & Nutrition Counseling", duration: "60 min", price: "From $80" },
        { name: "Fat Freeze (Cryolipolysis)", duration: "60 min", price: "From $400", popular: true },
        { name: "EMSCULPT", duration: "30 min", price: "From $350", popular: true },
        { name: "Cavitation", duration: "45 min", price: "From $120" },
        { name: "RF Body Sculpting", duration: "60 min", price: "From $200" },
        { name: "Lipolytic Injections", duration: "30 min", price: "From $250" },
      ],
    },
    {
      title: "Hair Restoration",
      description: "Advanced hair restoration treatments to combat hair loss and promote growth",
      image: "/hair-restoration-clinic-with-professional-equipmen.jpg",
      treatments: [
        { name: "PRP for Hair Fall", duration: "60 min", price: "From $200", popular: true },
        { name: "GFC Hair Treatment", duration: "75 min", price: "From $300" },
        { name: "Hair Mesotherapy", duration: "45 min", price: "From $150" },
        { name: "Hair Transplant Consultation", duration: "90 min", price: "Free" },
      ],
    },
    {
      title: "Wellness Therapies",
      description: "Holistic wellness treatments for complete mind-body rejuvenation",
      image: "/wellness-therapy-room-with-iv-drip-setup-and-calmi.jpg",
      treatments: [
        { name: "Detox Therapy", duration: "90 min", price: "From $120" },
        { name: "Juice Cleanse Program", duration: "3-7 days", price: "From $200" },
        { name: "Liver Detox", duration: "60 min", price: "From $150" },
        { name: "Glutathione IV Drip", duration: "45 min", price: "From $180", popular: true },
        { name: "Vitamin C IV Drip", duration: "30 min", price: "From $120" },
        { name: "NAD+ IV Therapy", duration: "60 min", price: "From $300", popular: true },
        { name: "Stress Management Therapy", duration: "60 min", price: "From $100" },
        { name: "Guided Meditation", duration: "45 min", price: "From $60" },
        { name: "Yoga Sessions", duration: "60 min", price: "From $40" },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Our Premium Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of wellness and aesthetic treatments designed to help you look and feel
            your absolute best
          </p>
          <Button size="lg" className="px-8">
            Book Free Consultation
          </Button>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={categoryIndex % 2 === 0 ? "order-1" : "order-2"}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{category.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                  <Button variant="outline" size="lg">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className={categoryIndex % 2 === 0 ? "order-2" : "order-1"}>
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <Card key={treatmentIndex} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{treatment.name}</CardTitle>
                        {treatment.popular && (
                          <Badge className="bg-primary text-primary-foreground">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {treatment.duration}
                        </div>
                        <div className="font-semibold text-foreground">{treatment.price}</div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Book Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Transformation?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Book your complimentary consultation and let our experts create a personalized treatment plan for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
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
