"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    treatment: "Hydro Therapy & Massage",
    rating: 5,
    text: "The hydro therapy session was absolutely divine! The staff made me feel so relaxed and pampered. My skin feels rejuvenated and I left feeling completely refreshed.",
    image: "/professional-woman-smiling-spa-client.jpg",
  },
  {
    name: "Michael Chen",
    treatment: "Sauna & Reflexology",
    rating: 5,
    text: "The sauna experience combined with reflexology was exactly what I needed. The peaceful atmosphere and expert care helped me unwind completely after a stressful week.",
    image: "/professional-man-relaxed-spa-client.jpg",
  },
  {
    name: "Emily Rodriguez",
    treatment: "Full Body Massage & Facial",
    rating: 5,
    text: "The full body massage and facial treatment exceeded all my expectations. The attention to detail and the serene environment made this the perfect spa day.",
    image: "/professional-woman-glowing-spa-client.jpg",
  },
  {
    name: "David Thompson",
    treatment: "Couples Spa Package",
    rating: 5,
    text: "My partner and I had the most wonderful couples spa experience. The treatments were luxurious and the ambiance was perfect for a romantic wellness retreat.",
    image: "/professional-man-happy-spa-client.jpg",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="absolute top-16 right-10 w-6 h-6 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-60 transform rotate-45"></div>
      <div className="absolute bottom-24 left-16 w-8 h-8 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-50 transform -rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-br from-rose-300 to-rose-400 rounded-full opacity-40 transform rotate-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Real experiences from guests who have found peace and rejuvenation
            at Liora Luxe Spa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-stone-200 bg-gradient-to-br from-stone-50 to-rose-50 shadow-lg">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-rose-400" />
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-rose-400 text-rose-400"
                    />
                  ))}
                </div>

                <p className="text-lg text-stone-700 mb-6 leading-relaxed italic font-light">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-rose-200"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-stone-800">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-stone-600">
                      {testimonials[currentIndex].treatment}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white border-stone-300 hover:bg-rose-50"
            >
              <ChevronLeft className="h-4 w-4 text-stone-600" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-rose-400" : "bg-stone-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white border-stone-300 hover:bg-rose-50"
            >
              <ChevronRight className="h-4 w-4 text-stone-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
