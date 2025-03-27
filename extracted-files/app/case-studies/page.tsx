"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import CTASection from "@/components/cta-section"
import CaseStudyCard from "@/components/case-study-card"
import { useState, useEffect } from "react"

// Define the case studies data
const featuredCaseStudies = [
  {
    id: 1,
    title: "AI-Powered Predictive Maintenance Solution",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    image: "/featured-case-study.jpg",
    challenge: "Frequent unexpected equipment failures leading to costly downtime",
    solution: "AI-powered predictive maintenance system with IoT sensors",
    results: "35% reduction in downtime, 25% decrease in maintenance costs",
    slug: "manufacturing-predictive-maintenance",
  },
  {
    id: 2,
    title: "Blockchain-Based Supply Chain Tracking",
    client: "International Logistics Inc",
    industry: "Logistics",
    image: "/global-map.jpeg", // Updated image path
    challenge: "Lack of transparency and traceability in global supply chains",
    solution: "End-to-end blockchain solution with real-time tracking",
    results: "42% improvement in shipment visibility, 30% reduction in disputes",
    slug: "logistics-blockchain-tracking",
  },
  {
    id: 3,
    title: "AI-Driven Customer Insights Platform",
    client: "Retail Giant Co",
    industry: "Retail",
    image: "/case-study-retail.jpg",
    challenge: "Inability to personalize customer experiences at scale",
    solution: "Machine learning platform analyzing customer behavior patterns",
    results: "28% increase in customer engagement, 22% growth in repeat purchases",
    slug: "retail-customer-insights",
  },
  {
    id: 4,
    title: "Secure Healthcare Data Exchange",
    client: "National Healthcare Network",
    industry: "Healthcare",
    image: "/case-study-healthcare.jpg",
    challenge: "Siloed patient data across multiple healthcare providers",
    solution: "HIPAA-compliant data exchange platform with advanced encryption",
    results: "65% faster access to patient records, improved care coordination",
    slug: "healthcare-data-exchange",
  },
]

function FeaturedCaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCaseStudies.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCaseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCaseStudies.length) % featuredCaseStudies.length)
  }

  const currentCase = featuredCaseStudies[currentSlide]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped leading organizations solve complex challenges
          </p>
        </div>

        <div className="relative">
          {/* Slider navigation */}
          <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-tesseract-500" />
            </button>
          </div>

          <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-tesseract-500" />
            </button>
          </div>

          {/* Slide content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={currentCase.image || "/placeholder.svg"}
                alt={currentCase.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-white bg-tesseract-500 px-3 py-1 rounded-full">
                  {currentCase.industry}
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{currentCase.client}</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentCase.title}</h2>
              <p className="text-gray-600 mb-6">
                Learn how we helped {currentCase.client} implement a {currentCase.title.toLowerCase()}
                that addressed their key challenges and delivered measurable results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-24 font-medium text-gray-900">Challenge:</div>
                  <div className="text-gray-600">{currentCase.challenge}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 font-medium text-gray-900">Solution:</div>
                  <div className="text-gray-600">{currentCase.solution}</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 font-medium text-gray-900">Results:</div>
                  <div className="text-gray-600">{currentCase.results}</div>
                </div>
              </div>
              <Link href={`/case-studies/${currentCase.slug}`}>
                <Button className="bg-tesseract-500 hover:bg-tesseract-600 text-white">Read Full Case Study</Button>
              </Link>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {featuredCaseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-tesseract-500" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Case Studies</h1>
          <p className="text-xl text-tesseract-100 max-w-3xl mx-auto">
            Explore how we've helped organizations across industries achieve their business goals through digital
            transformation
          </p>
        </div>
      </section>

      {/* Featured Case Study Slider */}
      <FeaturedCaseStudySlider />

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our collection of case studies across industries and solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Digital Transformation for Financial Services"
              client="Premier Financial Group"
              industry="Finance"
              image="/case-study-finance.jpg"
              summary="Modernized legacy systems and processes, resulting in 40% faster customer onboarding and improved satisfaction."
              slug="finance-digital-transformation"
            />

            <CaseStudyCard
              title="Custom ERP Implementation"
              client="Global Retail Chain"
              industry="Retail"
              image="/case-study-retail.jpg"
              summary="Developed and deployed a custom ERP solution that streamlined operations across 200+ locations."
              slug="retail-erp-implementation"
            />

            <CaseStudyCard
              title="AI-Powered Fraud Detection"
              client="Innovate Financial"
              industry="Finance"
              image="/case-study-fraud.jpg"
              summary="Implemented an AI solution that improved fraud detection rates by 60% while reducing false positives."
              slug="financial-fraud-detection"
            />

            <CaseStudyCard
              title="Healthcare Management System"
              client="Regional Healthcare Provider"
              industry="Healthcare"
              image="/case-study-healthcare.jpg"
              summary="Built a comprehensive healthcare management system that streamlined operations and improved patient care."
              slug="healthcare-management-system"
            />

            <CaseStudyCard
              title="Supply Chain Optimization"
              client="Global Logistics Company"
              industry="Logistics"
              image="/case-study-logistics.jpg"
              summary="Developed an integrated supply chain management solution that improved inventory accuracy by 30%."
              slug="supply-chain-optimization"
            />

            <CaseStudyCard
              title="E-commerce Platform Development"
              client="Fashion Retailer"
              industry="Retail"
              image="/case-study-ecommerce.jpg"
              summary="Developed a custom e-commerce platform that increased online sales by 45% and improved customer satisfaction."
              slug="ecommerce-platform"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/all">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Industry</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore case studies specific to your industry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/case-studies/industry/manufacturing" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/industry-manufacturing.jpg"
                  alt="Manufacturing"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
                    <span className="text-white/80 inline-flex items-center text-sm">
                      View case studies <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/industry/finance" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/industry-finance.jpg"
                  alt="Finance"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Finance</h3>
                    <span className="text-white/80 inline-flex items-center text-sm">
                      View case studies <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/industry/healthcare" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/industry-healthcare.jpg"
                  alt="Healthcare"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Healthcare</h3>
                    <span className="text-white/80 inline-flex items-center text-sm">
                      View case studies <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/industry/retail" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/industry-retail.jpg"
                  alt="Retail"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Retail</h3>
                    <span className="text-white/80 inline-flex items-center text-sm">
                      View case studies <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/industry/technology" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/industry-technology.jpg"
                  alt="Technology"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Technology</h3>
                    <span className="text-white/80 inline-flex items-center text-sm">
                      View case studies <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/case-studies/industry/logistics" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/industry-logistics.jpg"
                  alt="Logistics"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Logistics</h3>
                    <span className="text-white/80 inline-flex items-center text-sm">
                      View case studies <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Hear what our clients have to say about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src="/testimonial-cto.jpg" alt="Sarah Chen" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">CTO, Global Manufacturing Corp</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "TESSERACT's AI solutions have transformed our maintenance operations. Their team's expertise and
                dedication to our success made all the difference in our digital transformation journey."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image src="/testimonial-ceo.jpg" alt="Michael Chen" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-600">CEO, Innovate Financial</p>
                  <div className="flex mt-1">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="half">
                          <stop offset="50%" stopColor="#FBBF24" />
                          <stop offset="50%" stopColor="#D1D5DB" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#half)"
                        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Working with TESSERACT on our digital transformation initiative was a game-changer. Their strategic
                approach and technical expertise helped us modernize our systems while minimizing disruption."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Achieve Similar Results?"
        description="Contact us today to discuss how we can help your organization achieve its business goals through digital transformation."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

