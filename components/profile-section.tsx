import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ProfileSection() {
  return (
    <section className="mb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <Card className="bg-[#181C1F] border-[#181C1F] overflow-hidden">
            <CardContent className="p-0">
              <Image
                src="v.jpg?height=600&width=500?height=600&width=500"
                alt="Cruz Alba"
                width={500}
                height={600}
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>

        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">About Cruz</h1>
          <div className="space-y-6 text-lg text-[#d1d5db] leading-relaxed">
            <p>
              I believe that every home has a story to tell, and my mission is to help homeowners discover and share
              theirs. With over a decade of experience in home and lifestyle writing, I've had the privilege of working
              with some of the industry's most respected publications.
            </p>
            <p>
              My journey began with a simple fascination: how do spaces shape our daily lives, and how can thoughtful
              design choices transform not just our homes, but our well-being? This curiosity led me to explore
              everything from small-space solutions to sustainable living practices.
            </p>
            <p>
              When I'm not writing, you'll find me tending to my own indoor garden, experimenting with DIY projects, or
              discovering the latest design trends that make homes more beautiful and functional. I believe in practical
              solutions that real people can implement, regardless of budget or space constraints.
            </p>
            <p>
              My approach is rooted in authenticity—I write about what I know, test what I recommend, and always keep
              the reader's real-life needs at the center of every piece. Because at the end of the day, home isn't just
              a place—it's a feeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
