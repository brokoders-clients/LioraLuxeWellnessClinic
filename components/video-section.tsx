import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 bg-stone-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-8 h-8 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-pink-300 to-rose-200 rounded-full transform rotate-12"></div>
      </div>
      <div className="absolute top-32 right-20 w-6 h-6 opacity-25">
        <div className="w-full h-full bg-gradient-to-br from-pink-200 to-rose-100 rounded-full transform -rotate-45"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-pink-300 to-rose-200 rounded-full transform rotate-90"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
              Experience Our Spa Sanctuary
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Take a virtual journey through our tranquil spa and discover the
              serene spaces where your wellness transformation begins
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/luxury-wellness-center-interior-with-modern-treatm.jpg"
              alt="Spa Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Button
                size="lg"
                className="rounded-full w-20 h-20 p-0 bg-white/90 hover:bg-white text-stone-700 hover:text-stone-800 shadow-lg"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-serif mb-2">Spa Tour</h3>
              <p className="text-lg opacity-90">Explore our peaceful retreat</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <img
                src="/modern-treatment-room-with-advanced-medical-equipm.jpg"
                alt="Treatment Room"
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h4 className="font-serif text-lg text-stone-800 mb-2">
                Tranquil Treatment Rooms
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Serene spaces designed for your ultimate relaxation and
                rejuvenation
              </p>
            </div>
            <div className="text-center">
              <img
                src="/relaxing-wellness-lounge-with-comfortable-seating.jpg"
                alt="Relaxation Lounge"
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h4 className="font-serif text-lg text-stone-800 mb-2">
                Meditation Lounge
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                A peaceful sanctuary where time stands still and stress melts
                away
              </p>
            </div>
            <div className="text-center">
              <img
                src="/consultation-room-with-professional-medical-setup.jpg"
                alt="Consultation Room"
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h4 className="font-serif text-lg text-stone-800 mb-2">
                Wellness Consultations
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Personalized sessions with our expert wellness practitioners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
