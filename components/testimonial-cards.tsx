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
