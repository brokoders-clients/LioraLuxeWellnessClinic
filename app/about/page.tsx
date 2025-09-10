import { Users, Award, Clock, MapPin, Heart } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      icon: <Award className="h-6 w-6 text-rose-500" />,
      title: "Excellence",
      description:
        "We maintain the highest standards in all our treatments and services.",
    },
    {
      icon: <Users className="h-6 w-6 text-rose-500" />,
      title: "Personalized Care",
      description:
        "Every treatment plan is tailored to your unique needs and goals.",
    },
    {
      icon: <Heart className="h-6 w-6 text-rose-500" />,
      title: "Holistic Wellness",
      description: "We focus on your complete well-being, inside and out.",
    },
    {
      icon: <Clock className="h-6 w-6 text-rose-500" />,
      title: "Trusted Experience",
      description:
        "Over 8 years of helping clients achieve their wellness goals.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      specialty: "Aesthetic Medicine & Wellness",
      image: "/team-1.jpg",
    },
    {
      name: "Emily Chen",
      role: "Lead Aesthetician",
      specialty: "Advanced Skincare Treatments",
      image: "/team-2.jpg",
    },
    {
      name: "Michael Rodriguez",
      role: "Wellness Coach",
      specialty: "Nutrition & Lifestyle Coaching",
      image: "/team-3.jpg",
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
            About Liora Luxe
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Founded on the belief that true beauty comes from within, we've been
            dedicated to helping our clients achieve optimal wellness and
            confidence for over eight years.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-serif text-stone-800 mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Liora Luxe Center was born from a vision to create a sanctuary
                where health, beauty, and well-being converge. Our journey began
                with a simple mission: to provide personalized, cutting-edge
                treatments in an environment that promotes healing and
                transformation.
              </p>
              <p>
                What started as a small practice has grown into a comprehensive
                wellness destination, serving thousands of clients who trust us
                with their aesthetic and wellness needs. We've built our
                reputation on delivering exceptional results while maintaining
                the highest standards of care and professionalism.
              </p>
              <p>
                Today, we continue to evolve, incorporating the latest
                advancements in aesthetic medicine and wellness therapies to
                ensure our clients receive the most effective treatments
                available.
              </p>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-6">
              <MapPin className="h-8 w-8 text-rose-500 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">
                Visit Our Center
              </h3>
              <p className="text-stone-600">
                Experience our state-of-the-art facilities designed for your
                comfort and privacy.
              </p>
            </div>
            <div className="space-y-4 text-stone-600">
              <div>
                <strong>Location:</strong> 123 Wellness Avenue, City, State
                12345
              </div>
              <div>
                <strong>Hours:</strong> Monday - Saturday: 9AM - 7PM, Sunday:
                10AM - 5PM
              </div>
              <div>
                <strong>Phone:</strong> +1 (555) 123-4567
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif text-stone-800 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-serif font-semibold text-stone-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-serif text-stone-800 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-rose-600" />
                </div>
                <h3 className="font-serif font-semibold text-stone-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-rose-500 font-medium mb-2">{member.role}</p>
                <p className="text-stone-600 text-sm">{member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
