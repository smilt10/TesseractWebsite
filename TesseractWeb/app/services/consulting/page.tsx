import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function ConsultingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Strategic Consulting</h1>
              <p className="text-xl text-tesseract-100 mb-8">
                Expert guidance to navigate digital transformation and optimize business processes for sustainable
                growth.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-tesseract-600 hover:bg-gray-100">Request a Consultation</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/consulting-hero.jpg" alt="Strategic Consulting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Help</h2>
              <p className="text-gray-600 mb-6">
                Our strategic consulting services provide expert guidance to help you navigate complex business
                challenges, optimize operations, and drive sustainable growth. We work closely with your team to
                understand your unique needs and develop tailored solutions that deliver measurable results.
              </p>
              <p className="text-gray-600">
                With decades of combined experience across industries, our consultants bring deep expertise and a proven
                track record of success to every engagement.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Consulting Services Include:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Digital Strategy Development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Business Process Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Technology Assessment & Roadmapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Change Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Digital Transformation Strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">IT Strategy & Governance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Data Strategy & Analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting Methodology</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to deliver tangible results for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tesseract-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-tesseract-500 font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">
                We conduct a comprehensive assessment of your current state, including business processes, technology
                landscape, and organizational capabilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tesseract-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-tesseract-500 font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy Development</h3>
              <p className="text-gray-600">
                We collaborate with your team to develop a tailored strategy that aligns with your business objectives
                and addresses your unique challenges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tesseract-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-tesseract-500 font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation Planning</h3>
              <p className="text-gray-600">
                We create a detailed roadmap and implementation plan with clear milestones, timelines, and resource
                requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-tesseract-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-tesseract-500 font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution & Optimization</h3>
              <p className="text-gray-600">
                We support you throughout the implementation process, providing guidance, monitoring progress, and
                making adjustments as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our consulting services have helped organizations achieve their business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Manufacturing Company</h3>
              <p className="text-gray-600 mb-4">
                Developed a digital transformation strategy that resulted in a 30% reduction in operational costs and a
                25% increase in productivity.
              </p>
              <Link
                href="/case-studies/manufacturing-digital-transformation"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
              >
                Read case study <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Services Firm</h3>
              <p className="text-gray-600 mb-4">
                Implemented a business process optimization initiative that improved customer onboarding time by 40% and
                enhanced customer satisfaction.
              </p>
              <Link
                href="/case-studies/financial-process-optimization"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
              >
                Read case study <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Contact us today to discuss how our strategic consulting services can help you achieve your business goals."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

