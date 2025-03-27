import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function TrainingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Training & Development</h1>
              <p className="text-xl text-tesseract-100 mb-8">
                Comprehensive training programs to upskill your workforce for the digital future and maximize your
                team's potential.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-tesseract-600 hover:bg-gray-100">Explore Training Solutions</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/training-hero.jpg" alt="Training & Development" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Empower Your Workforce</h2>
              <p className="text-gray-600 mb-6">
                In today's rapidly evolving digital landscape, continuous learning and skill development are essential
                for organizational success. Our training and development programs help you build a skilled, adaptable,
                and high-performing workforce that can drive your business forward.
              </p>
              <p className="text-gray-600">
                We offer a wide range of training solutions, from technical skills to leadership development, delivered
                through various formats to suit your team's needs and learning preferences. Our expert trainers combine
                industry knowledge, practical experience, and engaging teaching methods to ensure effective knowledge
                transfer and skill development.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Training Services:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Technical Skills Training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Digital Transformation Workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Leadership Development Programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Customized Training Solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Certification Programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Team Building & Collaboration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Change Management Training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive training solutions to address various skill gaps and development needs
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
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Skills</h3>
              <p className="text-gray-600 mb-4">
                Develop your team's technical capabilities with hands-on training in programming, data analysis, cloud
                computing, and more.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Programming languages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Cloud platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Data science & analytics</span>
                </li>
              </ul>
              <Link
                href="/services/training/technical-skills"
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
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Prepare your organization for digital transformation with workshops on digital strategy, innovation, and
                change management.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Digital strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Innovation workshops</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Change management</span>
                </li>
              </ul>
              <Link
                href="/services/training/digital-transformation"
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leadership Development</h3>
              <p className="text-gray-600 mb-4">
                Develop effective leaders who can inspire teams, drive change, and achieve business objectives in the
                digital age.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Digital leadership</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Team management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                  <span className="text-gray-600 text-sm">Strategic thinking</span>
                </li>
              </ul>
              <Link
                href="/services/training/leadership-development"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Training Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive methodology to ensure effective learning and skill development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assess</h3>
              <p className="text-gray-600">
                We assess your team's current skills, identify gaps, and understand your business objectives to design
                targeted training programs.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                We create customized training programs that address your specific needs, incorporating various learning
                methods and practical exercises.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Deliver</h3>
              <p className="text-gray-600">
                Our expert trainers deliver engaging, interactive training sessions through various formats, including
                in-person, virtual, and blended learning.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">04</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Evaluate</h3>
              <p className="text-gray-600">
                We measure the effectiveness of our training programs through assessments, feedback, and ongoing support
                to ensure continuous improvement.
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
              See how our training programs have helped organizations upskill their workforce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Financial Institution</h3>
              <p className="text-gray-600 mb-4">
                Developed a comprehensive digital transformation training program that helped upskill 500+ employees
                across multiple departments.
              </p>
              <Link
                href="/case-studies/financial-digital-training"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read case study <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Company</h3>
              <p className="text-gray-600 mb-4">
                Implemented a leadership development program that prepared 50+ managers to lead digital transformation
                initiatives.
              </p>
              <Link
                href="/case-studies/tech-leadership-development"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Read case study <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing Company</h3>
              <p className="text-gray-600 mb-4">
                Delivered technical skills training that enabled the IT team to successfully implement and manage new
                cloud-based systems.
              </p>
              <Link
                href="/case-studies/manufacturing-technical-training"
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
        title="Ready to Upskill Your Workforce?"
        description="Contact us today to discuss how our training programs can help your team develop the skills needed for the digital future."
        buttonText="Start Training"
        buttonLink="/contact"
      />
    </div>
  )
}

