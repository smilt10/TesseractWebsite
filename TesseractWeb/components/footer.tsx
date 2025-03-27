import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="TESSERACT Logo" width={40} height={40} />
              <span className="font-bold text-xl text-gray-900">TESSERACT</span>
            </div>
            <p className="text-gray-600 mb-4">
              Empowering businesses through strategic digital transformation and AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-tesseract-500" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tesseract-500" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tesseract-500" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-tesseract-500" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-tesseract-500 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-600 hover:text-tesseract-500 transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-600 hover:text-tesseract-500 transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-tesseract-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-tesseract-500 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-tesseract-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-tesseract-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">123 Business Avenue, Tech District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-tesseract-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-tesseract-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">info@tesseract.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-white border-gray-300" />
              <Button className="bg-tesseract-500 hover:bg-tesseract-600 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TESSERACT. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-tesseract-500 transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-tesseract-500 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

