import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 relative overflow-hidden">
      {/* Hero Content */}
      <div className="flex items-center justify-between px-8 lg:px-16 py-8 lg:py-16 min-h-screen">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl relative z-10">
          {/* Floating Rose Petals - More realistic shapes */}
          <div className="absolute top-16 left-8 w-20 h-16 opacity-90">
            <div
              className="w-full h-full bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 rounded-full transform rotate-12 shadow-lg"
              style={{
                clipPath: "ellipse(70% 50% at 40% 40%)",
                borderRadius: "50% 30% 60% 40%",
              }}
            ></div>
          </div>

          <div className="absolute top-40 left-20 w-16 h-12 opacity-80">
            <div
              className="w-full h-full bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 rounded-full transform -rotate-12 shadow-md"
              style={{
                clipPath: "ellipse(60% 40% at 50% 60%)",
                borderRadius: "40% 60% 30% 50%",
              }}
            ></div>
          </div>

          <div className="absolute top-8 left-48 w-12 h-10 opacity-70">
            <div
              className="w-full h-full bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 rounded-full transform rotate-25 shadow-sm"
              style={{
                borderRadius: "50% 40% 60% 30%",
              }}
            ></div>
          </div>

          {/* Main Heading - Exact font styling */}
          <h1 className="text-6xl lg:text-8xl font-serif text-gray-900 leading-[0.9] mb-8 tracking-tight">
            Care of
            <br />
            <span className="relative inline-block">
              your body
              {/* Decorative petal near text */}
              <div
                className="absolute -top-3 right-6 w-8 h-6 bg-gradient-to-br from-pink-300 to-pink-500 opacity-80 transform rotate-15"
                style={{
                  borderRadius: "50% 30% 60% 40%",
                }}
              ></div>
            </span>
          </h1>

          {/* Scroll Indicator - Matching original design */}
          <div className="flex items-center space-x-3 text-gray-600 mt-12">
            <span className="text-sm font-medium tracking-[0.2em] uppercase">
              Scroll
            </span>
            <div className="w-6 h-14 border-2 border-gray-400 rounded-full flex items-end justify-center pb-2">
              <div className="w-1.5 h-4 bg-gray-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Right Content - Woman Image with exact circular frame */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="relative">
            {/* Main circular image container - Exact sizing and positioning */}
            <div className="w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-rose-200 shadow-xl border-4 border-white/50">
              <img
                src="./images/wellness.png"
                alt="Beautiful woman with natural skincare"
                className="w-full h-full object-contain object-center scale-90"
              />
            </div>

            {/* Additional floating petals around the image - More accurate positioning */}
            <div className="absolute -top-6 right-20 w-12 h-10 opacity-70">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-500 transform rotate-45 shadow-lg"
                style={{
                  borderRadius: "50% 30% 60% 40%",
                }}
              ></div>
            </div>

            <div className="absolute top-32 -right-4 w-8 h-6 opacity-60">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-200 to-pink-400 transform -rotate-12 shadow-md"
                style={{
                  borderRadius: "40% 60% 30% 50%",
                }}
              ></div>
            </div>

            <div className="absolute bottom-20 -left-8 w-14 h-12 opacity-75">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-300 to-pink-500 transform rotate-30 shadow-lg"
                style={{
                  borderRadius: "50% 40% 60% 30%",
                }}
              ></div>
            </div>

            <div className="absolute bottom-40 right-8 w-10 h-8 opacity-65">
              <div
                className="w-full h-full bg-gradient-to-br from-pink-200 to-pink-500 transform -rotate-20 shadow-md"
                style={{
                  borderRadius: "60% 40% 50% 30%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements - Softer and more subtle */}
      <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/5 w-32 h-32 bg-rose-200/25 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-pink-300/15 rounded-full blur-2xl"></div>
    </div>
  );
};

export default HeroSection;
