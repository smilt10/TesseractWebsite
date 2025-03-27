import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Mail } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-tesseract-100 max-w-3xl mx-auto">
            Meet the experienced professionals driving innovation and excellence at TESSERACT
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience across technology, consulting, and industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image src="/team-ceo.jpg" alt="Michael Anderson" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Michael Anderson</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 mb-4">
                  With over 20 years of experience in technology and consulting, Michael leads our global strategy and
                  operations.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image src="/team-cto.jpg" alt="Sarah Chen" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Sarah Chen</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 mb-4">
                  Sarah drives our technology vision and strategy, ensuring we stay at the forefront of innovation.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image src="/team-coo.jpg" alt="David Rodriguez" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">David Rodriguez</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Operating Officer</p>
                <p className="text-gray-600 mb-4">
                  David oversees our global operations, ensuring excellence in service delivery and client satisfaction.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image src="/team-cdo.jpg" alt="Emily Johnson" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Emily Johnson</h3>
                <p className="text-blue-600 font-medium mb-3">Chief Digital Officer</p>
                <p className="text-gray-600 mb-4">
                  Emily leads our digital transformation initiatives, helping clients navigate their digital journeys.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Leads */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Department Leads</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the experts leading our specialized practice areas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/team-consulting-lead.jpg" alt="Jennifer Lee" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Jennifer Lee</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Consulting</p>
                <p className="text-gray-600 mb-4">
                  Jennifer leads our consulting practice, bringing strategic insights and industry expertise to our
                  clients.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/team-software-lead.jpg" alt="Alex Patel" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Alex Patel</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Software Development</p>
                <p className="text-gray-600 mb-4">
                  Alex oversees our software development practice, ensuring high-quality, scalable solutions for our
                  clients.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/team-ai-lead.jpg" alt="Marcus Wong" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Marcus Wong</h3>
                <p className="text-blue-600 font-medium mb-3">Head of AI & Data Science</p>
                <p className="text-gray-600 mb-4">
                  Marcus leads our AI and data science practice, developing innovative solutions that drive business
                  value.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/team-recruitment-lead.jpg" alt="Sophia Martinez" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Sophia Martinez</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Recruitment</p>
                <p className="text-gray-600 mb-4">
                  Sophia leads our recruitment practice, helping clients build high-performing teams for the digital
                  age.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/team-training-lead.jpg" alt="Robert Kim" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Robert Kim</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Training & Development</p>
                <p className="text-gray-600 mb-4">
                  Robert leads our training practice, developing programs that upskill workforces for the digital
                  future.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/team-marketing-lead.jpg" alt="Olivia Thompson" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">Olivia Thompson</h3>
                <p className="text-blue-600 font-medium mb-3">Head of Marketing</p>
                <p className="text-gray-600 mb-4">
                  Olivia leads our marketing team, sharing our expertise and success stories with the world.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Email">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-gray-600 mb-4">
                At TESSERACT, we believe that our people are our greatest asset. We foster a culture of innovation,
                collaboration, and continuous learning, where diverse perspectives are valued and everyone has the
                opportunity to grow and make an impact.
              </p>
              <p className="text-gray-600 mb-4">
                Our team members are passionate about solving complex challenges and driving meaningful change for our
                clients. We work in a fast-paced, dynamic environment where creativity and critical thinking are
                encouraged.
              </p>
              <p className="text-gray-600">
                We're committed to creating an inclusive workplace where everyone feels welcome, respected, and
                empowered to bring their authentic selves to work every day.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/culture-1.jpg" alt="Team Collaboration" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/culture-2.jpg" alt="Office Environment" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/culture-3.jpg" alt="Team Event" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/culture-4.jpg" alt="Working Together" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation to join our
            growing team.
          </p>
          <Link href="/careers">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Open Positions</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Work With Our Team?"
        description="Contact us today to discuss how our experts can help your business thrive in the digital age."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </div>
  )
}

