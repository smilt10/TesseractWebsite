import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function SoftwareDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Software Development</h1>
              <p className="text-xl text-tesseract-100 mb-8">
                Custom software solutions tailored to your unique business requirements, built with cutting-edge
                technologies and best practices.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-tesseract-600 hover:bg-gray-100">Discuss Your Project</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/software-development-hero.jpg" alt="Software Development" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Software Solutions</h2>
              <p className="text-gray-600 mb-6">
                In today's rapidly evolving digital landscape, off-the-shelf software often falls short of addressing
                the unique challenges and requirements of your business. Our custom software development services
                provide tailored solutions that align perfectly with your specific needs, processes, and goals.
              </p>
              <p className="text-gray-600">
                With a team of experienced developers, architects, and UX/UI designers, we deliver high-quality,
                scalable, and secure software solutions that drive efficiency, innovation, and competitive advantage for
                your business.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Software Development Services:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Custom Application Development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Web Application Development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Mobile Application Development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Enterprise Software Solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">API Development & Integration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Legacy System Modernization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-600">DevOps & Continuous Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to deliver high-quality software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600 text-sm">Understanding your business needs and requirements</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">02</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Creating a detailed project plan and architecture</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600 text-sm">Designing intuitive user interfaces and experiences</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">04</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">Building the solution with agile methodologies</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">05</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing</h3>
              <p className="text-gray-600 text-sm">Rigorous testing to ensure quality and performance</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">06</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600 text-sm">Smooth deployment and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and secure software
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">React.js</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Angular</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Vue.js</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Next.js</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">TypeScript</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Node.js</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Python</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Java</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">.NET</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">PHP</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Ruby on Rails</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile & Cloud</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">React Native</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Flutter</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">AWS</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Azure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Google Cloud</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-blue-600 mr-2 flex-shrink-0" size={16} />
                  <span className="text-gray-600">Kubernetes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our software development expertise has helped organizations achieve their business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image src="/case-study-software-1.jpg" alt="E-commerce Platform" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  Developed a custom e-commerce platform that increased online sales by 45% and improved customer
                  satisfaction.
                </p>
                <Link
                  href="/case-studies/ecommerce-platform"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read case study <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/case-study-software-2.jpg"
                  alt="Healthcare Management System"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthcare Management System</h3>
                <p className="text-gray-600 mb-4">
                  Built a comprehensive healthcare management system that streamlined operations and improved patient
                  care.
                </p>
                <Link
                  href="/case-studies/healthcare-management-system"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read case study <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/case-study-software-3.jpg"
                  alt="Supply Chain Management Solution"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Supply Chain Management Solution</h3>
                <p className="text-gray-600 mb-4">
                  Developed an integrated supply chain management solution that improved inventory accuracy by 30% and
                  reduced operational costs.
                </p>
                <Link
                  href="/case-studies/supply-chain-solution"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read case study <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Build Your Custom Software Solution?"
        description="Contact us today to discuss your project requirements and how our software development expertise can help your business."
        buttonText="Start Your Project"
        buttonLink="/contact"
      />
    </div>
  )
}

