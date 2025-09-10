import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Hydro Therapy",
    image: "/hydro-therapy.jpg",
    alt: "Woman with face mask relaxing",
  },
  {
    title: "Sauna Rooms",
    image: "/sauna-rooms.jpg",
    alt: "Spa stones and candles",
  },
  {
    title: "Massages",
    image: "/massages.jpg",
    alt: "Relaxing massage therapy",
  },
  {
    title: "Reflexology",
    image: "/reflexology.jpg",
    alt: "Foot massage and reflexology",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Relaxation of body and mind in which time does not exist.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group cursor-pointer">
              {/* Circular Image */}
              <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Service Title with Arrow */}
              <div className="flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
                <h3 className="text-lg font-medium text-gray-800">
                  {service.title}
                </h3>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-pink-400 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
