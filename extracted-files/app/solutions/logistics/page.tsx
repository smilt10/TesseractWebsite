import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"
import CaseStudyCard from "@/components/case-study-card"

export default function LogisticsSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Logistics & Supply Chain Solutions</h1>
              <p className="text-xl text-tesseract-100 mb-8">
                Enhance visibility, optimize routes, and improve inventory management with our logistics and supply
                chain solutions
              </p>
              <Link href="/contact">
                <Button className="bg-white text-tesseract-600 hover:bg-gray-100">Schedule a Consultation</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/logistics-solution.jpg"
                alt="Logistics & Supply Chain Solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Logistics & Supply Chain Operations
              </h2>
              <p className="text-gray-600 mb-6">
                In today's complex global business environment, logistics and supply chain operations face unprecedented
                challenges, from disruptions and volatility to rising customer expectations and sustainability
                requirements. Our logistics and supply chain solutions help organizations enhance visibility, optimize
                operations, and build resilience.
              </p>
              <p className="text-gray-600">
                With deep industry expertise and a proven track record of success, we partner with organizations to
                implement tailored solutions that address their specific challenges and drive measurable results.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges We Address:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Supply Chain Visibility & Transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Inventory Optimization & Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Transportation & Route Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Warehouse Management & Automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Demand Forecasting & Planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Supply Chain Resilience & Risk Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Sustainability & Compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Logistics & Supply Chain Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to address your logistics and supply chain challenges and drive digital
              transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-.1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supply Chain Visibility</h3>
              <p className="text-gray-600 mb-4">
                Gain end-to-end visibility into your supply chain to improve decision-making and responsiveness.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Real-time tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Supplier visibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Performance analytics</span>
                </li>
              </ul>
              <Link
                href="/solutions/logistics/supply-chain-visibility"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transportation Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize transportation routes, reduce costs, and improve delivery performance.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Route optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Fleet management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Last-mile delivery</span>
                </li>
              </ul>
              <Link
                href="/solutions/logistics/transportation-optimization"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inventory Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize inventory levels, reduce costs, and improve availability with AI-powered solutions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Demand forecasting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Inventory planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Stock optimization</span>
                </li>
              </ul>
              <Link
                href="/solutions/logistics/inventory-optimization"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warehouse Management</h3>
              <p className="text-gray-600 mb-4">
                Optimize warehouse operations, improve efficiency, and enhance accuracy with digital solutions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Warehouse automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Picking optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Inventory tracking</span>
                </li>
              </ul>
              <Link
                href="/solutions/logistics/warehouse-management"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Supply Chain Risk Management</h3>
              <p className="text-gray-600 mb-4">
                Identify, assess, and mitigate supply chain risks to build resilience and ensure business continuity.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Risk assessment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Scenario planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Resilience strategies</span>
                </li>
              </ul>
              <Link
                href="/solutions/logistics/risk-management"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Supply Chain</h3>
              <p className="text-gray-600 mb-4">
                Build sustainable supply chains that reduce environmental impact and meet regulatory requirements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Carbon footprint reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Ethical sourcing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Compliance management</span>
                </li>
              </ul>
              <Link
                href="/solutions/logistics/sustainable-supply-chain"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our logistics and supply chain solutions have helped organizations achieve their business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="End-to-End Supply Chain Visibility"
              client="Global Manufacturing Company"
              industry="Manufacturing & Logistics"
              image="/case-study-logistics-1.jpg"
              summary="Implemented supply chain visibility platform that reduced lead times by 25% and improved on-time delivery performance."
              slug="logistics-supply-chain-visibility"
            />

            <CaseStudyCard
              title="Transportation Optimization"
              client="Logistics Service Provider"
              industry="Logistics"
              image="/case-study-logistics-2.jpg"
              summary="Deployed AI-based route optimization solution that reduced transportation costs by 18% and improved delivery performance."
              slug="logistics-transportation-optimization"
            />

            <CaseStudyCard
              title="Warehouse Automation"
              client="E-commerce Retailer"
              industry="Retail & Logistics"
              image="/case-study-logistics-3.jpg"
              summary="Implemented warehouse automation solution that increased throughput by 40% and reduced order fulfillment time by 30%."
              slug="logistics-warehouse-automation"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/industry/logistics">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Logistics Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Supply Chain Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/digital-supply-chain.jpg" alt="Digital Supply Chain" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Digital Supply Chain</h2>
              <p className="text-gray-600 mb-6">
                The supply chain landscape is evolving rapidly, with digital technologies transforming how goods are
                sourced, produced, and delivered. Organizations must embrace digital transformation to build agile,
                resilient, and efficient supply chains that can adapt to changing market conditions and customer
                expectations.
              </p>
              <p className="text-gray-600 mb-6">
                Our digital supply chain solutions help organizations leverage technologies like AI, IoT, blockchain,
                and advanced analytics to gain real-time visibility, optimize operations, and make better decisions.
              </p>
              <Link href="/solutions/logistics/digital-supply-chain">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore Digital Supply Chain</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Logistics & Supply Chain Operations?"
        description="Contact us today to discuss how our logistics and supply chain solutions can help you enhance visibility, optimize operations, and build resilience."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

