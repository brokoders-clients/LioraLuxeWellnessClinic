import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-rose-500" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Emergency: +1 (555) 123-4568"],
      description: "Call us during business hours or leave a message anytime",
    },
    {
      icon: <Mail className="h-6 w-6 text-rose-500" />,
      title: "Email",
      details: [
        "info@serenitywellness.com",
        "appointments@serenitywellness.com",
      ],
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-rose-500" />,
      title: "Location",
      details: ["123 Wellness Avenue", "City, State 12345"],
      description: "Visit our state-of-the-art wellness center",
    },
    {
      icon: <Clock className="h-6 w-6 text-rose-500" />,
      title: "Hours",
      details: ["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "Extended hours available for appointments",
    },
  ];

  const services = [
    "Aesthetic Treatments",
    "Weight Loss Programs",
    "Hair Restoration",
    "IV Drip Therapy",
    "Wellness Therapies",
    "Spa Packages",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-rose-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-8 h-8 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-60 transform rotate-45"></div>
      <div className="absolute top-32 right-20 w-6 h-6 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-50 transform -rotate-12"></div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full opacity-40 transform rotate-12"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Ready to begin your wellness journey? Get in touch with our expert
            team to schedule a consultation or learn more about our services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-serif text-stone-800 mb-8">
              Get In Touch
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-rose-100 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-stone-800 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-stone-600 font-medium"
                        >
                          {detail}
                        </p>
                      ))}
                      <p className="text-stone-500 text-sm mt-2">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-stone-200/50">
              <h3 className="font-serif font-semibold text-stone-800 mb-4">
                Find Us
              </h3>
              <div className="h-48 bg-gradient-to-br from-rose-200 to-rose-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-rose-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="text-sm">Interactive Map</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-stone-200/50">
              <h2 className="text-2xl font-serif text-stone-800 mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    Service of Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white">
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact-method"
                        value="phone"
                        className="mr-2 text-rose-500 focus:ring-rose-300"
                      />
                      Phone
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact-method"
                        value="email"
                        className="mr-2 text-rose-500 focus:ring-rose-300"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contact-method"
                        value="text"
                        className="mr-2 text-rose-500 focus:ring-rose-300"
                      />
                      Text
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
                    placeholder="Tell us about your wellness goals or questions..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mr-3 text-rose-500 focus:ring-rose-300"
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-stone-600 text-sm"
                  >
                    I would like to receive wellness tips and special offers via
                    email
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-rose-500 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 text-center">
                <h3 className="font-serif font-semibold text-stone-800 mb-3">
                  Schedule a Consultation
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  Ready to get started? Book your personalized consultation
                  today.
                </p>
                <button className="bg-white text-rose-600 px-6 py-2 rounded-full font-semibold hover:bg-rose-50 transition-colors">
                  Book Now
                </button>
              </div>

              <div className="bg-gradient-to-r from-stone-100 to-stone-200 rounded-2xl p-6 text-center">
                <h3 className="font-serif font-semibold text-stone-800 mb-3">
                  Virtual Consultation
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  Can't visit in person? Schedule a virtual consultation from
                  home.
                </p>
                <button className="bg-white text-stone-600 px-6 py-2 rounded-full font-semibold hover:bg-stone-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
