import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industry Solutions</h1>
          <p className="text-xl text-tesseract-100 max-w-3xl mx-auto">
            Tailored digital transformation and AI solutions to address the unique challenges of your industry
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/manufacturing-solution.jpg" alt="Manufacturing Solutions" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  Optimize production processes, enable predictive maintenance, and enhance supply chain visibility with
                  our manufacturing solutions.
                </p>
                <Link
                  href="/solutions/manufacturing"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/finance-solution.jpg" alt="Financial Services Solutions" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Services</h3>
                <p className="text-gray-600 mb-4">
                  Enhance customer experiences, improve risk management, and streamline operations with our financial
                  services solutions.
                </p>
                <Link
                  href="/solutions/financial-services"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/healthcare-solution.jpg" alt="Healthcare Solutions" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Improve patient outcomes, optimize clinical workflows, and enhance operational efficiency with our
                  healthcare solutions.
                </p>
                <Link
                  href="/solutions/healthcare"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/retail-solution.jpg" alt="Retail Solutions" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Retail</h3>
                <p className="text-gray-600 mb-4">
                  Create seamless omnichannel experiences, optimize inventory management, and personalize customer
                  engagement with our retail solutions.
                </p>
                <Link
                  href="/solutions/retail"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="/logistics-solution.jpg"
                  alt="Logistics & Supply Chain Solutions"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Logistics & Supply Chain</h3>
                <p className="text-gray-600 mb-4">
                  Enhance visibility, optimize routes, and improve inventory management with our logistics and supply
                  chain solutions.
                </p>
                <Link
                  href="/solutions/logistics"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/energy-solution.jpg" alt="Energy & Utilities Solutions" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy & Utilities</h3>
                <p className="text-gray-600 mb-4">
                  Optimize asset performance, improve grid management, and enhance customer engagement with our energy
                  and utilities solutions.
                </p>
                <Link
                  href="/solutions/energy"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn more <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Industry Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cross-Industry Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Powerful solutions that deliver value across industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Leverage the power of AI and machine learning to automate processes, gain insights from your data, and
                make better decisions.
              </p>
              <Link
                href="/solutions/ai-machine-learning"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Transformation</h3>
              <p className="text-gray-600 mb-4">
                Modernize your infrastructure, improve scalability, and reduce costs with our cloud transformation
                solutions.
              </p>
              <Link
                href="/solutions/cloud-transformation"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-gray-600 mb-4">
                Turn your data into actionable insights with our advanced analytics solutions, from descriptive to
                predictive and prescriptive analytics.
              </p>
              <Link
                href="/solutions/data-analytics"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore Our Solutions?"
        description="Contact us today to discuss how our industry-specific solutions can help your business thrive in the digital age."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

