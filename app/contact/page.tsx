"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, Heart } from 'lucide-react';

const PremiumContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const services = [
    'Aesthetic & Cosmetic Treatments',
    'Weight Loss & Body Contouring',
    'Hair Restoration',
    'Wellness Therapies',
    'General Inquiry'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const petalAnimation = (delay = 0) => ({
    y: [0, -8, 0],
    rotate: [0, 3, 0],
    transition: {
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/40 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Premium floating orbs */}
        <motion.div
          className="absolute top-24 left-12 w-4 h-4 bg-gradient-to-br from-pink-400/60 to-rose-500/40 rounded-full shadow-lg"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-48 right-16 w-3 h-3 bg-gradient-to-br from-rose-400/50 to-pink-500/30 rounded-full shadow-md"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-br from-pink-300/70 to-rose-400/50 rounded-full shadow-sm"
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Elegant geometric lines */}
        <motion.div 
          className="absolute top-1/4 left-8 w-px h-24 bg-gradient-to-b from-transparent via-pink-300/50 to-transparent hidden lg:block"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 right-12 w-px h-16 bg-gradient-to-b from-transparent via-rose-300/40 to-transparent hidden lg:block"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />

        {/* Enhanced Rose Petals */}
        <motion.div
          className="absolute top-32 left-20 w-6 h-4 opacity-70 hidden md:block"
          animate={petalAnimation(0)}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-pink-300/80 to-rose-400/60 shadow-md shadow-pink-200/20"
            style={{
              borderRadius: "75% 25% 65% 35%",
              transform: "rotate(20deg)",
              filter: "drop-shadow(0 2px 3px rgba(244, 114, 182, 0.15))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-64 right-32 w-5 h-3 opacity-60 hidden lg:block"
          animate={petalAnimation(2)}
        >
          <div
            className="w-full h-full bg-gradient-to-bl from-rose-300/70 to-pink-400/50 shadow-sm shadow-rose-200/15"
            style={{
              borderRadius: "65% 35% 70% 30%",
              transform: "rotate(-30deg)",
              filter: "drop-shadow(0 1px 2px rgba(251, 113, 133, 0.15))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-40 right-24 w-7 h-5 opacity-65 hidden lg:block"
          animate={petalAnimation(4)}
        >
          <div
            className="w-full h-full bg-gradient-to-tr from-pink-200/80 to-rose-300/60 shadow-md shadow-pink-100/25"
            style={{
              borderRadius: "80% 20% 75% 25%",
              transform: "rotate(50deg)",
            }}
          />
        </motion.div>
      </div>

      {/* Enhanced Hero Section */}
      <motion.section
        className="relative pt-28 pb-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-16 left-8 w-32 h-32 bg-gradient-to-br from-pink-200/10 to-rose-200/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 15, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-16 right-8 w-24 h-24 bg-gradient-to-tl from-rose-200/15 to-pink-200/10 rounded-full blur-xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, -10, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="inline-flex items-center px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200/30 shadow-sm">
              <Heart className="w-4 h-4 text-pink-500 mr-3" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">We're Here to Help</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-serif text-gray-900 mb-8 leading-tight font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Touch</span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We're here to guide you on your wellness journey towards radiant health and natural beauty
          </motion.p>

          <motion.div
            className="mt-12 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-pink-300" />
            <div className="w-2 h-2 bg-pink-400 rounded-full" />
            <div className="w-16 h-px bg-gradient-to-r from-pink-300 to-rose-300" />
            <div className="w-2 h-2 bg-rose-400 rounded-full" />
            <div className="w-8 h-px bg-gradient-to-r from-rose-300 to-transparent" />
          </motion.div>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact Information and Form Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Enhanced Contact Information */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-xl shadow-gray-200/20 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-50/50 to-transparent rounded-bl-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-10 font-light">Contact Information</h2>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Address</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      D19, Basement, Defence Colony<br />
                      New Delhi, Delhi - 110024
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Phone</h3>
                    <p className="text-gray-600 font-light text-lg">+91 98765 43210</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Email</h3>
                    <p className="text-gray-600 font-light text-lg">hello@wellnessjourney.com</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Business Hours</h3>
                    <div className="text-gray-600 font-light space-y-2">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-12 border border-white/30 shadow-xl shadow-gray-200/20 relative overflow-hidden"
            variants={itemVariants}
          >
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-50/50 to-transparent rounded-tr-3xl" />
            
            <div className="relative z-10">
              <div className="mb-10">
                <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4 font-light">Send us a Message</h2>
                <p className="text-gray-600 font-light">We'd love to hear from you and help with your wellness journey.</p>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/90 border border-gray-200/50 rounded-2xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all duration-300 placeholder-gray-400 font-light shadow-sm backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-white/90 border border-gray-200/50 rounded-2xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all duration-300 placeholder-gray-400 font-light shadow-sm backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-white/90 border border-gray-200/50 rounded-2xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all duration-300 placeholder-gray-400 font-light shadow-sm backdrop-blur-sm"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-white/90 border border-gray-200/50 rounded-2xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all duration-300 font-light shadow-sm backdrop-blur-sm"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-5 py-4 bg-white/90 border border-gray-200/50 rounded-2xl focus:border-pink-300 focus:ring-2 focus:ring-pink-100 transition-all duration-300 placeholder-gray-400 font-light resize-none shadow-sm backdrop-blur-sm"
                    placeholder="Tell us about your wellness goals and how we can help you achieve them..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-5 px-8 rounded-2xl font-medium text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Map Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-xl shadow-gray-200/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-gradient-to-b from-pink-50/30 to-transparent rounded-b-3xl" />
            
            <div className="relative z-10">
              <div className="text-center mb-10">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-pink-50 rounded-full border border-pink-200/30 shadow-sm mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-4 h-4 text-pink-500 mr-2" />
                  <span className="text-sm font-medium text-pink-600">Our Location</span>
                </motion.div>
                
                <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 font-light">Find Us</h2>
                <p className="text-gray-600 font-light mt-3">Located in the heart of Defence Colony, New Delhi</p>
              </div>
              
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-lg"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2822!2d77.2235!3d28.5672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26b7d1b02a9%3A0x1f1f1f1f1f1f1f1f!2sDefence%20Colony%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96 rounded-2xl"
                />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumContactPage;