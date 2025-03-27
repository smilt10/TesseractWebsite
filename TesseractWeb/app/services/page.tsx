import { Brain, Code, BarChart2, Users, Lightbulb, Layers } from "lucide-react"
import ServiceCard from "@/components/service-card"
import CTASection from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-tesseract-100 max-w-3xl mx-auto">
            Comprehensive solutions to drive innovation, efficiency, and growth for your business
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Strategic Consulting"
              description="Expert guidance to navigate digital transformation and optimize business processes."
              icon={<BarChart2 size={32} />}
              href="/services/consulting"
            />

            <ServiceCard
              title="Digital Transformation"
              description="End-to-end solutions to modernize your business and enhance customer experiences."
              icon={<Lightbulb size={32} />}
              href="/services/digital-transformation"
            />

            <ServiceCard
              title="Software Development"
              description="Custom software solutions tailored to your unique business requirements."
              icon={<Code size={32} />}
              href="/services/software-development"
            />

            <ServiceCard
              title="Artificial Intelligence"
              description="AI-powered solutions to automate processes and gain valuable insights from your data."
              icon={<Brain size={32} />}
              href="/services/artificial-intelligence"
            />

            <ServiceCard
              title="Recruitment Solutions"
              description="Talent acquisition services to help you build high-performing teams."
              icon={<Users size={32} />}
              href="/services/recruitment"
            />

            <ServiceCard
              title="Training & Development"
              description="Comprehensive training programs to upskill your workforce for the digital future."
              icon={<Layers size={32} />}
              href="/services/training"
            />
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver successful outcomes for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-tesseract-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-500 font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-600">
                We analyze your business needs, challenges, and objectives to understand your unique requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-tesseract-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-500 font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                We create a tailored strategy and solution design that aligns with your business goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-tesseract-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-500 font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implement</h3>
              <p className="text-gray-600">
                We execute the strategy with precision, leveraging our expertise and best practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-tesseract-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-tesseract-500 font-bold text-xl">04</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600">
                We continuously monitor, measure, and refine to ensure optimal performance and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to discuss how our services can help your business thrive in the digital age."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

