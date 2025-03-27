"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="TESSERACT Logo" width={40} height={40} />
            <span className="font-bold text-xl text-gray-900">TESSERACT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition">
              Services
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition">
              Solutions
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition">
              About
            </Link>
            <Link href="/resources" className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition">
              Resources
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-tesseract-500"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/solutions"
                className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/resources"
                className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-700 hover:text-tesseract-500 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

