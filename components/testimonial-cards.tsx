import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "Cruz has an incredible ability to transform complex design concepts into accessible, actionable advice. Her writing consistently drives high engagement and reader satisfaction.",
    name: "Sarah Mitchell",
    role: "Senior Editor",
    company: "Better Living Today",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFxetXSFAap66Qt1oGgL60UZ35IoER2C4bg&s?height=40&width=120",
  },
  {
    quote:
      "Working with Cruz is a dream. She delivers exceptional content on time, every time, with a voice that perfectly captures our brand while maintaining her authentic style.",
    name: "Michael Chen",
    role: "Content Director",
    company: "Golden Hearth Media",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PIqzX1p7ueIQSi5p29gEtEf165sYb_DhWw&s?height=40&width=120",
  },
  {
    quote:
      "Cruz's expertise in small-space living has been invaluable to our readers. Her practical solutions and warm writing style make even the most challenging spaces feel manageable.",
    name: "Emma Rodriguez",
    role: "Editorial Manager",
    company: "Home & Garden Weekly",
    logo: "https://t4.ftcdn.net/jpg/04/43/25/95/360_F_443259545_PsPbDmm8HY7JLQU9Ew9DPOdAHtIhMtnD.jpg?height=40&width=120",
  },
  {
    quote:
      "Cruz’s strategic insights and user-first thinking helped our product team improve both readability and engagement across the board.",
    name: "Raj Patel",
    role: "UX Lead",
    company: "ThinkForward Labs",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png?height=40&width=120",
  },
  {
    quote:
      "From ideation to final draft, Cruz brings clarity and creativity to everything she touches. A rare mix of talent and professionalism.",
    name: "Lena Hoffmann",
    role: "Marketing Manager",
    company: "StoryArc Studios",
    logo: "data:image/jpeg;base64,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",
  },
  {
    quote:
      "Every collaboration with Cruz has exceeded our expectations. Her words don’t just inform—they inspire action.",
    name: "David Kim",
    role: "Chief Content Officer",
    company: "BrightPath Media",
    logo: "https://cdn-icons-png.flaticon.com/512/5969/5969022.png?height=40&width=120",
  },
]

export function TestimonialCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className="bg-[#181C1F] border-[#181C1F] hover:bg-[#1a1f22] transition-all duration-300 hover:scale-105"
        >
          <CardContent className="p-8">
            <Quote className="h-8 w-8 text-white/30 mb-6" />
            <blockquote className="text-[#d1d5db] mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-[#d1d5db]/70">{testimonial.role}</div>
                <div className="text-sm text-[#d1d5db]/70">{testimonial.company}</div>
              </div>
              {testimonial.logo && (
                <Image
                  src={testimonial.logo || "/placeholder.svg"}
                  alt={`${testimonial.company} logo`}
                  width={80}
                  height={24}
                  className="opacity-70"
                />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
