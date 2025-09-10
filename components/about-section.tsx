import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "2,000+",
    label: "Happy Clients",
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
  },
  {
    icon: Clock,
    number: "10,000+",
    label: "Treatments Completed",
  },
  {
    icon: Shield,
    number: "100%",
    label: "Safe & Certified",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner in Wellness Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Liora Luxe Center, we combine cutting-edge technology with
              personalized care to deliver exceptional results. Our team of
              certified professionals is dedicated to helping you achieve your
              aesthetic and wellness goals in a safe, comfortable environment.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From advanced laser treatments to holistic wellness therapies, we
              offer comprehensive solutions tailored to your unique needs.
              Experience the difference that expertise, innovation, and genuine
              care can make.
            </p>
            <Button size="lg">Meet Our Team</Button>
          </div>

          <div className="relative">
            <img
              src="/placeholder-7up0z.png"
              alt="Professional wellness center team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center border-border">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <IconComponent className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
