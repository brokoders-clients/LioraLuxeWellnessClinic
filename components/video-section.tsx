"use client";
import { Button } from "@/components/ui/button";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-stone-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">
              Experience Our Wellness Center
            </h2>
            {/* <p className="text-lg text-stone-600 leading-relaxed">
              Take a virtual journey through our tranquil spa and discover the
              serene spaces where your wellness transformation begins
            </p> */}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <video
              ref={videoRef}
              className="w-full h-[500px] object-cover"
              // poster="/luxury-wellness-center-interior-with-modern-treatm.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src="/images/showcase_video.mp4" type="video/mp4" />
              <source src="/spa-tour-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <Button
                  size="lg"
                  onClick={toggleVideo}
                  className="rounded-full w-20 h-20 p-0 bg-white/90 hover:bg-white text-stone-700 hover:text-stone-800 shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            )}

            {isPlaying && (
              <div className="absolute top-6 right-6">
                <Button
                  size="sm"
                  onClick={toggleVideo}
                  className="rounded-full w-12 h-12 p-0 bg-black/50 hover:bg-black/70 text-white border-0"
                >
                  <Pause className="h-5 w-5" />
                </Button>
              </div>
            )}

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-serif mb-2">Spa Tour</h3>
              <p className="text-lg opacity-90">
                Explore our peaceful retreat designed to rejuvenate your body
                and mind. Experience exclusive spa treatments and personalized
                relaxation journeys- an escape into the LIORA LUXE luxury of
                wellness.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <img
                src="/modern-treatment-room-with-advanced-medical-equipm.jpg"
                alt="Treatment Room"
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h4 className="font-serif text-lg text-stone-800 mb-2">
                Tranquil Treatment Rooms
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Serene, calming environment and aesthetics designed to enhance
                your wellness experience. Relax deeply and rejuvenate your mind,
                body, and soul in our luxury sanctuary.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/relaxing-wellness-lounge-with-comfortable-seating.jpg"
                alt="Relaxation Lounge"
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h4 className="font-serif text-lg text-stone-800 mb-2">
                Meditation Lounge
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Designed for deep relaxation and mental clarity. Restore balance
                in a calm and serene space- where time stands still and stress
                melts away.
              </p>
            </div>
            <div className="text-center">
              <img
                src="/consultation-room-with-professional-medical-setup.jpg"
                alt="Consultation Room"
                className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              />
              <h4 className="font-serif text-lg text-stone-800 mb-2">
                Wellness Consultations
              </h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Personalized sessions with expert guidance from certified
                practitioners to support your journey to optimal vitality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
