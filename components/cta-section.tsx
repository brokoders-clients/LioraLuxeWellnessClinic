import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-100 to-stone-100 relative overflow-hidden">
      <div className="absolute top-12 left-12 w-10 h-10 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-60 transform rotate-45"></div>
      <div className="absolute top-40 right-16 w-6 h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-50 transform -rotate-12"></div>
      <div className="absolute bottom-16 left-1/3 w-8 h-8 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full opacity-40 transform rotate-12"></div>
      <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-50 transform -rotate-45"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-6">Ready to Begin Your Wellness Journey?</h2>
          <p className="text-xl mb-8 text-stone-700 font-light">
            Book your personalized spa consultation today and discover the perfect treatments for your relaxation and
            rejuvenation needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-rose-400 hover:bg-rose-500 text-white">
              <Calendar className="mr-2 h-5 w-5" />
              Book Spa Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-stone-400 text-stone-700 hover:bg-stone-50 bg-white"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-semibold mb-2 text-stone-800">Personalized Care</div>
              <div className="text-stone-600">Tailored spa treatments</div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-2 text-stone-800">Expert Therapists</div>
              <div className="text-stone-600">Certified wellness professionals</div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-2 text-stone-800">Serene Environment</div>
              <div className="text-stone-600">Peaceful spa sanctuary</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
