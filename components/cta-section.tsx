import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles, Scale, Heart } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-[#f5edea] relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-6">
            Transform Your Beauty & Wellness Journey
          </h2>
          <p className="text-xl mb-8 text-stone-700 font-light">
            Discover personalized aesthetic treatments, body contouring, hair
            restoration, and wellness therapies designed to help you look and
            feel your absolute best
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-8 bg-rose-400 hover:bg-rose-500 text-white"
            >
              <Link href="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book Consultation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 border-stone-400 text-stone-700 hover:text-stone-700 hover:bg-stone-50 bg-white"
            >
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-semibold mb-2 text-stone-800 text-nowrap">
                Aesthetic Treatments
              </div>
              <div className="text-stone-600">Advanced cosmetic procedures</div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-2 text-stone-800">
                Body Contouring
              </div>
              <div className="text-stone-600">Weight loss & body sculpting</div>
            </div>
            <div>
              <div className="text-2xl font-semibold mb-2 text-stone-800">
                Hair Restoration
              </div>
              <div className="text-stone-600">
                Advanced hair growth solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
