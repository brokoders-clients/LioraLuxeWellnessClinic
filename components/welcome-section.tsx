import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-20 px-6 bg-[#f5edea] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <Image
                src="/images/bottle.png"
                alt="Premium wellness product - Liora Luxe"
                width={400}
                height={800}
                className="w-full h-[500px] object-cover object-center rounded-xl"
              />
            </div>
          </div>

          {/* Welcome Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              THE LIORA LUXE LOVE
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Welcome to{" "}
              <span className="font-medium text-gray-900">Liora Luxe</span> —
              where Wellness, Beauty, and Balance converge into the art of
              self‑care. We redefine self‑care as a holistic experience that
              nurtures natural beauty, revitalizes your body, and restores inner
              harmony. A place to relax, recharge, and realign with your best
              self.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-light">
              Explore our advanced Aesthetic & Cosmetic Treatments, targeted
              Body Contouring solutions, state‑of‑the‑art Hair Restoration
              therapies, and rejuvenating Wellness Services. Each treatment is
              personalized to deliver visible results while supporting your
              long‑term well‑being — inside and out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
