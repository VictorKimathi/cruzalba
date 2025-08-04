import { PortfolioGrid } from "@/components/portfolio-grid"
import { PortfolioFilters } from "@/components/portfolio-filters"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#0F1112] pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">My Work</h1>
          <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
            A curated collection of articles, features, and editorial pieces that bring homes to life through
            storytelling.
          </p>
        </div>
        <PortfolioFilters />
        <PortfolioGrid />
      </div>
    </main>
  )
}
