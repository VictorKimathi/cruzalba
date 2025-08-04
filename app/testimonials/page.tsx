import { TestimonialCards } from "@/components/testimonial-cards"

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#0F1112] pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">What Others Say</h1>
          <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
            Testimonials from editors, collaborators, and readers who've experienced the impact of my work.
          </p>
        </div>
        <TestimonialCards />
      </div>
    </main>
  )
}
