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
        staggerChildren: 0.3,
        duration: 0.8,
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

  const imageVariants = (isLeft) => ({
    hidden: { x: isLeft ? -100 : 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  });

  return (
    <>
      <Header/>
      <div className="min-h-screen bg-gradient-to-b from-[#fcfaf9] via-[#f7f2f2] to-[#f3e7e2]">
        {/* Hero Section */}
        <motion.section
          className="relative py-24 px-6 text-center overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Background Gradient Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#f3e7e2]/30 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#4c4343]/10 to-transparent rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h1
              className="text-6xl md:text-7xl font-bold text-[#4c4343] mb-6 leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our Services
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-[#4c4343]/80 font-light tracking-wide"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Premium care for your skin, body & wellness
            </motion.p>

            <motion.div
              className="mt-8 w-24 h-1 bg-gradient-to-r from-[#4c4343] to-[#4c4343]/50 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.8, duration: 0.8 }}
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
                    className={`relative group ${
                      isLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                    variants={imageVariants(isLeft)}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <motion.img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-80 md:h-96 object-cover transition-transform duration-700"
                        whileHover={{ scale: 1.05 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4c4343]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-6 left-6 w-full h-full bg-[#f3e7e2] rounded-2xl" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className={`${isLeft ? "lg:order-2" : "lg:order-1"} ${
                      isLeft ? "" : "lg:text-right lg:direction-ltr"
                    }`}
                    variants={itemVariants}
                  >
                    <motion.div
                      className="bg-[#f7f2f2] p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-[#f3e7e2]/50"
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3
                        className="text-3xl md:text-4xl font-bold text-[#4c4343] mb-6 leading-tight"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {service.title}
                      </h3>

                      <p className="text-lg text-[#4c4343]/80 mb-8 leading-relaxed font-light">
                        {service.description}
                      </p>

                      <div className="space-y-4">
                        {service.treatments.map((treatment, treatmentIndex) => (
                          <motion.div
                            key={treatmentIndex}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: treatmentIndex * 0.1 }}
                          >
                            <div className="w-2 h-2 rounded-full bg-[#4c4343] mt-3 flex-shrink-0" />
                            <p className="text-[#4c4343]/70 leading-relaxed">
                              {treatment}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <motion.button
                        className="mt-8 px-8 py-3 bg-[#4c4343] text-white rounded-full font-medium hover:bg-[#4c4343]/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Bottom CTA Section */}
        <motion.section
          className="py-20 px-6 bg-gradient-to-r from-[#f3e7e2] to-[#f7f2f2]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#4c4343] mb-6"
              style={{ fontFamily: "Georgia, serif" }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Ready to Begin Your Wellness Journey?
            </motion.h2>

            <motion.p
              className="text-xl text-[#4c4343]/80 mb-10 font-light"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Schedule your consultation today and discover the perfect
              treatment plan tailored just for you.
            </motion.p>

            <motion.button
              className="px-12 py-4 bg-[#4c4343] text-white rounded-full text-lg font-medium hover:bg-[#4c4343]/90 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
