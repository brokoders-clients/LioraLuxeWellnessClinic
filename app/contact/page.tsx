"use client"

import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRefs = {
    hero: useRef(null),
    contact: useRef(null),
    form: useRef(null),
    map: useRef(null)
  };

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs).forEach(key => {
      if (sectionRefs[key].current) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.2 }
        );
        observers[key].observe(sectionRefs[key].current);
      }
    });

    // Initial hero animation
    setTimeout(() => {
      setIsVisible(prev => ({ ...prev, hero: true }));
    }, 100);

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const AnimatedSection = ({ children, sectionKey, className = "", delay = 0 }) => {
    const baseClasses = `transition-all duration-1000 ease-out ${className}`;
    const visibleClasses = isVisible[sectionKey] 
      ? 'opacity-100 translate-y-0 scale-100' 
      : 'opacity-0 translate-y-8 scale-95';
    
    return (
      <div 
        ref={sectionRefs[sectionKey]}
        className={`${baseClasses} ${visibleClasses}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#fcfaf9] to-[#f3e7e2]">
      {/* Hero Section */}
      <AnimatedSection sectionKey="hero" className="relative pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#fcfaf9] via-[#f7f2f2] to-[#f3e7e2] opacity-60 rounded-3xl blur-3xl"></div>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-serif text-[#4c4343] mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-[#4c4343]/80 font-light max-w-2xl mx-auto leading-relaxed">
              We're here to guide you on your wellness journey
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Contact Information Section */}
        <AnimatedSection sectionKey="contact" delay={200}>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-[#f7f2f2] rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-500">
              <h2 className="text-3xl font-serif text-[#4c4343] mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="bg-[#4c4343] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4c4343] mb-1">Address</h3>
                    <p className="text-[#4c4343]/70 leading-relaxed">
                      D19, Basement, Defence Colony<br />
                      New Delhi, Delhi - 110024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#4c4343] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4c4343] mb-1">Phone</h3>
                    <p className="text-[#4c4343]/70">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#4c4343] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4c4343] mb-1">Email</h3>
                    <p className="text-[#4c4343]/70">hello@wellnessjourney.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="bg-[#4c4343] p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#4c4343] mb-1">Business Hours</h3>
                    <div className="text-[#4c4343]/70 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <AnimatedSection sectionKey="form" delay={400}>
              <div className="bg-[#f3e7e2] rounded-2xl p-8 md:p-12 shadow-lg">
                <h2 className="text-3xl font-serif text-[#4c4343] mb-8">Send us a Message</h2>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-[#4c4343] mb-2">
                        Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4c4343]/60" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#4c4343]/20 rounded-xl focus:border-[#4c4343] focus:ring-2 focus:ring-[#4c4343]/20 focus:bg-white transition-all duration-300 placeholder-[#4c4343]/50"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-[#4c4343] mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4c4343]/60" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#4c4343]/20 rounded-xl focus:border-[#4c4343] focus:ring-2 focus:ring-[#4c4343]/20 focus:bg-white transition-all duration-300 placeholder-[#4c4343]/50"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-[#4c4343] mb-2">
                      Phone (Optional)
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4c4343]/60" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#4c4343]/20 rounded-xl focus:border-[#4c4343] focus:ring-2 focus:ring-[#4c4343]/20 focus:bg-white transition-all duration-300 placeholder-[#4c4343]/50"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium text-[#4c4343] mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-[#4c4343]/60" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="5"
                        className="w-full pl-12 pr-4 py-3 bg-white/80 border border-[#4c4343]/20 rounded-xl focus:border-[#4c4343] focus:ring-2 focus:ring-[#4c4343]/20 focus:bg-white transition-all duration-300 placeholder-[#4c4343]/50 resize-none"
                        placeholder="Tell us about your wellness goals and how we can help you..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-[#4c4343] text-white py-4 px-6 rounded-xl font-semibold text-lg hover:bg-[#3a3030] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </AnimatedSection>

        {/* Map Section */}
        <AnimatedSection sectionKey="map" delay={600}>
          <div className="bg-white/60 rounded-2xl p-6 shadow-lg">
            <h2 className="text-3xl font-serif text-[#4c4343] mb-6 text-center">Find Us</h2>
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2822!2d77.2235!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26b7d1b02a9%3A0x1f1f1f1f1f1f1f1f!2sDefence%20Colony%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 rounded-xl"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none rounded-xl"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ContactPage;