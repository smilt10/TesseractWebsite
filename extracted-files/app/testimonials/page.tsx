import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"

// Testimonial data
const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "Global Manufacturing Corp",
    image: "/images/testimonial-1.jpeg",
    rating: 5,
    testimonial:
      "TESSERACT's AI solutions have transformed our maintenance operations. Their team's expertise and dedication to our success made all the difference in our digital transformation journey.",
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "Innovate Financial",
    image: "/images/testimonial-2.jpeg",
    rating: 4.5,
    testimonial:
      "Working with TESSERACT on our digital transformation initiative was a game-changer. Their strategic approach and technical expertise helped us modernize our systems while minimizing disruption.",
  },
  {
    name: "Emily Rodriguez",
    position: "Director of Operations",
    company: "TechSolutions Inc.",
    image: "/images/testimonial-3.jpeg",
    rating: 5,
    testimonial:
      "The software development team at TESSERACT delivered our custom solution ahead of schedule and exceeded our expectations. Their attention to detail and commitment to quality is unmatched in the industry.",
  },
  {
    name: "David Kim",
    position: "VP of Technology",
    company: "Retail Innovations Group",
    image: "/images/testimonial-4.jpeg",
    rating: 4.5,
    testimonial:
      "TESSERACT helped us implement an AI-powered inventory management system that reduced stockouts by 42% and improved overall efficiency. Their team was responsive, knowledgeable, and truly committed to our success.",
  },
  {
    name: "Jennifer Patel",
    position: "Chief Digital Officer",
    company: "Healthcare Systems International",
    image: "/images/testimonial-5.jpeg",
    rating: 5,
    testimonial:
      "The patient management platform TESSERACT developed for us has revolutionized how we deliver care. Their understanding of healthcare workflows and technical expertise resulted in a solution that both our staff and patients love.",
  },
  {
    name: "Robert Martinez",
    position: "Supply Chain Director",
    company: "Global Logistics Partners",
    image: "/images/testimonial-6.jpeg",
    rating: 4.5,
    testimonial:
      "TESSERACT's blockchain solution for our supply chain has provided unprecedented transparency and efficiency. We've reduced disputes by 78% and accelerated payment processing significantly.",
  },
  {
    name: "Lisa Thompson",
    position: "Head of Digital Marketing",
    company: "Consumer Brands Inc.",
    image: "/images/testimonial-7.jpeg",
    rating: 5,
    testimonial:
      "The AI-powered customer analytics platform TESSERACT implemented has transformed our marketing strategy. We now have deep insights into customer behavior that have helped us increase conversion rates by 35%.",
  },
  {
    name: "James Wilson",
    position: "CFO",
    company: "Energy Solutions Group",
    image: "/images/testimonial-8.jpeg",
    rating: 4.5,
    testimonial:
      "TESSERACT's predictive maintenance solution for our energy infrastructure has reduced downtime by 47% and extended equipment lifespan significantly. The ROI has exceeded our expectations by a wide margin.",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-tesseract-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]"></div>
        <div className="container relative mx-auto px-4 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Testimonials</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with TESSERACT
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-tesseract-600 hover:text-tesseract-700 hover:bg-tesseract-50">
                <ChevronLeft className="mr-2 h-4 w-4" /> Back to Home
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                image={testimonial.image}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience the TESSERACT Difference?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our satisfied clients and discover how our innovative solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-tesseract-600 hover:bg-tesseract-700 text-white px-8 py-6 text-lg rounded-md">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button
                  variant="outline"
                  className="border-tesseract-600 text-tesseract-600 hover:bg-tesseract-50 px-8 py-6 text-lg rounded-md"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

