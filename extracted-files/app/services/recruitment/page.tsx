import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function RecruitmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Recruitment Solutions</h1>
              <p className="text-xl text-tesseract-100 mb-8">
                Talent acquisition services to help you build high-performing teams that drive your business forward.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-tesseract-600 hover:bg-gray-100">Find Top Talent</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/recruitment-hero.jpg" alt="Recruitment Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Build High-Performing Teams</h2>
              <p className="text-gray-600 mb-6">
                In today's competitive talent landscape, finding and attracting the right professionals is more
                challenging than ever. Our recruitment solutions help you identify, attract, and retain top talent
                across various industries and specializations.
              </p>
              <p className="text-gray-600">
                With a deep understanding of the technology and digital transformation sectors, our experienced
                recruiters leverage industry insights, extensive networks, and advanced sourcing techniques to connect
                you with exceptional candidates who not only have the right skills but also align with your company
                culture and values.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Recruitment Services:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Executive Search</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">IT & Technical Recruitment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Digital & Technology Specialists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Contract & Interim Staffing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Project-Based Recruitment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Talent Assessment & Selection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Employer Branding & Talent Attraction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Specializations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in recruiting top talent across various technology and digital domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology & IT</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Software Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">DevOps & Cloud</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">IT Infrastructure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Cybersecurity</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Enterprise Architecture</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data & AI</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Data Science</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Machine Learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">AI Engineers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Data Engineering</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Business Intelligence</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital & Product</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Product Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">UX/UI Design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Digital Marketing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">E-commerce</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Digital Transformation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recruitment Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to find the perfect match for your organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Understand</h3>
              <p className="text-gray-600 text-sm">We take time to understand your requirements, culture, and goals</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Source</h3>
              <p className="text-gray-600 text-sm">We leverage our network and advanced sourcing techniques</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Screen</h3>
              <p className="text-gray-600 text-sm">
                We thoroughly assess candidates' skills, experience, and cultural fit
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Present</h3>
              <p className="text-gray-600 text-sm">
                We present only the most qualified candidates with detailed profiles
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">05</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600 text-sm">
                We support throughout the interview, offer, and onboarding process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our recruitment solutions have helped organizations build high-performing teams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tech Startup</h3>
              <p className="text-gray-600 mb-4">
                Helped a fast-growing tech startup build their engineering team, recruiting 15 specialized developers in
                just 3 months.
              </p>
              <Link
                href="/case-studies/tech-startup-recruitment"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read case study <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Organization</h3>
              <p className="text-gray-600 mb-4">
                Recruited a complete data science team for a large enterprise, enabling them to accelerate their AI
                initiatives.
              </p>
              <Link
                href="/case-studies/enterprise-data-science-team"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read case study <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Agency</h3>
              <p className="text-gray-600 mb-4">
                Helped a digital agency scale their UX/UI design team to support their expanding client base and project
                portfolio.
              </p>
              <Link
                href="/case-studies/digital-agency-design-team"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read case study <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Dream Team?"
        description="Contact us today to discuss how our recruitment solutions can help you find and attract top talent."
        buttonText="Start Recruiting"
        buttonLink="/contact"
      />
    </div>
  )
}

