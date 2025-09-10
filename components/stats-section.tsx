export default function StatsSection() {
  const stats = [
    { number: "5,000+", label: "Spa Treatments" },
    { number: "8+", label: "Years of Excellence" },
    { number: "25+", label: "Spa Services" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-stone-50 to-rose-50 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-60 transform rotate-45"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-50 transform -rotate-12"></div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full opacity-40 transform rotate-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Trusted Spa Excellence
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Our commitment to wellness and beauty has made us the premier spa
            destination
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-stone-800">
                {stat.number}
              </div>
              <div className="text-lg text-stone-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
