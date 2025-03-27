import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  client: string
  industry: string
  image: string
  summary: string
  slug: string
}

export default function CaseStudyCard({ title, client, industry, image, summary, slug }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-tesseract-500">{industry}</span>
          <span className="text-gray-400">•</span>
          <span className="text-sm text-gray-600">{client}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{summary}</p>
        <Link
          href={`/case-studies/${slug}`}
          className="inline-flex items-center text-tesseract-500 hover:text-tesseract-700 font-medium"
        >
          Read case study <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

