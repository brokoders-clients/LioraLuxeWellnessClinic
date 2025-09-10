import { Sparkles, Heart, Zap, Droplets, Leaf, Star } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8 text-rose-500" />,
      title: "Aesthetic Treatments",
      description:
        "Advanced facial treatments, anti-aging therapies, and skin rejuvenation procedures tailored to your unique needs.",
      features: [
        "Botox & Fillers",
        "Chemical Peels",
        "Microdermabrasion",
        "Laser Therapy",
      ],
    },
    {
      icon: <Heart className="h-8 w-8 text-rose-500" />,
      title: "Weight Loss Programs",
      description:
        "Comprehensive weight management solutions combining nutrition counseling, fitness planning, and medical supervision.",
      features: [
        "Personalized Diet Plans",
        "Fitness Coaching",
        "Medical Monitoring",
        "Lifestyle Counseling",
      ],
    },
    {
      icon: <Zap className="h-8 w-8 text-rose-500" />,
      title: "Hair Restoration",
      description:
        "Advanced hair restoration treatments to help you regain confidence with fuller, healthier hair.",
      features: [
        "PRP Therapy",
        "Hair Transplants",
        "Scalp Treatments",
        "Nutritional Support",
      ],
    },
    {
      icon: <Droplets className="h-8 w-8 text-rose-500" />,
      title: "IV Drip Therapy",
      description:
        "Vitamin-rich IV infusions designed to boost energy, enhance immunity, and promote overall wellness.",
      features: [
        "Immunity Boost",
        "Energy Enhancement",
        "Hydration Therapy",
        "Recovery Infusions",
      ],
    },
    {
      icon: <Leaf className="h-8 w-8 text-rose-500" />,
      title: "Wellness Therapies",
      description:
        "Holistic treatments focusing on mental and physical well-being through natural therapeutic approaches.",
      features: [
        "Massage Therapy",
        "Aromatherapy",
        "Meditation Sessions",
        "Stress Management",
      ],
    },
    {
      icon: <Star className="h-8 w-8 text-rose-500" />,
      title: "Signature Spa Packages",
      description:
        "Luxurious combination treatments designed for ultimate relaxation and rejuvenation.",
      features: [
        "Full Day Packages",
        "Couples Retreats",
        "Bridal Packages",
        "Corporate Wellness",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-rose-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-60 transform rotate-45"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-50 transform -rotate-12"></div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full opacity-40 transform rotate-12"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Our Wellness Services
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of wellness and aesthetic
            treatments designed to enhance your natural beauty and promote
            holistic well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200/50"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-stone-800 mb-4">
                {service.title}
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-stone-600"
                  >
                    <div className="w-1.5 h-1.5 bg-rose-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">
              Ready to Begin Your Wellness Journey?
            </h2>
            <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
              Book a consultation today and let our expert team create a
              personalized treatment plan just for you.
            </p>
            <button className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-500 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
