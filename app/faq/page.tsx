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
          question: "What Services Does Liora Luxe Wellness Center Offer?",
          answer:
            "We specialize in delivering comprehensive, results-driven wellness solutions across four core service areas: Aesthetic & Cosmetic Treatments, Weight Loss & Body Contouring, Hair Restoration Treatments and Holistic Wellness Therapies. Every service is customized to your unique health and aesthetic goals also ensuring safety.",
        },
        {
          question: "Is a Consultation Required Before Starting Treatment?",
          answer:
            "Every client must begin with a comprehensive, personalized consultation. Our wellness and aesthetic experts conduct a thorough health assessment, understand your individual concerns, and design a customized treatment plan. This ensures safe, effective, and optimal results for the services we provide.",
        },
        {
          question: "Are Liora Luxe Treatments Safe?",
          answer:
            "Absolutely! All treatments at Liora Luxe are performed by licensed, experienced professionals using state-of-the-art technology and medically approved, non-invasive techniques. We strictly adhere to industry safety standards and health regulations, ensuring your comfort, safety, and optimal results during every step of your personalized wellness and aesthetic journey. Your Safety-Our Priority!",
        },
        {
          question:
            "How Soon Can I Expect Results from Treatments at Liora Luxe?",
          answer:
            "The timeline for visible results might vary depending on the required treatment type. Many aesthetic procedures deliver noticeable improvements shortly after the session, while weight loss programs, body contouring, and hair restoration therapies typically require consistent sessions taking up over several weeks to months to achieve optimal, desirable results. Our experts will provide a personalized timeline based on your specific treatment plan and goals. ",
        },
        {
          question: "Do You Offer Customized Wellness and Aesthetic Programs?",
          answer:
            "We specialize in personalized treatment plans customized as per your unique health profile, lifestyle, and beauty goals. Our expert team creates customized wellness and aesthetic programs designed to deliver effective, long-lasting results that align perfectly with individual needs.",
        },
        {
          question:
            "Is Financing or Installment Payment Available at Liora Luxe?",
          answer:
            "Through flexible financing options and easy installment payment plans we make our premium wellness and aesthetic treatments more accessible. Our team will guide you through all available payment solutions during your personalized consultation, ensuring a seamless and affordable experience",
        },
      ],
    },
    {
      category: "Aesthetic & Cosmetic Treatments",
      questions: [
        {
          question: "What Types of Skin Treatments Does Liora Luxe Offer?",
          answer:
            "At Liora Luxe, we offer a comprehensive range of advanced skin treatments designed to improve skin health, texture, and youthful appearance. Our expert services include customized facials, professional chemical peels, laser skin therapies for pigmentation and rejuvenation, and leading-edge anti-aging treatments—all tailored to enhance your natural beauty and achieve radiant, healthy skin.",
        },
        {
          question: "Is There Downtime After Treatments at Liora Luxe?",
          answer:
            "Most of our advanced cosmetic and wellness treatments involve minimal to no downtime, allowing you to quickly resume your daily activities. Some procedures may cause temporary redness, mild swelling, or sensitivity—typically resolving within 24 to 48 hours. We provide comprehensive aftercare instructions and professional medical care to ensure a smooth recovery and maximize your treatment results.",
        },
      ],
    },
    {
      category: "Weight Loss & Body Contouring",
      questions: [
        {
          question:
            "What Sets Liora Luxe’s Medically Supervised Weight Loss Program Apart?",
          answer:
            "Our weight loss programs are medically supervised and emphasize sustainable lifestyle transformations rather than quick fixes. We integrate expert nutrition counseling, safe, non-invasive fat reduction therapies, and continuous health monitoring to create personalized, effective plans that deliver effective weight management and overall wellness.",
        },
        {
          question: "Are Body Contouring Treatments Painful?",
          answer:
            "Most clients experience minimal to no discomfort during our advanced body contouring treatments. Many of our procedures are non-invasive and designed for maximum comfort, allowing you to relax while safely sculpting and toning your body. At Liora Luxe, we prioritize your comfort to ensure a positive and pain-free experience every session.",
        },
      ],
    },
    {
      category: "Hair Restoration",
      questions: [
        {
          question:
            "What Types of Hair Restoration Treatments Does Liora Luxe Offer?",
          answer:
            "We offer non-surgical hair restoration therapies and advanced clinical treatments designed to stimulate natural hair re-growth, strengthen existing hair follicles, and prevent further hair loss. Our personalized approach combines advanced solutions and supportive care to deliver effective, lasting results for men and women experiencing thinning or hair loss. ",
        },
        {
          question:
            "How Many Sessions Are Needed to See Visible Results from Hair Restoration?",
          answer:
            "Hair restoration is a gradual and progressive process. While some clients may notice initial improvement within a few months, optimal results typically require multiple treatment sessions tailored to your individual hair growth cycle and condition. Our experts at Liora Luxe will provide a customized treatment plan with a clear timeline to help you achieve natural, lasting hair re-growth.",
        },
      ],
    },
    {
      category: "Wellness Therapies",
      questions: [
        {
          question: "What Wellness Therapies Does Liora Luxe Offer?",
          answer:
            "Our holistic wellness therapies include expertly designed stress-relief treatments, deep relaxation techniques, and energy balancing therapies aimed at enhancing both your physical health and mental well-being. Our personalized approach includes detoxification, rejuvenation, and overall harmony to help you achieve optimal vitality and inner balance.",
        },
        {
          question: "Who Can Benefit from Wellness Therapies at Liora Luxe?",
          answer:
            "Our wellness therapies are ideal for individuals experiencing stress, fatigue, or physical and mental imbalance. Whether you’re seeking to restore energy, enhance mental clarity, or improve overall vitality, Liora Luxe’s personalized holistic treatments support your journey towards renewed health and well-being. ",
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
              Feel free to ping us up anytime at LIORA LUXE with your queries
              and concerns. Our team will be ready with your customary
              solutions.
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
