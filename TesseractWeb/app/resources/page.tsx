import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Video, Calendar, Download } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-tesseract-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Resources</h1>
          <p className="text-xl text-tesseract-100 max-w-3xl mx-auto">
            Explore our collection of insights, guides, and tools to help you navigate the digital landscape
          </p>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and latest resources to help you stay informed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/resource-ai-guide.jpg" alt="AI Implementation Guide" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">Guide</span>
                  <span className="text-xs text-gray-500">10 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Complete Guide to AI Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to successfully implement AI solutions in your organization with our comprehensive guide.
                </p>
                <Link
                  href="/resources/guides/ai-implementation"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read guide <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image
                  src="/resource-digital-transformation.jpg"
                  alt="Digital Transformation Whitepaper"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">Whitepaper</span>
                  <span className="text-xs text-gray-500">15 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Transformation in 2025</h3>
                <p className="text-gray-600 mb-4">
                  Explore the latest trends and strategies for successful digital transformation in today's rapidly
                  evolving landscape.
                </p>
                <Link
                  href="/resources/whitepapers/digital-transformation-2025"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Download whitepaper <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/resource-webinar.jpg" alt="AI in Manufacturing Webinar" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">Webinar</span>
                  <span className="text-xs text-gray-500">45 min</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  AI in Manufacturing: Case Studies & Insights
                </h3>
                <p className="text-gray-600 mb-4">
                  Watch our recent webinar on how AI is transforming manufacturing operations with real-world examples.
                </p>
                <Link
                  href="/resources/webinars/ai-manufacturing"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Watch webinar <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our resources by category to find the information you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/resources/guides" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all group-hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Guides & Ebooks</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive guides and ebooks on various digital transformation topics
                </p>
                <span className="text-blue-600 group-hover:text-blue-800 font-medium inline-flex items-center">
                  Browse guides <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>

            <Link href="/resources/webinars" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all group-hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Video size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Webinars & Videos</h3>
                <p className="text-gray-600 mb-4">
                  Educational webinars and videos featuring industry experts and thought leaders
                </p>
                <span className="text-blue-600 group-hover:text-blue-800 font-medium inline-flex items-center">
                  Watch webinars <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>

            <Link href="/resources/whitepapers" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all group-hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Download size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Whitepapers & Reports</h3>
                <p className="text-gray-600 mb-4">
                  In-depth research, analysis, and insights on industry trends and technologies
                </p>
                <span className="text-blue-600 group-hover:text-blue-800 font-medium inline-flex items-center">
                  Download reports <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>

            <Link href="/resources/events" className="group">
              <div className="bg-white p-6 rounded-lg shadow-md text-center transition-all group-hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Events & Workshops</h3>
                <p className="text-gray-600 mb-4">
                  Upcoming events, workshops, and conferences to expand your knowledge
                </p>
                <span className="text-blue-600 group-hover:text-blue-800 font-medium inline-flex items-center">
                  View events <ArrowRight size={16} className="ml-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest insights and thought leadership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/blog-ai-trends.jpg" alt="AI Trends" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">AI</span>
                  <span className="text-xs text-gray-500">May 15, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">5 AI Trends Reshaping Business in 2025</h3>
                <p className="text-gray-600 mb-4">
                  Explore the top AI trends that are transforming how businesses operate and compete in today's market.
                </p>
                <Link
                  href="/blog/ai-trends-2025"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read post <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/blog-digital-leadership.jpg" alt="Digital Leadership" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">Leadership</span>
                  <span className="text-xs text-gray-500">May 8, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The New Digital Leader: Skills for Success</h3>
                <p className="text-gray-600 mb-4">
                  What skills and mindsets do leaders need to thrive in the digital age? We explore the essential
                  qualities.
                </p>
                <Link
                  href="/blog/digital-leadership-skills"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read post <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="relative h-48">
                <Image src="/blog-cloud-migration.jpg" alt="Cloud Migration" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-white bg-blue-600 px-2 py-1 rounded">Cloud</span>
                  <span className="text-xs text-gray-500">May 1, 2025</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Migration: Lessons from the Field</h3>
                <p className="text-gray-600 mb-4">
                  Real-world lessons and best practices from our experience helping organizations migrate to the cloud.
                </p>
                <Link
                  href="/blog/cloud-migration-lessons"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read post <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Blog Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-tesseract-500 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-tesseract-100 max-w-2xl mx-auto">
                Stay updated with our latest insights, industry trends, and upcoming events delivered straight to your
                inbox.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-transparent text-gray-900 flex-grow"
              />
              <Button className="bg-white text-tesseract-600 hover:bg-gray-100 whitespace-nowrap">Subscribe Now</Button>
            </div>

            <p className="text-tesseract-100 text-sm text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Custom Resources?"
        description="Contact us to discuss custom research, training materials, or other resources tailored to your organization's specific needs."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  )
}

