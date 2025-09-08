import { Sparkles, Heart, Shield, Clock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Advanced Technology",
      description: "State-of-the-art equipment and cutting-edge treatments for optimal results",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique needs and goals",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safety First",
      description: "FDA-approved treatments with certified professionals ensuring your safety",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Convenient Scheduling",
      description: "Flexible appointment times that fit your busy lifestyle",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Serenity Wellness?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our comprehensive approach to wellness and beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-background rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
