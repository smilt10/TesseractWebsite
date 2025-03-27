import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Briefcase } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
              <p className="text-xl text-tesseract-100 mb-8">
                Build your career at TESSERACT and be part of a team that's shaping the future of digital transformation
              </p>
              <Link href="#open-positions">
                <Button className="bg-white text-tesseract-600 hover:bg-gray-100">View Open Positions</Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/careers-hero.jpg" alt="Join Our Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join TESSERACT?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the benefits of building your career with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-gray-600">
                We invest in your growth with access to training, certifications, conferences, and mentorship
                opportunities.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenging Projects</h3>
              <p className="text-gray-600">
                Work on diverse, complex projects across industries that will stretch your skills and expand your
                expertise.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Collaborative Culture</h3>
              <p className="text-gray-600">
                Join a diverse team of experts who collaborate, share knowledge, and support each other's growth.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Growth</h3>
              <p className="text-gray-600">
                Clear career paths and opportunities for advancement based on your interests and strengths.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
              <p className="text-gray-600">
                Enjoy competitive compensation, health benefits, retirement plans, and work-life balance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Opportunities</h3>
              <p className="text-gray-600">
                Work with clients and colleagues around the world, with potential for international assignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at TESSERACT */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Life at TESSERACT</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a glimpse of our culture and what it's like to work with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/life-at-tesseract-1.jpg" alt="Office Environment" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/life-at-tesseract-2.jpg" alt="Team Collaboration" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/life-at-tesseract-3.jpg" alt="Team Event" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image src="/life-at-tesseract-4.jpg" alt="Working Together" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Values in Action</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
                <p className="text-gray-600">
                  We encourage creative thinking and provide time and resources for our team to explore new ideas and
                  technologies.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
                <p className="text-gray-600">
                  We work together across teams and disciplines, sharing knowledge and supporting each other to deliver
                  exceptional results.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, maintaining high standards and continuously improving
                  our skills and processes.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Diversity & Inclusion</h4>
                <p className="text-gray-600">
                  We celebrate diversity and create an inclusive environment where everyone feels welcome, respected,
                  and valued.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find the right opportunity for your skills and career goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Software Engineer</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-1 text-blue-600" />
                  New York / Remote
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-1 text-blue-600" />
                  Full-time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase size={16} className="mr-1 text-blue-600" />
                  5+ years experience
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                We're looking for a Senior Software Engineer to join our team and help build innovative solutions for
                our clients. You'll work on challenging projects using the latest technologies.
              </p>
              <Link href="/careers/senior-software-engineer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Scientist</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-1 text-blue-600" />
                  San Francisco / Remote
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-1 text-blue-600" />
                  Full-time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase size={16} className="mr-1 text-blue-600" />
                  3+ years experience
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Join our AI team as a Data Scientist to develop machine learning models and AI solutions that solve
                complex business problems for our clients.
              </p>
              <Link href="/careers/data-scientist">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation Consultant</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-1 text-blue-600" />
                  London / Remote
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-1 text-blue-600" />
                  Full-time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase size={16} className="mr-1 text-blue-600" />
                  4+ years experience
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                We're seeking a Digital Transformation Consultant to help our clients navigate their digital journeys
                and implement successful transformation initiatives.
              </p>
              <Link href="/careers/digital-transformation-consultant">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UX/UI Designer</h3>
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin size={16} className="mr-1 text-blue-600" />
                  Berlin / Remote
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock size={16} className="mr-1 text-blue-600" />
                  Full-time
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase size={16} className="mr-1 text-blue-600" />
                  3+ years experience
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Join our design team to create intuitive, user-centered digital experiences that delight users and drive
                business results for our clients.
              </p>
              <Link href="/careers/ux-ui-designer">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">View Details</Button>
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Don't see the right position for you? We're always looking for talented individuals to join our team.
            </p>
            <Link href="/careers/general-application">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Submit General Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What to expect when you apply for a position at TESSERACT</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-200"></div>

              <div className="relative mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    1
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Review</h3>
                    <p className="text-gray-600">
                      Our recruitment team reviews your application and assesses your qualifications against the job
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    2
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Initial Interview</h3>
                    <p className="text-gray-600">
                      If your profile matches our requirements, we'll schedule an initial interview to discuss your
                      experience, skills, and career goals.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    3
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Assessment</h3>
                    <p className="text-gray-600">
                      Depending on the role, you may be asked to complete a technical assessment or case study to
                      demonstrate your skills and problem-solving abilities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative mb-12">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    4
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Team Interviews</h3>
                    <p className="text-gray-600">
                      Meet with potential team members and leaders to assess cultural fit and dive deeper into your
                      expertise and experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                    5
                  </div>
                  <div className="ml-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Offer & Onboarding</h3>
                    <p className="text-gray-600">
                      If you're the right fit, we'll extend an offer and work with you to ensure a smooth onboarding
                      process as you join our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Join Our Team?"
        description="Explore our open positions and take the next step in your career with TESSERACT."
        buttonText="View Open Positions"
        buttonLink="#open-positions"
      />
    </div>
  )
}

