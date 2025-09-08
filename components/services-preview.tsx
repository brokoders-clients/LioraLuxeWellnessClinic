import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPreview() {
  const services = [
    {
      title: "Aesthetic & Cosmetic",
      image: "/modern-spa-facial-treatment-room-with-soft-lightin.jpg",
      treatments: ["Hydrafacial", "Chemical Peels", "Laser Treatments", "Microneedling"],
      description: "Advanced skincare treatments for radiant, youthful skin",
    },
    {
      title: "Weight Loss & Body Contouring",
      image: "/modern-body-contouring-treatment-room-with-advance.jpg",
      treatments: ["Fat Freeze", "EMSCULPT", "Body Sculpting", "Nutrition Counseling"],
      description: "Transform your body with non-invasive contouring solutions",
    },
    {
      title: "Hair Restoration",
      image: "/hair-restoration-treatment-consultation-room.jpg",
      treatments: ["PRP/GFC Therapy", "Hair Mesotherapy", "Transplant Consultation"],
      description: "Restore confidence with advanced hair restoration techniques",
    },
    {
      title: "Wellness Therapies",
      image: "/wellness-therapy-room-with-iv-drip-setup-and-relax.jpg",
      treatments: ["IV Drips", "Detox Therapy", "Stress Management", "Meditation"],
      description: "Holistic wellness treatments for mind, body, and spirit",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of wellness and aesthetic treatments designed to help you look and feel
            your best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3
                    className="text-xl font-bold mb-2 text-shadow-lg"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-sm opacity-95" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}>
                    {service.description}
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.treatments.map((treatment, idx) => (
                    <span
                      key={idx}
                      className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {treatment}
                    </span>
                  ))}
                </div>
                <Link href="/services">
                  <Button variant="outline" className="w-full group bg-transparent">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button size="lg" className="px-8">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
