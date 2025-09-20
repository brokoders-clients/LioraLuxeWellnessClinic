import type React from "react";
import { Sparkles, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/40 relative overflow-hidden">
      {/* Premium floating small dots */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-rose-400/50 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-32 w-1 h-1 bg-pink-300/70 rounded-full animate-pulse delay-700"></div>

      {/* Side Floral/Leaf Decorations */}
      {/* Left Side Leaf */}
      <div className="absolute top-1/2 -left-8 w-16 h-28 opacity-50 animate-float hidden lg:block">
        <div
          className="w-full h-full bg-gradient-to-br from-green-300/60 to-emerald-400/40 shadow-md backdrop-blur-sm"
          style={{
            borderRadius: "60% 40% 70% 30%",
            transform: "rotate(-25deg)",
          }}
        ></div>
      </div>

      {/* Left Side Flower */}
      <div className="absolute top-1/3 -left-12 w-12 h-12 opacity-60 animate-float delay-500 hidden lg:block">
        <div
          className="w-full h-full bg-gradient-to-tr from-pink-300/70 via-rose-400/70 to-pink-500/60 shadow-lg"
          style={{
            borderRadius: "50%",
          }}
        ></div>
      </div>

      {/* Right Side Leaf */}
      <div className="absolute top-1/2 -right-8 w-16 h-28 opacity-45 animate-float delay-700 hidden lg:block">
        <div
          className="w-full h-full bg-gradient-to-br from-lime-300/60 to-emerald-400/50 shadow-md backdrop-blur-sm"
          style={{
            borderRadius: "70% 30% 80% 20%",
            transform: "rotate(30deg)",
          }}
        ></div>
      </div>

      {/* Right Side Flower */}
      <div className="absolute bottom-1/3 -right-12 w-12 h-12 opacity-65 animate-float delay-1000 hidden lg:block">
        <div
          className="w-full h-full bg-gradient-to-tr from-rose-300/70 via-pink-400/70 to-rose-500/60 shadow-lg"
          style={{
            borderRadius: "50%",
          }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20 max-w-7xl w-full">
          {/* Left Content */}
          <div className="flex-shrink-0 max-w-2xl relative z-10 text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-serif text-gray-900/90 leading-[0.85] mb-6 tracking-tight font-light">
              ELEVATE YOUR BODY – THE LIORA LUXE WAY
              <span className="relative inline-block">
                <div
                  className="absolute -top-1 sm:-top-2 right-4 sm:right-8 w-4 sm:w-6 h-3 sm:h-5 bg-gradient-to-br from-pink-300/80 to-rose-400/70 opacity-70 shadow-sm backdrop-blur-sm"
                  style={{
                    borderRadius: "60% 40% 70% 30%",
                    transform: "rotate(20deg)",
                  }}
                ></div>
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-8 lg:mb-12 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Discover a premium blend of wellness, natural beauty, and holistic
              healing designed to nourish your mind, body, and soul. Your
              personalized journey toward mindfulness, radiance, and aesthetics
              is just a click away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-16">
              <button className="w-full sm:w-auto bg-gray-900/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                <Link href="/contact">Start Your Journey</Link>
              </button>
              <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white/50 transition-all duration-300 backdrop-blur-sm">
                <Link href="/services">Discover More</Link>
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="flex-shrink-0 relative order-1 lg:order-2">
            <div className="relative">
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden bg-gradient-to-br from-stone-100 to-rose-100/50 shadow-2xl border-4 sm:border-6 lg:border-8 border-white/90 backdrop-blur-sm relative mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
                <Image
                  src="/images/hero.png"
                  alt="Liora Luxe wellness and beauty"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover object-center scale-105"
                />
              </div>

              {/* Floating icons */}
              <div className="absolute top-8 sm:top-12 left-4 sm:left-8 w-10 sm:w-12 h-10 sm:h-12 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center animate-float">
                <Heart className="w-4 sm:w-5 h-4 sm:h-5 text-pink-500" />
              </div>

              <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-8 sm:w-10 h-8 sm:h-10 bg-white/70 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center animate-float delay-500">
                <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background blobs */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/6 w-24 h-24 bg-rose-200/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-300/8 rounded-full blur-2xl animate-pulse delay-700"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
    </div>
  );
};

// Floating Animation
const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}
`;

export default HeroSection;
