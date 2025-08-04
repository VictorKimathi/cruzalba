import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const featuredArticles = [
  {
    title: "Small Space, Big Style: Maximizing Your Studio Apartment",
    excerpt:
      "Transform your compact living space into a stylish sanctuary with these expert design tips and space-saving solutions.",
    category: "Small Spaces",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "The Art of Indoor Gardening: Bringing Nature Home",
    excerpt:
      "Discover how to create a thriving indoor garden that purifies your air and elevates your home's aesthetic.",
    category: "Gardening",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Sustainable Living: Eco-Friendly Home Makeover Ideas",
    excerpt:
      "Learn how to refresh your home with sustainable materials and practices that benefit both you and the planet.",
    category: "Lifestyle",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export function FeaturedWork() {
  return (
    <section className="py-24 bg-[#0F1112]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Work</h2>
          <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
            A glimpse into my latest articles and editorial pieces that inspire and inform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article, index) => (
            <Card
              key={index}
              className="bg-[#181C1F] border-[#181C1F] overflow-hidden group hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-[#d1d5db] mb-4 line-clamp-3">{article.excerpt}</p>
                <Button variant="ghost" className="text-white hover:text-[#d1d5db] p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button className="bg-white text-black hover:bg-[#d1d5db] px-8 py-3 rounded-full font-semibold">
              View All Work
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
