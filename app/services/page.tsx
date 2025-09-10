"use client";
import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/header";

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
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
      imageAlt: "Luxurious facial treatment in serene spa setting",
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
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      imageAlt: "Wellness and fitness consultation",
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
        "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=600&h=400&fit=crop&crop=center",
      imageAlt: "Hair restoration consultation",
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
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop&crop=center",
      imageAlt: "Peaceful wellness therapy session",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = (isLeft) => ({
    hidden: { x: isLeft ? -60 : 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/40">
        {/* Hero Section */}
        <motion.section
          className="relative py-24 px-6 text-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-pink-200/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-rose-200/15 rounded-full blur-2xl"
              animate={{
                scale: [1.05, 1, 1.05],
                opacity: [0.15, 0.1, 0.15],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1
              className="text-6xl lg:text-7xl font-serif text-gray-900 mb-6 leading-tight font-light tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Our Services
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Premium care for your skin, body & wellness
            </motion.p>

            <motion.div
              className="mt-12 w-24 h-px bg-gray-300 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="py-20 px-6"
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
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32 last:mb-0 ${
                    isLeft ? "" : "lg:direction-rtl"
                  }`}
                  variants={itemVariants}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {/* Image */}
                  <motion.div
                    className={`relative ${
                      isLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                    variants={imageVariants(isLeft)}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <motion.img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-80 lg:h-96 object-cover transition-transform duration-500"
                        whileHover={{ scale: 1.02 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className={`${isLeft ? "lg:order-2" : "lg:order-1"} ${
                      isLeft ? "" : "lg:text-left lg:direction-ltr"
                    }`}
                    variants={itemVariants}
                  >
                    <div className="bg-white/60 backdrop-blur-sm p-10 rounded-2xl border border-white/20">
                      <h3
                        className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight font-light"
                      >
                        {service.title}
                      </h3>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>

                      <div className="space-y-4">
                        {service.treatments.map((treatment, treatmentIndex) => (
                          <div
                            key={treatmentIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2.5 flex-shrink-0" />
                            <p className="text-gray-600 leading-relaxed font-light">
                              {treatment}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* <motion.button
                        className="mt-10 px-8 py-3 bg-gray-900 text-white rounded-full font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                      </motion.button> */}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Bottom CTA Section */}
        <motion.section
          className="py-24 px-6 bg-gradient-to-r from-stone-100/50 to-rose-50/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 font-light"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Begin Your Wellness Journey?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-12 font-light"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Schedule your consultation today and discover the perfect
              treatment plan tailored just for you.
            </motion.p>

            <motion.button
              className="px-12 py-4 bg-gray-900 text-white rounded-full text-lg font-light tracking-wide hover:bg-gray-800 transition-colors duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book Consultation
            </motion.button>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default PremiumWellnessServices;