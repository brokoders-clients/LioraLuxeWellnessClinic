import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Eye, ArrowRight } from "lucide-react"

export default function GalleryPage() {
  const beforeAfterGallery = [
    {
      category: "Facial Treatments",
      before: "/placeholder.svg?height=300&width=300",
      after: "/placeholder.svg?height=300&width=300",
      treatment: "Hydrafacial + Chemical Peel",
      duration: "3 months",
    },
    {
      category: "Body Contouring",
      before: "/placeholder.svg?height=300&width=300",
      after: "/placeholder.svg?height=300&width=300",
      treatment: "EMSCULPT + Fat Freeze",
      duration: "6 months",
    },
    {
      category: "Hair Restoration",
      before: "/placeholder.svg?height=300&width=300",
      after: "/placeholder.svg?height=300&width=300",
      treatment: "PRP + Hair Mesotherapy",
      duration: "8 months",
    },
    {
      category: "Skin Rejuvenation",
      before: "/placeholder.svg?height=300&width=300",
      after: "/placeholder.svg?height=300&width=300",
      treatment: "Microneedling + PRP",
      duration: "4 months",
    },
  ]

  const facilityImages = [
    {
      title: "Reception & Waiting Area",
      image: "/placeholder.svg?height=400&width=600",
      description: "Welcoming space designed for your comfort",
    },
    {
      title: "Advanced Treatment Room",
      image: "/placeholder.svg?height=400&width=600",
      description: "State-of-the-art equipment for optimal results",
    },
    {
      title: "Relaxation Lounge",
      image: "/placeholder.svg?height=400&width=600",
      description: "Peaceful environment for pre and post-treatment relaxation",
    },
    {
      title: "Consultation Room",
      image: "/placeholder.svg?height=400&width=600",
      description: "Private consultations with our expert team",
    },
    {
      title: "IV Therapy Suite",
      image: "/placeholder.svg?height=400&width=600",
      description: "Comfortable setting for wellness IV treatments",
    },
    {
      title: "Wellness Garden",
      image: "/placeholder.svg?height=400&width=600",
      description: "Outdoor space for meditation and relaxation",
    },
  ]

  const videoTestimonials = [
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: "Sarah's Transformation Journey",
      treatment: "Complete Wellness Package",
      duration: "3:24",
    },
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: "Body Contouring Results",
      treatment: "EMSCULPT + Fat Freeze",
      duration: "2:15",
    },
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      title: "Hair Restoration Success",
      treatment: "PRP Hair Therapy",
      duration: "4:12",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Gallery & Results</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            See the incredible transformations and beautiful facilities that make Serenity Wellness the premier
            destination for your wellness journey
          </p>
          <Button size="lg" className="px-8">
            Book Your Transformation
          </Button>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Real Results, Real People</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the amazing transformations our clients have achieved with our expert treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {beforeAfterGallery.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative">
                      <img
                        src={item.before || "/placeholder.svg"}
                        alt="Before treatment"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-red-100 text-red-800">
                          Before
                        </Badge>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt="After treatment"
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          After
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.category}</h3>
                      <Badge variant="outline">{item.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">Treatment: {item.treatment}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              <Eye className="mr-2 h-5 w-5" />
              View More Results
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear directly from our clients about their transformation journeys and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 p-0">
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.treatment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Tour */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Tour Our Beautiful Facility</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Step inside our state-of-the-art wellness center designed for your comfort and relaxation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityImages.map((facility, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Schedule a Tour
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Center Virtually</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Take a 360° virtual tour of our facilities from the comfort of your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Play className="mr-2 h-5 w-5" />
              Start Virtual Tour
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Book In-Person Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
