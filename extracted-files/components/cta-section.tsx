import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  className?: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  className = "bg-tesseract-500",
}: CTASectionProps) {
  return (
    <section className={`${className} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-tesseract-100 max-w-2xl mx-auto mb-8">{description}</p>
        <Link href={buttonLink}>
          <Button className="bg-white text-tesseract-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-md">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  )
}

