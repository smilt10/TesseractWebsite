import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Code, BarChart2, Users, Lightbulb, Layers } from "lucide-react"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import CaseStudyCard from "@/components/case-study-card"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tesseract-700 to-tesseract-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/ai-hero-background.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]"></div>
        <div className="container relative mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Transforming Business Through <span className="text-tesseract-100">Intelligent Innovation</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8">
                We combine strategic consulting with cutting-edge AI technologies to drive measurable business outcomes
                and sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-tesseract-700 font-medium px-8 py-6 text-lg rounded-md w-full sm:w-auto hover:bg-white">
                    Schedule a Consultation
                  </Button>
                </Link>
                <Link href="/services/artificial-intelligence">
                  <Button className="bg-white hover:bg-gray-100 text-tesseract-700 px-8 py-6 text-lg rounded-md w-full sm:w-auto">
                    Explore AI Solutions
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl border border-white/20 hidden lg:block">
              <Image
                src="/ai-visualization.jpg"
                alt="AI-Powered Digital Transformation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add a new AI Capabilities section after the Hero */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-tesseract-50 rounded-l-full opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Transformation</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our advanced AI solutions help organizations unlock new opportunities, optimize operations, and create
              exceptional experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-tesseract-50 to-tesseract-100 p-8 rounded-lg border-l-4 border-tesseract-500 hover:shadow-lg transition-shadow">
              <div className="text-tesseract-500 mb-4">
                <Brain size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Automation</h3>
              <p className="text-gray-600">
                Streamline operations and reduce costs with AI-powered process automation that learns and improves over
                time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-tesseract-50 to-tesseract-100 p-8 rounded-lg border-l-4 border-tesseract-500 hover:shadow-lg transition-shadow">
              <div className="text-tesseract-500 mb-4">
                <BarChart2 size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">
                Transform data into actionable insights with advanced analytics that forecast trends and identify
                opportunities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-tesseract-50 to-tesseract-100 p-8 rounded-lg border-l-4 border-tesseract-500 hover:shadow-lg transition-shadow">
              <div className="text-tesseract-500 mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Experiences</h3>
              <p className="text-gray-600">
                Create personalized, responsive customer and employee experiences powered by intelligent technologies.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services/artificial-intelligence">
              <Button className="bg-tesseract-500 hover:bg-tesseract-600 text-white">
                Discover Our AI Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-gray-700 text-lg font-medium mb-10">
            Trusted by leading organizations worldwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            <Image
              src="/client-logo-microsoft.png"
              alt="Microsoft"
              width={140}
              height={50}
              className="opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/client-logo-ibm.png"
              alt="IBM"
              width={140}
              height={50}
              className="opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/client-logo-amazon.png"
              alt="Amazon"
              width={140}
              height={50}
              className="opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/client-logo-google.png"
              alt="Google"
              width={140}
              height={50}
              className="opacity-70 hover:opacity-100 transition"
            />
            <Image
              src="/client-logo-tesla.png"
              alt="Tesla"
              width={140}
              height={50}
              className="opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/services-bg-pattern.png')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to drive your business forward in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              title="Strategic Consulting"
              description="Expert guidance to navigate digital transformation and optimize business processes."
              icon={<BarChart2 size={32} />}
              href="/services/consulting"
              bgImage="/service-consulting-bg.jpg"
            />

            <ServiceCard
              title="Digital Transformation"
              description="End-to-end solutions to modernize your business and enhance customer experiences."
              icon={<Lightbulb size={32} />}
              href="/services/digital-transformation"
              bgImage="/service-digital-bg.jpg"
            />

            <ServiceCard
              title="Software Development"
              description="Custom software solutions tailored to your unique business requirements."
              icon={<Code size={32} />}
              href="/services/software-development"
              bgImage="/service-software-bg.jpg"
            />

            <ServiceCard
              title="Artificial Intelligence"
              description="AI-powered solutions to automate processes and gain valuable insights from your data."
              icon={<Brain size={32} />}
              href="/services/artificial-intelligence"
              featured={true}
              bgImage="/service-ai-bg.jpg"
            />

            <ServiceCard
              title="Recruitment Solutions"
              description="Talent acquisition services to help you build high-performing teams."
              icon={<Users size={32} />}
              href="/services/recruitment"
              bgImage="/service-recruitment-bg.jpg"
            />

            <ServiceCard
              title="Training & Development"
              description="Comprehensive training programs to upskill your workforce for the digital future."
              icon={<Layers size={32} />}
              href="/services/training"
              bgImage="/service-training-bg.jpg"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" className="border-tesseract-500 text-tesseract-500 hover:bg-tesseract-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-tesseract-50/50 -skew-x-12 transform origin-top-right"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose TESSERACT</h2>

              <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tesseract-100 flex items-center justify-center">
                    <span className="text-tesseract-500 font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise & Experience</h3>
                    <p className="text-gray-600">
                      Our team of experts brings decades of combined experience across industries and technologies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tesseract-100 flex items-center justify-center">
                    <span className="text-tesseract-500 font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailored Solutions</h3>
                    <p className="text-gray-600">
                      We create customized strategies and solutions that address your specific business challenges.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tesseract-100 flex items-center justify-center">
                    <span className="text-tesseract-500 font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">
                      We stay at the forefront of technology trends to deliver innovative solutions that drive results.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tesseract-100 flex items-center justify-center">
                    <span className="text-tesseract-500 font-bold">04</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">End-to-End Support</h3>
                    <p className="text-gray-600">
                      From strategy to implementation and beyond, we provide comprehensive support throughout your
                      journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-tesseract-500 hover:bg-tesseract-600 text-white">Learn More About Us</Button>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/why-choose-us.jpg" alt="Why Choose TESSERACT" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-tesseract-50/30 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how we've helped organizations achieve their business goals through digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="AI-Powered Predictive Maintenance Solution"
              client="Global Manufacturing Corp"
              industry="Manufacturing"
              image="/case-study-1.jpg"
              summary="Implemented an AI solution that reduced equipment downtime by 35% and maintenance costs by 25%."
              slug="manufacturing-predictive-maintenance"
            />

            <CaseStudyCard
              title="Digital Transformation for Financial Services"
              client="Premier Financial Group"
              industry="Finance"
              image="/case-study-2.jpg"
              summary="Modernized legacy systems and processes, resulting in 40% faster customer onboarding and improved satisfaction."
              slug="finance-digital-transformation"
            />

            <CaseStudyCard
              title="Custom ERP Implementation"
              client="Global Retail Chain"
              industry="Retail"
              image="/case-study-3.jpg"
              summary="Developed and deployed a custom ERP solution that streamlined operations across 200+ locations."
              slug="retail-erp-implementation"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button variant="outline" className="border-tesseract-500 text-tesseract-500 hover:bg-tesseract-50">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute -left-10 top-10 w-40 h-40 rounded-full bg-tesseract-100/50"></div>
          <div className="absolute right-10 bottom-10 w-60 h-60 rounded-full bg-tesseract-100/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              position="CTO"
              company="Global Manufacturing Corp"
              image="/testimonial-1.jpg"
              rating={5}
              testimonial="TESSERACT's AI solutions have transformed our maintenance operations. Their team's expertise and dedication to our success made all the difference in our digital transformation journey."
            />

            <TestimonialCard
              name="Michael Chen"
              position="CEO"
              company="Innovate Financial"
              image="/testimonial-2.jpg"
              rating={4.5}
              testimonial="Working with TESSERACT on our digital transformation initiative was a game-changer. Their strategic approach and technical expertise helped us modernize our systems while minimizing disruption."
            />

            <TestimonialCard
              name="Emily Rodriguez"
              position="Director of Operations"
              company="TechSolutions Inc."
              image="/testimonial-3.jpg"
              rating={5}
              testimonial="The software development team at TESSERACT delivered our custom solution ahead of schedule and exceeded our expectations. Their attention to detail and commitment to quality is unmatched in the industry."
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <Button variant="outline" className="border-tesseract-500 text-tesseract-500 hover:bg-tesseract-50">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Schedule a consultation with our experts to discuss how we can help you achieve your business goals through digital transformation and AI-powered solutions."
        buttonText="Get Started Today"
        buttonLink="/contact"
      />
    </div>
  )
}

