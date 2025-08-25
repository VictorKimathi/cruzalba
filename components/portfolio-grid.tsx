import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    title: "How To Soundproof a Room Without Structural Changes",
    excerpt:
      "Noise has a way of slipping through walls, floors, and windows, breaking into your space when you least want it. The hum of traffic, the ring of a neighbor’s phone, or the thump of footsteps above can quickly turn a comfortable room into a source of frustration. In homes with shared walls or lightweight construction, these sounds can feel inescapable.",
    category: "Home Décor",
    publication: "Better Living Today",
    image: "h.jpg?height=300&width=400",
    link: "#",
  },
  {
    title: "How To Odor-Proof Indoor Compost in Small Spaces",
    excerpt: "Indoor composting is a sustainable way to reduce household waste and create nutrient-rich material for plants. However, in confined areas like apartments or small homes, unpleasant smells can develop quickly if the composting process is not managed properly. Without the right setup and maintenance, these odors can make the space uncomfortable and discourage continued use.",
    category: "Gardening",
    publication: "Golden Hearth Media",
    image: "interior-design.jpg",
    link: "#",
  },
  {
    title: "How To Keep Deer Out of Your Garden Without Fencing",
    excerpt: "Deer can devastate a garden in just a few visits, stripping flowers, shrubs, vegetables, and even tree bark until little remains. In regions with large deer populations, this can feel like a never-ending struggle for homeowners and gardeners. While fencing is one of the most reliable ways to keep them out, it is not always practical because of cost, limited space, or local rules. This is where creative alternatives become essential for protecting your plants.",
    category: "Gardening",
    publication: "Home & Garden Weekly",
    image: "bed.jpg?height=300&width=400",
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
