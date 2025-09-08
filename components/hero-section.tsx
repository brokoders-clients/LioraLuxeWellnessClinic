import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Video Background with fallback */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/wellness-hero-image.jpg"
        >
          <source src="/wellness-hero-video.mp4" type="video/mp4" />
          <img
            src="/wellness-hero-image.jpg"
            alt="Serene wellness center"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-black/50"></div>
      </div>

      {/* Content - Perfectly centered and responsive */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Simple trust badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 sm:mb-6">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-white font-medium">
                2,000+ Happy Clients
              </span>
            </div>
          </div>

          {/* Clean main headline - optimized for screen fit */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            <span className="font-extralight italic text-green-200">
              Transform
            </span>
            <br />
            <span className="font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              Your Wellness
            </span>
          </h1>

          {/* Optimized subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/85 mb-4 sm:mb-6 lg:mb-8 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Premium treatments and personalized wellness programs at our
            state-of-the-art center.
          </p>

          {/* Compact CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-base px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-green-600 hover:bg-green-700 text-white font-medium shadow-xl hover:shadow-green-500/25 transition-all duration-300"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-sm sm:text-base px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-medium transition-all duration-300"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-4 h-6 sm:w-5 sm:h-8 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-white/70 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
