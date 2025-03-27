import Link from "next/link"
import type { ReactNode } from "react"
import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  icon: ReactNode
  href: string
  featured?: boolean
  bgImage?: string
}

export default function ServiceCard({ title, description, icon, href, featured = false, bgImage }: ServiceCardProps) {
  return (
    <Link href={href} className="block h-full">
      <div
        className={`h-full relative overflow-hidden rounded-lg transition-all duration-300 group ${
          featured
            ? "shadow-lg hover:shadow-xl border-2 border-tesseract-500"
            : "border border-gray-200 hover:border-tesseract-300 hover:shadow-md"
        }`}
      >
        {/* Background Image */}
        {bgImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={bgImage || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 ${
                featured ? "bg-tesseract-500/90" : "bg-gray-900/75"
              } group-hover:bg-tesseract-600/80 transition-colors duration-300`}
            ></div>
          </div>
        )}

        <div className={`relative z-10 p-8 h-full flex flex-col ${bgImage ? "text-white" : ""}`}>
          <div className={`mb-4 ${featured ? "text-white" : bgImage ? "text-white" : "text-tesseract-500"}`}>
            {icon}
          </div>
          <h3
            className={`text-xl font-semibold mb-3 ${
              featured ? "text-white" : bgImage ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
          <p className={featured ? "text-tesseract-100" : bgImage ? "text-gray-100" : "text-gray-600"}>{description}</p>
          <div
            className={`mt-auto pt-4 text-sm font-medium flex items-center ${
              featured ? "text-white" : bgImage ? "text-white" : "text-tesseract-500"
            }`}
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

