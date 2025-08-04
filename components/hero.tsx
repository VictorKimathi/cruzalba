import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Cozy home interior"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-[#0F1112]/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Words That Feel Like{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#d1d5db]">Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#d1d5db] mb-12 max-w-3xl mx-auto leading-relaxed">
            Cruz Alba is a seasoned home & lifestyle writer blending design inspiration with practical, real-life
            solutions.
          </p>
          <Link href="/portfolio">
            <Button className="bg-white text-black hover:bg-[#d1d5db] text-lg px-8 py-6 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Explore My Work
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
