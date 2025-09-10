"use client";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What should I expect during my first visit?",
          answer:
            "During your initial consultation, our medical team will assess your needs, discuss your goals, and create a personalized treatment plan. We'll also give you a tour of our facilities and answer any questions you may have.",
        },
        {
          question: "Are your treatments safe?",
          answer:
            "Yes, all our treatments are performed by licensed professionals using FDA-approved equipment and techniques. We maintain the highest safety standards and will discuss any potential risks during your consultation.",
        },
        {
          question: "Do you offer payment plans?",
          answer:
            "We offer various payment options including financing plans to make our treatments accessible. Our team can discuss payment options that work best for your budget during your consultation.",
        },
      ],
    },
    {
      category: "Aesthetic Treatments",
      questions: [
        {
          question: "How long do Botox results last?",
          answer:
            "Botox results typically last 3-4 months. The duration can vary based on individual factors such as muscle strength, metabolism, and treatment area. We'll schedule follow-up appointments to maintain your results.",
        },
        {
          question: "Is there downtime after facial treatments?",
          answer:
            "Most of our facial treatments have minimal to no downtime. Some procedures like chemical peels may cause mild redness for 1-2 days. We'll provide detailed aftercare instructions for each treatment.",
        },
        {
          question: "When will I see results from my treatment?",
          answer:
            "Results vary by treatment type. Some procedures show immediate improvement, while others may take several weeks. We'll set realistic expectations during your consultation based on your specific treatment plan.",
        },
      ],
    },
    {
      category: "Weight Loss Programs",
      questions: [
        {
          question: "How much weight can I expect to lose?",
          answer:
            "Weight loss results vary based on individual factors, starting weight, and commitment to the program. Our medical team will set realistic, healthy goals during your consultation and monitor your progress throughout the program.",
        },
        {
          question: "Are your weight loss programs medically supervised?",
          answer:
            "Yes, all our weight loss programs are medically supervised by our qualified healthcare professionals. We monitor your health throughout the process and adjust your plan as needed for safe, effective results.",
        },
        {
          question: "Do you provide meal plans?",
          answer:
            "We provide personalized nutrition guidance and meal planning as part of our comprehensive weight loss programs. Our nutritionists work with you to create sustainable eating habits that fit your lifestyle.",
        },
      ],
    },
    {
      category: "IV Therapy",
      questions: [
        {
          question: "How long does an IV therapy session take?",
          answer:
            "Most IV therapy sessions take 30-60 minutes, depending on the specific treatment. You can relax in our comfortable treatment rooms during the session, and many clients use this time to read or rest.",
        },
        {
          question: "How often should I get IV therapy?",
          answer:
            "The frequency depends on your individual needs and goals. Some clients benefit from weekly sessions, while others prefer monthly treatments. We'll recommend a schedule based on your health assessment and objectives.",
        },
        {
          question: "Are there any side effects?",
          answer:
            "IV therapy is generally very safe with minimal side effects. Some people may experience slight discomfort at the injection site. Our medical team monitors you throughout the session to ensure your comfort and safety.",
        },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our treatments, services, and
            wellness programs. If you don't see your question here, feel free to
            contact us directly.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-serif text-stone-800 mb-6 text-center">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200/50 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-rose-50/50 transition-colors"
                      >
                        <span className="font-semibold text-stone-800 pr-4">
                          {faq.question}
                        </span>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <Minus className="h-5 w-5 text-rose-500" />
                          ) : (
                            <Plus className="h-5 w-5 text-rose-500" />
                          )}
                        </div>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-stone-600 leading-relaxed">
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
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-stone-600 mb-6">
              Our friendly team is here to help you with any additional
              questions or concerns you may have.
            </p>
            <button className="bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-500 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
