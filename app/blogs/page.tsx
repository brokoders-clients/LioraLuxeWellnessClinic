"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock, Star, Sparkles } from "lucide-react";

export default function PremiumBlog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = {
    title: "The Science Behind IV Vitamin Therapy: What You Need to Know",
    excerpt:
      "Discover how IV vitamin therapy can boost your energy, enhance immunity, and support overall wellness through direct nutrient delivery.",
    author: "Dr. Sarah Johnson",
    date: "September 5, 2025",
    readTime: "8 min read",
    category: "Wellness",
    image: "/blog-featured.jpg",
    featured: true,
  };

  const blogPosts = [
    {
      title: "5 Anti-Aging Skincare Tips from Our Aestheticians",
      excerpt:
        "Learn professional skincare secrets to maintain youthful, glowing skin at any age.",
      author: "Emily Chen",
      date: "September 1, 2025",
      readTime: "6 min read",
      category: "Skincare",
      image: "/blog-1.jpg",
    },
    {
      title: "Understanding Different Types of Facial Treatments",
      excerpt:
        "A comprehensive guide to choosing the right facial treatment for your skin type and concerns.",
      author: "Dr. Sarah Johnson",
      date: "August 28, 2025",
      readTime: "7 min read",
      category: "Treatments",
      image: "/blog-2.jpg",
    },
    {
      title: "Nutrition and Wellness: Creating Sustainable Healthy Habits",
      excerpt:
        "Discover how proper nutrition supports your wellness goals and aesthetic treatments.",
      author: "Michael Rodriguez",
      date: "August 25, 2025",
      readTime: "5 min read",
      category: "Nutrition",
      image: "/blog-3.jpg",
    },
    {
      title: "The Benefits of Regular Wellness Check-ups",
      excerpt:
        "Why consistent wellness monitoring is key to achieving and maintaining your health goals.",
      author: "Dr. Sarah Johnson",
      date: "August 22, 2025",
      readTime: "6 min read",
      category: "Wellness",
      image: "/blog-4.jpg",
    },
    {
      title: "Post-Treatment Care: Maximizing Your Results",
      excerpt:
        "Essential aftercare tips to ensure the best outcomes from your aesthetic treatments.",
      author: "Emily Chen",
      date: "August 19, 2025",
      readTime: "4 min read",
      category: "Treatments",
      image: "/blog-5.jpg",
    },
    {
      title: "Stress Management and Its Impact on Skin Health",
      excerpt:
        "Explore the connection between stress levels and skin appearance, plus effective management strategies.",
      author: "Michael Rodriguez",
      date: "August 16, 2025",
      readTime: "7 min read",
      category: "Wellness",
      image: "/blog-6.jpg",
    },
  ];

  const categories = ["All", "Wellness", "Skincare", "Treatments", "Nutrition"];

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

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-rose-50/30 to-pink-50/40 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Premium floating orbs */}
        <motion.div
          className="absolute top-32 left-16 w-4 h-4 bg-gradient-to-br from-pink-400/60 to-rose-500/40 rounded-full shadow-lg"
          animate={{
            y: [0, -25, 0],
            x: [0, 12, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-64 right-20 w-3 h-3 bg-gradient-to-br from-rose-400/50 to-pink-500/30 rounded-full shadow-md"
          animate={{
            y: [0, -18, 0],
            x: [0, -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-gradient-to-br from-pink-300/70 to-rose-400/50 rounded-full shadow-sm"
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* Elegant geometric lines */}
        <motion.div 
          className="absolute top-1/3 left-12 w-px h-20 bg-gradient-to-b from-transparent via-pink-300/50 to-transparent hidden lg:block"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-2/3 right-16 w-px h-16 bg-gradient-to-b from-transparent via-rose-300/40 to-transparent hidden lg:block"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />

        {/* Enhanced Rose Petals */}
        <motion.div
          className="absolute top-40 left-20 w-6 h-4 opacity-70 hidden md:block"
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
          className="absolute top-80 right-32 w-5 h-3 opacity-60 hidden lg:block"
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

      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <div className="inline-flex items-center px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-pink-200/30 shadow-sm">
              <Sparkles className="w-4 h-4 text-pink-500 mr-3" />
              <span className="text-sm font-medium text-gray-700 tracking-wide">Expert Insights & Wellness Tips</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-7xl font-serif text-gray-900 mb-8 leading-tight font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Wellness & <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Beauty Blog</span>
          </motion.h1>

          <motion.p
            className="text-xl lg:text-2xl text-gray-600 font-light tracking-wide max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Stay informed with the latest insights, tips, and trends in wellness, beauty, and aesthetic treatments from our expert team
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
        </motion.div>

        {/* Enhanced Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 backdrop-blur-sm border shadow-sm ${
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-300 shadow-lg shadow-pink-200/30"
                  : "bg-white/80 text-gray-600 border-gray-200/50 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200"
              }`}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Featured Post */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/20 border border-white/30 relative group"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Premium badge */}
            <div className="absolute top-6 left-6 z-20">
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-white rounded-full shadow-lg text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                Featured
              </div>
            </div>

            <div className="lg:flex">
              <div className="lg:w-1/2 relative">
                {/* Featured image placeholder with enhanced gradient */}
                <div className="h-80 lg:h-full bg-gradient-to-br from-pink-200/80 via-rose-200/70 to-pink-300/80 flex items-center justify-center relative overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-8 left-8 w-16 h-16 border border-white/30 rounded-full" />
                    <div className="absolute bottom-12 right-12 w-12 h-12 border border-white/40 rounded-full" />
                    <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-white/20 rounded-full" />
                  </div>
                  
                  <div className="text-center text-rose-600 relative z-10">
                    <motion.div
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Calendar className="h-16 w-16 mx-auto mb-3 drop-shadow-sm" />
                    </motion.div>
                    <p className="text-lg font-medium">Featured Article</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 p-10 lg:p-12 relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-50/80 to-transparent rounded-bl-3xl" />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-pink-600 bg-pink-50 rounded-full">
                      <Sparkles className="w-4 h-4" />
                      {featuredPost.category}
                    </span>
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-6 leading-tight font-light">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-pink-400" />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-pink-400" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-pink-400" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <motion.button
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Read Full Article</span>
                    <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Blog Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/30 group relative"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Image section with enhanced gradient */}
              <div className="h-56 bg-gradient-to-br from-rose-200/70 via-pink-200/60 to-rose-300/70 flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-4 right-4 w-8 h-8 border border-white/40 rounded-full" />
                  <div className="absolute bottom-6 left-6 w-6 h-6 border border-white/30 rounded-full" />
                </div>
                
                <div className="text-center text-rose-600 relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Calendar className="h-12 w-12 mx-auto mb-2 drop-shadow-sm" />
                  </motion.div>
                  <p className="text-sm font-medium">{post.category}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-50/50 to-transparent rounded-bl-2xl" />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-pink-600 bg-pink-50 rounded-full">
                      {post.category}
                    </span>
                  </motion.div>

                  <h3 className="text-xl font-serif text-gray-900 mb-4 leading-tight group-hover:text-pink-600 transition-colors duration-300 font-light">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3 text-pink-400" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3 text-pink-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">{post.date}</span>
                    <motion.button
                      className="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 hover:text-pink-600 transition-all duration-200 group-hover:shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Enhanced Newsletter Signup */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-rose-100/80 to-pink-100/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 max-w-4xl mx-auto shadow-xl border border-white/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full" />
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-tl from-rose-200/40 to-transparent rounded-full" />
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-300/60 rounded-full" />
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-rose-300/50 rounded-full" />
            </div>

            <div className="relative z-10">
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-pink-200/30 shadow-sm">
                  <Sparkles className="w-4 h-4 text-pink-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700">Exclusive Content</span>
                </div>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-6 font-light leading-tight">
                Stay Updated with Our <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Newsletter</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Get the latest wellness tips, treatment updates, and exclusive offers delivered to your inbox
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent bg-white/90 backdrop-blur-sm text-gray-700 placeholder-gray-400 shadow-sm"
                />
                <motion.button
                  className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Subscribe</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                ✨ Join 10,000+ wellness enthusiasts
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}