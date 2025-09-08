"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    treatment: "HydraFacial & Weight Loss Program",
    rating: 5,
    text: "The results exceeded my expectations! The staff is incredibly professional and the treatments are top-notch. I've lost 25 pounds and my skin has never looked better.",
    image: "/professional-woman-smiling-headshot.png",
  },
  {
    name: "Michael Chen",
    treatment: "Hair Restoration & PRP Therapy",
    rating: 5,
    text: "After struggling with hair loss for years, the PRP treatments here have given me my confidence back. The team made me feel comfortable throughout the entire process.",
    image: "/professional-man-smiling-headshot.png",
  },
  {
    name: "Emily Rodriguez",
    treatment: "Laser Treatments & Anti-aging",
    rating: 5,
    text: "The laser treatments for pigmentation were amazing. My skin tone is so much more even now. The anti-aging treatments have taken years off my appearance!",
    image: "/professional-woman-smiling-headshot.png",
  },
  {
    name: "David Thompson",
    treatment: "Body Contouring & Wellness Therapy",
    rating: 5,
    text: "The EMSCULPT treatments combined with their wellness programs have transformed my body. I feel stronger, healthier, and more confident than ever.",
    image: "/professional-man-smiling-headshot.png",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real people who have transformed their lives with our treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-accent" />
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-card-foreground">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[currentIndex].treatment}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-accent" : "bg-border"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
