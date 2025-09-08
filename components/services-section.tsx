import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Scale, Armchair as Hair, Heart } from "lucide-react"

const services = [
  {
    category: "Aesthetic & Cosmetic Treatments",
    icon: Sparkles,
    color: "text-accent",
    treatments: [
      "Medi-facials & HydraFacial",
      "Oxygen Facial Therapy",
      "Chemical Peels",
      "Laser Hair Reduction",
      "Pigmentation Treatment",
      "Tattoo Removal",
      "Microneedling & PRP",
      "MNRF & Dermapen",
      "Anti-aging Treatments",
    ],
  },
  {
    category: "Weight Loss & Body Contouring",
    icon: Scale,
    color: "text-primary",
    treatments: [
      "Personalized Diet Counseling",
      "Nutrition Planning",
      "Fat Freeze (Cryolipolysis)",
      "EMSCULPT Body Sculpting",
      "Cavitation Therapy",
      "RF Body Contouring",
      "Lipolytic Injections",
    ],
  },
  {
    category: "Hair Restoration",
    icon: Hair,
    color: "text-accent",
    treatments: [
      "PRP/GFC for Hair Fall",
      "Hair Mesotherapy",
      "Hair Transplant Consultation",
      "Scalp Analysis",
      "Hair Growth Therapy",
    ],
  },
  {
    category: "Wellness Therapies",
    icon: Heart,
    color: "text-primary",
    treatments: [
      "Detox Therapy Programs",
      "Juice Cleanse Programs",
      "Liver Detox Therapy",
      "IV Drip Therapy",
      "Glutathione Infusions",
      "Vitamin C Therapy",
      "NAD+ Treatments",
      "Stress Management",
      "Guided Meditation",
      "Therapeutic Yoga",
    ],
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Comprehensive Wellness Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our full range of premium treatments designed to enhance your natural beauty, boost your
            confidence, and optimize your overall wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg bg-card ${service.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-card-foreground">{service.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    {service.treatments.map((treatment, treatmentIndex) => (
                      <div key={treatmentIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        <span className="text-muted-foreground">{treatment}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-transparent" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
