"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const filters = ["All", "Home Décor", "Gardening", "Small Spaces", "Lifestyle"]

export function PortfolioFilters() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant={activeFilter === filter ? "default" : "outline"}
          className={`rounded-full px-6 py-2 transition-all duration-300 ${
            activeFilter === filter
              ? "bg-white text-black hover:bg-[#d1d5db]"
              : "border-[#181C1F] text-[#d1d5db] hover:text-white hover:border-white"
          }`}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </Button>
      ))}
    </div>
  )
}
