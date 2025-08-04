import { Card, CardContent } from "@/components/ui/card"
import { PenTool, Home, Leaf, Lightbulb, Camera, Users } from "lucide-react"

const expertiseAreas = [
  {
    icon: PenTool,
    title: "Editorial Excellence",
    description: "10+ years crafting compelling narratives that engage and inspire readers across multiple platforms.",
  },
  {
    icon: Home,
    title: "Interior Design Trends",
    description: "Deep knowledge of current and emerging design trends, from minimalism to maximalist expressions.",
  },
  {
    icon: Leaf,
    title: "Garden & DIY Expert",
    description: "Hands-on experience with indoor gardening, sustainable practices, and creative DIY solutions.",
  },
  {
    icon: Lightbulb,
    title: "Small-Space Solutions",
    description: "Specialized expertise in maximizing functionality and style in compact living environments.",
  },
  {
    icon: Camera,
    title: "Visual Storytelling",
    description: "Understanding of how to pair compelling copy with visual elements for maximum impact.",
  },
  {
    icon: Users,
    title: "Brand Voice Specialist",
    description: "Ability to adapt writing style to match brand voice while maintaining authenticity and engagement.",
  },
]

export function ExpertiseCards() {
  return (
    <section>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Areas of Expertise</h2>
        <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
          Specialized skills and knowledge areas that set my work apart in the home and lifestyle space.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseAreas.map((area, index) => (
          <Card
            key={index}
            className="bg-[#181C1F] border-[#181C1F] hover:bg-[#1a1f22] transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-8 text-center">
              <area.icon className="h-12 w-12 text-white mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
              <p className="text-[#d1d5db] leading-relaxed">{area.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
