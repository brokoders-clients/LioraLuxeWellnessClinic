import { Calendar, User, ArrowRight, Clock } from "lucide-react";

export default function Blog() {
  const featuredPost = {
    title: "The Science Behind IV Vitamin Therapy: What You Need to Know",
    excerpt:
      "Discover how IV vitamin therapy can boost your energy, enhance immunity, and support overall wellness through direct nutrient delivery.",
    author: "Dr. Sarah Johnson",
    date: "September 5, 2025",
    readTime: "8 min read",
    category: "Wellness",
    image: "/blog-featured.jpg",
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
            Wellness & Beauty Blog
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest insights, tips, and trends in
            wellness, beauty, and aesthetic treatments from our expert team.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-stone-200/50 text-stone-600 hover:bg-rose-100 hover:text-rose-600 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-stone-200/50">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="h-64 md:h-full bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center">
                  <div className="text-center text-rose-600">
                    <Calendar className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Featured Article</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-rose-600 bg-rose-100 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-stone-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-rose-500 font-semibold hover:text-rose-600 transition-colors">
                  Read Full Article
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-stone-200/50 group"
            >
              <div className="h-48 bg-gradient-to-br from-rose-200 to-rose-300 flex items-center justify-center">
                <div className="text-center text-rose-600">
                  <Calendar className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-xs">{post.category}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-rose-600 bg-rose-100 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-stone-800 mb-3 group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500">{post.date}</span>
                  <button className="text-rose-500 hover:text-rose-600 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-stone-600 mb-6">
              Get the latest wellness tips, treatment updates, and exclusive
              offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white"
              />
              <button className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:from-rose-500 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
