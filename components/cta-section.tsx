import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Wellness Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your complimentary consultation today and discover how we can help you achieve your wellness goals
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Free Consultation</div>
              <div className="opacity-90">No obligation assessment</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Expert Care</div>
              <div className="opacity-90">Certified professionals</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Proven Results</div>
              <div className="opacity-90">Thousands of success stories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
