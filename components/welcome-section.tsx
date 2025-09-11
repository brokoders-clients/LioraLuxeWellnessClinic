import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-20 px-6 bg-[#f5edea] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <Image
                src="images/bottle.png"
                alt="Spa product bottle with pump dispenser"
                width={400}
                height={800}
                className="w-full h-[600px] object-cover object-center rounded-lg scale-100"
              />
            </div>
          </div>

          {/* Welcome Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 leading-tight">
              Welcome
              <br />
              to Liora Luxe Spa
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Everybody is looking for places where to relax and get more
              energy. In our wellness center your energy, beauty and vitality
              meet. The treatments we offer will refresh both your body and
              soul. We are going to welcome you and recommend our facilities and
              services.
            </p>
          </div>
        </div>

        {/* Floating Rose Petal */}
        {/* <div className="absolute bottom-10 right-10 opacity-60">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full transform rotate-45 shadow-lg"></div>
        </div> */}
      </div>
    </section>
  );
}
