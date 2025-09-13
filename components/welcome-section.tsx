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
                src="/images/bottle.png"
                alt="Premium wellness and product bottle"
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
              to Liora Luxe
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At <span className="font-semibold text-gray-800">Liora Luxe</span>
              , we believe wellness is a journey where beauty, vitality, and
              inner peace meet. Our sanctuary is designed to help you slow down,
              recharge, and rediscover balance in body, mind, and soul.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              From{" "}
              <span className="font-medium">
                Aesthetic & Cosmetic Treatments
              </span>
              that enhance your natural glow, to
              <span className="font-medium">
                {" "}
                Weight Loss & Body Contouring
              </span>
              programs that bring visible results, to
              <span className="font-medium"> Hair Restoration</span> therapies
              and deeply relaxing{" "}
              <span className="font-medium">Wellness Therapies</span>, every
              treatment is carefully curated for your well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
