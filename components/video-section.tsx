import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience Our Wellness Center</h2>
            <p className="text-lg text-muted-foreground">
              Take a virtual tour of our state-of-the-art facility and see why thousands trust us with their wellness
              journey
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/luxury-wellness-center-interior-with-modern-treatm.jpg"
              alt="Wellness Center Interior"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <Button size="lg" className="rounded-full w-20 h-20 p-0">
                <Play className="h-8 w-8 ml-1" />
              </Button>
            </div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Virtual Tour</h3>
              <p className="text-lg opacity-90">Discover our premium facilities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <img
                src="/modern-treatment-room-with-advanced-medical-equipm.jpg"
                alt="Treatment Room"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2">Advanced Treatment Rooms</h4>
              <p className="text-sm text-muted-foreground">
                State-of-the-art equipment in comfortable, private settings
              </p>
            </div>
            <div className="text-center">
              <img
                src="/relaxing-wellness-lounge-with-comfortable-seating.jpg"
                alt="Relaxation Lounge"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2">Relaxation Lounge</h4>
              <p className="text-sm text-muted-foreground">Unwind in our serene spaces designed for your comfort</p>
            </div>
            <div className="text-center">
              <img
                src="/consultation-room-with-professional-medical-setup.jpg"
                alt="Consultation Room"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2">Consultation Rooms</h4>
              <p className="text-sm text-muted-foreground">Private consultations with our expert practitioners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
