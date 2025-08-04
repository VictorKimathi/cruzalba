import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    title: "The Minimalist's Guide to Maximum Impact",
    excerpt:
      "How to create stunning interiors with fewer, better-chosen pieces that speak volumes about your personal style.",
    category: "Home Décor",
    publication: "Better Living Today",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Urban Jungle: Creating Your Indoor Oasis",
    excerpt: "Transform your city apartment into a green sanctuary with these expert plant selection and care tips.",
    category: "Gardening",
    publication: "Golden Hearth Media",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "500 Square Feet, Infinite Possibilities",
    excerpt: "A complete studio apartment makeover that proves small spaces can be both functional and fabulous.",
    category: "Small Spaces",
    publication: "Home & Garden Weekly",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Sustainable Style: Eco-Friendly Home Updates",
    excerpt: "Refresh your home with environmentally conscious choices that don't compromise on aesthetics or comfort.",
    category: "Lifestyle",
    publication: "Better Living Today",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "The Art of Seasonal Decorating",
    excerpt: "Master the subtle art of transitioning your home's décor through the seasons without breaking the bank.",
    category: "Home Décor",
    publication: "Golden Hearth Media",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
  {
    title: "Herb Gardens That Actually Thrive Indoors",
    excerpt: "The complete guide to growing fresh herbs in your kitchen, from seed selection to harvest timing.",
    category: "Gardening",
    publication: "Home & Garden Weekly",
    image: "/placeholder.svg?height=300&width=400",
    link: "#",
  },
]

export function PortfolioGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioItems.map((item, index) => (
        <Card
          key={index}
          className="bg-[#181C1F] border-[#181C1F] overflow-hidden group hover:scale-105 transition-all duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="mb-2">
              <span className="text-sm text-[#d1d5db]/70">{item.publication}</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{item.title}</h3>
            <p className="text-[#d1d5db] mb-4 line-clamp-3">{item.excerpt}</p>
            <Button variant="ghost" className="text-white hover:text-[#d1d5db] p-0 group">
              Read Article
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
