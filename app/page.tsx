import { Hero } from "@/components/hero"
import { FeaturedWork } from "@/components/featured-work"
import { AboutPreview } from "@/components/about-preview"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F1112]">
      <Hero />
      {/* <FeaturedWork /> */}
      <AboutPreview />
    </main>
  )
}
