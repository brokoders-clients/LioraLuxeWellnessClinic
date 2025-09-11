"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote, User } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Mehta",
    treatment: "Aesthetic & Cosmetic Treatments",
    rating: 5,
    text: "I came here for a skin rejuvenation treatment and the results have been amazing. The staff explained everything clearly, and I can already see a healthy glow on my face. Highly recommended!",
    image: "/clients/priya-mehta.jpg",
  },
  {
    name: "Mohit Sharma",
    treatment: "Weight Loss & Body Contouring",
    rating: 5,
    text: "The weight loss program was very structured and easy to follow. The team guided me with personalized plans, and I’ve noticed real changes in both my energy levels and body shape.",
    image: "/clients/rohit-sharma.jpg",
  },
  {
    name: "Ananya Iyer",
    treatment: "Hair Restoration",
    rating: 5,
    text: "I was worried about hair thinning, but after a few sessions here, I can already see new growth and stronger hair. The experts are very professional and supportive throughout the process.",
    image: "/clients/ananya-iyer.jpg",
  },
  {
    name: "Arjun Patel",
    treatment: "Wellness Therapie",
    rating: 5,
    text: "The wellness therapy sessions helped me reduce my stress significantly. The environment is calm, and the therapy techniques are truly relaxing. I feel lighter and more energetic after every session.",
    image: "/clients/arjun-patel.jpg",
  },
  {
    name: "Neha Kapoor",
    treatment: "Aesthetic & Cosmetic Treatments",
    rating: 5,
    text: "I opted for a cosmetic treatment for my skin concerns, and I couldn’t be happier with the outcome. The center uses advanced techniques, and I feel more confident than ever.",
    image: "/clients/neha-kapoor.jpg",
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
      className="py-20 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      {/* Real Rose Petals - Small and Scattered */}
      <div className="absolute top-12 left-8 w-3 h-4 opacity-40 transform rotate-12">
        <div className="w-full h-full bg-gradient-to-br from-rose-400 to-rose-500 rounded-full transform skew-y-12"></div>
      </div>
      <div className="absolute top-32 left-16 w-2 h-3 opacity-35 transform -rotate-45">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-400 rounded-full transform skew-x-12"></div>
      </div>
      <div className="absolute top-24 left-32 w-3 h-3 opacity-30 transform rotate-90">
        <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-400 rounded-full transform skew-y-6"></div>
      </div>

      <div className="absolute top-16 right-12 w-2 h-3 opacity-35 transform rotate-75">
        <div className="w-full h-full bg-gradient-to-br from-rose-400 to-pink-500 rounded-full transform skew-x-6"></div>
      </div>
      <div className="absolute top-40 right-8 w-3 h-4 opacity-40 transform -rotate-30">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-400 rounded-full transform skew-y-12"></div>
      </div>
      <div className="absolute top-28 right-28 w-2 h-2 opacity-30 transform rotate-120">
        <div className="w-full h-full bg-gradient-to-br from-rose-300 to-rose-400 rounded-full transform skew-x-12"></div>
      </div>

      <div className="absolute bottom-16 left-12 w-3 h-3 opacity-35 transform rotate-60">
        <div className="w-full h-full bg-gradient-to-br from-rose-400 to-pink-400 rounded-full transform skew-y-6"></div>
      </div>
      <div className="absolute bottom-32 left-24 w-2 h-3 opacity-30 transform -rotate-75">
        <div className="w-full h-full bg-gradient-to-br from-pink-300 to-rose-400 rounded-full transform skew-x-12"></div>
      </div>

      <div className="absolute bottom-20 right-16 w-3 h-4 opacity-40 transform rotate-15">
        <div className="w-full h-full bg-gradient-to-br from-rose-400 to-rose-500 rounded-full transform skew-y-12"></div>
      </div>
      <div className="absolute bottom-36 right-32 w-2 h-2 opacity-35 transform -rotate-90">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-400 rounded-full transform skew-x-6"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Real experiences from guests who have found peace and rejuvenation
            at Liora Luxe Spa
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-1 border-gray-400 bg-white rounded-3xl overflow-hidden">
            <CardContent className="p-10 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center">
                  <Quote className="h-8 w-8 text-rose-400" />
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-rose-400 text-rose-400 mx-1"
                    />
                  ))}
                </div>

                <p className="text-xl text-stone-700 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center gap-6">
                  <div className="relative">
                    {/* <Image
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      width={100}
                      height={100}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover"
                    /> */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-rose-400 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 fill-white text-white" />
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="font-serif text-xl text-stone-800 mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-rose-500 font-medium">
                      {testimonials[currentIndex].treatment}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-6 mt-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 bg-white shadow-md hover:bg-rose-50 hover:shadow-lg transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 text-stone-600" />
            </Button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-rose-400 scale-125"
                      : "bg-stone-300 hover:bg-stone-400"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 bg-white shadow-md hover:bg-rose-50 hover:shadow-lg transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 text-stone-600" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
