import type React from "react";
import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/40 relative overflow-hidden">
      {/* Hero Content */}
      <div className="flex items-center justify-between px-8 lg:px-16 py-8 lg:py-16 min-h-[calc(100vh-100px)]">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl relative z-10">
          <div className="absolute -top-8 left-12 w-16 h-12 opacity-80">
            <div
              className="w-full h-full bg-gradient-to-br from-pink-300/90 via-pink-400/80 to-rose-400/70 shadow-sm"
              style={{
                borderRadius: "60% 40% 70% 30%",
                transform: "rotate(25deg)",
              }}
            ></div>
          </div>

          <div className="absolute top-32 left-4 w-12 h-10 opacity-70">
            <div
              className="w-full h-full bg-gradient-to-br from-pink-200/80 via-pink-300/70 to-pink-400/60 shadow-sm"
              style={{
                borderRadius: "50% 70% 40% 60%",
                transform: "rotate(-15deg)",
              }}
            ></div>
          </div>

          <div className="absolute top-16 left-64 w-10 h-8 opacity-60">
            <div
              className="w-full h-full bg-gradient-to-br from-pink-300/70 via-rose-300/60 to-pink-400/50 shadow-sm"
              style={{
                borderRadius: "70% 30% 60% 40%",
                transform: "rotate(45deg)",
              }}
            ></div>
          </div>

          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif text-gray-900 leading-[0.85] mb-12 tracking-tight font-light">
            Care of
            <br />
            <span className="relative inline-block">
              your body
              <div
                className="absolute -top-2 right-8 w-6 h-5 bg-gradient-to-br from-pink-300/80 to-rose-400/70 opacity-70"
                style={{
                  borderRadius: "60% 40% 70% 30%",
                  transform: "rotate(20deg)",
                }}
              ></div>
            </span>
          </h1>

          <div className="flex items-center space-x-3 text-gray-500 mt-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase">
              Scroll
            </span>
            <div className="w-5 h-12 border border-gray-400 rounded-full flex items-end justify-center pb-1.5">
              <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Woman Image with refined circular frame */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            <div className="w-[380px] h-[380px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden bg-gradient-to-br from-stone-100 to-rose-100/50 shadow-2xl border-8 border-white/80 backdrop-blur-sm">
              <Image
                src="/images/wellness.png"
                alt="Beautiful woman with natural skincare"
                width={100}
                height={100}
                className="w-full h-full object-cover object-center scale-100"
              />
            </div>

            <div className="absolute -top-4 right-16 w-10 h-8 opacity-60">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-300/70 to-rose-400/60 shadow-sm"
                style={{
                  borderRadius: "60% 40% 70% 30%",
                  transform: "rotate(35deg)",
                }}
              ></div>
            </div>

            <div className="absolute top-24 -right-6 w-8 h-6 opacity-50">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-200/60 to-pink-400/50 shadow-sm"
                style={{
                  borderRadius: "50% 70% 40% 60%",
                  transform: "rotate(-25deg)",
                }}
              ></div>
            </div>

            <div className="absolute bottom-16 -left-6 w-12 h-10 opacity-65">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-300/70 to-rose-400/60 shadow-sm"
                style={{
                  borderRadius: "70% 30% 60% 40%",
                  transform: "rotate(25deg)",
                }}
              ></div>
            </div>

            <div className="absolute bottom-32 right-4 w-9 h-7 opacity-55">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-200/60 to-rose-300/50 shadow-sm"
                style={{
                  borderRadius: "60% 40% 50% 70%",
                  transform: "rotate(-15deg)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-pink-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/6 w-24 h-24 bg-rose-200/15 rounded-full blur-2xl"></div>
    </div>
  );
};

export default HeroSection;
