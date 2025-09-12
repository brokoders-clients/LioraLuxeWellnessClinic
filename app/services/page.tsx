"use client";
import React from "react";
import { motion } from "framer-motion";

const PremiumWellnessServices = () => {
  const services = [
    {
      id: 1,
      title: "Aesthetic & Cosmetic Treatments",
      description:
        "Transform your skin with our advanced aesthetic treatments designed to enhance your natural beauty and restore youthful radiance.",
      treatments: [
        "Medi-facials, HydraFacial & Oxygen Facial",
        "Chemical peels for skin renewal",
        "Laser treatments (hair reduction, pigmentation)",
        "Skin rejuvenation (microneedling, PRP, MNRF)",
        "Advanced anti-aging therapies",
      ],
      image:
        "/images/cosmetic.png",
      imageAlt: "Luxurious facial treatment in serene spa setting",
      accent: "from-pink-400/20 to-rose-400/20",
      iconColor: "bg-pink-100",
    },
    {
      id: 2,
      title: "Weight Loss & Body Contouring",
      description:
        "Achieve your ideal body shape through our comprehensive weight management and non-invasive body sculpting solutions.",
      treatments: [
        "Personalized diet & nutrition counseling",
        "Fat freeze technology (cryolipolysis)",
        "Advanced body sculpting (EMSCULPT, cavitation)",
        "Targeted lipolytic injections",
        "Holistic weight management programs",
      ],
      image:
        "/images/weight.png",
      imageAlt: "Wellness and fitness consultation",
      accent: "from-emerald-400/20 to-teal-400/20",
      iconColor: "bg-emerald-100",
    },
    {
      id: 3,
      title: "Hair Restoration",
      description:
        "Restore confidence with our cutting-edge hair restoration treatments, addressing hair loss with proven scientific methods.",
      treatments: [
        "PRP/GFC therapy for hair regeneration",
        "Advanced hair mesotherapy",
        "Comprehensive hair transplant consultation",
        "Scalp rejuvenation treatments",
        "Personalized hair care protocols",
      ],
      image:
        "/images/hair.png",
      imageAlt: "Hair restoration consultation",
      accent: "from-amber-400/20 to-orange-400/20",
      iconColor: "bg-amber-100",
    },
    {
      id: 4,
      title: "Wellness Therapies",
      description:
        "Nurture your body and mind with our holistic wellness therapies designed to detoxify, rejuvenate, and restore inner balance.",
      treatments: [
        "Comprehensive detox therapy programs",
        "IV nutrient drips (glutathione, vitamin C, NAD+)",
        "Stress management & meditation therapy",
        "Liver detox & cleanse programs",
        "Personalized wellness consultations",
      ],
      image:
        "/images/therapy.png",
      imageAlt: "Peaceful wellness therapy session",
      accent: "from-violet-400/20 to-purple-400/20",
      iconColor: "bg-violet-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const petalAnimation = (delay = 0) => ({
    y: [0, -10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 5 + delay,
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
          className="absolute top-20 left-20 w-3 h-3 bg-gradient-to-br from-pink-400/70 to-rose-500/50 rounded-full shadow-lg"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-32 w-2 h-2 bg-gradient-to-br from-rose-400/60 to-pink-500/40 rounded-full shadow-md"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-gradient-to-br from-pink-300/80 to-rose-400/60 rounded-full shadow-sm"
          animate={{
            y: [0, -12, 0],
            x: [0, 6, 0],
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        {/* Elegant geometric lines with glow */}
        <motion.div 
          className="absolute top-1/4 left-8 w-px h-32 bg-gradient-to-b from-transparent via-pink-300/70 to-transparent shadow-pink-200/50 shadow-sm hidden lg:block"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 right-12 w-px h-24 bg-gradient-to-b from-transparent via-rose-300/60 to-transparent shadow-rose-200/50 shadow-sm hidden lg:block"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        />

        {/* Enhanced Rose Petals */}
        <motion.div
          className="absolute top-32 left-16 w-8 h-6 opacity-80 hidden md:block"
          animate={petalAnimation(0)}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-pink-300/90 to-rose-400/70 shadow-lg shadow-pink-200/30"
            style={{
              borderRadius: "80% 20% 70% 30%",
              transform: "rotate(15deg)",
              filter: "drop-shadow(0 2px 4px rgba(244, 114, 182, 0.2))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-64 right-24 w-6 h-4 opacity-70 hidden md:block"
          animate={petalAnimation(1)}
        >
          <div
            className="w-full h-full bg-gradient-to-bl from-rose-300/80 to-pink-400/60 shadow-md shadow-rose-200/25"
            style={{
              borderRadius: "70% 30% 60% 40%",
              transform: "rotate(-25deg)",
              filter: "drop-shadow(0 1px 3px rgba(251, 113, 133, 0.2))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 w-7 h-5 opacity-75 hidden lg:block"
          animate={petalAnimation(2)}
        >
          <div
            className="w-full h-full bg-gradient-to-tr from-pink-200/90 to-rose-300/70 shadow-lg shadow-pink-100/40"
            style={{
              borderRadius: "85% 15% 75% 25%",
              transform: "rotate(45deg)",
              filter: "drop-shadow(0 2px 4px rgba(244, 114, 182, 0.15))",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-8 w-5 h-3 opacity-65 hidden lg:block"
          animate={petalAnimation(3)}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-rose-200/80 to-pink-300/60 shadow-md shadow-rose-100/30"
            style={{
              borderRadius: "60% 40% 80% 20%",
              transform: "rotate(-10deg)",
              filter: "drop-shadow(0 1px 2px rgba(251, 113, 133, 0.2))",
            }}
          />
        </motion.div>

        {/* Additional scattered petals */}
        <motion.div
          className="absolute top-96 left-1/4 w-4 h-3 opacity-60 hidden xl:block"
          animate={petalAnimation(4)}
        >
          <div
            className="w-full h-full bg-gradient-to-tl from-pink-300/70 to-rose-200/50 shadow-sm shadow-pink-100/25"
            style={{
              borderRadius: "75% 25% 65% 35%",
              transform: "rotate(30deg)",
            }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-64 left-1/3 w-6 h-4 opacity-70 hidden xl:block"
          animate={petalAnimation(5)}
        >
          <div
            className="w-full h-full bg-gradient-to-br from-rose-300/80 to-pink-200/60 shadow-md shadow-rose-100/30"
            style={{
              borderRadius: "80% 20% 70% 30%",
              transform: "rotate(-35deg)",
            }}
          />
        </motion.div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-6 text-center overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-200/15 to-rose-200/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 20, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-tl from-rose-200/20 to-pink-200/15 rounded-full blur-2xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, -15, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-100/10 to-pink-100/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-6xl lg:text-7xl font-serif text-gray-900 mb-8 leading-tight font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Services</span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 font-light tracking-wide max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Premium care for your skin, body & wellness journey towards radiant health and natural beauty
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

      {/* Services Section */}
      <motion.section
        className="py-12 px-6 relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 last:mb-0 ${
                  isLeft ? "" : "lg:direction-rtl"
                }`}
                variants={itemVariants}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Image Section - Removed hover effects */}
                <div
                  className={`relative ${
                    isLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                  </div>

                  {/* Decorative shadow */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3/4 h-6 bg-gradient-to-r from-transparent via-gray-200/20 to-transparent rounded-full blur-xl" />
                </div>

                {/* Enhanced Content */}
                <motion.div
                  className={`${isLeft ? "lg:order-2" : "lg:order-1"} ${
                    isLeft ? "" : "lg:text-left lg:direction-ltr"
                  }`}
                  variants={itemVariants}
                >
                  <div className="bg-white/80 backdrop-blur-md p-12 rounded-3xl border border-white/30 shadow-xl shadow-gray-200/20 relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-50/50 to-transparent rounded-bl-3xl" />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="inline-block mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm font-medium text-pink-600 bg-pink-50 px-4 py-2 rounded-full">
                          0{service.id}
                        </span>
                      </motion.div>

                      <h3 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight font-light">
                        {service.title}
                      </h3>

                      <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
                        {service.description}
                      </p>

                      <div className="space-y-5">
                        {service.treatments.map((treatment, treatmentIndex) => (
                          <motion.div
                            key={treatmentIndex}
                            className="flex items-start gap-4 group"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 mt-2.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                            <p className="text-gray-600 leading-relaxed font-light group-hover:text-gray-800 transition-colors duration-200">
                              {treatment}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Enhanced Bottom CTA Section */}
      <motion.section
        className="py-20 px-6 bg-gradient-to-r from-stone-100/60 via-rose-50/40 to-pink-50/50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-1/4 w-3 h-3 bg-pink-300/60 rounded-full"
            animate={petalAnimation(0)}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-2 h-2 bg-rose-300/50 rounded-full"
            animate={petalAnimation(2)}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200/30 shadow-sm">
              <span className="text-sm font-medium text-gray-700 tracking-wide">✨ Transform Your Wellness Journey</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl lg:text-6xl font-serif text-gray-900 mb-8 font-light leading-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Begin Your <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Wellness Journey?</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 mb-14 font-light leading-relaxed max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Schedule your personalized consultation today and discover the perfect treatment plan crafted specifically for your unique wellness goals.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.button
              className="px-12 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-full text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              className="px-12 py-4 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-lg font-medium tracking-wide border border-gray-200/50 hover:border-pink-200 hover:bg-pink-50/50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Packages
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PremiumWellnessServices;