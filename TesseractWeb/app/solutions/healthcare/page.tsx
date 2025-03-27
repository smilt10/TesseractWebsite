import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"
import CaseStudyCard from "@/components/case-study-card"

export default function HealthcareSolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Healthcare Solutions</h1>
              <p className="text-xl text-tesseract-100 mb-8">
                Innovative digital and AI solutions to improve patient outcomes, optimize clinical workflows, and
                enhance operational efficiency
              </p>
              <Link href="/contact">
                <Button className="bg-white text-tesseract-600 hover:bg-gray-100">Schedule a Consultation</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/healthcare-solution.jpg" alt="Healthcare Solutions" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Healthcare Delivery</h2>
              <p className="text-gray-600 mb-6">
                Healthcare organizations face unprecedented challenges, from rising costs and changing reimbursement
                models to evolving patient expectations and workforce shortages. Our healthcare solutions leverage
                digital technologies and AI to help you improve patient outcomes, optimize clinical workflows, and
                enhance operational efficiency.
              </p>
              <p className="text-gray-600">
                With deep healthcare expertise and a proven track record of success, we partner with healthcare
                organizations to implement tailored solutions that address their specific challenges and drive
                measurable results.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Challenges We Address:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Patient Experience & Engagement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Clinical Workflow Optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Data Interoperability & Integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Operational Efficiency & Cost Reduction</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Regulatory Compliance & Security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Value-Based Care Transition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Healthcare Workforce Challenges</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Healthcare Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to address your healthcare challenges and drive digital transformation
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Experience</h3>
              <p className="text-gray-600 mb-4">
                Create seamless, personalized patient experiences across digital and physical touchpoints.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Patient portals & mobile apps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Virtual care solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Patient engagement platforms</span>
                </li>
              </ul>
              <Link
                href="/solutions/healthcare/patient-experience"
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
                    d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clinical Decision Support</h3>
              <p className="text-gray-600 mb-4">
                Enhance clinical decision-making with AI-powered insights and evidence-based recommendations.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">AI diagnostic assistance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Treatment recommendation systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Clinical pathway optimization</span>
                </li>
              </ul>
              <Link
                href="/solutions/healthcare/clinical-decision-support"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Data & Analytics</h3>
              <p className="text-gray-600 mb-4">
                Transform healthcare data into actionable insights that improve clinical and operational outcomes.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Healthcare data integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Population health management</span>
                </li>
              </ul>
              <Link
                href="/solutions/healthcare/data-analytics"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Operational Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Optimize healthcare operations and reduce costs with intelligent automation and workflow solutions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Workflow automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Resource optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Supply chain management</span>
                </li>
              </ul>
              <Link
                href="/solutions/healthcare/operational-efficiency"
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
                    d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Health Platforms</h3>
              <p className="text-gray-600 mb-4">
                Build and deploy digital health platforms that connect patients, providers, and data for better care
                coordination.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Telehealth solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Remote patient monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Care coordination platforms</span>
                </li>
              </ul>
              <Link
                href="/solutions/healthcare/digital-health"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Protect sensitive healthcare data and ensure regulatory compliance with robust security solutions.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">HIPAA compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Data security</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Risk assessment</span>
                </li>
              </ul>
              <Link
                href="/solutions/healthcare/security-compliance"
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
              See how our healthcare solutions have helped organizations achieve their business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CaseStudyCard
              title="AI-Powered Clinical Decision Support"
              client="Regional Health System"
              industry="Healthcare"
              image="/case-study-healthcare-1.jpg"
              summary="Implemented AI-based clinical decision support system that improved diagnostic accuracy by 28% and reduced treatment time."
              slug="healthcare-clinical-decision-support"
            />

            <CaseStudyCard
              title="Patient Engagement Platform"
              client="National Hospital Network"
              industry="Healthcare"
              image="/case-study-healthcare-2.jpg"
              summary="Developed comprehensive patient engagement platform that increased patient satisfaction scores by 35% and reduced no-show rates."
              slug="healthcare-patient-engagement"
            />

            <CaseStudyCard
              title="Healthcare Data Integration"
              client="Academic Medical Center"
              industry="Healthcare"
              image="/case-study-healthcare-3.jpg"
              summary="Created unified data platform that integrated clinical, operational, and financial data, enabling advanced analytics and improved decision-making."
              slug="healthcare-data-integration"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies/industry/healthcare">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Healthcare Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Health Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/digital-health.jpg" alt="Digital Health" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Future of Digital Health</h2>
              <p className="text-gray-600 mb-6">
                The healthcare industry is undergoing a profound digital transformation, driven by technological
                advancements, changing patient expectations, and the need for more efficient, effective care delivery
                models. Digital health solutions are enabling new ways to deliver care, engage patients, and improve
                outcomes.
              </p>
              <p className="text-gray-600 mb-6">
                Our digital health solutions help healthcare organizations leverage technologies like AI, IoT, cloud
                computing, and mobile platforms to create connected health experiences, improve clinical
                decision-making, and optimize operations.
              </p>
              <Link href="/solutions/healthcare/digital-health">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Explore Digital Health Solutions</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Healthcare Delivery?"
        description="Contact us today to discuss how our healthcare solutions can help you improve patient outcomes, optimize clinical workflows, and enhance operational efficiency."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

