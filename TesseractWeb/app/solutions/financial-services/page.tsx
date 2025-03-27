import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"
import CaseStudyCard from "@/components/case-study-card"

export default function FinancialServicesSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Financial Services Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Accelerate digital transformation in financial services with AI-powered solutions that enhance customer
                experiences, improve risk management, and drive operational efficiency
              </p>
              <Link href="/contact">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">Schedule a Consultation</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/finance-solution.jpg" alt="Financial Services Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Financial Services Business</h2>
              <p className="text-gray-600 mb-6">
                The financial services industry is experiencing unprecedented change driven by evolving customer
                expectations, new competitors, regulatory pressures, and technological advancements. Our financial
                services solutions help organizations navigate this complex landscape and turn challenges into
                opportunities.
              </p>
              <p className="text-gray-600">
                With deep industry expertise and a proven track record of success, we partner with financial
                institutions to implement tailored solutions that enhance customer experiences, improve risk management,
                and drive operational efficiency.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges We Address:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Digital Customer Experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Regulatory Compliance & Risk Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Operational Efficiency & Cost Reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Fraud Detection & Prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Legacy System Modernization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Data Security & Privacy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Fintech Integration & Ecosystem Development</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Financial Services Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to address your financial services challenges and drive digital transformation
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Customer Experience</h3>
              <p className="text-gray-600 mb-4">
                Create seamless, personalized digital experiences that meet the evolving expectations of your customers.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Omnichannel banking platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">AI-powered personalization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Customer journey optimization</span>
                </li>
              </ul>
              <Link
                href="/solutions/financial-services/digital-experience"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Risk Management & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Enhance risk management capabilities and ensure regulatory compliance with advanced analytics and
                automation.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Regulatory reporting automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Risk analytics & modeling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">KYC/AML solutions</span>
                </li>
              </ul>
              <Link
                href="/solutions/financial-services/risk-compliance"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fraud Detection & Prevention</h3>
              <p className="text-gray-600 mb-4">
                Protect your organization and customers with AI-powered fraud detection and prevention solutions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Real-time transaction monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Behavioral analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Identity verification</span>
                </li>
              </ul>
              <Link
                href="/solutions/financial-services/fraud-prevention"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
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
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Core System Modernization</h3>
              <p className="text-gray-600 mb-4">
                Transform legacy systems to modern, flexible platforms that enable innovation and growth.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Core banking transformation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">API-first architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Cloud migration</span>
                </li>
              </ul>
              <Link
                href="/solutions/financial-services/core-modernization"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Intelligent Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate manual processes and enhance operational efficiency with AI and robotic process automation.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Process automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Intelligent document processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Workflow optimization</span>
                </li>
              </ul>
              <Link
                href="/solutions/financial-services/intelligent-automation"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics & Insights</h3>
              <p className="text-gray-600 mb-4">
                Transform your data into actionable insights that drive better decision-making and business outcomes.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Customer analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Predictive modeling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Data visualization</span>
                </li>
              </ul>
              <Link
                href="/solutions/financial-services/data-analytics"
                className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
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
              See how our financial services solutions have helped organizations achieve their business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Digital Transformation for Retail Banking"
              client="Premier Financial Group"
              industry="Financial Services"
              image="/case-study-finance-1.jpg"
              summary="Modernized digital banking platform resulting in 40% faster customer onboarding and improved satisfaction scores."
              slug="finance-digital-transformation"
            />

            <CaseStudyCard
              title="AI-Powered Fraud Detection"
              client="Global Credit Union"
              industry="Financial Services"
              image="/case-study-finance-2.jpg"
              summary="Implemented advanced fraud detection system that reduced fraud losses by 35% while minimizing false positives."
              slug="finance-fraud-detection"
            />

            <CaseStudyCard
              title="Core Banking Modernization"
              client="Regional Bank"
              industry="Financial Services"
              image="/case-study-finance-3.jpg"
              summary="Transformed legacy core banking system, reducing operational costs by 25% and enabling rapid product innovation."
              slug="finance-core-modernization"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/industry/financial-services">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Financial Services Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Banking Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/digital-banking.jpg" alt="Digital Banking" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of Digital Banking</h2>
              <p className="text-gray-600 mb-6">
                The financial services landscape is evolving rapidly, with digital-first challengers and changing
                customer expectations reshaping the industry. Traditional banks and financial institutions must embrace
                digital transformation to remain competitive and meet the needs of today's customers.
              </p>
              <p className="text-gray-600 mb-6">
                Our digital banking solutions help financial institutions create seamless, personalized experiences
                across channels, modernize their technology infrastructure, and leverage data and AI to drive growth and
                operational efficiency.
              </p>
              <Link href="/solutions/financial-services/digital-banking">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore Digital Banking Solutions</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Financial Services Business?"
        description="Contact us today to discuss how our financial services solutions can help you enhance customer experiences, improve risk management, and drive operational efficiency."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

