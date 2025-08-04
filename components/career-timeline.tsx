import { Card, CardContent } from "@/components/ui/card"

const timelineItems = [
  {
    year: "2024",
    title: "Senior Lifestyle Writer",
    company: "Golden Hearth Media",
    description:
      "Leading editorial content strategy for home and lifestyle verticals, managing a team of contributing writers.",
  },
  {
    year: "2022",
    title: "Contributing Editor",
    company: "Better Living Today",
    description:
      "Specialized in small-space living and sustainable home solutions, producing weekly featured articles.",
  },
  {
    year: "2020",
    title: "Freelance Home Writer",
    company: "Various Publications",
    description: "Built a diverse portfolio writing for multiple home and lifestyle magazines and digital platforms.",
  },
  {
    year: "2018",
    title: "Staff Writer",
    company: "Home & Garden Weekly",
    description: "Covered interior design trends, DIY projects, and seasonal home maintenance topics.",
  },
  {
    year: "2014",
    title: "Editorial Assistant",
    company: "Lifestyle Media Group",
    description: "Started my career in home and lifestyle publishing, learning the fundamentals of editorial writing.",
  },
]

export function CareerTimeline() {
  return (
    <section className="mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Career Journey</h2>
        <p className="text-xl text-[#d1d5db] max-w-3xl mx-auto">
          A decade of growth in home and lifestyle editorial, from assistant to industry leader.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#181C1F] hidden md:block" />

        <div className="space-y-8">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-start md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-white rounded-full hidden md:block" />

              <Card className="bg-[#181C1F] border-[#181C1F] w-full hover:bg-[#1a1f22] transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">{item.title}</h3>
                    <div className="flex flex-col md:items-end">
                      <span className="text-[#d1d5db] font-medium">{item.company}</span>
                      <span className="text-sm text-[#d1d5db]/70">{item.year}</span>
                    </div>
                  </div>
                  <p className="text-[#d1d5db] leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
