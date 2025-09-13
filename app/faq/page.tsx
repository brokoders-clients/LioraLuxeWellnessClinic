"use client";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does your wellness center provide?",
          answer:
            "We specialize in four main areas: Aesthetic & Cosmetic Treatments, Weight Loss & Body Contouring, Hair Restoration, and Wellness Therapies. Each program is tailored to your individual needs and goals.",
        },
        {
          question: "Do I need a consultation before starting treatment?",
          answer:
            "Yes, every client begins with a personalized consultation. Our experts will assess your health, discuss your concerns, and recommend the most suitable treatment plan for you.",
        },
        {
          question: "Are the treatments safe?",
          answer:
            "All our treatments are carried out by qualified professionals using advanced technology and medically approved methods. Your safety and comfort are our top priorities.",
        },
        {
          question: "How soon can I see results?",
          answer:
            "The timeline varies by service. Some treatments show visible results quickly, while others such as weight loss programs or hair restoration require consistent sessions over weeks to months for best outcomes.",
        },
        {
          question: "Do you offer customized programs?",
          answer:
            "Absolutely. We believe every individual is unique, so our team designs personalized treatment plans that align with your health profile, lifestyle, and desired results.",
        },
        {
          question: "Is financing or installment payment available?",
          answer:
            "Yes, we offer flexible payment options and financing plans to make our services accessible. Our team can guide you through the available options during your consultation.",
        },
      ],
    },
    {
      category: "Aesthetic & Cosmetic Treatments",
      questions: [
        {
          question: "What kind of skin treatments do you provide?",
          answer:
            "We offer a range of services including facials, chemical peels, laser-based therapies, and anti-aging treatments, all designed to enhance skin health and appearance.",
        },
        {
          question: "Is there downtime after treatments?",
          answer:
            "Most cosmetic treatments have little to no downtime. Some may cause mild redness or sensitivity, which typically resolves within a day or two. Aftercare instructions will be provided for optimal recovery.",
        },
      ],
    },
    {
      category: "Weight Loss & Body Contouring",
      questions: [
        {
          question: "How is your weight loss program different?",
          answer:
            "Our programs are medically supervised and focus on sustainable lifestyle changes, not just quick fixes. We combine nutrition guidance, safe therapies, and regular monitoring for lasting results.",
        },
        {
          question: "Are body contouring treatments painful?",
          answer:
            "Most clients experience minimal discomfort, and many treatments are completely non-invasive. We ensure your sessions are as comfortable as possible.",
        },
      ],
    },
    {
      category: "Hair Restoration",
      questions: [
        {
          question: "What types of hair restoration treatments do you offer?",
          answer:
            "We provide non-surgical therapies, advanced clinical treatments, and supportive care to promote hair regrowth, strengthen existing hair, and prevent further hair loss.",
        },
        {
          question: "How many sessions are needed for visible results?",
          answer:
            "Hair restoration is a gradual process. While some improvement can be noticed within a few months, full results usually appear after multiple sessions depending on the individual.",
        },
      ],
    },
    {
      category: "Wellness Therapies",
      questions: [
        {
          question: "What do your wellness therapies include?",
          answer:
            "We provide stress-relief therapies, relaxation techniques, and energy-balancing treatments aimed at improving both physical and mental well-being.",
        },
        {
          question: "Who can benefit from wellness therapies?",
          answer:
            "Wellness therapies are suitable for anyone experiencing stress, fatigue, or imbalance. They are ideal for individuals looking to restore energy, focus, and overall vitality.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Subtle Rose Petals */}
      <div className="absolute top-16 left-8 w-3 h-4 opacity-20 transform rotate-12">
        <div className="w-full h-full bg-gradient-to-br from-rose-400 to-rose-500 rounded-full transform skew-y-12"></div>
      </div>
      <div className="absolute top-32 right-16 w-2 h-3 opacity-25 transform -rotate-45">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-400 rounded-full transform skew-x-12"></div>
      </div>
      <div className="absolute bottom-24 left-12 w-3 h-3 opacity-20 transform rotate-75">
        <div className="w-full h-full bg-gradient-to-br from-rose-300 to-pink-400 rounded-full transform skew-y-6"></div>
      </div>
      <div className="absolute bottom-32 right-20 w-2 h-3 opacity-25 transform -rotate-30">
        <div className="w-full h-full bg-gradient-to-br from-pink-400 to-rose-400 rounded-full transform skew-x-6"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Clean Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our treatments and services
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1"></div>
                  <h2 className="text-xl font-serif text-stone-800 px-6 bg-white">
                    {category.category}
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent flex-1"></div>
                </div>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-stone-50/50 transition-colors rounded-xl group"
                      >
                        <span className="font-medium text-stone-800 pr-4 group-hover:text-rose-600 transition-colors">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
                          {isOpen ? (
                            <Minus className="h-4 w-4 text-rose-500" />
                          ) : (
                            <Plus className="h-4 w-4 text-rose-500" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-5 border-t border-stone-100 bg-[#f5edea]">
                          <p className="text-stone-600 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-20">
          <div className="bg-pink-50 rounded-2xl border border-orange-700/70 p-8 md:p-12 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-8 w-8 text-rose-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Our friendly team is here to help you with any additional
              questions or concerns
            </p>
            <Button
              size="lg"
              className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
