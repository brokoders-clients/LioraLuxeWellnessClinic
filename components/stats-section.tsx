export default function StatsSection() {
  const stats = [
    { number: "5,000+", label: "Treatments" },
    { number: "8+", label: "Years of Excellence" },
    { number: "4+", label: "Services" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 bg-[#f5edea] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            Trusted Excellence
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Our commitment to wellness and beauty has made us the premier
            wellness center
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
