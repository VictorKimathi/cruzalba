import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const skills = [
  "SEO Best Practices",
  "AP Style Mastery",
  "Deadline-Driven",
  "Brand Voice Specialist",
  "WordPress/Ghost Proficiency",
  "Content Strategy",
  "Social Media Integration",
  "Editorial Leadership",
  "Research & Fact-Checking",
  "Multi-Platform Publishing",
]

export function SkillsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Core Skills & Competencies</h2>
        <p className="text-lg text-[#d1d5db]">
          Technical and creative skills that drive results in home & lifestyle content.
        </p>
      </div>

      <Card className="bg-[#181C1F] border-[#181C1F]">
        <CardContent className="p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-[#d1d5db] font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
