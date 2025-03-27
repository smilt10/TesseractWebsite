import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TESSERACT</h1>
          <p className="text-xl text-tesseract-100 max-w-3xl mx-auto">
            Driving innovation and digital excellence for businesses worldwide
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/team-collaboration.webp" alt="Our Story" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, TESSERACT began with a simple mission: to help businesses navigate the complex world of
                digital transformation. What started as a small team of passionate consultants has grown into a global
                organization with expertise across multiple domains.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey has been defined by a relentless commitment to innovation, excellence, and client success.
                We've helped hundreds of organizations across industries modernize their operations, enhance customer
                experiences, and drive growth through digital technologies.
              </p>
              <p className="text-gray-600">
                Today, TESSERACT stands at the forefront of digital transformation, combining deep industry knowledge,
                technical expertise, and a human-centered approach to deliver solutions that create lasting value for
                our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guided by a clear mission and strong values that define who we are
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower organizations to thrive in the digital age by providing innovative solutions, expert
                guidance, and exceptional service that drive sustainable growth and competitive advantage.
              </p>
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image src="/mission-image.jpg" alt="Our Mission" fill className="object-cover" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Excellence</h4>
                    <p className="text-gray-600">
                      We strive for excellence in everything we do, delivering high-quality solutions that exceed
                      expectations.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation</h4>
                    <p className="text-gray-600">
                      We embrace innovation and creative thinking to solve complex challenges and drive continuous
                      improvement.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Integrity</h4>
                    <p className="text-gray-600">
                      We act with honesty, transparency, and ethical conduct in all our interactions and decisions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaboration</h4>
                    <p className="text-gray-600">
                      We believe in the power of collaboration, working closely with our clients and partners to achieve
                      shared goals.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the experienced professionals guiding our organization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/team-ceo.jpg" alt="CEO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Michael Anderson</h3>
              <p className="text-blue-600 font-medium">Chief Executive Officer</p>
              <p className="text-gray-600 mt-2">
                With over 20 years of experience in technology and consulting, Michael leads our global strategy and
                operations.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/team-cto.jpg" alt="CTO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sarah Chen</h3>
              <p className="text-blue-600 font-medium">Chief Technology Officer</p>
              <p className="text-gray-600 mt-2">
                Sarah drives our technology vision and strategy, ensuring we stay at the forefront of innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/team-coo.jpg" alt="COO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">David Rodriguez</h3>
              <p className="text-blue-600 font-medium">Chief Operating Officer</p>
              <p className="text-gray-600 mt-2">
                David oversees our global operations, ensuring excellence in service delivery and client satisfaction.
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <Image src="/team-cdo.jpg" alt="CDO" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Emily Johnson</h3>
              <p className="text-blue-600 font-medium">Chief Digital Officer</p>
              <p className="text-gray-600 mt-2">
                Emily leads our digital transformation initiatives, helping clients navigate their digital journeys.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/team">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Meet Our Full Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Serving clients worldwide with offices in key locations</p>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/global-map.jpeg" alt="Global Presence" fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">North America</h3>
              <p className="text-gray-600">New York, San Francisco, Toronto</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Europe</h3>
              <p className="text-gray-600">London, Berlin, Paris</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Asia Pacific</h3>
              <p className="text-gray-600">Singapore, Sydney, Tokyo</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Middle East</h3>
              <p className="text-gray-600">Dubai, Tel Aviv</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Us?"
        description="Contact us today to discuss how we can help your business thrive in the digital age."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  )
}

