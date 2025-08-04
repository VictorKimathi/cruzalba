import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { PenTool, Home, Leaf } from "lucide-react"

export function AboutPreview() {
  return (
    <section className="py-24 bg-[#0F1112]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet Cruz Alba</h2>
            <p className="text-xl text-[#d1d5db] mb-8 leading-relaxed">
              With over 10 years of experience writing for national outlets including Better Living Today and Golden
              Hearth Media, I bring an informed, real, and trustworthy voice to the home & lifestyle space.
            </p>
            <p className="text-lg text-[#d1d5db] mb-8">
              My passion lies in transforming houses into homes through thoughtful storytelling, practical design
              solutions, and authentic editorial content that resonates with real people living real lives.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <PenTool className="h-8 w-8 text-white mx-auto mb-2" />
                <p className="text-sm text-[#d1d5db]">10+ Years Writing</p>
              </div>
              <div className="text-center">
                <Leaf className="h-8 w-8 text-white mx-auto mb-2" />
                <p className="text-sm text-[#d1d5db]">Garden + DIY Expert</p>
              </div>
              <div className="text-center">
                <Home className="h-8 w-8 text-white mx-auto mb-2" />
                <p className="text-sm text-[#d1d5db]">Interior Trends</p>
              </div>
            </div>

            <Link href="/about">
              <Button className="bg-white text-black hover:bg-[#d1d5db] px-8 py-3 rounded-full font-semibold">
                Learn More About Me
              </Button>
            </Link>
          </div>

          <div className="relative">
            <Card className="bg-[#181C1F] border-[#181C1F] overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Cruz Alba"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
