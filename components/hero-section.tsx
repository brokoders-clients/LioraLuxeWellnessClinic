import type React from "react";
import { Search, ShoppingBag, Sparkles, Heart } from "lucide-react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/40 relative overflow-hidden">
      {/* Premium floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-rose-400/50 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-40 left-32 w-1 h-1 bg-pink-300/70 rounded-full animate-pulse delay-700"></div>

      {/* Elegant geometric lines */}
      <div className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-pink-200/60 to-transparent hidden lg:block"></div>
      <div className="absolute top-1/3 right-12 w-px h-24 bg-gradient-to-b from-transparent via-rose-200/50 to-transparent hidden lg:block"></div>

      {/* Rose Petals - Left Side */}
      <div className="absolute top-32 left-16 w-6 h-4 opacity-70 animate-float hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-pink-300/80 to-rose-400/60 shadow-sm"
          style={{
            borderRadius: "80% 20% 70% 30%",
            transform: "rotate(15deg)",
          }}
        ></div>
      </div>

      <div className="absolute top-48 left-8 w-5 h-3 opacity-60 animate-float delay-300 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-pink-200/70 to-pink-400/50 shadow-sm"
          style={{
            borderRadius: "70% 30% 80% 20%",
            transform: "rotate(-25deg)",
          }}
        ></div>
      </div>

      <div className="absolute top-64 left-20 w-4 h-3 opacity-50 animate-float delay-700 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-rose-300/60 to-pink-300/40 shadow-sm"
          style={{
            borderRadius: "90% 10% 60% 40%",
            transform: "rotate(35deg)",
          }}
        ></div>
      </div>

      <div className="absolute bottom-48 left-12 w-7 h-5 opacity-65 animate-float delay-1000 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-pink-400/70 to-rose-400/50 shadow-sm"
          style={{
            borderRadius: "75% 25% 85% 15%",
            transform: "rotate(-10deg)",
          }}
        ></div>
      </div>

      <div className="absolute bottom-64 left-24 w-5 h-4 opacity-45 animate-float delay-1500 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-pink-300/60 to-rose-300/40 shadow-sm"
          style={{
            borderRadius: "65% 35% 75% 25%",
            transform: "rotate(50deg)",
          }}
        ></div>
      </div>

      {/* Rose Petals - Right Side */}
      <div className="absolute top-28 right-20 w-6 h-4 opacity-60 animate-float delay-500 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-rose-300/70 to-pink-400/50 shadow-sm"
          style={{
            borderRadius: "85% 15% 70% 30%",
            transform: "rotate(-30deg)",
          }}
        ></div>
      </div>

      <div className="absolute top-52 right-12 w-5 h-3 opacity-55 animate-float delay-800 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-pink-200/60 to-rose-300/45 shadow-sm"
          style={{
            borderRadius: "90% 10% 80% 20%",
            transform: "rotate(20deg)",
          }}
        ></div>
      </div>

      <div className="absolute top-72 right-28 w-7 h-5 opacity-70 animate-float delay-1200 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-pink-400/75 to-rose-400/55 shadow-sm"
          style={{
            borderRadius: "70% 30% 90% 10%",
            transform: "rotate(-45deg)",
          }}
        ></div>
      </div>

      <div className="absolute bottom-44 right-16 w-6 h-4 opacity-50 animate-float delay-1800 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-rose-200/65 to-pink-300/45 shadow-sm"
          style={{
            borderRadius: "80% 20% 75% 25%",
            transform: "rotate(10deg)",
          }}
        ></div>
      </div>

      <div className="absolute bottom-60 right-8 w-4 h-3 opacity-40 animate-float delay-2000 hidden md:block">
        <div
          className="w-full h-full bg-gradient-to-br from-pink-300/50 to-rose-400/35 shadow-sm"
          style={{
            borderRadius: "95% 5% 65% 35%",
            transform: "rotate(-20deg)",
          }}
        ></div>
      </div>

      {/* Hero Content - Fully Responsive */}
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-100px)] px-4 sm:px-6 lg:px-16 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20 max-w-7xl w-full">
          {/* Left Content */}
          <div className="flex-shrink-0 max-w-2xl relative z-10 text-center lg:text-left order-2 lg:order-1">
            {/* Existing decorative elements - Hidden on mobile */}
            <div className="absolute -top-8 left-12 w-16 h-12 opacity-80 hidden lg:block">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-300/90 via-pink-400/80 to-rose-400/70 shadow-lg backdrop-blur-sm"
                style={{
                  borderRadius: "60% 40% 70% 30%",
                  transform: "rotate(25deg)",
                }}
              ></div>
            </div>

            <div className="absolute top-32 left-4 w-12 h-10 opacity-70 hidden lg:block">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-200/80 via-pink-300/70 to-pink-400/60 shadow-md backdrop-blur-sm"
                style={{
                  borderRadius: "50% 70% 40% 60%",
                  transform: "rotate(-15deg)",
                }}
              ></div>
            </div>

            <div className="absolute top-16 right-8 w-10 h-8 opacity-60 hidden lg:block">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-300/70 via-rose-300/60 to-pink-400/50 shadow-md backdrop-blur-sm"
                style={{
                  borderRadius: "70% 30% 60% 40%",
                  transform: "rotate(45deg)",
                }}
              ></div>
            </div>

            {/* Enhanced typography - Fully responsive */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-serif text-gray-900/80 leading-[0.85] mb-6 tracking-tight font-light">
              Care of
              <br />
              <span className="relative inline-block">
                your body
                <div
                  className="absolute -top-1 sm:-top-2 right-4 sm:right-8 w-4 sm:w-6 h-3 sm:h-5 bg-gradient-to-br from-pink-300/80 to-rose-400/70 opacity-70 shadow-sm backdrop-blur-sm"
                  style={{
                    borderRadius: "60% 40% 70% 30%",
                    transform: "rotate(20deg)",
                  }}
                ></div>
              </span>
            </h1>

            {/* Premium subtitle - Responsive */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 lg:mb-12 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
              Discover the perfect harmony between natural beauty and premium
              wellness care
            </p>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 lg:mb-16">
              <button className="w-full sm:w-auto bg-gray-900/80 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Services
              </button>
              <button className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-white/50 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Enhanced woman image - Responsive */}
          <div className="flex-shrink-0 relative order-1 lg:order-2">
            <div className="relative">
              {/* Main image with premium frame - Responsive sizes */}
              <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden bg-gradient-to-br from-stone-100 to-rose-100/50 shadow-2xl border-4 sm:border-6 lg:border-8 border-white/90 backdrop-blur-sm relative mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent"></div>
                <Image
                  src="/images/hero.png"
                  alt="Beautiful woman with natural skincare"
                  width={420}
                  height={420}
                  className="w-full h-full object-cover object-center scale-105"
                />
              </div>

              {/* Floating elements around image - Hidden on small screens */}
              <div className="absolute -top-4 right-8 sm:right-16 w-8 sm:w-10 h-6 sm:h-8 opacity-60 hidden sm:block">
                <div
                  className="w-full h-full bg-gradient-to-br from-pink-300/70 to-rose-400/60 shadow-lg backdrop-blur-sm"
                  style={{
                    borderRadius: "60% 40% 70% 30%",
                    transform: "rotate(35deg)",
                  }}
                ></div>
              </div>

              <div className="absolute top-16 sm:top-24 -right-4 sm:-right-6 w-6 sm:w-8 h-4 sm:h-6 opacity-50 hidden sm:block">
                <div
                  className="w-full h-full bg-gradient-to-br from-pink-200/60 to-pink-400/50 shadow-md backdrop-blur-sm"
                  style={{
                    borderRadius: "50% 70% 40% 60%",
                    transform: "rotate(-25deg)",
                  }}
                ></div>
              </div>

              <div className="absolute bottom-12 sm:bottom-16 -left-4 sm:-left-6 w-10 sm:w-12 h-8 sm:h-10 opacity-65 hidden sm:block">
                <div
                  className="w-full h-full bg-gradient-to-br from-pink-300/70 to-rose-400/60 shadow-lg backdrop-blur-sm"
                  style={{
                    borderRadius: "70% 30% 60% 40%",
                    transform: "rotate(25deg)",
                  }}
                ></div>
              </div>

              <div className="absolute bottom-24 sm:bottom-32 right-2 sm:right-4 w-7 sm:w-9 h-5 sm:h-7 opacity-55 hidden sm:block">
                <div
                  className="w-full h-full bg-gradient-to-br from-pink-200/60 to-rose-300/50 shadow-md backdrop-blur-sm"
                  style={{
                    borderRadius: "60% 40% 50% 70%",
                    transform: "rotate(-15deg)",
                  }}
                ></div>
              </div>

              {/* Premium floating icons - Responsive */}
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

      {/* Enhanced background elements */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/6 w-24 h-24 bg-rose-200/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-pink-300/8 rounded-full blur-2xl animate-pulse delay-700"></div>

      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 pointer-events-none"></div>
    </div>
  );
};

// Add custom CSS for floating animation
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
